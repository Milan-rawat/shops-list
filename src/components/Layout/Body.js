import classes from "./Body.module.css";

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
        <button>Remove</button>
        <button>Details</button>
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
