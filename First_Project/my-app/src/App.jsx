import JSX from "./JSX";
import Functional from "./components/Functional";
import ClassComponent from "./components/Class";
import Fragments from "./components/fragments";
import State from "./components/State";
import State02 from "./components/State_02";
import Props from "./components/Props";

const App = () => {
  return (
    <>
      <h1>Hello there</h1>
      <JSX></JSX>
      <Functional />
      <ClassComponent />
      <Fragments />
      <State />
      <State02 />
      <Props msg="helllooo" />
    </>
  );
};

export default App;
