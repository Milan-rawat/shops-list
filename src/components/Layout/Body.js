import classes from "./Body.module.css";

const Body = () => {
  return (
    <div className={classes.appBody}>
      <div className={classes.shopLists}>
        <div className={classes.shop}>
          <div className={classes.shopSection}>
            <label htmlFor="shopTitle">Shop Name</label>
            <div id="shopTitle">Kanha Groceries</div>
          </div>
          <div className={classes.shopSection}>
            <label htmlFor="shopKeeper">Shop category</label>
            <div id="shopKeeper">Groceries</div>
          </div>
          <div className={classes.shopSection}>
            <button>Remove</button>
            <button>Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
