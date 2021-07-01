// import { useEffect } from "react";

import "./App.css";
import Home from "./components/Pages/Home";
import AddShop from "./components/Pages/AddShop";
import ShopDetails from "./components/Pages/ShopDetails";
import EditShop from "./components/Pages/EditShop";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/add-shop" component={AddShop} />
        <Route path="/shop/:shopId" component={ShopDetails} />
        <Route path="/edit/:shopId" component={EditShop} />
      </Switch>
    </div>
  );
}

export default App;
