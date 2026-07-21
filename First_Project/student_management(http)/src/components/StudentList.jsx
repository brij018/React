import { Button } from "react-bootstrap";

const StudentList = ({ student, index, onDeleteStudent }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
      <td>{student.email}</td>
      <td>{student.phone}</td>
      <td>{student.age}</td>
      <td>{student.gender}</td>
      <td>
        <Button
          variant="danger"
          className="delete-student-btn"
          onClick={() => onDeleteStudent(student.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default StudentList;
