import { Table } from "react-bootstrap";
import StudentList from "./StudentList";

const Students = ({ studentData, loading, error, onDeleteStudent }) => {
  if (loading) {
    return <p className="school-message">Loading students...</p>;
  }

  if (error) {
    return <p className="school-message text-danger">{error}</p>;
  }

  return (
    <section className="wooden-register">
      <div className="register-heading">
        <span>Class Roll Book</span>
        <small>{studentData.length} students</small>
      </div>

      <Table responsive hover className="student-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((s, index) => (
            <StudentList
              student={s}
              key={s.id}
              index={index}
              onDeleteStudent={onDeleteStudent}
            />
          ))}
        </tbody>
      </Table>

      {studentData.length === 0 && (
        <p className="empty-register">No students found.</p>
      )}
    </section>
  );
};

export default Students;
