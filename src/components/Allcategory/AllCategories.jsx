import React, {useEffect, useContext, useCallback} from "react";
import "./AllCategories.scss";
import {fetchDataFromApi} from "../../utils/api";
import {Context} from "../../utils/context";
import Category from "../../../src/components/Home/Category/Category";

const AllCategories = () => {
    const {categories, setCategories} = useContext(Context);

    const getCategories = useCallback(() => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            setCategories(res);
        });
    }, [setCategories]);

    useEffect(() => {
        getCategories();
    }, [getCategories]);

    return (
        <div>
            <div className="main-content">
                <div className="layout">
                    <h1 className="sec-heading">All Categories</h1>
                    <Category categories={categories} />
                </div>
            </div>
        </div>
    );
};

export default AllCategories;