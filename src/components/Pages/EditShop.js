import { useState } from "react";

import classes from "./EditShop.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { shopListActions } from "../../store";

const EditShop = () => {
  const shopsList = useSelector((state) => state.shopsList.shopsList);
  const params = useParams();
  const { shopId } = params;

  const shop = shopsList.filter((shop) => shopId === shop.id)[0];

  const history = useHistory();
  const dispatch = useDispatch();

  const [shopName, setShopName] = useState(shop.shopName);
  const [shopArea, setShopArea] = useState(shop.shopArea);
  const [shopType, setShopType] = useState(shop.shopType);
  const [openingDate, setOpeningDate] = useState(shop.openingDate);
  const [closingDate, setClosingDate] = useState(shop.closingDate);
  const [error, setError] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!shopName.match(/^[A-Z  a-z]+$/)) {
      setError("Name must be alphbets only");
    } else {
      const updatedShop = {
        id: shop.id,
        shopName: shopName,
        shopArea: shopArea,
        shopType: shopType,
        openingDate: openingDate,
        closingDate: closingDate,
      };
      dispatch(shopListActions.updateShop(updatedShop));
      alert("Shop Updated successfully");
      history.push(`/shop/${shopId}`);
    }
  };

  return (
    <div className={classes.editShop}>
      <div className={classes.formTitle}>Edit Shop</div>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.inputField}>
          <label htmlFor="shopName">Shop Name</label>
          <input
            style={{ margin: "5px" }}
            id="shopName"
            type="text"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            required
          />
          {error && <p className={classes.inputError}>{error}</p>}
        </div>
        <div className={`${classes.inputField} ${classes.selectField}`}>
          <div className={classes.selection}>
            <label htmlFor="shopArea">Shop Area</label>
            <select
              id="shopArea"
              className={classes.selectInput}
              value={shopArea}
              onChange={(e) => setShopArea(e.target.value)}
              required
            >
              <option value="">None</option>
              <option>Thane</option>
              <option>Pune</option>
              <option>Mumbai</option>
              <option>Suburban</option>
              <option>Nashik</option>
              <option>Nagpur</option>
              <option>Ahmednagar</option>
              <option>Solapur</option>
              <option>Najibabad</option>
              <option>Kotdwara</option>
            </select>
          </div>
          <div className={classes.selection}>
            <label htmlFor="shopType">Shop Category</label>
            <select
              id="shopType"
              className={classes.selectInput}
              value={shopType}
              onChange={(e) => setShopType(e.target.value)}
              required
            >
              <option value="">None</option>
              <option>Grocery</option>
              <option>Butcher</option>
              <option>Baker</option>
              <option>Chemist</option>
              <option>Stationery shop</option>
            </select>
          </div>
        </div>
        <div className={`${classes.inputField} ${classes.selectField}`}>
          <div className={classes.selection}>
            <label htmlFor="openingDate">Opening Date</label>
            <input
              id="openingDate"
              type="date"
              className={classes.selectInput}
              value={openingDate}
              onChange={(e) => setOpeningDate(e.target.value)}
              required
            />
          </div>
          <div className={classes.selection}>
            <label htmlFor="openingDate">Closing Date</label>
            <input
              id="openingDate"
              type="date"
              className={classes.selectInput}
              value={closingDate}
              onChange={(e) => setClosingDate(e.target.value)}
              required
              min={openingDate}
            />
          </div>
        </div>
        <div className={classes.inputField}>
          <button type="submit">Update Shop</button>
        </div>
      </form>
    </div>
  );
};

export default EditShop;
