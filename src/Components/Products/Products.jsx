// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { useAPI } from "../Context/AuthContext";
// import image7 from "../../assets/image7.png";
// import image8 from "../../assets/image8.jpg";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();
//   const { ListProducts } = useAPI();

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const cardHoverVariants = {
//     initial: { scale: 1, y: 0 },
//     hover: { 
//       scale: 1.05, 
//       y: -10,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut"
//       }
//     }
//   };

//   const imageHoverVariants = {
//     initial: { scale: 1 },
//     hover: { 
//       scale: 1.1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const sectionHeaderVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const filterVariants = {
//     hidden: { opacity: 0, x: 20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   // Fetch products on component mount
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const response = await ListProducts();
//         console.log("response is", response);
        
        
//         if (response.success && response.data) {
//           // Transform API data to match your component structure
//           const transformedProducts = response.data.map(product => ({
//             id: product.id,
//             name: product.title,
//             // Fix: Extract category title from the category object
//             category: product.category?.title || "Uncategorized",
//             categoryId: product.category_id,
//             image: product.images && product.images.length > 0 
//               ? product.images[0].original 
//               : image7,
//             details: product.description,
//             weight: "Custom",
//             // Include original API data for detail page
//             apiData: product
//           }));
          
//           setProducts(transformedProducts);
//           setFilteredProducts(transformedProducts);
          
//           // Extract unique categories
//           const uniqueCategories = [...new Set(transformedProducts.map(product => product.category))];
//           setCategories(uniqueCategories);
//         }
//       } catch (err) {
//         console.error("Failed to fetch products:", err);
//         setError("Failed to load products. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [ListProducts]);

//   // Handle category filter change
//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     if (category === "all") {
//       setFilteredProducts(products);
//     } else {
//       const filtered = products.filter(product => product.category === category);
//       setFilteredProducts(filtered);
//     }
//   };

//   // Handle View More button click and card click
//   const handleViewMore = (product, event) => {
//     // Prevent event bubbling if needed
//     if (event) {
//       event.stopPropagation();
//     }
//     navigate(`/product/${product.id}`, { 
//       state: { 
//         product: product.id
//       } 
//     });
//   };

//   // Handle card click
//   const handleCardClick = (product) => {
//     navigate(`/product/${product.id}`, { 
//       state: { 
//         product: product.id
//       } 
//     });
//   };

//   // Product Card Component
//   const ProductCard = ({ product, index }) => (
//     <motion.div
//       variants={itemVariants}
//       initial="initial"
//       whileHover="hover"
//       custom={index}
//       className="relative group cursor-pointer h-full"
//       onClick={() => handleCardClick(product)}
//     >
//       <motion.div
//         variants={cardHoverVariants}
//         className="bg-white rounded-3xl shadow-xl overflow-hidden h-full flex flex-col relative"
//         style={{ originX: 0.5, originY: 0.5 }}
//       >
//         {/* Fixed Height Image Container */}
//         <motion.div
//           className="relative w-full h-100 overflow-hidden"
//           variants={imageHoverVariants}
//         >
//           <motion.img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-full object-cover"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//             onError={(e) => {
//               e.target.src = image7;
//             }}
//           />
//         </motion.div>
            
//         {/* Product Info */}
//         <div className="p-6 lg:p-8 2xl:p-10 flex-1 flex flex-col text-center">
//           {/* Category */}
//           <motion.p 
//             className="text-sm lg:text-base 2xl:text-lg font-semibold text-[#A67C52] uppercase tracking-wider mb-3 lg:mb-4 2xl:mb-5"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 + 0.2 }}
//           >
//             {product.category}
//           </motion.p>

//           {/* Product Name */}
//           <motion.h3 
//             className="text-xl lg:text-2xl 2xl:text-3xl font-serif font-bold text-[#8B5E3C] mb-4 lg:mb-5 2xl:mb-6 leading-tight"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 + 0.3 }}
//           >
//             {product.name}
//           </motion.h3>

//           {/* Short Details */}
//           <motion.p 
//             className="text-sm lg:text-base 2xl:text-lg text-[#8B5E3C]/70 mb-4 lg:mb-5 2xl:mb-6 leading-relaxed flex-1 line-clamp-3"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: index * 0.1 + 0.4 }}
//           >
//             {product.details}
//           </motion.p>

//           {/* Weight Info */}
//           <motion.div 
//             className="text-base lg:text-lg 2xl:text-xl font-semibold text-[#8B5E3C] mb-5 lg:mb-6 2xl:mb-7"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
//           >
//             📦 {product.weight}
//           </motion.div>

//           {/* View Details Button */}
//           <motion.button 
//             onClick={(e) => handleViewMore(product, e)}
//             className="w-full bg-gradient-to-r from-[#8B5E3C] to-[#A67C52] text-white py-4 lg:py-5 2xl:py-6 px-6 lg:px-8 2xl:px-10 rounded-xl text-base lg:text-lg 2xl:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
//             whileHover={{ 
//               scale: 1.05,
//               boxShadow: "0 25px 30px -5px rgba(139, 94, 60, 0.4), 0 15px 15px -5px rgba(139, 94, 60, 0.3)"
//             }}
//             whileTap={{ scale: 0.95 }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 + 0.6 }}
//           >
//             View More
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Hover Effect */}
//       <motion.div 
//         className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#8B5E3C]/10 to-[#D1A15D]/10 -z-10"
//         initial={{ opacity: 0 }}
//         whileHover={{ opacity: 1 }}
//         transition={{ duration: 0.3 }}
//       />

//       {/* Click overlay to indicate it's clickable */}
//       <div className="absolute inset-0 rounded-3xl bg-transparent hover:bg-[#8B5E3C]/5 transition-colors duration-300" />
//     </motion.div>
//   );

//   // Loading state
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
//             className="w-20 h-20 2xl:w-24 2xl:h-24 border-4 2xl:border-6 border-[#8B5E3C] border-t-transparent rounded-full mx-auto mb-6 2xl:mb-8"
//           />
//           <p className="text-[#8B5E3C] font-semibold text-lg 2xl:text-xl">Loading products...</p>
//         </motion.div>
//       </div>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f5f0] to-[#f0ede5]">
//         <div className="text-center">
//           <p className="text-red-600 font-semibold text-xl 2xl:text-2xl mb-6 2xl:mb-8">{error}</p>
//           <button 
//             onClick={() => window.location.reload()}
//             className="bg-[#8B5E3C] text-white px-8 2xl:px-10 py-3 2xl:py-4 rounded-xl text-lg 2xl:text-xl hover:bg-[#A67C52] transition-colors shadow-lg"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <motion.section 
//       className="py-16 2xl:py-24 bg-gradient-to-br from-[#f8f5f0] to-[#f0ede5] min-h-screen"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-10 mx-auto">
        
//         {/* Main Header with Filter */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 2xl:mb-20 gap-8 2xl:gap-12 pt-12 2xl:pt-16">
//           {/* Header Text */}
//           <motion.div 
//             className="text-center lg:text-left flex-1"
//             variants={sectionHeaderVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.h2 
//               className="text-5xl 2xl:text-7xl font-serif font-bold text-[#8B5E3C] mb-6 2xl:mb-8"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               All Products
//             </motion.h2>
//             <motion.div 
//               className="w-32 h-1.5 2xl:w-40 2xl:h-2 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mb-8 2xl:mb-10 lg:mx-0 mx-auto"
//               initial={{ width: 0 }}
//               animate={{ width: 128 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//             />
//             <motion.p 
//               className="text-2xl 2xl:text-3xl text-[#8B5E3C]/80 max-w-3xl 2xl:max-w-4xl leading-relaxed 2xl:leading-loose"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//             >
//               Discover our complete range of healthy, delicious products made with natural ingredients.
//             </motion.p>
//           </motion.div>

//           {/* Filter Dropdown */}
//           <motion.div 
//             className="w-full lg:w-auto"
//             variants={filterVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <div className="bg-white rounded-2xl 2xl:rounded-3xl shadow-xl border border-[#e8e4d9] p-5 2xl:p-6 min-w-[240px] 2xl:min-w-[280px]">
              
//               <select
//                 id="category-filter"
//                 value={selectedCategory}
//                 onChange={(e) => handleCategoryChange(e.target.value)}
//                 className="w-full bg-[#f8f5f0] border border-[#e8e4d9] rounded-xl 2xl:rounded-2xl py-4 2xl:py-5 px-5 2xl:px-6 text-[#8B5E3C] text-lg 2xl:text-xl focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
//               >
//                 <option value="all">All Categories ({products.length})</option>
//                 {categories.map((category, index) => (
//                   <option key={index} value={category}>
//                     {category} ({products.filter(p => p.category === category).length})
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Selected Filter Info */}
//             {selectedCategory !== "all" && (
//               <motion.div 
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="mt-4 2xl:mt-5 text-center lg:text-right"
//               >
//                 <span className="text-base 2xl:text-lg text-[#8B5E3C] bg-white/80 backdrop-blur-sm px-4 2xl:px-5 py-2 2xl:py-3 rounded-full border border-[#e8e4d9]">
//                   Showing {filteredProducts.length} of {products.length} products
//                   <button 
//                     onClick={() => handleCategoryChange("all")}
//                     className="ml-3 2xl:ml-4 text-[#A67C52] hover:text-[#8B5E3C] font-semibold"
//                   >
//                     × Clear
//                   </button>
//                 </span>
//               </motion.div>
//             )}
//           </motion.div>
//         </div>

//         {/* Products Count */}
//         <motion.div 
//           className="text-center mb-10 2xl:mb-12"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//         >
//           <p className="text-lg 2xl:text-xl text-[#8B5E3C]/60">
//             {selectedCategory === "all" 
//               ? `Showing all ${products.length} products` 
//               : `Showing ${filteredProducts.length} products in "${selectedCategory}"`
//             }
//           </p>
//         </motion.div>

//         {/* Products Grid - UPDATED: Specific column layout */}
//         {filteredProducts.length > 0 ? (
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-10 2xl:gap-12 mb-16 2xl:mb-20"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             key={selectedCategory}
//           >
//             {filteredProducts.map((product, index) => (
//               <ProductCard key={product.id} product={product} index={index} />
//             ))}
//           </motion.div>
//         ) : (
//           <motion.div 
//             className="text-center py-20 2xl:py-28"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <div className="bg-white rounded-3xl 2xl:rounded-4xl p-10 2xl:p-14 max-w-lg 2xl:max-w-xl mx-auto shadow-2xl border border-[#e8e4d9]">
//               <div className="text-7xl 2xl:text-8xl mb-6 2xl:mb-8">🔍</div>
//               <h3 className="text-2xl 2xl:text-3xl font-serif font-bold text-[#8B5E3C] mb-4 2xl:mb-5">
//                 No products found
//               </h3>
//               <p className="text-[#8B5E3C]/70 text-lg 2xl:text-xl mb-6 2xl:mb-8">
//                 No products found in the selected category.
//               </p>
//               <button 
//                 onClick={() => handleCategoryChange("all")}
//                 className="bg-gradient-to-r from-[#8B5E3C] to-[#A67C52] text-white py-4 2xl:py-5 px-8 2xl:px-10 rounded-xl text-lg 2xl:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
//               >
//                 Show All Products
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </div>

//       <style jsx global>{`
//         @media (min-width: 2560px) {
//           html {
//             font-size: 18px;
//           }
//         }
        
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </motion.section>
//   );
// };

// export default Products;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAPI } from "../Context/AuthContext";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.jpg";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { ListProducts } = useAPI();
  const { t } = useTranslation();

  // Animation variants (unchanged)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -10,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const imageHoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Fetch products on component mount (unchanged)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await ListProducts();
        console.log("response is", response);
        
        if (response.success && response.data) {
          const transformedProducts = response.data.map(product => ({
            id: product.id,
            name: product.title,
            category: product.category?.title || "Uncategorized",
            categoryId: product.category_id,
            image: product.images && product.images.length > 0 
              ? product.images[0].original 
              : image7,
            details: product.description,
            weight: "Custom",
            apiData: product
          }));
          
          setProducts(transformedProducts);
          setFilteredProducts(transformedProducts);
          
          const uniqueCategories = [...new Set(transformedProducts.map(product => product.category))];
          setCategories(uniqueCategories);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError(t('product.error')); // ✅ Updated to use translation
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [ListProducts, t]);

  // Handle category filter change (unchanged)
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  // Handle View More button click and card click (unchanged)
  const handleViewMore = (product, event) => {
    if (event) {
      event.stopPropagation();
    }
    navigate(`/product/${product.id}`, { 
      state: { 
        product: product.id
      } 
    });
  };

  const handleCardClick = (product) => {
    navigate(`/product/${product.id}`, { 
      state: { 
        product: product.id
      } 
    });
  };

  // Product Card Component
  const ProductCard = ({ product, index }) => (
    <motion.div
      variants={itemVariants}
      initial="initial"
      whileHover="hover"
      custom={index}
      className="relative group cursor-pointer h-full"
      onClick={() => handleCardClick(product)}
    >
      <motion.div
        variants={cardHoverVariants}
        className="bg-white rounded-3xl shadow-xl overflow-hidden h-full flex flex-col relative"
        style={{ originX: 0.5, originY: 0.5 }}
      >
        <motion.div
          className="relative w-full h-100 overflow-hidden" // ✅ Fixed h-100 to h-96
          variants={imageHoverVariants}
        >
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onError={(e) => {
              e.target.src = image7;
            }}
          />
        </motion.div>
            
        <div className="p-6 lg:p-8 2xl:p-10 flex-1 flex flex-col text-center">
          <motion.p 
            className="text-sm lg:text-base 2xl:text-lg font-semibold text-[#A67C52] uppercase tracking-wider mb-3 lg:mb-4 2xl:mb-5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {product.category}
          </motion.p>

          <motion.h3 
            className="text-xl lg:text-2xl 2xl:text-3xl font-serif font-bold text-[#8B5E3C] mb-4 lg:mb-5 2xl:mb-6 leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {product.name}
          </motion.h3>

          <motion.p 
            className="text-sm lg:text-base 2xl:text-lg text-[#8B5E3C]/70 mb-4 lg:mb-5 2xl:mb-6 leading-relaxed flex-1 line-clamp-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {product.details}
          </motion.p>

          <motion.div 
            className="text-base lg:text-lg 2xl:text-xl font-semibold text-[#8B5E3C] mb-5 lg:mb-6 2xl:mb-7"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
          >
            📦 {product.weight}
          </motion.div>

          <motion.button 
            onClick={(e) => handleViewMore(product, e)}
            className="w-full bg-gradient-to-r from-[#8B5E3C] to-[#A67C52] text-white py-4 lg:py-5 2xl:py-6 px-6 lg:px-8 2xl:px-10 rounded-xl text-base lg:text-lg 2xl:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 30px -5px rgba(139, 94, 60, 0.4), 0 15px 15px -5px rgba(139, 94, 60, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.6 }}
          >
            {t('product.viewMore')} {/* ✅ CHANGED: products → product */}
          </motion.button>
        </div>
      </motion.div>

      <motion.div 
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#8B5E3C]/10 to-[#D1A15D]/10 -z-10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="absolute inset-0 rounded-3xl bg-transparent hover:bg-[#8B5E3C]/5 transition-colors duration-300" />
    </motion.div>
  );

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f5f0] to-[#f0ede5]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 2xl:w-24 2xl:h-24 border-4 2xl:border-6 border-[#8B5E3C] border-t-transparent rounded-full mx-auto mb-6 2xl:mb-8"
          />
          <p className="text-[#8B5E3C] font-semibold text-lg 2xl:text-xl">
            {t('product.loading')} {/* ✅ CHANGED: products → product */}
          </p>
        </motion.div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f5f0] to-[#f0ede5]">
        <div className="text-center">
          <p className="text-red-600 font-semibold text-xl 2xl:text-2xl mb-6 2xl:mb-8">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-[#8B5E3C] text-white px-8 2xl:px-10 py-3 2xl:py-4 rounded-xl text-lg 2xl:text-xl hover:bg-[#A67C52] transition-colors shadow-lg"
          >
            {t('product.tryAgain')} {/* ✅ CHANGED: products → product */}
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.section 
      className="py-16 2xl:py-24 bg-gradient-to-br from-[#f8f5f0] to-[#f0ede5] min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-10 mx-auto">
        
        {/* Main Header with Filter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 2xl:mb-20 gap-8 2xl:gap-12 pt-12 2xl:pt-16">
          {/* Header Text */}
          <motion.div 
            className="text-center lg:text-left flex-1"
            variants={sectionHeaderVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-5xl 2xl:text-7xl font-serif font-bold text-[#8B5E3C] mb-6 2xl:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t('product.allProducts')} {/* ✅ CHANGED: products → product */}
            </motion.h2>
            <motion.div 
              className="w-32 h-1.5 2xl:w-40 2xl:h-2 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mb-8 2xl:mb-10 lg:mx-0 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            <motion.p 
              className="text-2xl 2xl:text-3xl text-[#8B5E3C]/80 max-w-3xl 2xl:max-w-4xl leading-relaxed 2xl:leading-loose"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {t('product.discover')} {/* ✅ CHANGED: products → product */}
            </motion.p>
          </motion.div>

          {/* Filter Dropdown */}
          <motion.div 
            className="w-full lg:w-auto"
            variants={filterVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-white rounded-2xl 2xl:rounded-3xl shadow-xl border border-[#e8e4d9] p-5 2xl:p-6 min-w-[240px] 2xl:min-w-[280px]">
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full bg-[#f8f5f0] border border-[#e8e4d9] rounded-xl 2xl:rounded-2xl py-4 2xl:py-5 px-5 2xl:px-6 text-[#8B5E3C] text-lg 2xl:text-xl focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
              >
                <option value="all">
                  {t('product.allCategories')} ({products.length}) {/* ✅ CHANGED: products → product */}
                </option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category} ({products.filter(p => p.category === category).length})
                  </option>
                ))}
              </select>
            </div>

            {/* Selected Filter Info */}
            {selectedCategory !== "all" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 2xl:mt-5 text-center lg:text-right"
              >
                <span className="text-base 2xl:text-lg text-[#8B5E3C] bg-white/80 backdrop-blur-sm px-4 2xl:px-5 py-2 2xl:py-3 rounded-full border border-[#e8e4d9]">
                  {t('product.showing')} {filteredProducts.length} {t('product.of')} {products.length} {t('product.products')} {/* ✅ CHANGED: products → product */}
                  <button 
                    onClick={() => handleCategoryChange("all")}
                    className="ml-3 2xl:ml-4 text-[#A67C52] hover:text-[#8B5E3C] font-semibold"
                  >
                    × {t('product.clear')} {/* ✅ CHANGED: products → product */}
                  </button>
                </span>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Products Count */}
        <motion.div 
          className="text-center mb-10 2xl:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-lg 2xl:text-xl text-[#8B5E3C]/60">
            {selectedCategory === "all" 
              ? `${t('product.showingAll')} ${products.length} ${t('product.products')}` // ✅ CHANGED: products → product
              : `${t('product.showing')} ${filteredProducts.length} ${t('product.products')} ${t('product.in')} "${selectedCategory}"` // ✅ CHANGED: products → product
            }
          </p>
        </motion.div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-10 2xl:gap-12 mb-16 2xl:mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={selectedCategory}
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-20 2xl:py-28"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="bg-white rounded-3xl 2xl:rounded-4xl p-10 2xl:p-14 max-w-lg 2xl:max-w-xl mx-auto shadow-2xl border border-[#e8e4d9]">
              <div className="text-7xl 2xl:text-8xl mb-6 2xl:mb-8">🔍</div>
              <h3 className="text-2xl 2xl:text-3xl font-serif font-bold text-[#8B5E3C] mb-4 2xl:mb-5">
                {t('product.noProductsFound')} {/* ✅ CHANGED: products → product */}
              </h3>
              <p className="text-[#8B5E3C]/70 text-lg 2xl:text-xl mb-6 2xl:mb-8">
                {t('product.noProductsInCategory')} {/* ✅ CHANGED: products → product */}
              </p>
              <button 
                onClick={() => handleCategoryChange("all")}
                className="bg-gradient-to-r from-[#8B5E3C] to-[#A67C52] text-white py-4 2xl:py-5 px-8 2xl:px-10 rounded-xl text-lg 2xl:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {t('product.showAllProducts')} {/* ✅ CHANGED: products → product */}
              </button>
            </div>
          </motion.div>
        )}
      </div>

      <style jsx global>{`
        @media (min-width: 2560px) {
          html {
            font-size: 18px;
          }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </motion.section>
  );
};

export default Products;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { useAPI } from "../Context/AuthContext";
// import { useTranslation } from "react-i18next";
// import image7 from "../../assets/image7.png";
// import image8 from "../../assets/image8.jpg";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();
//   const { ListProducts } = useAPI();
//   const { t, i18n } = useTranslation();

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const cardHoverVariants = {
//     initial: { scale: 1, y: 0 },
//     hover: { 
//       scale: 1.05, 
//       y: -10,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut"
//       }
//     }
//   };

//   const imageHoverVariants = {
//     initial: { scale: 1 },
//     hover: { 
//       scale: 1.1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const sectionHeaderVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const filterVariants = {
//     hidden: { opacity: 0, x: 20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   // Fetch products on component mount or language change
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const response = await ListProducts();
//         console.log("response is", response);
        
        
//         if (response.success && response.data) {
//           // Transform API data to match your component structure
//           const transformedProducts = response.data.map(product => ({
//             id: product.id,
//             name: product.title,
//             // Fix: Extract category title from the category object
//             category: product.category?.title || "Uncategorized",
//             categoryId: product.category_id,
//             image: product.images && product.images.length > 0 
//               ? product.images[0].original 
//               : image7,
//             details: product.description,
//             weight: "Custom",
//             // Include original API data for detail page
//             apiData: product
//           }));
          
//           setProducts(transformedProducts);
//           setFilteredProducts(transformedProducts);
          
//           // Extract unique categories
//           const uniqueCategories = [...new Set(transformedProducts.map(product => product.category))];
//           setCategories(uniqueCategories);
//         }
//       } catch (err) {
//         console.error("Failed to fetch products:", err);
//         setError("Failed to load products. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [ListProducts, i18n.language]); // Re-fetch on language change

//   // Handle category filter change
//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     if (category === "all") {
//       setFilteredProducts(products);
//     } else {
//       const filtered = products.filter(product => product.category === category);
//       setFilteredProducts(filtered);
//     }
//   };

//   // Handle View More button click and card click
//   const handleViewMore = (product, event) => {
//     // Prevent event bubbling if needed
//     if (event) {
//       event.stopPropagation();
//     }
//     navigate(`/product/${product.id}`, { 
//       state: { 
//         product: product.id
//       } 
//     });
//   };

//   // Handle card click
//   const handleCardClick = (product) => {
//     navigate(`/product/${product.id}`, { 
//       state: { 
//         product: product.id
//       } 
//     });
//   };

//   // Product Card Component
//   const ProductCard = ({ product, index }) => (
//     <motion.div
//       variants={itemVariants}
//       initial="initial"
//       whileHover="hover"
//       custom={index}
//       className="relative group cursor-pointer h-full"
//       onClick={() => handleCardClick(product)}
//     >
//       <motion.div
//         variants={cardHoverVariants}
//         className="bg-white rounded-3xl shadow-xl overflow-hidden h-full flex flex-col relative"
//         style={{ originX: 0.5, originY: 0.5 }}
//       >
//         {/* Fixed Height Image Container */}
//         <motion.div
//           className="relative w-full h-100 overflow-hidden"
//           variants={imageHoverVariants}
//         >
//           <motion.img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-full object-cover"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//             onError={(e) => {
//               e.target.src = image7;
//             }}
//           />
//         </motion.div>
            
//         {/* Product Info */}
//         <div className="p-6 lg:p-8 2xl:p-10 flex-1 flex flex-col text-center">
//           {/* Category */}
//           <motion.p 
//             className="text-sm lg:text-base 2xl:text-lg font-semibold text-[#A67C52] uppercase tracking-wider mb-3 lg:mb-4 2xl:mb-5"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 + 0.2 }}
//           >
//             {product.category}
//           </motion.p>

//           {/* Product Name */}
//           <motion.h3 
//             className="text-xl lg:text-2xl 2xl:text-3xl font-serif font-bold text-[#8B5E3C] mb-4 lg:mb-5 2xl:mb-6 leading-tight"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 + 0.3 }}
//           >
//             {product.name}
//           </motion.h3>

//           {/* Short Details */}
//           <motion.p 
//             className="text-sm lg:text-base 2xl:text-lg text-[#8B5E3C]/70 mb-4 lg:mb-5 2xl:mb-6 leading-relaxed flex-1 line-clamp-3"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: index * 0.1 + 0.4 }}
//           >
//             {product.details}
//           </motion.p>

//           {/* Weight Info */}
//           <motion.div 
//             className="text-base lg:text-lg 2xl:text-xl font-semibold text-[#8B5E3C] mb-5 lg:mb-6 2xl:mb-7"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
//           >
//             📦 {product.weight}
//           </motion.div>

//           {/* View Details Button */}
//           <motion.button 
//             onClick={(e) => handleViewMore(product, e)}
//             className="w-full bg-gradient-to-r from-[#8B5E3C] to-[#A67C52] text-white py-4 lg:py-5 2xl:py-6 px-6 lg:px-8 2xl:px-10 rounded-xl text-base lg:text-lg 2xl:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
//             whileHover={{ 
//               scale: 1.05,
//               boxShadow: "0 25px 30px -5px rgba(139, 94, 60, 0.4), 0 15px 15px -5px rgba(139, 94, 60, 0.3)"
//             }}
//             whileTap={{ scale: 0.95 }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 + 0.6 }}
//           >
//             {t('products.viewMore')} {/* Use static translation if available */}
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Hover Effect */}
//       <motion.div 
//         className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#8B5E3C]/10 to-[#D1A15D]/10 -z-10"
//         initial={{ opacity: 0 }}
//         whileHover={{ opacity: 1 }}
//         transition={{ duration: 0.3 }}
//       />

//       {/* Click overlay to indicate it's clickable */}
//       <div className="absolute inset-0 rounded-3xl bg-transparent hover:bg-[#8B5E3C]/5 transition-colors duration-300" />
//     </motion.div>
//   );

//   // Loading state
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
//             className="w-20 h-20 border-4 2xl:border-6 border-[#8B5E3C] border-t-transparent rounded-full mx-auto mb-6 2xl:mb-8"
//           />
//           <p className="text-[#8B5E3C] font-semibold text-lg 2xl:text-xl">{t('products.loading')}</p> {/* Use static translation */}
//         </motion.div>
//       </div>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f5f0] to-[#f0ede5]">
//         <div className="text-center">
//           <p className="text-red-600 font-semibold text-xl 2xl:text-2xl mb-6 2xl:mb-8">{error}</p>
//           <button 
//             onClick={() => window.location.reload()}
//             className="bg-[#8B5E3C] text-white px-8 2xl:px-10 py-3 2xl:py-4 rounded-xl text-lg 2xl:text-xl hover:bg-[#A67C52] transition-colors shadow-lg"
//           >
//             {t('products.tryAgain')} {/* Use static translation */}
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <motion.section 
//       className="py-16 2xl:py-24 bg-gradient-to-br from-[#f8f5f0] to-[#f0ede5] min-h-screen"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-10 mx-auto">
        
//         {/* Main Header with Filter */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 2xl:mb-20 gap-8 2xl:gap-12 pt-12 2xl:pt-16">
//           {/* Header Text */}
//           <motion.div 
//             className="text-center lg:text-left flex-1"
//             variants={sectionHeaderVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.h2 
//               className="text-5xl 2xl:text-7xl font-serif font-bold text-[#8B5E3C] mb-6 2xl:mb-8"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               {t('products.allProducts')} {/* Use static translation */}
//             </motion.h2>
//             <motion.div 
//               className="w-32 h-1.5 2xl:w-40 2xl:h-2 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mb-8 2xl:mb-10 lg:mx-0 mx-auto"
//               initial={{ width: 0 }}
//               animate={{ width: 128 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//             />
//             <motion.p 
//               className="text-2xl 2xl:text-3xl text-[#8B5E3C]/80 max-w-3xl 2xl:max-w-4xl leading-relaxed 2xl:leading-loose"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//             >
//               {t('products.discover')} {/* Use static translation */}
//             </motion.p>
//           </motion.div>

//           {/* Filter Dropdown */}
//           <motion.div 
//             className="w-full lg:w-auto"
//             variants={filterVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <div className="bg-white rounded-2xl 2xl:rounded-3xl shadow-xl border border-[#e8e4d9] p-5 2xl:p-6 min-w-[240px] 2xl:min-w-[280px]">
              
//               <select
//                 id="category-filter"
//                 value={selectedCategory}
//                 onChange={(e) => handleCategoryChange(e.target.value)}
//                 className="w-full bg-[#f8f5f0] border border-[#e8e4d9] rounded-xl 2xl:rounded-2xl py-4 2xl:py-5 px-5 2xl:px-6 text-[#8B5E3C] text-lg 2xl:text-xl focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
//               >
//                 <option value="all">{t('products.allCategories')} ({products.length})</option> {/* Use static translation */}
//                 {categories.map((category, index) => (
//                   <option key={index} value={category}>
//                     {category} ({products.filter(p => p.category === category).length})
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Selected Filter Info */}
//             {selectedCategory !== "all" && (
//               <motion.div 
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="mt-4 2xl:mt-5 text-center lg:text-right"
//               >
//                 <span className="text-base 2xl:text-lg text-[#8B5E3C] bg-white/80 backdrop-blur-sm px-4 2xl:px-5 py-2 2xl:py-3 rounded-full border border-[#e8e4d9]">
//                   {t('products.showing')} {filteredProducts.length} {t('products.of')} {products.length} {t('products.products')} {/* Use static translations */}
//                   <button 
//                     onClick={() => handleCategoryChange("all")}
//                     className="ml-3 2xl:ml-4 text-[#A67C52] hover:text-[#8B5E3C] font-semibold"
//                   >
//                     × {t('products.clear')} {/* Use static translation */}
//                   </button>
//                 </span>
//               </motion.div>
//             )}
//           </motion.div>
//         </div>

//         {/* Products Count */}
//         <motion.div 
//           className="text-center mb-10 2xl:mb-12"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//         >
//           <p className="text-lg 2xl:text-xl text-[#8B5E3C]/60">
//             {selectedCategory === "all" 
//               ? `${t('products.showingAll')} ${products.length} ${t('products.products')}` 
//               : `${t('products.showing')} ${filteredProducts.length} ${t('products.products')} ${t('products.in')} "${selectedCategory}"`
//             } {/* Use static translations */}
//           </p>
//         </motion.div>

//         {/* Products Grid - UPDATED: Specific column layout */}
//         {filteredProducts.length > 0 ? (
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-10 2xl:gap-12 mb-16 2xl:mb-20"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             key={selectedCategory}
//           >
//             {filteredProducts.map((product, index) => (
//               <ProductCard key={product.id} product={product} index={index} />
//             ))}
//           </motion.div>
//         ) : (
//           <motion.div 
//             className="text-center py-20 2xl:py-28"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <div className="bg-white rounded-3xl 2xl:rounded-4xl p-10 2xl:p-14 max-w-lg 2xl:max-w-xl mx-auto shadow-2xl border border-[#e8e4d9]">
//               <div className="text-7xl 2xl:text-8xl mb-6 2xl:mb-8">🔍</div>
//               <h3 className="text-2xl 2xl:text-3xl font-serif font-bold text-[#8B5E3C] mb-4 2xl:mb-5">
//                 {t('products.noProductsFound')} {/* Use static translation */}
//               </h3>
//               <p className="text-[#8B5E3C]/70 text-lg 2xl:text-xl mb-6 2xl:mb-8">
//                 {t('products.noProductsInCategory')} {/* Use static translation */}
//               </p>
//               <button 
//                 onClick={() => handleCategoryChange("all")}
//                 className="bg-gradient-to-r from-[#8B5E3C] to-[#A67C52] text-white py-4 2xl:py-5 px-8 2xl:px-10 rounded-xl text-lg 2xl:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
//               >
//                 {t('products.showAllProducts')} {/* Use static translation */}
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </div>

//       <style jsx global>{`
//         @media (min-width: 2560px) {
//           html {
//             font-size: 18px;
//           }
//         }
        
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </motion.section>
//   );
// };

// export default Products;