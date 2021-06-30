import classes from "./Body.module.css";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Body = () => {
  const shopsList = useSelector((state) => state.shopsList);

  const dispatch = useDispatch();

  const removeShopHandler = (shopId) => {
    dispatch({ type: "removeShop", removingShopId: shopId });
  };

  const ALLSHOPS = shopsList.map((shop) => (
    <div className={classes.shop} key={shop.id}>
      <div className={classes.shopSection}>
        <label htmlFor="shopTitle">Shop Name</label>
        <div id="shopTitle">{shop.shopName}</div>
      </div>
      <div className={classes.shopSection}>
        <label htmlFor="shopKeeper">Shop category</label>
        <div id="shopKeeper">{shop.shopType}</div>
      </div>
      <div className={classes.shopSection}>
        <Link to="/">
          <button onClick={() => removeShopHandler(shop.id)}>Remove</button>
        </Link>
        <Link to={{ pathname: `/shop/${shop.id}` }}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  ));

  return (
    <div className={classes.appBody}>
      <div className={classes.shopLists}>{ALLSHOPS}</div>
    </div>
  );
};

export default Body;
