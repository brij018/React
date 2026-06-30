import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";

function Form_01() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [users, setUsers] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    setUsers((prev) => [...prev, user]);
    setUser({ name: "", email: "", password: "" });
  };

  const yupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "name must contain atleast two letters ")
      .max(30, "what is even your name bruv???")
      .required("required!!"),
    email: Yup.string().email("invalid email").required("required!!"),
    password: Yup.string().min(6, "password must contain atleast 6 characters"),
  });

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={yupSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            name="name"
            placeholder="enter your name"
            value={user.name}
            onChange={(e) => handleChange(e)}
          ></Field>
          <br />
          <br />
          <Field
            name="email"
            placeholder="enter your email"
            value={user.email}
            onChange={(e) => handleChange(e)}
          ></Field>
          <br />
          <br />
          <Field
            name="password"
            placeholder="enter your password"
            value={user.password}
            onChange={(e) => handleChange(e)}
          ></Field>
          <br />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
export default Form_01;
