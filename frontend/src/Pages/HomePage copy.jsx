// import React, { useEffect, useState } from "react";
// import { MdDeleteOutline } from "react-icons/md";
// import axiosInstance from "../utils/axios";
// import { axiosInstanceLocal } from "../utils/axios";

// function HomePage() {
//   const [products, setProducts] = useState([]);
//   const [allProducts, setAllProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [loading, setLoading] = useState(true); // Loading state

//   async function getAllProducts() {
//     try {
//       const response = await axiosInstance.get("/products");
//       setProducts(response.data);
//       setAllProducts(response.data);
//     } catch (error) {
//       console.log("Error fetching all the products", error.message);
//     } finally {
//       setLoading(false); // Set loading to false after fetching
//     }
//   }

//   async function sendItemsToBackend(products) {
//     try {
//       const response = await axiosInstanceLocal.post("/create", products);
//       console.log("Products sent:", response.data);
//     } catch (error) {
//       console.log("Error sending products:", error.message);
//     }
//   }

//   useEffect(() => {
//     const fetchAndSendProducts = async () => {
//       await getAllProducts();
//       await sendItemsToBackend(allProducts); // Consider using a different approach to ensure this works
//     };

//     fetchAndSendProducts();
//   }, []);

//   const deleteFunction = async (id) => {
//     try {
//       await axiosInstance.delete(`/api/products/delete/${id}`);
//       setProducts(products.filter((product) => product.id !== id));
//       console.log("Deleted successfully");
//     } catch (error) {
//       console.log("Error deleting product", error.message);
//     }
//   };

//   const productFilter = (category) => {
//     setSelectedCategory(category);
//     if (category) {
//       setProducts(allProducts.filter(item => item.category === category));
//     } else {
//       setProducts(allProducts);
//     }
//   };

//   if (loading) return <div>Loading...</div>; // Loading indicator

//   return (
//     <>
//       <div className="flex h-screen">
//         {/* Sidebar */}
//         <div className="w-[12%] h-full bg-gray-800 flex flex-col p-6">
//           <h1 className="text-xl mb-5">Product Category</h1>
//           <hr className="mb-5" />
//           <div className="flex flex-col gap-2">
//             <h2 
//               onClick={() => productFilter(null)} 
//               className={`cursor-pointer ${selectedCategory === null ? 'font-semibold' : ''}`}
//             >
//               <span className="w-3 h-3 rounded-full bg-white inline-block"></span> All Products
//             </h2>
//             <h2 
//               onClick={() => productFilter("men's clothing")} 
//               className={`cursor-pointer ${selectedCategory === "men's clothing" ? 'font-semibold' : ''}`}
//             >
//               <span className="w-3 h-3 rounded-full bg-sky-400 inline-block"></span> Men's clothing
//             </h2>
//             <h2 
//               onClick={() => productFilter("jewelery")} 
//               className={`cursor-pointer ${selectedCategory === "jewelery" ? 'font-semibold' : ''}`}
//             >
//               <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span> Jewelery
//             </h2>
//             <h2 
//               onClick={() => productFilter("electronics")} 
//               className={`cursor-pointer ${selectedCategory === "electronics" ? 'font-semibold' : ''}`}
//             >
//               <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span> Electronics
//             </h2>
//             <h2 
//               onClick={() => productFilter("women's clothing")} 
//               className={`cursor-pointer ${selectedCategory === "women's clothing" ? 'font-semibold' : ''}`}
//             >
//               <span className="w-3 h-3 rounded-full bg-pink-400 inline-block"></span> Women's clothing
//             </h2>
//           </div>
//         </div>

//         {/* Card component */}
//         <div className="flex flex-wrap p-10 gap-10 w-full">
//           {products.map((data) => (
//             <div
//               key={data.id}
//               className="w-48 h-80 flex flex-col bg-zinc-800 hover:scale-105 transition cursor-pointer overflow-hidden rounded-lg"
//             >
//               <div className="h-64 w-full overflow-hidden">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={data.image}
//                   alt={data.title}
//                 />
//               </div>
//               <div className="flex justify-between items-center h-fit px-2">
//                 <div>
//                   <h1>{data.title}</h1>
//                   <h1 className="font-semibold">${data.price}</h1>
//                 </div>
//                 <h1>
//                   <MdDeleteOutline
//                     onClick={() => deleteFunction(data.id)}
//                     className="text-xl"
//                   />
//                 </h1>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default HomePage;
