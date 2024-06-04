import React, {useContext} from "react";
import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
import {Context} from "../../utils/context";
import CartItem from "./CartItem/CartItem";
import {loadStripe} from "@stripe/stripe-js";
import {makePaymentRequest} from "../../utils/api";
import {useNavigate} from "react-router-dom";

import "./Cart.scss";

const Cart = () => {
    const {cartItems, setShowCart, cartSubTotal} = useContext(Context);
    const navigate = useNavigate();

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;

            if(!stripe) {
                console.error("Stripe failed to load");
                return;
            }

            const res = await makePaymentRequest.post("/api/orders", {
                products: cartItems,
            });

            if(res.data && res.data.stripeSession) {
                await stripe.redirectToCheckout({
                    sessionId: res.data.stripeSession.id,
                });
            } else {
                console.error("Stripe session not returned from API");
            }
        } catch(err) {
            console.error("Payment request error:", err);
        }
    };

    const handleReturnToShop = () => {
        setShowCart(false);
        navigate("/products");
    };

    return (
        <div className="cart-panel">
            <div className="opac-layer" onClick={() => setShowCart(false)}></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={() => setShowCart(false)}>
                        <MdClose className="close-btn" />
                        <span className="text">close</span>
                    </span>
                </div>

                {!cartItems.length && (
                    <div className="empty-cart">
                        <BsCartX />
                        <span>No products in the cart.</span>
                        <button className="return-cta" onClick={handleReturnToShop}>
                            RETURN TO SHOP
                        </button>
                    </div>
                )}

                {!!cartItems.length && (
                    <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Subtotal:</span>
                                <span className="text total">&#8377;{cartSubTotal}</span>
                            </div>
                            <div className="button">
                                <button className="checkout-cta" onClick={handlePayment}>
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
