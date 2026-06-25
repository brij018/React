import React from "react";
import OnClick_01 from "./events/OnClick_01";
import OnChange from "./events/OnChange_03";
import OnSubmit_02 from "./events/OnSubmit_02";
import PassingArgument from "./events/PassingArgument";

const App = () => {
  return (
    <>
      <OnClick_01 />
      <br />
      <br />
      <OnChange />
      <br />
      <br />
      <OnSubmit_02 />
      <br />
      <br />
      <PassingArgument name={"Brij"} />
    </>
  );
};

export default App;
