import classes from "./EditShop.module.css";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EditShop = () => {
  const shopsList = useSelector((state) => state.shopsList);
  const params = useParams();
  const { shopId } = params;

  const shop = shopsList.filter((shop) => shopId === shop.id)[0];

  return (
    <div className={classes.editShop}>
      <div className={classes.formTitle}>Edit Shop</div>
      <form>
        <div className={classes.inputField}>
          <label htmlFor="shopName">Shop Name</label>
          <input
            defaultValue={shop.shopName}
            style={{ margin: "5px" }}
            id="shopName"
            type="text"
          />
        </div>
        <div className={`${classes.inputField} ${classes.selectField}`}>
          <div className={classes.selection}>
            <label htmlFor="shopArea">Shop Area</label>
            <select
              id="shopArea"
              defaultValue={shop.shopArea}
              className={classes.selectInput}
            >
              <option value="Thane">Thane</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Suburban">Suburban</option>
              <option value="Nashik">Nashik</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Ahmednagar">Ahmednagar</option>
              <option value="Solapur">Solapur</option>
              <option value="Najibabad">Najibabad</option>
              <option value="Kotdwara">Kotdwara</option>
            </select>
          </div>
          <div className={classes.selection}>
            <label htmlFor="shopType">Shop Category</label>
            <select
              id="shopType"
              defaultValue={shop.shopType}
              className={classes.selectInput}
            >
              <option value="Grocery">Grocery</option>
              <option value="Butcher">Butcher</option>
              <option value="Baker">Baker</option>
              <option value="Chemist">Chemist</option>
              <option value="Stationary">Stationery shop</option>
            </select>
          </div>
        </div>
        <div className={`${classes.inputField} ${classes.selectField}`}>
          <div className={classes.selection}>
            <label htmlFor="openingDate">Opening Date</label>
            <input
              defaultValue={shop.openingDate}
              id="openingDate"
              type="date"
              className={classes.selectInput}
            />
          </div>
          <div className={classes.selection}>
            <label htmlFor="openingDate">Closing Date</label>
            <input
              defaultValue={shop.closingDate}
              id="openingDate"
              type="date"
              className={classes.selectInput}
            />
          </div>
        </div>
        <div className={classes.inputField}>
          <button>Update Shop</button>
        </div>
      </form>
    </div>
  );
};

export default EditShop;
