import classes from "./Header.module.css";

import { Link } from "react-router-dom";

import RippleEffect from "../UX/RippleEffect";

const Header = () => {
  return (
    <RippleEffect>
      <header className={classes.header}>
        <div className={classes.title}>
          <Link to="/">
            <h2>ShopList</h2>
          </Link>
        </div>
        <div className={classes.addButton}>
          <Link
            to={{
              pathname: "/add-shop",
            }}
          >
            <button>Add Shop</button>
          </Link>
        </div>
      </header>
    </RippleEffect>
  );
};

export default Header;
