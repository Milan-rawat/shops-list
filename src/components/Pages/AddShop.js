import classes from "./AddShop.module.css";

const AddShop = () => {
  return (
    <div className={classes.addShop}>
      <div className={classes.formTitle}>Add Shop</div>
      <form>
        <div className={classes.inputField}>
          <label htmlFor="shopName">Shop Name</label>
          <input style={{ margin: "5px" }} id="shopName" type="text" />
        </div>
        <div className={`${classes.inputField} ${classes.selectField}`}>
          <div className={classes.selection}>
            <label htmlFor="shopArea">Shop Area</label>
            <select defaultValue="none" className={classes.selectInput}>
              <option disabled id="shopArea" value="none"></option>
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
            <select defaultValue="none" className={classes.selectInput}>
              <option disabled id="shopType" value="none"></option>
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
            />
          </div>
          <div className={classes.selection}>
            <label htmlFor="openingDate">Closing Date</label>
            <input
              id="openingDate"
              type="date"
              className={classes.selectInput}
            />
          </div>
        </div>
        <div className={classes.inputField}>
          <button>Add Shop</button>
        </div>
      </form>
    </div>
  );
};

export default AddShop;
