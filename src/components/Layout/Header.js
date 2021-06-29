import classes from "./Header.module.css";

import { Link } from "react-router-dom";

import RippleEffect from "../UX/RippleEffect";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <h2>ShopList</h2>
      </div>
      <div className={classes.addButton}>
        <RippleEffect>
          <Link
            to={{
              pathname: "/add-shop",
            }}
          >
            <button>Add Shop</button>
          </Link>
        </RippleEffect>
      </div>
    </header>
  );
};

export default Header;
