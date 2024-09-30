import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import axiosInstance from "../utils/axios";
import { Link, useParams } from "react-router-dom";
import { filter } from "@chakra-ui/react";

function HomePage() {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    try {
      const allProducts = await axiosInstance.get("/api/products/all-products");
      setProducts(allProducts.data.message);
    } catch (error) {
      console.log("Error fetching all the products", error.message);
    }
  }

  // Fetch products when component mounts
  useEffect(() => {
    getAllProducts(); // Only fetch once on mount
  }, []); // Empty dependency array to prevent infinite loop

  // Log products when they are updated
  useEffect(() => {
    console.log(products);
  }, [products]); // Dependency on products so it logs when products state changes

  const deleteFunction = async (id) => {
    try {
      console.log(id);
      await axiosInstance.delete(`/api/products/delete/${id}`);
      setProducts(products.filter((product) => product._id !== id));
      console.log("Deleted successfully");
    } catch (error) {
      console.log("Error deleting this bitch", error.message);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-10 p-10">
        {products.map((data, index) => (
          <div
            key={index}
            className="w-48 h-80 flex flex-col bg-zinc-800 hover:scale-105 transition cursor-pointer overflow-hidden"
          >
            <div className="h-64 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={data.image}
                alt=""
              />
            </div>

            <div className="flex justify-between items-center h-10 px-2">
              <div className="mt-5">
                <h1>{data.name}</h1>
                <h1>${data.price}</h1>
              </div>
              <h1>
                <MdDeleteOutline
                  onClick={() => deleteFunction(data._id)}
                  className="text-xl"
                />
              </h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
