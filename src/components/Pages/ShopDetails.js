import Header from "../Layout/Header";

import classes from "./ShopDetails.module.css";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShopDetails = () => {
  const shopsList = useSelector((state) => state.shopsList);
  const params = useParams();
  const { shopId } = params;

  const shop = shopsList.filter((shop) => shopId === shop.id)[0];

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
          <Link
            to={{
              pathname: "#",
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