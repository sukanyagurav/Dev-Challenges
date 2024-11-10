import React from "react";
import { Product } from "../utilis/types";
import ProductItem from "./ProductItem";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="flex flex-col p-4 md:p-8 bg-gray-200 flex-1 ">
      <div className="  flex gap-8 flex-col">
        {products.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
        <div className="mt-8 pt-6 border-t-2 border-gray-300">
          <div className="flex gap-3 flex-col md:flex-row">
            <input type="text"  placeholder="Enter Coupon Code" className="w-full p-2 rounded-lg"/> 
            <button className="w-44 bg-black text-sm text-white p-2 rounded-lg">Apply Coupon</button>
          </div>
          <p className="flex justify-between mt-6 font-bold text-gray-400"><span>Sub total</span> <span>$2598.00</span></p>
        
          <p className="flex justify-between mt-3 font-bold text-gray-400"><span>Tax</span> <span>$2598.00</span></p>
          <p className="flex justify-between mt-3 font-bold text-gray-700"><span>Total</span> <span>$2598.00</span></p>
      
        </div>
    </div>
  );
};

export default ProductList;
