// import { useGetCartItemsQuery } from "../../api/dummyDataApi";
// import { ThreeDots } from "react-loader-spinner";

// const ShoppingCart = () => {
//   const { data, isLoading, isError, error } = useGetCartItemsQuery(1);

//   console.log("DATA:", data);
//   console.log("LOADING:", isLoading);
//   console.log("ERROR:", isError);
//   console.log("ERROR DETAILS:", error);

//   const cartItems = data?.products ?? [];

//   if (isLoading) {
//     return (
//       <section className="h-screen flex items-center justify-center">
//         <ThreeDots
//           height="80"
//           width="80"
//           radius="9"
//           color="black"
//           ariaLabel="three-dots-loading"
//           visible={true}
//         />
//       </section>
//     );
//   }

//   if (isError) {
//     return (
//       <section className="h-screen flex items-center justify-center">
//         <p className="text-red-600">
//           Something went wrong while loading your cart.
//         </p>
//       </section>
//     );
//   }

//   return (
//     <main className="px-4 md:px-8 mt-6">
//       <div className="max-w-2xl mx-auto lg:max-w-7xl">
//         <div className="mb-12">
//           <h1 className="text-2xl font-bold text-slate-900">Shopping Cart</h1>
//         </div>

//         <div className="grid gap-12 lg:grid-cols-3">
//           {/* CART ITEMS */}
//           <div className="lg:col-span-2">
//             {cartItems.length === 0 ? (
//               <p className="text-slate-600">Your cart is empty.</p>
//             ) : (
//               <ul className="space-y-12 sm:space-y-8">
//                 {cartItems.map((product) => (
//                   <li
//                     key={product.id}
//                     className="grid sm:grid-cols-3 items-start gap-4"
//                   >
//                     <div className="flex flex-col sm:items-center sm:flex-row gap-6 sm:col-span-2">
//                       <div className="shrink-0 bg-gray-100 p-2 rounded-md sm:w-28 sm:h-28">
//                         <img
//                           src={product.thumbnail}
//                           className="w-full h-full object-contain"
//                           alt={product.title}
//                         />
//                       </div>

//                       <div>
//                         <h3 className="text-base font-semibold text-slate-900">
//                           {product.title}
//                         </h3>

//                         <button
//                           type="button"
//                           className="text-xs font-medium text-red-600 cursor-pointer mt-2"
//                         >
//                           Remove
//                         </button>

//                         <div className="flex items-center px-2.5 py-1.5 border border-slate-300 text-slate-900 text-xs rounded-md mt-6 w-fit">
//                           <button type="button">−</button>

//                           <span className="mx-3">{product.quantity ?? 1}</span>

//                           <button type="button">+</button>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="sm:ml-auto">
//                       <h3 className="text-base font-semibold text-slate-900">
//                         ${product.price}
//                       </h3>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* ORDER DETAILS */}
//           <div className="bg-gray-100 border border-slate-200 rounded-md p-6 h-max md:sticky md:top-0">
//             <h2 className="text-xl font-semibold text-slate-900">
//               Order details
//             </h2>

//             <ul className="text-slate-600 font-medium mt-8 space-y-4">
//               <li className="flex flex-wrap gap-4 text-sm">
//                 Discount
//                 <span className="ml-auto text-slate-900 font-semibold">
//                   $
//                   {data?.discountedTotal
//                     ? (data.total - data.discountedTotal).toFixed(2)
//                     : "0.00"}
//                 </span>
//               </li>

//               <li className="flex flex-wrap gap-4 text-sm">
//                 Shipping
//                 <span className="ml-auto text-slate-900 font-semibold">
//                   $2.00
//                 </span>
//               </li>

//               <li className="flex flex-wrap gap-4 text-sm">
//                 Tax
//                 <span className="ml-auto text-slate-900 font-semibold">
//                   $4.00
//                 </span>
//               </li>

//               <li className="flex flex-wrap gap-4 text-sm text-slate-900">
//                 Total
//                 <span className="ml-auto font-semibold">
//                   $
//                   {data?.discountedTotal
//                     ? (data.discountedTotal + 2 + 4).toFixed(2)
//                     : "0.00"}
//                 </span>
//               </li>
//             </ul>

//             <div className="mt-8 space-y-3 text-center">
//               <button
//                 type="button"
//                 className="w-full px-4 py-2.5 text-white text-sm font-semibold rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700"
//               >
//                 Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default ShoppingCart;
