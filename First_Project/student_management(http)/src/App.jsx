import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import MainLayout from "./routes/MainLayout";
import Students from "./components/Students";
import Add_Student from "./components/Add_Student";
import { addStudent, getStudent } from "./api/studentFetch";

const App = () => {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);
        const data = await getStudent();
        setStudentData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const handleAddStudent = async (student) => {
    const savedStudent = await addStudent(student);
    const newStudent = {
      ...student,
      ...savedStudent,
      age: Number(student.age),
      id: savedStudent?.id || Date.now(),
    };

    setStudentData((prevStudents) => [...prevStudents, newStudent]);
  };

  const handleDeleteStudent = (studentId) => {
    setStudentData((prevStudents) =>
      prevStudents.filter((student) => student.id !== studentId),
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Students
                studentData={studentData}
                loading={loading}
                error={error}
                onDeleteStudent={handleDeleteStudent}
              />
            }
          />
          <Route
            path="add"
            element={<Add_Student onAddStudent={handleAddStudent} />}
          />
        </Route>
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
