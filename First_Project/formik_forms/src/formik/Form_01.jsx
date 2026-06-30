import { Formik, Form, Field } from "formik";

function Form_01() {
  return (
    <>
      <Formik initialValues={{ name: "", email: "", password: "" }}>
        <Form>
          <Field name="name"></Field>
          <br />
          <br />
          <Field name="email"></Field>
          <br />
          <br />
          <Field name="password"></Field>
          <br />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
export default Form_01;
