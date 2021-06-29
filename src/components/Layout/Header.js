import classes from "./Header.module.css";

import RippleEffect from "../UX/RippleEffect";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <h2>ShopList</h2>
      </div>
      <div className={classes.addButton}>
        <RippleEffect>
          <button>Add Shop</button>
        </RippleEffect>
      </div>
    </header>
  );
};

export default Header;
