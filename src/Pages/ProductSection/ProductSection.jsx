import { useEffect, useState } from "react";
import Product from "../Product/Product";


const ProductSection = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="mt-32">
            <div className="text-center space-y-5">
            <h5 className="text-xl text-orange-500 font-bold">Popular Products</h5>
            <h2 className="text-5xl font-bold">Browse Our Products</h2>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-lg text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised  <br />words which don't look even slightly believable. </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {
                  products.map((singleProduct) => <Product
                    key={singleProduct._id}
                    singleProduct={singleProduct}
                  ></Product>)
                }
            </div>
            <div className="text-center mt-[50px]">
            <button className="btn btn-outline text-[#FF3811] hover:bg-[#d82f0d] border-orange-600 lg:text-base font-semibold">More Products</button>
            </div>
        </div>
    );
};

export default ProductSection;