import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Names from "./Names";
import Calculate from "./Calculate";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  return (
    <div className="container">
      <Header />
      <Names name1={name1} setName1={setName1} name2={name2} setName2={setName2} />
      <Calculate />
    </div>
  );
}

export default App;
