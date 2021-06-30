import { useState } from "react";

import classes from "./AddShop.module.css";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const AddShop = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [shopName, setShopName] = useState("");
  const [shopArea, setShopArea] = useState("");
  const [shopType, setShopType] = useState("");
  const [openingDate, setOpeningDate] = useState("");
  const [closingDate, setClosingDate] = useState("");
  const [error, setError] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!shopName.match(/^[A-Z  a-z]+$/)) {
      setError("Name must be alphbets only");
    } else {
      dispatch({
        type: "addShop",
        newShop: {
          id: `${Math.random()}`.slice(2),
          shopName: shopName,
          shopArea: shopArea,
          shopType: shopType,
          openingDate: openingDate,
          closingDate: closingDate,
        },
      });
      alert("Shop added successfully");
      history.push("/");
    }
  };

  return (
    <div className={classes.addShop}>
      <div className={classes.formTitle}>Add Shop</div>
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
          <button type="submit">Add Shop</button>
        </div>
      </form>
    </div>
  );
};

export default AddShop;
