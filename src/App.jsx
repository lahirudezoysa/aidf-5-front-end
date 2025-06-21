import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Manupa from "./Manupa";
import Button from "./Button";
import User from "./Manupa";


function App() {
  return (
    <div className="border-2 border-black">
      <User name="Manupa" />
      <User name="Manupa" />
      <User name="Sawindu" />
    </div>
  );
}

export default App;
