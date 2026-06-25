import JSX from "./JSX";
import Functional from "./components/Functional";
import ClassComponent from "./components/Class";
import Fragments from "./components/fragments";
import State from "./components/State";
import State02 from "./components/State_02";
import Props from "./components/Props";
import StateEffect from "./states/state_useEffect";
import Users from "./states/UserData";
import UseRef from "./states/UseRef";

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
      <StateEffect />
      <Users />
      <br />
      <br />
      <br />
      <br />
      <UseRef />
    </>
  );
};

export default App;
