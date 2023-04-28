import { useState } from "react";
import EmailValidator from "./components/EmailValidation.jsx";

import TimeCapsule from "./components/TimeCapsule.jsx";

function App() {

  return (
    <div className="App">
      <EmailValidator />

  const [count, setCount] = useState(0);

  return (
    <div className="App">

      <h1>Email thing</h1>
      <EmailValidator />

      {/* <h1>Email thing</h1>
      <EmailValidator /> */}

      <TimeCapsule />
    </div>
  );
}

export default App;
