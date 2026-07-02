import { ErrorMessage } from "formik";

import React from "react";

const Formik_error_02 = ({ name }) => {
  return (
    <>
      <ErrorMessage
        name={name}
        render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
      />
    </>
  );
};

export default Formik_error_02;
