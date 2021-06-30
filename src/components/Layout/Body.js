import { useState } from "react";

import classes from "./Body.module.css";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Modal/Modal";

const Body = () => {
  const [showModal, setShowModal] = useState(false);
  const [deletingShop, setDeletingShop] = useState({
    id: null,
    name: "",
  });

  const shopsList = useSelector((state) => state.shopsList);

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
    dispatch({ type: "removeShop", removingShopId: shopId });
    setShowModal(false);
  };

  let ALLSHOPS = [];
  if (shopsList.length === 0) {
    ALLSHOPS = <h3 style={{ textAlign: "center" }}>No Shops available.</h3>;
  } else {
    ALLSHOPS = shopsList.map((shop) => (
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
      <div className={classes.shopLists}>{ALLSHOPS}</div>
    </div>
  );
};

export default Body;
