import { useState } from "react";
import EmailValidator from "./components/EmailValidation.jsx";
import TimeCapsule from "./components/TimeCapsule.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <h1>Email thing</h1>
      <EmailValidator /> */}
      <TimeCapsule />
    </div>
  );
}

export default App;
