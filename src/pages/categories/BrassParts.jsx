import React from "react";
import Products from "../Products";
import Breadcrumb from "../../components/Breadcrumb";

const BrassParts = () => {
    return (
        <>
            <Breadcrumb title="Brass Parts" />

        <Products categorySlug="brass-parts" />
        </>
    );
};

export default BrassParts;