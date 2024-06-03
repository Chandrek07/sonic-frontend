import {useEffect, useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import "./Header.scss";
import Search from "./Search/Search";
import {Context} from "../../utils/context";
import Cart from "../Cart/Cart";
import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const {loginWithRedirect, isAuthenticated, logout} = useAuth0();
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const {cartCount, showCart, setShowCart} = useContext(Context);

    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li onClick={() => navigate("/categories")}>Categories</li>
                        <li onClick={() => navigate("/products")}>Products</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                        SONIC{" "}SENSATIONS
                    </div>
                    <div className="Login">

                        {

                            isAuthenticated ? (
                                <li><button onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>
                                    Log Out
                                </button></li>
                            ) : (
                                <li><button onClick={() => loginWithRedirect()}>Log In</button></li>

                            )
                        }
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setSearchModal(true)} />
                        <span
                            className="cart-icon"
                            onClick={() => setShowCart(true)}
                        >
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {searchModal && <Search setSearchModal={setSearchModal} />}
            {showCart && <Cart />}

        </>
    );
};

export default Header;
