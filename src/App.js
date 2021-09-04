import "./App.css";

import { useEffect } from "react";
import getImages from "./api/service";

function App() {
  useEffect(() => {
    getImages();
  }, []);

  return <div className="App"></div>;
}

export default App;
