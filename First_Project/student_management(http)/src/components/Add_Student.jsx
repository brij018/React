import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import studentValidationSchema from "../validation/studentValidation";

const Add_Student = ({ onAddStudent }) => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
      }}
      validationSchema={studentValidationSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          await onAddStudent(values);
          resetForm();
          navigate("/");
        } catch (error) {
          console.error(error);
        }
      }}
    >
      <Form className="blackboard-form">
        <h1>Add Student</h1>
        <p>Write a new name on the class register.</p>

        <label>First Name</label>
        <Field className="form-control" type="text" name="firstName" />
        <ErrorMessage
          name="firstName"
          component="div"
          className="chalk-error"
        />

        <label>Last Name</label>
        <Field className="form-control" type="text" name="lastName" />
        <ErrorMessage name="lastName" component="div" className="chalk-error" />

        <label>Email</label>
        <Field className="form-control" type="email" name="email" />
        <ErrorMessage name="email" component="div" className="chalk-error" />

        <label>Phone</label>
        <Field className="form-control" type="tel" name="phone" />
        <ErrorMessage name="phone" component="div" className="chalk-error" />

        <label>Age</label>
        <Field className="form-control" type="number" name="age" />
        <ErrorMessage name="age" component="div" className="chalk-error" />

        <span className="gender-title">Gender</span>
        <div className="gender-options">
          <label>
          <Field type="radio" name="gender" value="male" />
          Male
          </label>
          <label>
          <Field type="radio" name="gender" value="female" />
          Female
          </label>
        </div>
        <ErrorMessage name="gender" component="div" className="chalk-error" />

        <button className="btn chalk-submit" type="submit">
          Add Student
        </button>
      </Form>
    </Formik>
  );
};

export default Add_Student;
