import { useState } from "react";
import EmailValidator from "./components/EmailValidation.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Email thing</h1>
      <EmailValidator />
    </div>
  );
}

export default App;
