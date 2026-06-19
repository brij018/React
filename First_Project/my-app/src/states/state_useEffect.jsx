/*
=========================================
useEffect() Hook - React Short Note
=========================================

useEffect() is a React Hook used to perform side effects
in functional components. Side effects include:
- Fetching data from APIs
- Updating the document title
- Setting timers (setTimeout, setInterval)
- Adding event listeners
- Accessing local storage

Syntax:
useEffect(() => {
    // side effect code

    return () => {
        // cleanup code (optional)
    };
}, [dependencies]);

Dependency Array:
1. No dependency array:
   -> Runs after every render.

2. Empty dependency array ([]):
   -> Runs only once when the component mounts.

3. Specific dependencies ([count]):
   -> Runs on mount and whenever 'count' changes.

Cleanup Function:
- Executes before the effect runs again or when the
  component unmounts.
- Used to clear timers, remove event listeners, etc.

Example:
useEffect(() => {
    document.title = `Count: ${count}`;
}, [count]);

Key Points:
- Runs after React renders the component.
- Helps manage side effects separately from UI logic.
- Prevents unnecessary code execution using dependencies.
- Cleanup functions help avoid memory leaks.

Think of it as:
Render Component -> Update DOM -> Run useEffect()
*/

import { useState, useEffect } from "react";

function StateEffect() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("you typed something");
  }, [name]);

  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <h1>you typed {name}</h1>
    </>
  );
}

export default StateEffect;
