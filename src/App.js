import "./App.css";
import Home from "./components/Pages/Home";
import AddShop from "./components/Pages/AddShop";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" exact={true} component={Home} />
      <Route path="/add-shop" component={AddShop} />
    </div>
  );
}

export default App;
