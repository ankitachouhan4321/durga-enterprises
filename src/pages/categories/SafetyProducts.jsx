import React from "react";
import Products from "../Products";
import Breadcrumb from "../../components/Breadcrumb";

const SafetyProducts = () => {
    return (

        <>
            <Breadcrumb title="Safety Products" />

        <Products categorySlug="safety-products" />
        </>
    );
};

export default SafetyProducts;