import "./App.css";
import Home from "./components/Pages/Home";
import AddShop from "./components/Pages/AddShop";
import ShopDetails from "./components/Pages/ShopDetails";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" exact={true} component={Home} />
      <Route path="/add-shop" component={AddShop} />
      <Route path="/shop/:shopId" component={ShopDetails} />
    </div>
  );
}

export default App;
