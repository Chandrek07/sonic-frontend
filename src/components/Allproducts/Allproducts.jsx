import React, {useEffect, useContext, useCallback} from "react";
import "./Allproducts.scss";
import Products from "../Products/Products";
import {fetchDataFromApi} from "../../utils/api";
import {Context} from "../../utils/context";

const Allproducts = () => {
    const {products, setProducts} = useContext(Context);
    const getProducts = useCallback(() => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            setProducts(res);
        });
    }, [setProducts]);

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    return (
        <div>
            <div className="main-content">
                <div className="layout">
                    <Products
                        headingText="Our Products"
                        products={products}
                    />
                </div>
            </div>
        </div>
    );
};

export default Allproducts;
