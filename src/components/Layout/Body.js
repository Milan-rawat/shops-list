import classes from "./Body.module.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const shopsList = useSelector((state) => state.shopsList);

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
          <button>Remove</button>
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
