import { useState } from "react";

import Header from "../Layout/Header";

import classes from "./ShopDetails.module.css";
import Modal from "../Modal/Modal";

import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ShopDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [deletingShop, setDeletingShop] = useState({
    id: null,
    name: "",
  });

  const shopsList = useSelector((state) => state.shopsList);
  const params = useParams();
  const { shopId } = params;

  const shop = shopsList.filter((shop) => shopId === shop.id)[0];

  const dispatch = useDispatch();
  const history = useHistory();

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
    history.replace("/");
  };

  return (
    <>
      <Header />
      <div className={classes.shopDetails}>
        {showModal && (
          <Modal
            title="Delete Shop"
            message={`Are you sure you want to delete this shop(${deletingShop.name}).`}
            onCancel={cancelHandler}
            deletingShopId={deletingShop.id}
            onConfirmDelete={(shopId) => removeShopHandler(shopId)}
          />
        )}
        <Link to="/">
          <p className={classes.homeBtn}>👈Home</p>
        </Link>
        <div className={classes.shop}>
          <table>
            <caption>{shop.shopName}</caption>
            <tbody>
              <tr>
                <td>Shop Name :-</td>
                <td>{shop.shopName}</td>
              </tr>
              <tr>
                <td>Shop Area :-</td>
                <td>{shop.shopArea}</td>
              </tr>
              <tr>
                <td>Shop Category :-</td>
                <td>{shop.shopType}</td>
              </tr>
              <tr>
                <td>Opening Date :-</td>
                <td>{shop.openingDate}</td>
              </tr>
              <tr>
                <td>Closing Date :-</td>
                <td>{shop.closingDate}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={classes.editButton}>
          <button onClick={() => wantToRemove(shop.id, shop.shopName)}>
            Remove
          </button>
          <Link
            to={{
              pathname: `/edit/${shop.id}`,
            }}
          >
            <button>Edit</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShopDetails;
