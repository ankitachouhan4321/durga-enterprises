import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";

import {
    productCategories,
    getCategoryBySlug,
    getTotalProducts,
} from "../data/products";


const PRODUCTS_PER_PAGE = 20;
const WHATSAPP_NUMBER = "919810032627";

const Products = ({ categorySlug: fixedCategorySlug }) => {
    const { categorySlug: routeCategorySlug } = useParams();

    const categorySlug = fixedCategorySlug ?? routeCategorySlug;

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [zoomProduct, setZoomProduct] = useState(null);

    const activeCategory = categorySlug
        ? getCategoryBySlug(categorySlug)
        : null;

    const categoryNotFound =
        Boolean(categorySlug) && !activeCategory;

    const allProducts = useMemo(() => {
        return productCategories.flatMap((category) =>
            category.products.map((product) => ({
                ...product,
                categoryName: category.name,
                categorySlug: category.slug,
            }))
        );
    }, []);

    const selectedProducts = activeCategory
        ? allProducts.filter(
            (product) =>
                product.categorySlug === activeCategory.slug
        )
        : allProducts;

    const filteredProducts = selectedProducts.filter(
        (product) => {
            const keyword = search.trim().toLowerCase();

            return (
                product.name.toLowerCase().includes(keyword) ||
                product.model.toLowerCase().includes(keyword) ||
                product.description.toLowerCase().includes(keyword)
            );
        }
    );

    const totalPages = Math.ceil(
        filteredProducts.length / PRODUCTS_PER_PAGE
    );

    const visibleProducts = filteredProducts.slice(
        (currentPage - 1) * PRODUCTS_PER_PAGE,
        currentPage * PRODUCTS_PER_PAGE
    );

    useEffect(() => {
        setSearch("");
        setCurrentPage(1);
        setZoomProduct(null);
    }, [categorySlug]);

    useEffect(() => {
        if (!zoomProduct) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setZoomProduct(null);
            }
        };

        document.addEventListener("keydown", handleEscape);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = previousOverflow;
        };
    }, [zoomProduct]);

    const handleSearch = (event) => {
        setSearch(event.target.value);
        setCurrentPage(1);
    };

    const getEnquiryLink = (product) => {
        const message =
            `Hello Durga Enterprises, I would like to enquire about:` +
            `\nProduct: ${product.name}` +
            `\nModel No.: ${product.model}` +
            `\nCategory: ${product.categoryName}` +
            `\nPlease share product details and availability.`;

        return (
            `https://wa.me/${WHATSAPP_NUMBER}?text=` +
            encodeURIComponent(message)
        );
    };

    if (categoryNotFound) {
        return (
            <>
                <Breadcrumb title="Category Not Found" />

                <section className="py-5">
                    <div className="container text-center">
                        <h1 className="h3 mb-3">
                            Product Category Not Found
                        </h1>
                        <p className="text-secondary">
                            The requested product category does not exist.
                        </p>

                        <Link to="/products" className="btn-theme">
                            View All Products
                        </Link>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <Breadcrumb
                title={
                    activeCategory
                        ? activeCategory.name
                        : "Our Products"
                }
            />

            <section className="durga-catalog-section py-5">
                <div className="container py-lg-4">

                    {/* Heading */}
                    <div className="row align-items-end g-3 mb-4">

                        <div className="col-lg-8">
                            <div className="section-heading mb-0">
                                <span className="section-subtitle">
                                    Our Products
                                </span>

                                <h2 className="section-title">
                                    {activeCategory
                                        ? activeCategory.name
                                        : "Explore Our Product Range"}
                                </h2>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <p className="durga-catalog-summary mb-0">
                                {activeCategory
                                    ? activeCategory.description
                                    : "Discover welding accessories, industrial safety products, tools, equipment and related industrial essentials."}
                            </p>
                        </div>

                    </div>

                    {/* Category Navigation */}
                    {/* <nav
                        className="durga-catalog-categories mb-4"
                        aria-label="Product categories"
                    >

                        <Link
                            to="/products"
                            className={
                                `durga-category-link ${!categorySlug ? "active" : ""}`
                            }
                            aria-current={!categorySlug ? "page" : undefined}
                        >
                            All Products
                            <span>{getTotalProducts()}</span>
                        </Link>

                        {productCategories.map((category) => (
                            <Link
                                key={category.id}
                                to={`/products/${category.slug}`}
                                className={
                                    `durga-category-link ${activeCategory?.slug === category.slug
                                        ? "active"
                                        : ""
                                    }`
                                }
                                aria-current={
                                    activeCategory?.slug === category.slug
                                        ? "page"
                                        : undefined
                                }
                            >
                                {category.name}
                                <span>{category.products.length}</span>
                            </Link>
                        ))}

                    </nav> */}

                    {/* Search and Count */}
                    <div className="durga-catalog-toolbar mb-4">

                        <div className="durga-catalog-result">
                            <strong>{filteredProducts.length}</strong>
                            {" "}
                            {filteredProducts.length === 1
                                ? "Product"
                                : "Products"}
                            {activeCategory
                                ? ` in ${activeCategory.name}`
                                : " Available"}
                        </div>

                        <div className="durga-catalog-search">
                            <i className="fa-solid fa-magnifying-glass"></i>

                            <input
                                type="search"
                                placeholder="Search products or model number..."
                                aria-label="Search products"
                                value={search}
                                onChange={handleSearch}
                            />
                        </div>

                    </div>

                    {/* Product Cards */}
                    {visibleProducts.length > 0 ? (

                        <div className="row g-4">

                            {visibleProducts.map((product) => (

                                <div
                                    className="col-xl-3 col-lg-4 col-md-6"
                                    key={product.id}
                                >

                                    <article className="durga-catalog-card h-100">

                                        {/* Product Image */}
                                        <div className="durga-catalog-image">

                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                loading="lazy"
                                            />

                                            {/* Zoom Icon */}
                                            <button
                                                type="button"
                                                className="durga-catalog-zoom"
                                                aria-label={`Zoom image of ${product.name}`}
                                                onClick={() => setZoomProduct(product)}
                                            >
                                                <i className="fa-solid fa-magnifying-glass-plus"></i>
                                            </button>

                                        </div>

                                        {/* Product Information */}
                                        <div className="durga-catalog-card-body">

                                            <span className="durga-catalog-model">
                                                Model No.: {product.model}
                                            </span>

                                            <h3 className="durga-catalog-name">
                                                {product.name}
                                            </h3>

                                            <p className="durga-catalog-description">
                                                {product.description}
                                            </p>

                                            {/* Enquiry Button */}
                                            <a
                                                href={getEnquiryLink(product)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="durga-catalog-enquire"
                                            >
                                                Enquire Now

                                                <i className="fa-solid fa-arrow-right"></i>
                                            </a>

                                        </div>

                                    </article>

                                </div>

                            ))}

                        </div>

                    ) : (

                        <div className="durga-catalog-empty text-center">

                            <i className="fa-solid fa-box-open"></i>

                            <h3>
                                {search
                                    ? "No Matching Products"
                                    : "Products Coming Soon"}
                            </h3>

                            <p>
                                {search
                                    ? "Try another product name or model number."
                                    : "Product details for this category will be added soon. Contact us for enquiries."}
                            </p>

                            {!search && (
                                <Link to="/contact" className="btn-theme">
                                    Contact Us
                                </Link>
                            )}

                        </div>

                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (

                        <nav
                            className="durga-catalog-pagination mt-5"
                            aria-label="Product pagination"
                        >

                            <button
                                type="button"
                                onClick={() =>
                                    setCurrentPage((page) => Math.max(1, page - 1))
                                }
                                disabled={currentPage === 1}
                                aria-label="Previous page"
                            >
                                <i className="fa-solid fa-chevron-left"></i>
                            </button>

                            {Array.from(
                                { length: totalPages },
                                (_, index) => index + 1
                            ).map((page) => (
                                <button
                                    type="button"
                                    key={page}
                                    className={
                                        currentPage === page ? "active" : ""
                                    }
                                    onClick={() => setCurrentPage(page)}
                                    aria-current={
                                        currentPage === page ? "page" : undefined
                                    }
                                    aria-label={`Page ${page}`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                type="button"
                                onClick={() =>
                                    setCurrentPage((page) =>
                                        Math.min(totalPages, page + 1)
                                    )
                                }
                                disabled={currentPage === totalPages}
                                aria-label="Next page"
                            >
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>

                        </nav>

                    )}

                </div>
            </section>

            {/* ================= IMAGE ZOOM MODAL ================= */}
            {zoomProduct && (

                <div
                    className="durga-product-lightbox"
                    role="presentation"
                    onClick={() => setZoomProduct(null)}
                >

                    <div
                        className="durga-product-lightbox-content"
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Product image: ${zoomProduct.name}`}
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            type="button"
                            className="durga-product-lightbox-close"
                            aria-label="Close image"
                            onClick={() => setZoomProduct(null)}
                            autoFocus
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        <img
                            src={zoomProduct.image}
                            alt={zoomProduct.name}
                        />

                        <div className="durga-product-lightbox-caption">
                            <h4>{zoomProduct.name}</h4>
                            <span>Model No.: {zoomProduct.model}</span>
                        </div>

                    </div>

                </div>

            )}

        </>
    );
};

export default Products;