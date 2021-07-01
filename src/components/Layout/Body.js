import { useState, useEffect } from "react";

import classes from "./Body.module.css";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { shopListActions } from "../../store/index";
import Modal from "../Modal/Modal";

const Body = () => {
  const [areaFilter, setAreaFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deletingShop, setDeletingShop] = useState({
    id: null,
    name: "",
  });

  let shopsList = useSelector((state) => state.shopsList.shopsList);

  const [allShops, setAllShops] = useState(shopsList);

  useEffect(() => {
    setAllShops(shopsList);
  }, [shopsList]);

  const dispatch = useDispatch();

  const cancelHandler = () => {
    setShowModal(false);
  };

  const wantToRemove = (shopId, shopName) => {
    setDeletingShop({
      id: shopId,
      name: shopName,
    });
    setShowModal(true);
  };

  const removeShopHandler = (shopId) => {
    dispatch(shopListActions.removeShop(shopId));
    setShowModal(false);
  };

  const applyFilterHandler = () => {
    if (dateFilter) {
      let fullDate = new Date();
      let todaysDate = fullDate.getDate();
      let todaysMonth = fullDate.getMonth() + 1;
      let todaysYear = fullDate.getFullYear();
      if (todaysDate < 10) todaysDate = `0${todaysDate}`;
      if (todaysMonth < 10) todaysMonth = `0${todaysMonth}`;
      let completeDate = [todaysYear, todaysMonth, todaysDate].join("-");
      let list = [...shopsList];
      shopsList = list.filter((shop) => {
        return (
          Date.parse(completeDate) >= Date.parse(shop.openingDate) &&
          Date.parse(completeDate) <= Date.parse(shop.closingDate)
        );
      });
    }
    if (areaFilter === "All" && typeFilter === "All") {
      setAllShops(shopsList);
    }
    if (areaFilter !== "All" && typeFilter !== "All") {
      setAllShops(() => {
        const list = shopsList.filter(
          (shop) => shop.shopArea === areaFilter && shop.shopType === typeFilter
        );
        return list;
      });
    }
    if (areaFilter !== "All" && typeFilter === "All") {
      setAllShops(() => {
        const list = shopsList.filter((shop) => shop.shopArea === areaFilter);
        if (areaFilter === "All") return shopsList;
        else return list;
      });
    }
    if (areaFilter === "All" && typeFilter !== "All") {
      setAllShops(() => {
        const list = shopsList.filter((shop) => shop.shopType === typeFilter);
        if (typeFilter === "All") return shopsList;
        else return list;
      });
    }
  };

  let ALLSHOPS = [];
  if (allShops.length === 0) {
    ALLSHOPS = <h3 style={{ textAlign: "center" }}>No Shops available.</h3>;
  } else {
    ALLSHOPS = allShops.map((shop) => (
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
            <button onClick={() => wantToRemove(shop.id, shop.shopName)}>
              Remove
            </button>
          </Link>
          <Link to={{ pathname: `/shop/${shop.id}` }}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    ));
  }

  return (
    <div className={classes.appBody}>
      {showModal && (
        <Modal
          title="Delete Shop"
          message={`Are you sure you want to delete this shop(${deletingShop.name}).`}
          onCancel={cancelHandler}
          deletingShopId={deletingShop.id}
          onConfirmDelete={(shopId) => removeShopHandler(shopId)}
        />
      )}
      <div className={classes.filters}>
        <p>Filters: -</p>
        <div className={`${classes.filter} ${classes.areaFilter}`}>
          <label htmlFor="areaFilter"> Shop Area</label>
          <select
            id="areaFilter"
            // className={classes.selectInput}
            value={areaFilter}
            onChange={(e) => setAreaFilter(e.target.value)}
            required
          >
            <option value="All">All</option>
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
        <div className={`${classes.filter} ${classes.typeFilter}`}>
          <label htmlFor="typeFilter">Shop Category</label>
          <select
            id="typeFilter"
            className={classes.selectInput}
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            required
          >
            <option value="All">All</option>
            <option>Grocery</option>
            <option>Butcher</option>
            <option>Baker</option>
            <option>Chemist</option>
            <option>Stationery shop</option>
          </select>
        </div>
        <div className={`${classes.filter} ${classes.dateFilter}`}>
          <label htmlFor="dateFilter">By Today's Date</label>
          <input
            type="checkbox"
            id="dateFilter"
            value={dateFilter}
            onChange={() => setDateFilter((prevState) => !prevState)}
          />
        </div>
        <button onClick={applyFilterHandler}>Apply filters</button>
      </div>
      <div className={classes.shopLists}>{ALLSHOPS}</div>
    </div>
  );
};

export default Body;
