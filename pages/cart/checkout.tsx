import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "store";
import CheckoutStatus from "../../components/checkout-status";
import CheckoutItems from "../../components/checkout/items";
import { UseAuth } from "pages/api/context/AuthContext";
// import { ProductStoreType } from 'types';
import Layout from "../../layouts/Main";
import { Fragment } from "react";
import { Router } from "next/router";
import { useForm } from "react-hook-form";

const CheckoutPage = () => {
  const { user, logOut } = UseAuth();
  const { register, errors } = useForm();
  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => {
        console.log(item.noDiscount);
        if (item.salePrice != null) {
          totalPrice += item.salePrice * item.count;
        } else {
          totalPrice += item.noDiscount * item.count;
        }
      });
    }
    return totalPrice;
  });

  const successful = () => {
    toast.success("Đặt hàng thành công", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
    });
  };

  const fail = () => {
    toast.error("Đơn hàng không hợp lệ, xin vui lòng kiểm tra lại thông tin", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 20000,
    });
  };

  return (
    <Layout>
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Shipping and Payment</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              <div className="checkout__btns">
                {user ? (
                  <Fragment>
                    <a
                      style={{
                        borderRadius: "10px 10px 0 0",
                        cursor: "pointer",
                      }}
                    >{`${user.name}`}</a>
                  </Fragment>
                ) : (
                  <a href="/login" style={{ borderRadius: "10px" }}>
                    <button className="btn btn--rounded btn--yellow">
                      Log in
                    </button>
                  </a>
                )}
              </div>

              <div className="block">
                <h3 className="block__title">Shipping information</h3>
                <form className="form">
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="Address"
                        required
                      />
                      {errors.type === "required" && (
                        <p className="message message--error">
                          This field is required
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="checkout__col-4">
              <div className="block">
                <h3 className="block__title">Payment method</h3>
                <ul className="round-options round-options--three">
                  <li
                    className="round-item"
                    style={{
                      width: "100%",
                      color: "green",
                      border: "1px solid green",
                    }}
                  >
                    <i
                      style={{ fontFamily: "poppins" }}
                      className="icon-delivery-fast"
                    >
                      Thanh toán khi nhận hàng
                    </i>
                  </li>
                </ul>
              </div>
            </div>

            <div className="checkout__col-2">
              <div className="block">
                <h3 className="block__title">Your cart</h3>
                <CheckoutItems />

                <div className="checkout-total">
                  <p>Total cost</p>
                  <h3>${priceTotal}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="cart-actions cart-actions--checkout">
            <a href="/cart" className="cart__btn-back">
              <i className="icon-left"></i> Back
            </a>
            <div className="cart-actions__items-wrapper">
              <button type="button" className="btn btn--rounded btn--border">
                Continue shopping
              </button>
              {user ? (
                <button
                  onClick={user ? successful : fail}
                  type="button"
                  className="btn btn--rounded btn--yellow"
                >
                  Proceed to payment
                </button>
              ) : (
                <a href="/login">
                  <button
                    onClick={user === null ? fail : successful}
                    type="button"
                    className="btn btn--rounded btn--yellow"
                  >
                    Proceed to payment
                  </button>
                </a>
              )}
              {/* <button
                onClick={priceTotal > 0 ? successful : fail}
                type="button"
                className="btn btn--rounded btn--yellow"
              >
                Proceed to payment
              </button> */}
              <ToastContainer />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutPage;
