import Header from "../Layout/Header";

import classes from "./ShopDetails.module.css";

import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ShopDetails = () => {
  const shopsList = useSelector((state) => state.shopsList);
  const params = useParams();
  const { shopId } = params;

  const shop = shopsList.filter((shop) => shopId === shop.id)[0];

  const dispatch = useDispatch();
  const history = useHistory();

  const removeShopHandler = (shopId) => {
    dispatch({ type: "removeShop", removingShopId: shopId });
    history.replace("/");
  };

  return (
    <>
      <Header />
      <div className={classes.shopDetails}>
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
          <button onClick={() => removeShopHandler(shop.id)}>Remove</button>
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
