// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useParams, useLocation, useNavigate } from "react-router-dom";

// import { 
//   FaSeedling, 
//   FaDumbbell,
//   FaMugHot,
//   FaUtensils,
//   FaIceCream,
//   FaHeart,
//   FaArrowLeft,
//   FaTimes,
//   FaCheck,
//   FaChevronLeft,
//   FaChevronRight
// } from "react-icons/fa";

// // Import images
// import image1 from "../../assets/image7.png";
// import image2 from "../../assets/image8.jpg";
// import dryfruits from "../../assets/dry_fruits.jpg"; 
// import { useAPI } from "../Context/AuthContext";

// const ProductDetail = () => {
  
//   const {ReadProduct}=useAPI();
//   const location = useLocation();
//   const navigate = useNavigate();
//    const id = location.state?.product;
//    console.log("product id  is ", id);
   
//   const [product, setProduct] = useState(location.state?.product || null);
//   const [activeModal, setActiveModal] = useState(null);
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [loading, setLoading] = useState(!location.state?.product);
//     const [productData, setProductData] = useState(null);

//   // Mock product images
//   const productImages = [image1, image2, image1, image2];

//   // If no product data in state and we have ID, fetch product data
//   useEffect(() => {
//     if (id) {
//       const fetchProduct = async () => {
//         try {
//           const response = await ReadProduct(id);
//           console.log("Read Product Response:", response);
//           setProductData(response);
//         } catch (error) {
//           console.error("Error fetching product:", error);
//         }
//       };

//       fetchProduct();
//     }
//   }, [id, ReadProduct]);



//   // Helper function to safely get category name
//   const getCategoryName = (product) => {
//     if (!product) return "Uncategorized";
//     if (typeof product.category === 'string') return product.category;
//     if (product.category && product.category.title) return product.category.title;
//     return "Uncategorized";
//   };

//   // Helper function to safely get product name
//   const getProductName = (product) => {
//     if (!product) return "Product";
//     return product.name || product.title || "Product";
//   };

//   // Helper function to safely get description
//   const getDescription = (product) => {
//     if (!product) return "No description available.";
//     return product.details || product.description || "No description available.";
//   };

//   // Helper function to safely get image
//   const getProductImage = (product) => {
//     if (!product) return productImages[0];
//     if (product.image) return product.image;
//     if (product.images && product.images.length > 0 && product.images[0].original) {
//       return product.images[0].original;
//     }
//     return productImages[0];
//   };

//   // Show loading state
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f5f0] to-[#f0ede5]">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-center"
//         >
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//             className="w-16 h-16 border-4 border-[#8B5E3C] border-t-transparent rounded-full mx-auto mb-4"
//           />
//           <p className="text-[#8B5E3C] font-semibold">Loading product...</p>
//         </motion.div>
//       </div>
//     );
//   }

//   // If no product after loading, show error (will redirect in useEffect)
//   if (!product) {
//     return null;
//   }

//   const waysToEat = [
//     { name: "Milk", icon: FaMugHot },
//     { name: "Yoghurt", icon: FaUtensils },
//     { name: "Ice Cream", icon: FaIceCream },
//     { name: "Plain", icon: FaHeart }
//   ];

//   // Image navigation functions
//   const nextImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === productImages.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === 0 ? productImages.length - 1 : prev - 1
//     );
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const cardHoverVariants = {
//     initial: { scale: 1, y: 0 },
//     hover: { 
//       scale: 1.02, 
//       y: -8,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut"
//       }
//     }
//   };

//   const imageVariants = {
//     initial: { scale: 1 },
//     hover: { 
//       scale: 1.05,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   const modalBackdropVariants = {
//     initial: { opacity: 0 },
//     animate: { 
//       opacity: 1,
//       transition: {
//         duration: 0.3
//       }
//     },
//     exit: {
//       opacity: 0,
//       transition: {
//         duration: 0.2
//       }
//     }
//   };

//   const modalContentVariants = {
//     initial: { 
//       opacity: 0, 
//       scale: 0.8,
//       y: 20
//     },
//     animate: { 
//       opacity: 1, 
//       scale: 1,
//       y: 0,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut"
//       }
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.8,
//       y: -20,
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   const staggerListVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.08
//       }
//     }
//   };

//   const listItemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.4
//       }
//     }
//   };

//   // Modal components
//   const IngredientsModal = () => (
//     <motion.div
//       variants={modalBackdropVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       className="fixed inset-0 bg-black/50 backdrop-blur-sm flex  justify-center z-50 p-4"
//       onClick={() => setActiveModal(null)}
//     >
//       <motion.div
//         variants={modalContentVariants}
//         className="bg-white rounded-3xl max-w-md w-full p-6 mx-auto max-h-[80vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex justify-between items-center mb-4">
//           <motion.h3 
//             className="text-xl font-serif font-bold text-[#8B5E3C]"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             Ingredients
//           </motion.h3>
//           <motion.button
//             onClick={() => setActiveModal(null)}
//             className="text-[#8B5E3C] hover:text-[#A67C52] transition-colors"
//             whileHover={{ scale: 1.1, rotate: 90 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <FaTimes className="w-6 h-6" />
//           </motion.button>
//         </div>
//         <motion.div 
//           className="space-y-2"
//           variants={staggerListVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {/* Check if ingredients exist and handle both array and string formats */}
//           {product.ingredients && Array.isArray(product.ingredients) ? (
//             product.ingredients.map((ingredient, index) => (
//               <motion.div
//                 key={index}
//                 variants={listItemVariants}
//                 className="flex items-center space-x-3 text-[#8B5E3C]"
//                 whileHover={{ x: 5, transition: { duration: 0.2 } }}
//               >
//                 <motion.div 
//                   className="w-2 h-2 bg-[#A67C52] rounded-full"
//                   whileHover={{ scale: 1.5 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 />
//                 <span>{ingredient}</span>
//               </motion.div>
//             ))
//           ) : product.ingredients ? (
//             // Handle string format if needed
//             product.ingredients.split(' + ').map((ingredient, index) => (
//               <motion.div
//                 key={index}
//                 variants={listItemVariants}
//                 className="flex items-center space-x-3 text-[#8B5E3C]"
//                 whileHover={{ x: 5, transition: { duration: 0.2 } }}
//               >
//                 <motion.div 
//                   className="w-2 h-2 bg-[#A67C52] rounded-full"
//                   whileHover={{ scale: 1.5 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 />
//                 <span>{ingredient.trim()}</span>
//               </motion.div>
//             ))
//           ) : (
//             <p className="text-[#8B5E3C]/70 text-center py-4">No ingredients information available.</p>
//           )}
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );

//   const NutritionModal = () => (
//     <motion.div
//       variants={modalBackdropVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center z-50 p-4"
//       onClick={() => setActiveModal(null)}
//     >
//       <motion.div
//         variants={modalContentVariants}
//         className="bg-white rounded-3xl max-w-2xl w-full p-6 mx-auto max-h-[80vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex justify-between items-center mb-6">
//           <motion.h3 
//             className="text-xl font-serif font-bold text-[#8B5E3C]"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             Nutrition Facts
//           </motion.h3>
//           <motion.button
//             onClick={() => setActiveModal(null)}
//             className="text-[#8B5E3C] hover:text-[#A67C52] transition-colors"
//             whileHover={{ scale: 1.1, rotate: 90 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <FaTimes className="w-6 h-6" />
//           </motion.button>
//         </div>
//         <motion.div 
//           className="overflow-x-auto"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//         >
//           {/* Check if nutrition data exists */}
//           {product.nutrition && product.nutrition.length > 0 ? (
//             <table className="w-full text-sm">
//               <thead>
//                 <tr className="bg-gradient-to-r from-[#8B5E3C] to-[#A67C52] text-white">
//                   <th className="px-4 py-3 text-left font-semibold">Nutrient</th>
//                   <th className="px-4 py-3 text-center font-semibold">Quantity</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {product.nutrition.map((nutrient, index) => (
//                   <motion.tr
//                     key={index}
//                     className={index % 2 === 0 ? "bg-white" : "bg-[#f8f5f0]"}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.4 + index * 0.05 }}
//                     whileHover={{ backgroundColor: "rgba(139, 94, 60, 0.05)" }}
//                   >
//                     <td className="px-4 py-3 font-semibold text-[#8B5E3C]">{nutrient.name}</td>
//                     <td className="px-4 py-3 text-center text-[#8B5E3C]">{nutrient.quantity}</td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <div className="text-center py-8">
//               <p className="text-[#8B5E3C]/70">No nutrition information available.</p>
//             </div>
//           )}
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );

//   return (
//     <>
//       <section className="min-h-screen py-8 bg-gradient-to-br from-[#f8f5f0] to-[#f0ede5]">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
//           {/* Back Button */}
//           <motion.button
//             onClick={() => navigate(-1)}
//             className="flex items-center text-[#8B5E3C] hover:text-[#A67C52] mb-8 transition-colors duration-300 group"
//             whileHover={{ x: -5 }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ type: "spring", stiffness: 400, damping: 25 }}
//           >
//             <motion.div
//               animate={{ x: [0, -3, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
//             >
//               <FaArrowLeft className="w-5 h-5 mr-2 text-current" />
//             </motion.div>
//             Back to Products
//           </motion.button>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
//             {/* Left Column - Product Information */}
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               className="space-y-8"
//             >
              
//               {/* Product Header */}
//               <motion.div
//                 variants={itemVariants}
//                 className="bg-white rounded-3xl p-8 border border-[#e8e4d9] shadow-lg"
//                 whileHover="hover"
//                 variants={cardHoverVariants}
//               >
//                 {/* Category - FIXED: Using helper function */}
//                 <motion.p 
//                   className="text-sm font-semibold text-[#A67C52] uppercase tracking-wider mb-3"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.1 }}
//                 >
//                   {getCategoryName(product)}
//                 </motion.p>

//                 {/* Product Name - FIXED: Using helper function */}
//                 <motion.h1 
//                   className="text-4xl md:text-5xl font-serif font-bold text-[#8B5E3C] mb-4 leading-tight"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
//                 >
//                   {getProductName(product)}
//                 </motion.h1>
                
//                 {/* Product Details */}
//                 <motion.div 
//                   className="flex items-center space-x-4 mb-6"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   <motion.span 
//                     className="text-lg font-semibold text-[#A67C52] bg-[#f8f5f0] px-4 py-2 rounded-full"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     {product.weight || "360g"}
//                   </motion.span>
//                   <motion.span 
//                     className="px-4 py-2 bg-[#8B5E3C] text-white text-sm rounded-full font-medium"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     CONVENTIONAL PRODUCT
//                   </motion.span>
//                 </motion.div>

//                 {/* Short Description - FIXED: Using helper function */}
//                 <motion.p 
//                   className="text-[#8B5E3C]/80 text-lg leading-relaxed border-t border-[#e8e4d9] pt-6"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   {getDescription(product)}
//                 </motion.p>

//                 {/* Action Buttons */}
//                 <motion.div 
//                   className="flex flex-wrap gap-4 mt-8"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5 }}
//                 >
//                   <motion.button
//                     onClick={() => setActiveModal('ingredients')}
//                     className="flex-1 bg-gradient-to-r from-[#8B5E3C] to-[#A67C52] text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center space-x-2"
//                     whileHover={{ 
//                       scale: 1.05,
//                       boxShadow: "0 20px 25px -5px rgba(139, 94, 60, 0.3), 0 10px 10px -5px rgba(139, 94, 60, 0.2)"
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                   >
//                     <motion.div
//                       whileHover={{ rotate: 15, scale: 1.2 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                     >
//                       <FaSeedling className="w-5 h-5 text-white" />
//                     </motion.div>
//                     <span>View Ingredients</span>
//                   </motion.button>
//                   <motion.button
//                     onClick={() => setActiveModal('nutrition')}
//                     className="flex-1 bg-white border-2 border-[#8B5E3C] text-[#8B5E3C] py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center space-x-2"
//                     whileHover={{ 
//                       scale: 1.05,
//                       backgroundColor: "#8B5E3C",
//                       color: "white",
//                       boxShadow: "0 20px 25px -5px rgba(139, 94, 60, 0.3), 0 10px 10px -5px rgba(139, 94, 60, 0.2)"
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                   >
//                     <motion.div
//                       whileHover={{ rotate: -15, scale: 1.2 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                     >
//                       <FaDumbbell className="w-5 h-5" />
//                     </motion.div>
//                     <span>Nutrition Facts</span>
//                   </motion.button>
//                 </motion.div>
//               </motion.div>

//               {/* Ways to Enjoy */}
//               <motion.div
//                 variants={itemVariants}
//                 className="bg-white rounded-3xl p-8 border border-[#e8e4d9] shadow-lg"
//                 whileHover="hover"
//                 variants={cardHoverVariants}
//               >
//                 <motion.h2 
//                   className="text-2xl font-serif font-bold text-[#8B5E3C] mb-6"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.6 }}
//                 >
//                   Perfect With
//                 </motion.h2>
//                 <div className="grid grid-cols-2 gap-4">
//                   {waysToEat.map((item, index) => {
//                     const IconComponent = item.icon;
//                     return (
//                       <motion.div
//                         key={index}
//                         className="bg-[#f8f5f0] rounded-2xl p-4 text-center hover:bg-[#8B5E3C] hover:text-white group transition-all duration-300"
//                         variants={itemVariants}
//                         whileHover={{ 
//                           y: -8, 
//                           scale: 1.05,
//                           transition: { type: "spring", stiffness: 400 }
//                         }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <motion.div
//                           whileHover={{ rotate: 360 }}
//                           transition={{ duration: 0.6, ease: "easeOut" }}
//                         >
//                           <IconComponent className="text-3xl mb-2 mx-auto transition-transform duration-300 group-hover:scale-110 text-[#8B5E3C] group-hover:text-white" />
//                         </motion.div>
//                         <motion.p 
//                           className="text-[#8B5E3C] font-semibold group-hover:text-white transition-colors duration-300"
//                           whileHover={{ scale: 1.1 }}
//                         >
//                           {item.name}
//                         </motion.p>
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* Right Column - Product Images with Dry Fruits Background */}
//             <motion.div
//               initial={{ opacity: 0, x: 50, scale: 0.9 }}
//               animate={{ opacity: 1, x: 0, scale: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//               className="flex items-start justify-center"
//             >
//               <div className="sticky top-8 w-full">
//                 <motion.div
//                   className="rounded-3xl p-6 border border-[#e8e4d9] shadow-2xl relative overflow-hidden"
//                   whileHover="hover"
//                   variants={cardHoverVariants}
//                   style={{
//                     backgroundImage: `url(${dryfruits})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     backgroundBlendMode: 'overlay',
//                     backgroundColor: 'rgba(248, 245, 240, 0.9)'
//                   }}
//                 >
//                   {/* Background overlay for better readability */}
//                   <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>
                  
//                   <div className="relative z-10">
//                     {/* Main Image Carousel */}
//                     <motion.div
//                       variants={imageVariants}
//                       initial="initial"
//                       whileHover="hover"
//                       className="overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-[#e8e4d9]"
//                     >
//                       <div className="relative">
//                         {/* FIXED: Using helper function for image */}
//                         <motion.img
//                           key={currentImageIndex}
//                           src={getProductImage(product)}
//                           alt={`${getProductName(product)} ${currentImageIndex + 1}`}
//                           className="w-full h-80 object-cover rounded-2xl shadow-lg"
//                           initial={{ opacity: 0, scale: 1.1 }}
//                           animate={{ 
//                             opacity: imageLoaded ? 1 : 0, 
//                             scale: imageLoaded ? 1 : 1.1 
//                           }}
//                           transition={{ duration: 0.6, ease: "easeOut" }}
//                           onLoad={() => setImageLoaded(true)}
//                         />
                        
//                         {/* Navigation Arrows */}
//                         {productImages.length > 1 && (
//                           <>
//                             <motion.button
//                               onClick={prevImage}
//                               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300"
//                               whileHover={{ scale: 1.1 }}
//                               whileTap={{ scale: 0.9 }}
//                             >
//                               <FaChevronLeft className="w-5 h-5 text-[#8B5E3C]" />
//                             </motion.button>
//                             <motion.button
//                               onClick={nextImage}
//                               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300"
//                               whileHover={{ scale: 1.1 }}
//                               whileTap={{ scale: 0.9 }}
//                             >
//                               <FaChevronRight className="w-5 h-5 text-[#8B5E3C]" />
//                             </motion.button>
//                           </>
//                         )}

//                         {/* Image Counter */}
//                         {productImages.length > 1 && (
//                           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
//                             {currentImageIndex + 1} / {productImages.length}
//                           </div>
//                         )}

//                         {!imageLoaded && (
//                           <motion.div 
//                             className="absolute inset-0 w-full h-80 bg-[#f8f5f0] rounded-2xl flex items-center justify-center"
//                             initial={{ opacity: 1 }}
//                             animate={{ opacity: imageLoaded ? 0 : 1 }}
//                           >
//                             <motion.div
//                               animate={{ rotate: 360 }}
//                               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                             >
//                               <FaSeedling className="w-12 h-12 text-[#8B5E3C]/30" />
//                             </motion.div>
//                           </motion.div>
//                         )}
//                       </div>
//                     </motion.div>

//                     {/* Thumbnail Scrollbar */}
//                     {productImages.length > 1 && (
//                       <motion.div 
//                         className="mt-4 overflow-x-auto"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.5 }}
//                       >
//                         <div className="flex space-x-2 pb-2 min-w-max">
//                           {productImages.map((image, index) => (
//                             <motion.button
//                               key={index}
//                               onClick={() => {
//                                 setCurrentImageIndex(index);
//                                 setImageLoaded(false);
//                               }}
//                               className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
//                                 currentImageIndex === index 
//                                   ? 'border-[#8B5E3C] scale-105' 
//                                   : 'border-transparent hover:border-[#8B5E3C]/50'
//                               }`}
//                               whileHover={{ scale: 1.05 }}
//                               whileTap={{ scale: 0.95 }}
//                             >
//                               <img
//                                 src={image}
//                                 alt={`Thumbnail ${index + 1}`}
//                                 className="w-full h-full object-cover"
//                               />
//                             </motion.button>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
                    
//                     {/* Product Highlights */}
//                     <motion.div 
//                       className="mt-6 p-6 bg-gradient-to-br from-[#8B5E3C] to-[#A67C52] rounded-2xl text-white relative z-10"
//                       initial={{ opacity: 0, y: 30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.8, duration: 0.6 }}
//                       whileHover={{ 
//                         scale: 1.02,
//                         transition: { duration: 0.3 }
//                       }}
//                     >
//                       <motion.h3 
//                         className="font-serif font-bold text-xl mb-4 text-center"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 1 }}
//                       >
//                         Product Highlights
//                       </motion.h3>
//                       <motion.div 
//                         className="space-y-3"
//                         variants={staggerListVariants}
//                         initial="hidden"
//                         animate="visible"
//                       >
//                         {[
//                           "Sweetened with Apple Juice",
//                           "High in Fiber & Omega-3",
//                           "Natural Ingredients Only",
//                           "No Artificial Preservatives"
//                         ].map((highlight, index) => (
//                           <motion.div
//                             key={index}
//                             variants={listItemVariants}
//                             className="flex items-center space-x-3"
//                             whileHover={{ x: 5 }}
//                           >
//                             <motion.div
//                               whileHover={{ scale: 1.3, rotate: 180 }}
//                               transition={{ type: "spring", stiffness: 300 }}
//                             >
//                               <FaCheck className="w-4 h-4 text-white" />
//                             </motion.div>
//                             <span className="text-sm">{highlight}</span>
//                           </motion.div>
//                         ))}
//                       </motion.div>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Modals */}
//       <AnimatePresence>
//         {activeModal === 'ingredients' && <IngredientsModal />}
//         {activeModal === 'nutrition' && <NutritionModal />}
//       </AnimatePresence>
//     </>
//   );
// };

// export default ProductDetail;


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import { 
//   FaSeedling, 
//   FaDumbbell,
//   FaMugHot,
//   FaUtensils,
//   FaIceCream,
//   FaHeart,
//   FaArrowLeft,
//   FaTimes,
//   FaCheck,
//   FaChevronLeft,
//   FaChevronRight
// } from "react-icons/fa";
// import image1 from "../../assets/image7.png";
// import image2 from "../../assets/image8.jpg";
// import dryfruits from "../../assets/dry_fruits.jpg"; 
// import { useAPI } from "../Context/AuthContext";

// const ProductDetail = () => {
//   const { ReadProduct } = useAPI();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const id = location.state?.product;
  
//   const [product, setProduct] = useState(location.state?.product || null);
//   const [ingredients, setIngredients] = useState([]);
//   const [nutrition, setNutrition] = useState([]);
//   const [images, setImages] = useState([]);
//   const [activeModal, setActiveModal] = useState(null);
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [loading, setLoading] = useState(!location.state?.product);
//   const [productData, setProductData] = useState(null);
//   const [autoScroll, setAutoScroll] = useState(true);

//   const productImagesFallback = [image1, image2, image1, image2];

//   // Auto scroll effect
//   useEffect(() => {
//     if (!autoScroll || images.length <= 1) return;

//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => 
//         prev === images.length - 1 ? 0 : prev + 1
//       );
//     }, 4000); // Change image every 4 seconds

//     return () => clearInterval(interval);
//   }, [images.length, autoScroll]);

//   useEffect(() => {
//     if (id) {
//       const fetchProduct = async () => {
//         try {
//           setLoading(true);
//           const response = await ReadProduct(id);
//           setProductData(response);
          
//           if (response?.data?.ingredients && Array.isArray(response.data.ingredients)) {
//             setIngredients(response.data.ingredients);
//           } else {
//             setIngredients([]);
//           }
          
//           if (response?.data?.nutrition && Array.isArray(response.data.nutrition)) {
//             setNutrition(response.data.nutrition);
//           } else {
//             setNutrition([]);
//           }
          
//           if (response?.data?.images && Array.isArray(response.data.images)) {
//             setImages(response.data.images);
//           } else {
//             setImages([]);
//           }
          
//           setProduct(response.data || response);
//         } catch (error) {
//           console.error("Error fetching product:", error);
//           setIngredients([]);
//           setNutrition([]);
//           setImages([]);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchProduct();
//     }
//   }, [id, ReadProduct]);

//   const getCategoryName = (product) => {
//     if (!product) return "Uncategorized";
//     if (typeof product.category === 'string') return product.category;
//     if (product.category && product.category.title) return product.category.title;
//     return "Uncategorized";
//   };

//   const getProductName = (product) => {
//     if (!product) return "Product";
//     return product.name || product.title || "Product";
//   };

//   const getDescription = (product) => {
//     if (!product) return "No description available.";
//     return product.details || product.description || "No description available.";
//   };

//   const getProductImage = () => {
//     if (images.length > 0 && images[0]?.original) {
//       return images[0].original;
//     }
//     if (product?.images && product.images.length > 0 && product.images[0]?.original) {
//       return product.images[0].original;
//     }
//     if (product?.image) {
//       return product.image;
//     }
//     return productImagesFallback[0];
//   };

//   const getAllImages = () => {
//     if (images.length > 0) {
//       return images.map(img => img.original || img);
//     }
//     if (product?.images && product.images.length > 0) {
//       return product.images.map(img => img.original || img);
//     }
//     return productImagesFallback;
//   };

//   const nextImage = () => {
//     const allImages = getAllImages();
//     setCurrentImageIndex((prev) => 
//       prev === allImages.length - 1 ? 0 : prev + 1
//     );
//     setAutoScroll(false); // Stop auto-scroll when user manually changes image
//   };

//   const prevImage = () => {
//     const allImages = getAllImages();
//     setCurrentImageIndex((prev) => 
//       prev === 0 ? allImages.length - 1 : prev - 1
//     );
//     setAutoScroll(false); // Stop auto-scroll when user manually changes image
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f5f0] to-[#f0ede5] px-4">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-center"
//         >
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//             className="w-12 h-12 border-4 border-[#8B5E3C] border-t-transparent rounded-full mx-auto mb-4"
//           />
//           <p className="text-[#8B5E3C] font-semibold text-base">Loading product...</p>
//         </motion.div>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f5f0] to-[#f0ede5] px-4">
//         <div className="text-center">
//           <p className="text-[#8B5E3C] font-semibold text-base sm:text-lg">Product not found.</p>
//           <button 
//             onClick={() => navigate(-1)}
//             className="mt-4 px-4 py-2 bg-[#8B5E3C] text-white rounded-lg hover:bg-[#A67C52] transition-colors text-sm sm:text-base"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const waysToEat = [
//     { name: "Milk", icon: FaMugHot },
//     { name: "Yoghurt", icon: FaUtensils },
//     { name: "Ice Cream", icon: FaIceCream },
//     { name: "Plain", icon: FaHeart }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const cardHoverVariants = {
//     initial: { scale: 1, y: 0 },
//     hover: { 
//       scale: 1.02, 
//       y: -8,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut"
//       }
//     }
//   };

//   const imageVariants = {
//     initial: { scale: 1 },
//     hover: { 
//       scale: 1.05,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   const modalBackdropVariants = {
//     initial: { opacity: 0 },
//     animate: { 
//       opacity: 1,
//       transition: {
//         duration: 0.3
//       }
//     },
//     exit: {
//       opacity: 0,
//       transition: {
//         duration: 0.2
//       }
//     }
//   };

//   const modalContentVariants = {
//     initial: { 
//       opacity: 0, 
//       scale: 0.8,
//       y: 20
//     },
//     animate: { 
//       opacity: 1, 
//       scale: 1,
//       y: 0,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut"
//       }
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.8,
//       y: -20,
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   const staggerListVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.08
//       }
//     }
//   };

//   const listItemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.4
//       }
//     }
//   };

//   const IngredientsModal = () => {
//     const displayIngredients = ingredients.length > 0 ? ingredients : 
//                               (product.ingredients && Array.isArray(product.ingredients)) ? product.ingredients : [];

//     return (
//       <motion.div
//         variants={modalBackdropVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center z-50 px-2 sm:px-4"
//         onClick={() => setActiveModal(null)}
//       >
//         <motion.div
//           variants={modalContentVariants}
//           className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-md p-4 sm:p-6 mx-auto max-h-[80vh] overflow-y-auto"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="flex justify-between items-center mb-3 sm:mb-4">
//             <motion.h3 
//               className="text-lg sm:text-xl font-serif font-bold text-[#8B5E3C]"
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               Ingredients
//             </motion.h3>
//             <motion.button
//               onClick={() => setActiveModal(null)}
//               className="text-[#8B5E3C] hover:text-[#A67C52] transition-colors"
//               whileHover={{ scale: 1.1, rotate: 90 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
//             </motion.button>
//           </div>
//           <motion.div 
//             className="space-y-2"
//             variants={staggerListVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {displayIngredients.length > 0 ? (
//               displayIngredients.map((ingredient, index) => (
//                 <motion.div
//                   key={index}
//                   variants={listItemVariants}
//                   className="flex items-center space-x-2 sm:space-x-3 text-[#8B5E3C] text-sm sm:text-base"
//                   whileHover={{ x: 5, transition: { duration: 0.2 } }}
//                 >
//                   <motion.div 
//                     className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#A67C52] rounded-full"
//                     whileHover={{ scale: 1.5 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   />
//                   <span>{ingredient}</span>
//                 </motion.div>
//               ))
//             ) : (
//               <p className="text-[#8B5E3C]/70 text-center py-4 text-sm sm:text-base">No ingredients information available.</p>
//             )}
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     );
//   };

//   const NutritionModal = () => {
//     const displayNutrition = nutrition.length > 0 ? nutrition : 
//                            (product.nutrition && Array.isArray(product.nutrition)) ? product.nutrition : [];

//     return (
//       <motion.div
//         variants={modalBackdropVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center z-50 px-2 sm:px-4"
//         onClick={() => setActiveModal(null)}
//       >
//         <motion.div
//           variants={modalContentVariants}
//           className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-md sm:max-w-2xl p-4 sm:p-6 mx-auto max-h-[80vh] overflow-y-auto"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="flex justify-between items-center mb-4 sm:mb-6">
//             <motion.h3 
//               className="text-lg sm:text-xl font-serif font-bold text-[#8B5E3C]"
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               Nutrition Facts
//             </motion.h3>
//             <motion.button
//               onClick={() => setActiveModal(null)}
//               className="text-[#8B5E3C] hover:text-[#A67C52] transition-colors"
//               whileHover={{ scale: 1.1, rotate: 90 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
//             </motion.button>
//           </div>
//           <motion.div 
//             className="overflow-x-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             {displayNutrition.length > 0 ? (
//               <table className="w-full text-xs sm:text-sm">
//                 <thead>
//                   <tr className="bg-gradient-to-r from-[#8B5E3C] to-[#A67C52] text-white">
//                     <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold">Nutrient</th>
//                     <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold">Per 100g</th>
//                     <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold">Portion</th>
//                     <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold">RI% (100g)</th>
//                     <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold">RI% (Portion)</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {displayNutrition.map((nutrient, index) => (
//                     <motion.tr
//                       key={index}
//                       className={index % 2 === 0 ? "bg-white" : "bg-[#f8f5f0]"}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.4 + index * 0.05 }}
//                       whileHover={{ backgroundColor: "rgba(139, 94, 60, 0.05)" }}
//                     >
//                       <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-[#8B5E3C]">{nutrient.name || "N/A"}</td>
//                       <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#8B5E3C]">{nutrient.per_100g || "N/A"}</td>
//                       <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#8B5E3C]">{nutrient.portion || "N/A"}</td>
//                       <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#8B5E3C]">{nutrient.ri_percent_100g || "N/A"}</td>
//                       <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#8B5E3C]">{nutrient.ri_percent_portion || "N/A"}</td>
//                     </motion.tr>
//                   ))}
//                 </tbody>
//               </table>
//             ) : (
//               <div className="text-center py-6 sm:py-8">
//                 <p className="text-[#8B5E3C]/70 text-sm sm:text-base">No nutrition information available.</p>
//               </div>
//             )}
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     );
//   };

//   const allImages = getAllImages();

//   return (
//     <>
//       <section className="min-h-screen py-6 sm:py-8 bg-gradient-to-br from-[#f8f5f0] to-[#f0ede5]">
//         {/* FIXED: Changed container to use full width with proper padding */}
//         <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 mx-auto max-w-[2000px]">
          
//           {/* Back Button */}
//           <motion.button
//             onClick={() => navigate(-1)}
//             className="flex items-center text-[#8B5E3C] hover:text-[#A67C52] mb-6 sm:mb-8 transition-colors duration-300 group"
//             whileHover={{ x: -5 }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ type: "spring", stiffness: 400, damping: 25 }}
//           >
//             <motion.div
//               animate={{ x: [0, -3, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
//             >
//               <FaArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-current" />
//             </motion.div>
//             <span className="text-sm sm:text-base">Back to Products</span>
//           </motion.button>

//           {/* FIXED: Improved grid layout with better spacing */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16">
            
//             {/* Product Images - Enhanced with better image display */}
//             <motion.div
//               initial={{ opacity: 0, x: -50, scale: 0.9 }}
//               animate={{ opacity: 1, x: 0, scale: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//               className="w-full order-2 lg:order-1"
//             >
//               <div className="w-full">
//                 <motion.div
//                   className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#e8e4d9] shadow-lg relative overflow-hidden w-full"
//                   whileHover="hover"
//                   variants={cardHoverVariants}
//                   style={{
//                     backgroundImage: `url(${dryfruits})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     backgroundBlendMode: 'overlay',
//                     backgroundColor: 'rgba(248, 245, 240, 0.9)'
//                   }}
//                 >
//                   <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>
                  
//                   <div className="relative z-10">
//                     {/* FIXED: Main image container with proper aspect ratio */}
//                     <motion.div
//                       variants={imageVariants}
//                       initial="initial"
//                       whileHover="hover"
//                       className="overflow-hidden rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-[#e8e4d9] relative"
//                     >
//                       <div className="relative w-full aspect-square max-h-[600px]">
//                         <motion.img
//                           key={currentImageIndex}
//                           src={allImages[currentImageIndex]}
//                           alt={`${getProductName(product)} ${currentImageIndex + 1}`}
//                           className="w-full h-full object-contain rounded-xl sm:rounded-2xl"
//                           initial={{ opacity: 0, scale: 1.1 }}
//                           animate={{ 
//                             opacity: imageLoaded ? 1 : 0, 
//                             scale: imageLoaded ? 1 : 1.1 
//                           }}
//                           transition={{ duration: 0.6, ease: "easeOut" }}
//                           onLoad={() => setImageLoaded(true)}
//                           onError={(e) => {
//                             e.target.src = productImagesFallback[0];
//                             setImageLoaded(true);
//                           }}
//                         />
                        
//                         {/* Navigation Arrows - Only show if multiple images */}
//                         {allImages.length > 1 && (
//                           <>
//                             <motion.button
//                               onClick={prevImage}
//                               className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 sm:p-4 shadow-lg hover:bg-white transition-all duration-300 border border-[#e8e4d9]"
//                               whileHover={{ scale: 1.15, backgroundColor: "rgba(139, 94, 60, 0.1)" }}
//                               whileTap={{ scale: 0.9 }}
//                             >
//                               <FaChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B5E3C]" />
//                             </motion.button>
//                             <motion.button
//                               onClick={nextImage}
//                               className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 sm:p-4 shadow-lg hover:bg-white transition-all duration-300 border border-[#e8e4d9]"
//                               whileHover={{ scale: 1.15, backgroundColor: "rgba(139, 94, 60, 0.1)" }}
//                               whileTap={{ scale: 0.9 }}
//                             >
//                               <FaChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B5E3C]" />
//                             </motion.button>
//                           </>
//                         )}

//                         {/* Image Counter */}
//                         {allImages.length > 1 && (
//                           <motion.div 
//                             className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium flex items-center space-x-2"
//                             initial={{ opacity: 0, y: 10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.5 }}
//                           >
//                             <span>{currentImageIndex + 1} / {allImages.length}</span>
//                             {autoScroll && (
//                               <motion.div
//                                 animate={{ scale: [1, 1.2, 1] }}
//                                 transition={{ duration: 2, repeat: Infinity }}
//                                 className="w-2 h-2 bg-green-400 rounded-full"
//                               />
//                             )}
//                           </motion.div>
//                         )}

//                         {/* Loading State */}
//                         {!imageLoaded && (
//                           <motion.div 
//                             className="absolute inset-0 w-full h-full bg-[#f8f5f0] rounded-xl sm:rounded-2xl flex items-center justify-center"
//                             initial={{ opacity: 1 }}
//                             animate={{ opacity: imageLoaded ? 0 : 1 }}
//                             transition={{ duration: 0.3 }}
//                           >
//                             <motion.div
//                               animate={{ rotate: 360 }}
//                               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                               className="flex flex-col items-center"
//                             >
//                               <FaSeedling className="w-16 h-16 sm:w-20 sm:h-20 text-[#8B5E3C]/30 mb-4" />
//                               <p className="text-[#8B5E3C]/50 text-sm">Loading image...</p>
//                             </motion.div>
//                           </motion.div>
//                         )}
//                       </div>
//                     </motion.div>

//                     {/* Thumbnail Gallery - Only show if multiple images */}
//                     {allImages.length > 1 && (
//                       <motion.div 
//                         className="mt-4 sm:mt-6 overflow-x-auto"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.5 }}
//                       >
//                         <div className="flex space-x-3 sm:space-x-4 pb-3 min-w-max">
//                           {allImages.map((image, index) => (
//                             <motion.button
//                               key={index}
//                               onClick={() => {
//                                 setCurrentImageIndex(index);
//                                 setImageLoaded(false);
//                                 setAutoScroll(false);
//                               }}
//                               className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-300 ${
//                                 currentImageIndex === index 
//                                   ? 'border-[#8B5E3C] scale-110 shadow-md' 
//                                   : 'border-transparent hover:border-[#8B5E3C]/50 hover:scale-105'
//                               }`}
//                               whileHover={{ scale: 1.08 }}
//                               whileTap={{ scale: 0.95 }}
//                             >
//                               <img
//                                 src={image}
//                                 alt={`Thumbnail ${index + 1}`}
//                                 className="w-full h-full object-cover"
//                                 onError={(e) => {
//                                   e.target.src = productImagesFallback[0];
//                                 }}
//                               />
//                             </motion.button>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
                    
//                     {/* Product Highlights */}
//                     <motion.div 
//                       className="mt-6 sm:mt-8 p-6 sm:p-8 bg-gradient-to-br from-[#8B5E3C] to-[#A67C52] rounded-xl sm:rounded-2xl text-white relative z-10"
//                       initial={{ opacity: 0, y: 30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.8, duration: 0.6 }}
//                       whileHover={{ 
//                         scale: 1.02,
//                         transition: { duration: 0.3 }
//                       }}
//                     >
//                       <motion.h3 
//                         className="font-serif font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-center"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 1 }}
//                       >
//                         Product Highlights
//                       </motion.h3>
//                       <motion.div 
//                         className="space-y-3 sm:space-y-4"
//                         variants={staggerListVariants}
//                         initial="hidden"
//                         animate="visible"
//                       >
//                         {[
//                           "Sweetened with Apple Juice",
//                           "High in Fiber & Omega-3",
//                           "Natural Ingredients Only",
//                           "No Artificial Preservatives"
//                         ].map((highlight, index) => (
//                           <motion.div
//                             key={index}
//                             variants={listItemVariants}
//                             className="flex items-center space-x-3 sm:space-x-4"
//                             whileHover={{ x: 5 }}
//                           >
//                             <motion.div
//                               whileHover={{ scale: 1.3, rotate: 180 }}
//                               transition={{ type: "spring", stiffness: 300 }}
//                             >
//                               <FaCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//                             </motion.div>
//                             <span className="text-base sm:text-lg">{highlight}</span>
//                           </motion.div>
//                         ))}
//                       </motion.div>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Product Information */}
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               className="space-y-8 sm:space-y-10 order-1 lg:order-2"
//             >
              
//               {/* Product Header */}
//               <motion.div
//                 variants={itemVariants}
//                 className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#e8e4d9] shadow-lg w-full"
//                 whileHover="hover"
//                 variants={cardHoverVariants}
//               >
//                 <motion.p 
//                   className="text-sm sm:text-base font-semibold text-[#A67C52] uppercase tracking-wider mb-3 sm:mb-4"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.1 }}
//                 >
//                   {getCategoryName(product)}
//                 </motion.p>

//                 <motion.h1 
//                   className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#8B5E3C] mb-4 sm:mb-6 leading-tight"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
//                 >
//                   {getProductName(product)}
//                 </motion.h1>
                
//                 <motion.div 
//                   className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 sm:mb-8"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   <motion.span 
//                     className="text-base sm:text-lg font-semibold text-[#A67C52] bg-[#f8f5f0] px-4 sm:px-6 py-2 sm:py-3 rounded-full"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     {product.weight || "360g"}
//                   </motion.span>
//                   <motion.span 
//                     className="px-4 sm:px-6 py-2 sm:py-3 bg-[#8B5E3C] text-white text-sm sm:text-base rounded-full font-medium"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     CONVENTIONAL PRODUCT
//                   </motion.span>
//                 </motion.div>

//                 <motion.p 
//                   className="text-[#8B5E3C]/80 text-base sm:text-lg lg:text-xl leading-relaxed border-t border-[#e8e4d9] pt-6 sm:pt-8"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   {getDescription(product)}
//                 </motion.p>

//                 <motion.div 
//                   className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5 }}
//                 >
//                   <motion.button
//                     onClick={() => setActiveModal('ingredients')}
//                     className="flex-1 min-w-[140px] sm:min-w-[200px] bg-gradient-to-r from-[#8B5E3C] to-[#A67C52] text-white py-4 sm:py-5 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3"
//                     whileHover={{ 
//                       scale: 1.05,
//                       boxShadow: "0 10px 15px -3px rgba(139, 94, 60, 0.2)"
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                   >
//                     <motion.div
//                       whileHover={{ rotate: 15, scale: 1.2 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                     >
//                       <FaSeedling className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//                     </motion.div>
//                     <span>View Ingredients</span>
//                   </motion.button>
//                   <motion.button
//                     onClick={() => setActiveModal('nutrition')}
//                     className="flex-1 min-w-[140px] sm:min-w-[200px] bg-white border-2 border-[#8B5E3C] text-[#8B5E3C] py-4 sm:py-5 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3"
//                     whileHover={{ 
//                       scale: 1.05,
//                       backgroundColor: "#8B5E3C",
//                       color: "white",
//                       boxShadow: "0 10px 15px -3px rgba(139, 94, 60, 0.2)"
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                   >
//                     <motion.div
//                       whileHover={{ rotate: -15, scale: 1.2 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                     >
//                       <FaDumbbell className="w-5 h-5 sm:w-6 sm:h-6" />
//                     </motion.div>
//                     <span>Nutrition Facts</span>
//                   </motion.button>
//                 </motion.div>
//               </motion.div>

//               {/* Ways to Enjoy */}
//               <motion.div
//                 variants={itemVariants}
//                 className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#e8e4d9] shadow-lg w-full"
//                 whileHover="hover"
//                 variants={cardHoverVariants}
//               >
//                 <motion.h2 
//                   className="text-2xl sm:text-3xl font-serif font-bold text-[#8B5E3C] mb-4 sm:mb-6"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.6 }}
//                 >
//                   Perfect With
//                 </motion.h2>
//                 <div className="grid grid-cols-2 gap-4 sm:gap-6">
//                   {waysToEat.map((item, index) => {
//                     const IconComponent = item.icon;
//                     return (
//                       <motion.div
//                         key={index}
//                         className="bg-[#f8f5f0] rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:bg-[#8B5E3C] hover:text-white group transition-all duration-300"
//                         variants={itemVariants}
//                         whileHover={{ 
//                           y: -8, 
//                           scale: 1.05,
//                           transition: { type: "spring", stiffness: 400 }
//                         }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <motion.div
//                           whileHover={{ rotate: 360 }}
//                           transition={{ duration: 0.6, ease: "easeOut" }}
//                         >
//                           <IconComponent className="text-3xl sm:text-4xl mb-3 sm:mb-4 mx-auto transition-transform duration-300 group-hover:scale-110 text-[#8B5E3C] group-hover:text-white" />
//                         </motion.div>
//                         <motion.p 
//                           className="text-[#8B5E3C] font-semibold text-base sm:text-lg group-hover:text-white transition-colors duration-300"
//                           whileHover={{ scale: 1.1 }}
//                         >
//                           {item.name}
//                         </motion.p>
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <AnimatePresence>
//         {activeModal === 'ingredients' && <IngredientsModal />}
//         {activeModal === 'nutrition' && <NutritionModal />}
//       </AnimatePresence>
//     </>
//   );
// };

// export default ProductDetail;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { 
  FaSeedling, 
  FaDumbbell,
  FaMugHot,
  FaUtensils,
  FaIceCream,
  FaHeart,
  FaArrowLeft,
  FaTimes,
  FaCheck,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { useTranslation } from "react-i18next"; // ✅ ADDED i18next
import image1 from "../../assets/image7.png";
import image2 from "../../assets/image8.jpg";
import dryfruits from "../../assets/dry_fruits.jpg"; 
import { useAPI } from "../Context/AuthContext";

const ProductDetail = () => {
  const { ReadProduct } = useAPI();
  const { t } = useTranslation(); // ✅ ADDED translation hook
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state?.product;
  
  const [product, setProduct] = useState(location.state?.product || null);
  const [ingredients, setIngredients] = useState([]);
  const [nutrition, setNutrition] = useState([]);
  const [images, setImages] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(!location.state?.product);
  const [productData, setProductData] = useState(null);
  const [autoScroll, setAutoScroll] = useState(true);

  const productImagesFallback = [image1, image2, image1, image2];

  // ✅ TRANSLATED: Ways to Eat (moved to JSON)
  const waysToEat = [
    { name: t('productDetail.withMilk'), icon: FaMugHot },
    { name: t('productDetail.withYoghurt'), icon: FaUtensils },
    { name: t('productDetail.withIceCream'), icon: FaIceCream },
    { name: t('productDetail.plain'), icon: FaHeart }
  ];

  // Auto scroll effect (unchanged)
  useEffect(() => {
    if (!autoScroll || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, autoScroll]);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          setLoading(true);
          const response = await ReadProduct(id);
          setProductData(response);
          
          if (response?.data?.ingredients && Array.isArray(response.data.ingredients)) {
            setIngredients(response.data.ingredients);
          } else {
            setIngredients([]);
          }
          
          if (response?.data?.nutrition && Array.isArray(response.data.nutrition)) {
            setNutrition(response.data.nutrition);
          } else {
            setNutrition([]);
          }
          
          if (response?.data?.images && Array.isArray(response.data.images)) {
            setImages(response.data.images);
          } else {
            setImages([]);
          }
          
          setProduct(response.data || response);
        } catch (error) {
          console.error("Error fetching product:", error);
          setIngredients([]);
          setNutrition([]);
          setImages([]);
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id, ReadProduct]);

  const getCategoryName = (product) => {
    if (!product) return t('productDetail.uncategorized'); // ✅ TRANSLATED
    if (typeof product.category === 'string') return product.category;
    if (product.category && product.category.title) return product.category.title;
    return t('productDetail.uncategorized'); // ✅ TRANSLATED
  };

  const getProductName = (product) => {
    if (!product) return t('productDetail.product'); // ✅ TRANSLATED
    return product.name || product.title || t('productDetail.product'); // ✅ TRANSLATED
  };

  const getDescription = (product) => {
    if (!product) return t('productDetail.noDescription'); // ✅ TRANSLATED
    return product.details || product.description || t('productDetail.noDescription'); // ✅ TRANSLATED
  };

  const getProductImage = () => {
    if (images.length > 0 && images[0]?.original) {
      return images[0].original;
    }
    if (product?.images && product.images.length > 0 && product.images[0]?.original) {
      return product.images[0].original;
    }
    if (product?.image) {
      return product.image;
    }
    return productImagesFallback[0];
  };

  const getAllImages = () => {
    if (images.length > 0) {
      return images.map(img => img.original || img);
    }
    if (product?.images && product.images.length > 0) {
      return product.images.map(img => img.original || img);
    }
    return productImagesFallback;
  };

  const nextImage = () => {
    const allImages = getAllImages();
    setCurrentImageIndex((prev) => 
      prev === allImages.length - 1 ? 0 : prev + 1
    );
    setAutoScroll(false);
  };

  const prevImage = () => {
    const allImages = getAllImages();
    setCurrentImageIndex((prev) => 
      prev === 0 ? allImages.length - 1 : prev - 1
    );
    setAutoScroll(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f5f0] to-[#f0ede5] px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-[#8B5E3C] border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-[#8B5E3C] font-semibold text-base">{t('productDetail.loadingProduct')}</p> {/* ✅ TRANSLATED */}
        </motion.div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f5f0] to-[#f0ede5] px-4">
        <div className="text-center">
          <p className="text-[#8B5E3C] font-semibold text-base sm:text-lg">{t('productDetail.productNotFound')}</p> {/* ✅ TRANSLATED */}
          <button 
            onClick={() => navigate(-1)}
            className="mt-4 px-4 py-2 bg-[#8B5E3C] text-white rounded-lg hover:bg-[#A67C52] transition-colors text-sm sm:text-base"
          >
            {t('productDetail.goBack')} {/* ✅ TRANSLATED */}
          </button>
        </div>
      </div>
    );
  }

  // Animation variants (unchanged)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const modalBackdropVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const modalContentVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  const staggerListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const IngredientsModal = () => {
    const displayIngredients = ingredients.length > 0 ? ingredients : 
                              (product.ingredients && Array.isArray(product.ingredients)) ? product.ingredients : [];

    return (
      <motion.div
        variants={modalBackdropVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center z-50 px-2 sm:px-4"
        onClick={() => setActiveModal(null)}
      >
        <motion.div
          variants={modalContentVariants}
          className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-md p-4 sm:p-6 mx-auto max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <motion.h3 
              className="text-lg sm:text-xl font-serif font-bold text-[#8B5E3C]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t('productDetail.ingredients')} {/* ✅ TRANSLATED */}
            </motion.h3>
            <motion.button
              onClick={() => setActiveModal(null)}
              className="text-[#8B5E3C] hover:text-[#A67C52] transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>
          <motion.div 
            className="space-y-2"
            variants={staggerListVariants}
            initial="hidden"
            animate="visible"
          >
            {displayIngredients.length > 0 ? (
              displayIngredients.map((ingredient, index) => (
                <motion.div
                  key={index}
                  variants={listItemVariants}
                  className="flex items-center space-x-2 sm:space-x-3 text-[#8B5E3C] text-sm sm:text-base"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#A67C52] rounded-full"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <span>{ingredient}</span>
                </motion.div>
              ))
            ) : (
              <p className="text-[#8B5E3C]/70 text-center py-4 text-sm sm:text-base">
                {t('productDetail.noIngredients')} {/* ✅ TRANSLATED */}
              </p>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  const NutritionModal = () => {
    const displayNutrition = nutrition.length > 0 ? nutrition : 
                           (product.nutrition && Array.isArray(product.nutrition)) ? product.nutrition : [];

    return (
      <motion.div
        variants={modalBackdropVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center z-50 px-2 sm:px-4"
        onClick={() => setActiveModal(null)}
      >
        <motion.div
          variants={modalContentVariants}
          className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-md sm:max-w-2xl p-4 sm:p-6 mx-auto max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <motion.h3 
              className="text-lg sm:text-xl font-serif font-bold text-[#8B5E3C]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t('productDetail.nutritionFacts')} {/* ✅ TRANSLATED */}
            </motion.h3>
            <motion.button
              onClick={() => setActiveModal(null)}
              className="text-[#8B5E3C] hover:text-[#A67C52] transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>
          <motion.div 
            className="overflow-x-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {displayNutrition.length > 0 ? (
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#8B5E3C] to-[#A67C52] text-white">
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold">
                      {t('productDetail.nutrient')} {/* ✅ TRANSLATED */}
                    </th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold">
                      {t('productDetail.per100g')} {/* ✅ TRANSLATED */}
                    </th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold">
                      {t('productDetail.portion')} {/* ✅ TRANSLATED */}
                    </th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold">
                      {t('productDetail.ri100g')} {/* ✅ TRANSLATED */}
                    </th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold">
                      {t('productDetail.riPortion')} {/* ✅ TRANSLATED */}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayNutrition.map((nutrient, index) => (
                    <motion.tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-[#f8f5f0]"}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      whileHover={{ backgroundColor: "rgba(139, 94, 60, 0.05)" }}
                    >
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-[#8B5E3C]">
                        {nutrient.name || "N/A"}
                      </td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#8B5E3C]">
                        {nutrient.per_100g || "N/A"}
                      </td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#8B5E3C]">
                        {nutrient.portion || "N/A"}
                      </td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#8B5E3C]">
                        {nutrient.ri_percent_100g || "N/A"}
                      </td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#8B5E3C]">
                        {nutrient.ri_percent_portion || "N/A"}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-6 sm:py-8">
                <p className="text-[#8B5E3C]/70 text-sm sm:text-base">
                  {t('productDetail.noNutrition')} {/* ✅ TRANSLATED */}
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  const allImages = getAllImages();

  return (
    <>
      <section className="min-h-screen mt-10 py-6 sm:py-8 bg-gradient-to-br from-[#f8f5f0] to-[#f0ede5]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 mx-auto max-w-[2000px]">
          
          {/* Back Button */}
          <motion.button
            onClick={() => navigate(-1)}
            className="flex items-center text-[#8B5E3C] hover:text-[#A67C52] mb-6 sm:mb-8 transition-colors duration-300 group"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <motion.div
              animate={{ x: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <FaArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-current" />
            </motion.div>
            <span className="text-sm sm:text-base">{t('productDetail.backToProducts')}</span> {/* ✅ TRANSLATED */}
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16">
            
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="w-full order-2 lg:order-1"
            >
              <div className="w-full">
                <motion.div
                  className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#e8e4d9] shadow-lg relative overflow-hidden w-full"
                  whileHover="hover"
                  variants={cardHoverVariants}
                  style={{
                    backgroundImage: `url(${dryfruits})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay',
                    backgroundColor: 'rgba(248, 245, 240, 0.9)'
                  }}
                >
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>
                  
                  <div className="relative z-10">
                    {/* Main image container */}
                    <motion.div
                      variants={imageVariants}
                      initial="initial"
                      whileHover="hover"
                      className="overflow-hidden rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-[#e8e4d9] relative"
                    >
                      <div className="relative w-full aspect-square max-h-[600px]">
                        <motion.img
                          key={currentImageIndex}
                          src={allImages[currentImageIndex]}
                          alt={`${getProductName(product)} ${currentImageIndex + 1}`}
                          className="w-full h-full object-contain rounded-xl sm:rounded-2xl"
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ 
                            opacity: imageLoaded ? 1 : 0, 
                            scale: imageLoaded ? 1 : 1.1 
                          }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          onLoad={() => setImageLoaded(true)}
                          onError={(e) => {
                            e.target.src = productImagesFallback[0];
                            setImageLoaded(true);
                          }}
                        />
                        
                        {/* Navigation Arrows */}
                        {allImages.length > 1 && (
                          <>
                            <motion.button
                              onClick={prevImage}
                              className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 sm:p-4 shadow-lg hover:bg-white transition-all duration-300 border border-[#e8e4d9]"
                              whileHover={{ scale: 1.15, backgroundColor: "rgba(139, 94, 60, 0.1)" }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FaChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B5E3C]" />
                            </motion.button>
                            <motion.button
                              onClick={nextImage}
                              className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 sm:p-4 shadow-lg hover:bg-white transition-all duration-300 border border-[#e8e4d9]"
                              whileHover={{ scale: 1.15, backgroundColor: "rgba(139, 94, 60, 0.1)" }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FaChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B5E3C]" />
                            </motion.button>
                          </>
                        )}

                        {/* Image Counter */}
                        {allImages.length > 1 && (
                          <motion.div 
                            className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium flex items-center space-x-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <span>{currentImageIndex + 1} / {allImages.length}</span>
                            {autoScroll && (
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-2 h-2 bg-green-400 rounded-full"
                              />
                            )}
                          </motion.div>
                        )}

                        {/* Loading State */}
                        {!imageLoaded && (
                          <motion.div 
                            className="absolute inset-0 w-full h-full bg-[#f8f5f0] rounded-xl sm:rounded-2xl flex items-center justify-center"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: imageLoaded ? 0 : 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="flex flex-col items-center"
                            >
                              <FaSeedling className="w-16 h-16 sm:w-20 sm:h-20 text-[#8B5E3C]/30 mb-4" />
                              <p className="text-[#8B5E3C]/50 text-sm">
                                {t('productDetail.loadingImage')} {/* ✅ TRANSLATED */}
                              </p>
                            </motion.div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>

                    {/* Thumbnail Gallery */}
                    {allImages.length > 1 && (
                      <motion.div 
                        className="mt-4 sm:mt-6 overflow-x-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex space-x-3 sm:space-x-4 pb-3 min-w-max">
                          {allImages.map((image, index) => (
                            <motion.button
                              key={index}
                              onClick={() => {
                                setCurrentImageIndex(index);
                                setImageLoaded(false);
                                setAutoScroll(false);
                              }}
                              className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                                currentImageIndex === index 
                                  ? 'border-[#8B5E3C] scale-110 shadow-md' 
                                  : 'border-transparent hover:border-[#8B5E3C]/50 hover:scale-105'
                              }`}
                              whileHover={{ scale: 1.08 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.src = productImagesFallback[0];
                                }}
                              />
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Product Highlights */}
                    <motion.div 
                      className="mt-6 sm:mt-8 p-6 sm:p-8 bg-gradient-to-br from-[#8B5E3C] to-[#A67C52] rounded-xl sm:rounded-2xl text-white relative z-10"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.h3 
                        className="font-serif font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        {t('productDetail.highlights')} {/* ✅ TRANSLATED */}
                      </motion.h3>
                      <motion.div 
                        className="space-y-3 sm:space-y-4"
                        variants={staggerListVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {[
                          t('productDetail.highlight1'), // Sweetened with Apple Juice
                          t('productDetail.highlight2'), // High in Fiber & Omega-3
                          t('productDetail.highlight3'), // Natural Ingredients Only
                          t('productDetail.highlight4')  // No Artificial Preservatives
                        ].map((highlight, index) => (
                          <motion.div
                            key={index}
                            variants={listItemVariants}
                            className="flex items-center space-x-3 sm:space-x-4"
                            whileHover={{ x: 5 }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.3, rotate: 180 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <FaCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </motion.div>
                            <span className="text-base sm:text-lg">{highlight}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Product Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 sm:space-y-10 order-1 lg:order-2"
            >
              
              {/* Product Header */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#e8e4d9] shadow-lg w-full"
                whileHover="hover"
                variants={cardHoverVariants}
              >
                <motion.p 
                  className="text-sm sm:text-base font-semibold text-[#A67C52] uppercase tracking-wider mb-3 sm:mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {getCategoryName(product)}
                </motion.p>

                <motion.h1 
                  className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#8B5E3C] mb-4 sm:mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                >
                  {getProductName(product)}
                </motion.h1>
                
                <motion.div 
                  className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.span 
                    className="text-base sm:text-lg font-semibold text-[#A67C52] bg-[#f8f5f0] px-4 sm:px-6 py-2 sm:py-3 rounded-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {product.weight || "360g"}
                  </motion.span>
                  <motion.span 
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-[#8B5E3C] text-white text-sm sm:text-base rounded-full font-medium"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {t('productDetail.conventional')} {/* ✅ TRANSLATED */}
                  </motion.span>
                </motion.div>

                <motion.p 
                  className="text-[#8B5E3C]/80 text-base sm:text-lg lg:text-xl leading-relaxed border-t border-[#e8e4d9] pt-6 sm:pt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {getDescription(product)}
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    onClick={() => setActiveModal('ingredients')}
                    className="flex-1 min-w-[140px] sm:min-w-[200px] bg-gradient-to-r from-[#8B5E3C] to-[#A67C52] text-white py-4 sm:py-5 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 15px -3px rgba(139, 94, 60, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaSeedling className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                    <span>{t('productDetail.viewIngredients')}</span> {/* ✅ TRANSLATED */}
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveModal('nutrition')}
                    className="flex-1 min-w-[140px] sm:min-w-[200px] bg-white border-2 border-[#8B5E3C] text-[#8B5E3C] py-4 sm:py-5 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "#8B5E3C",
                      color: "white",
                      boxShadow: "0 10px 15px -3px rgba(139, 94, 60, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.div
                      whileHover={{ rotate: -15, scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaDumbbell className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                    <span>{t('productDetail.nutritionFactsButton')}</span> {/* ✅ TRANSLATED */}
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Ways to Enjoy */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#e8e4d9] shadow-lg w-full"
                whileHover="hover"
                variants={cardHoverVariants}
              >
                <motion.h2 
                  className="text-2xl sm:text-3xl font-serif font-bold text-[#8B5E3C] mb-4 sm:mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {t('productDetail.perfectWith')} {/* ✅ TRANSLATED */}
                </motion.h2>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {waysToEat.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={index}
                        className="bg-[#f8f5f0] rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:bg-[#8B5E3C] hover:text-white group transition-all duration-300"
                        variants={itemVariants}
                        whileHover={{ 
                          y: -8, 
                          scale: 1.05,
                          transition: { type: "spring", stiffness: 400 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                          <IconComponent className="text-3xl sm:text-4xl mb-3 sm:mb-4 mx-auto transition-transform duration-300 group-hover:scale-110 text-[#8B5E3C] group-hover:text-white" />
                        </motion.div>
                        <motion.p 
                          className="text-[#8B5E3C] font-semibold text-base sm:text-lg group-hover:text-white transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          {item.name}
                        </motion.p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeModal === 'ingredients' && <IngredientsModal />}
        {activeModal === 'nutrition' && <NutritionModal />}
      </AnimatePresence>
    </>
  );
};

export default ProductDetail;