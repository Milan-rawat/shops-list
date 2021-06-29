import "./App.css";
import Home from "./components/Pages/Home";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" exact={true} component={Home} />
    </div>
  );
}

export default App;
