import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Formik_error_02 from "./Formik_error_02";

function Form_01() {
  const [users, setUsers] = useState([]);
  const handleSubmit = (values, { resetForm }) => {
    setUsers((prev) => [...prev, values]);
    resetForm();
  };
  const validation = () => {
    return Yup.object().shape({
      name: Yup.string()
        .min(2, "name must contain atleast two letters ")
        .max(30, "what is even your name bruv???")
        .required("required!!"),
      email: Yup.string().email("invalid email").required("required!!"),
      password: Yup.string()
        .min(6, "password must contain atleast 6 characters")
        .required("required!!"),
    });
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validation}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name="name" placeholder="enter your name"></Field>
          <Formik_error_02 name={"name"} />
          <br />
          <br />
          <Field name="email" placeholder="enter your email"></Field>
          <Formik_error_02 name={"email"} />
          <br />
          <br />
          <Field name="password" placeholder="enter your password"></Field>
          <Formik_error_02 name={"password"} />
          <br />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
export default Form_01;
