import React from "react";
import OnClick_01 from "./events/OnClick_01";
import OnChange from "./events/OnChange_03";
import OnSubmit_02 from "./events/OnSubmit_02";
import PassingArgument from "./events/PassingArgument";
import Conditional_01 from "./conditional/Conditional_01";
import Conditional_02 from "./conditional/Conditional_02";

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
      <br />
      <br />
      <Conditional_01 />
      <br />
      <br />
      <Conditional_02 />
    </>
  );
};

export default App;
