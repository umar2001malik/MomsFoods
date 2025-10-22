// // src/components/Login.jsx
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { Eye, EyeOff, Lock, Mail, Sparkles, Leaf, Heart, Shield, AlertCircle } from "lucide-react";
// import { useAPI } from "../Context/AuthContext.jsx";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import bgImage from "../../assets/download.jpeg";
// import loginImage from "../../assets/image4.jpg"; 

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAPI();
  
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Animation Variants
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
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15
//       }
//     }
//   };

//   const floatingShapeVariants = {
//     floating: {
//       y: [0, -20, 0],
//       rotate: [0, 5, 0],
//       transition: {
//         duration: 6,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const particleVariants = {
//     initial: { 
//       opacity: 0, 
//       scale: 0,
//       x: 0,
//       y: 0 
//     },
//     animate: (i) => ({
//       opacity: [0, 1, 0],
//       scale: [0, 1, 0],
//       x: Math.random() * 100 - 50,
//       y: Math.random() * 100 - 50,
//       transition: {
//         duration: 3,
//         delay: i * 0.2,
//         repeat: Infinity,
//         repeatDelay: Math.random() * 3
//       }
//     })
//   };

//   const wavePathVariants = {
//     animate: {
//       d: [
//         "M0,160 C320,300,420,300,740,160 C1060,20,1160,20,1440,160 L1440,320 L0,320 Z",
//         "M0,160 C320,20,420,20,740,160 C1060,300,1160,300,1440,160 L1440,320 L0,320 Z",
//         "M0,160 C320,300,420,300,740,160 C1060,20,1160,20,1440,160 L1440,320 L0,320 Z"
//       ],
//       transition: {
//         duration: 8,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const buttonVariants = {
//     initial: { scale: 1 },
//     hover: {
//       scale: 1.05,
//       background: "linear-gradient(135deg, #8B5E3C 0%, #A67C52 50%, #D1A15D 100%)",
//       boxShadow: "0 20px 40px -10px rgba(139, 94, 60, 0.4)",
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 20
//       }
//     },
//     tap: {
//       scale: 0.95,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 20
//       }
//     }
//   };

//   const inputFocusVariants = {
//     initial: { scale: 1, borderColor: "rgba(139, 94, 60, 0.3)" },
//     focus: {
//       scale: 1.02,
//       borderColor: "rgba(139, 94, 60, 0.8)",
//       boxShadow: "0 0 0 3px rgba(139, 94, 60, 0.1)",
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 25
//       }
//     }
//   };

//   const imageSlideVariants = {
//     hidden: { x: -100, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 20,
//         duration: 1
//       }
//     }
//   };

//   const formSlideVariants = {
//     hidden: { x: 100, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 20,
//         duration: 1,
//         delay: 0.3
//       }
//     }
//   };

//   const errorVariants = {
//     hidden: { opacity: 0, y: -10, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 500,
//         damping: 25
//       }
//     },
//     exit: {
//       opacity: 0,
//       y: -10,
//       scale: 0.8,
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   // Animated SVG Components
//   const AnimatedWaves = () => (
//     <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
//       <motion.svg
//         className="absolute bottom-0 w-full h-full"
//         viewBox="0 0 1440 320"
//         preserveAspectRatio="none"
//       >
//         <motion.path
//           variants={wavePathVariants}
//           animate="animate"
//           fill="rgba(139, 94, 60, 0.1)"
//         />
//       </motion.svg>
//     </div>
//   );

//   const FloatingParticles = () => (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {[...Array(15)].map((_, i) => (
//         <motion.div
//           key={i}
//           custom={i}
//           variants={particleVariants}
//           initial="initial"
//           animate="animate"
//           className="absolute w-2 h-2 rounded-full opacity-30"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             backgroundColor: i % 3 === 0 ? '#8B5E3C' : i % 3 === 1 ? '#D1A15D' : '#A67C52'
//           }}
//         />
//       ))}
//     </div>
//   );

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setIsLoading(true);

//     try {
//       const response = await login(formData);

//       if (response && response.success) {
//         console.log("Login response:", response);
        
//         // Success toast
//         toast.success("🎉 Login successful! Redirecting...", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           theme: "light",
//         });
        
//         setTimeout(() => {
//           navigate("/admin"); // redirect on success
//         }, 1500);
        
//       } else {
//         const errorMessage = response?.message || "Login failed. Please try again.";
//         setError(errorMessage);
        
//         // Error toast for failed login
//         toast.error(`❌ ${errorMessage}`, {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           theme: "light",
//         });
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       const errorMessage = 
//         error.response?.data?.message ||
//         error.message ||
//         "An error occurred during login. Please try again.";
      
//       setError(errorMessage);
      
//       // Error toast for exception
//       toast.error(`🚫 ${errorMessage}`, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: "light",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     // Clear error when user starts typing
//     if (error) {
//       setError("");
//     }
//   };

//   return (
//     <section
//       className="min-h-screen pt-20 relative overflow-hidden flex items-center justify-center"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       {/* Enhanced Animated Overlays */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/50 to-white/70"
//       />
      
//       <motion.div 
//         initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
//         animate={{ opacity: 1, backdropFilter: "blur(25px)" }}
//         transition={{ duration: 2, delay: 0.3 }}
//         className="absolute inset-0 bg-white/25 backdrop-blur-3xl"
//       />

//       {/* Animated Background Elements */}
//       <FloatingParticles />
//       <AnimatedWaves />

//       {/* Floating Shapes */}
//       <motion.div
//         variants={floatingShapeVariants}
//         animate="floating"
//         className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-[#e8e4d9] to-[#f0ede5] organic-shape opacity-40"
//       />
      
//       <motion.div
//         variants={floatingShapeVariants}
//         animate="floating"
//         initial={{ rotate: 180 }}
//         transition={{ duration: 8, repeat: Infinity, delay: 2 }}
//         className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-tr from-[#f0ede5] to-[#e8e4d9] organic-shape opacity-40"
//       />

//       {/* Floating Icons */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0, rotate: -180 }}
//         animate={{ opacity: 1, scale: 1, rotate: 0 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="absolute top-1/4 left-1/4"
//       >
//         <Leaf className="w-8 h-8 text-[#8B5E3C]/40" />
//       </motion.div>
      
//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 0.7 }}
//         className="absolute bottom-1/4 right-1/4"
//       >
//         <Heart className="w-8 h-8 text-[#8B5E3C]/40" />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 0.9 }}
//         className="absolute top-1/3 right-1/3"
//       >
//         <Shield className="w-6 h-6 text-[#D1A15D]/50" />
//       </motion.div>

//       {/* Main Container with Two Columns */}
//       <div className="relative z-10 w-full max-w-6xl mx-8 my-8">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden flex flex-col lg:flex-row min-h-[600px]"
//         >
//           {/* Left Side - Image Section */}
//           <motion.div
//             variants={imageSlideVariants}
//             className="lg:w-1/2 relative overflow-hidden"
//           >
//             {/* Background Image */}
//             <div 
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage: `url(${loginImage || bgImage})`
//               }}
//             />
            
//             {/* Overlay Gradient */}
//             <div className="absolute inset-0 bg-gradient-to-t from-[#8B5E3C]/80 via-[#8B5E3C]/40 to-transparent" />
            
//             {/* Content Overlay */}
//             <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8 }}
//                 className="space-y-4"
//               >
//                 <motion.h1 
//                   className="text-4xl lg:text-5xl font-serif font-bold"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 1 }}
//                 >
//                   Mom's Natural Foods
//                 </motion.h1>
                
//                 <motion.p 
//                   className="text-xl font-light opacity-90 max-w-md"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 1.2 }}
//                 >
//                   Premium natural foods made with love and care
//                 </motion.p>

//                 {/* Features List */}
//                 <motion.div 
//                   className="space-y-2 mt-6"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 1.4 }}
//                 >
//                   {[
//                     "100% Natural Ingredients",
//                     "No Artificial Preservatives",
//                     "Healthy & Delicious",
//                     "Family Recipes"
//                   ].map((feature, index) => (
//                     <motion.div
//                       key={feature}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 1.6 + index * 0.1 }}
//                       className="flex items-center space-x-3"
//                     >
//                       <div className="w-2 h-2 bg-white rounded-full" />
//                       <span className="text-white/90 font-light">{feature}</span>
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 {/* Decorative Elements */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 2 }}
//                   className="flex space-x-4 mt-6"
//                 >
//                   {[Sparkles, Leaf, Heart].map((Icon, index) => (
//                     <motion.div
//                       key={index}
//                       animate={{ 
//                         y: [0, -10, 0],
//                         rotate: [0, 5, 0]
//                       }}
//                       transition={{ 
//                         duration: 3,
//                         repeat: Infinity,
//                         delay: index * 0.5
//                       }}
//                     >
//                       <Icon className="w-6 h-6 text-white/80" />
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               </motion.div>
//             </div>

//             {/* Floating Elements on Image */}
//             <motion.div
//               initial={{ scale: 0, rotate: -180 }}
//               animate={{ scale: 1, rotate: 0 }}
//               transition={{ duration: 1, delay: 0.5 }}
//               className="absolute top-8 left-8"
//             >
//               <Sparkles className="w-8 h-8 text-white/60" />
//             </motion.div>
//           </motion.div>

//           {/* Right Side - Login Form */}
//           <motion.div
//             variants={formSlideVariants}
//             className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center"
//           >
//             {/* Header Section */}
//             <motion.div
//               variants={itemVariants}
//               className="text-center mb-8"
//             >
//               <motion.h1 
//                 className="text-3xl font-serif font-bold text-[#8B5E3C] mb-2"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 Welcome Back
//               </motion.h1>
              
//               <motion.p 
//                 className="text-[#8B5E3C]/80 font-light"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 Access your admin dashboard
//               </motion.p>

//               {/* Animated Underline */}
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: "80px" }}
//                 transition={{ delay: 0.7, duration: 0.8 }}
//                 className="h-1 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mx-auto mt-4"
//               />
//             </motion.div>

//             {/* Error Message */}
//             <AnimatePresence>
//               {error && (
//                 <motion.div
//                   variants={errorVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center space-x-3"
//                 >
//                   <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
//                   <p className="text-red-700 text-sm font-medium">{error}</p>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             {/* Form Section */}
//             <motion.form
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               onSubmit={handleSubmit}
//               className="space-y-6"
//             >
//               {/* Email Field */}
//               <motion.div variants={itemVariants}>
//                 <label className="block text-sm font-medium text-[#8B5E3C] mb-3 font-semibold">
//                   Email Address
//                 </label>
//                 <motion.div
//                   variants={inputFocusVariants}
//                   whileFocus="focus"
//                   className="relative"
//                 >
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Mail className="h-5 w-5 text-[#8B5E3C]/60" />
//                   </div>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="block w-full pl-10 pr-4 py-4 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
//                     placeholder="Enter your email"
//                     disabled={isLoading}
//                   />
//                 </motion.div>
//               </motion.div>

//               {/* Password Field */}
//               <motion.div variants={itemVariants}>
//                 <label className="block text-sm font-medium text-[#8B5E3C] mb-3 font-semibold">
//                   Password
//                 </label>
//                 <motion.div
//                   variants={inputFocusVariants}
//                   whileFocus="focus"
//                   className="relative"
//                 >
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Lock className="h-5 w-5 text-[#8B5E3C]/60" />
//                   </div>
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                     className="block w-full pl-10 pr-12 py-4 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
//                     placeholder="Enter your password"
//                     disabled={isLoading}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center disabled:opacity-50"
//                     disabled={isLoading}
//                   >
//                     {showPassword ? (
//                       <EyeOff className="h-5 w-5 text-[#8B5E3C]/60 hover:text-[#8B5E3C] transition-colors" />
//                     ) : (
//                       <Eye className="h-5 w-5 text-[#8B5E3C]/60 hover:text-[#8B5E3C] transition-colors" />
//                     )}
//                   </button>
//                 </motion.div>
//               </motion.div>

//               {/* Remember Me & Forgot Password */}
//               <motion.div 
//                 variants={itemVariants}
//                 className="flex items-center justify-between text-sm"
//               >
//                 <label className="flex items-center text-[#8B5E3C]/80">
//                   <input 
//                     type="checkbox" 
//                     className="rounded border-[#8B5E3C]/30 text-[#8B5E3C] focus:ring-[#8B5E3C]/20" 
//                     disabled={isLoading}
//                   />
//                   <span className="ml-2">Remember me</span>
//                 </label>
                
//                 <motion.a
//                   href="#"
//                   whileHover={{ scale: 1.05, color: "#8B5E3C" }}
//                   className="text-[#8B5E3C]/70 hover:text-[#8B5E3C] transition-colors"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     toast.info("📧 Password reset feature coming soon!", {
//                       position: "top-right",
//                       autoClose: 4000,
//                     });
//                   }}
//                 >
//                   {/* Forgot password? */}
//                 </motion.a>
//               </motion.div>

//               {/* Submit Button */}
//               <motion.button
//                 type="submit"
//                 variants={buttonVariants}
//                 initial="initial"
//                 whileHover={!isLoading ? "hover" : "initial"}
//                 whileTap={!isLoading ? "tap" : "initial"}
//                 disabled={isLoading}
//                 className="w-full bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white font-semibold py-4 px-6 rounded-2xl shadow-lg flex items-center justify-center space-x-3 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {/* Button Shine Effect */}
//                 {!isLoading && (
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
//                   />
//                 )}
                
//                 <AnimatePresence mode="wait">
//                   {isLoading ? (
//                     <motion.div
//                       key="loading"
//                       initial={{ opacity: 0, scale: 0 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0 }}
//                       className="flex items-center space-x-2"
//                     >
//                       <motion.div
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                         className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//                       />
//                       <span>Signing In...</span>
//                     </motion.div>
//                   ) : (
//                     <motion.span
//                       key="text"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="relative z-10"
//                     >
//                       Sign In to Dashboard
//                     </motion.span>
//                   )}
//                 </AnimatePresence>

//                 {/* Button Particles */}
//                 {!isLoading && (
//                   <>
//                     {[...Array(3)].map((_, i) => (
//                       <motion.div
//                         key={i}
//                         className="absolute w-1 h-1 bg-white rounded-full"
//                         initial={{ scale: 0, opacity: 0 }}
//                         whileHover={{
//                           scale: [0, 1, 0],
//                           opacity: [0, 1, 0],
//                           x: Math.random() * 60 - 30,
//                           y: Math.random() * 40 - 20,
//                         }}
//                         transition={{
//                           duration: 0.8,
//                           delay: i * 0.2,
//                         }}
//                       />
//                     ))}
//                   </>
//                 )}
//               </motion.button>

//               {/* Additional Info */}
//               <motion.div
//                 variants={itemVariants}
//                 className="text-center pt-4 border-t border-[#8B5E3C]/20"
//               >
//                 <p className="text-sm text-[#8B5E3C]/70">
//                   Secure admin access to Mom's Natural Foods
//                 </p>
//               </motion.div>
//             </motion.form>
//           </motion.div>
//         </motion.div>

//         {/* Brand Footer */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1 }}
//           className="text-center mt-8"
//         >
//           <p className="text-[#8B5E3C]/70 font-light">
//             Mom's Natural Foods Admin Portal
//           </p>
//         </motion.div>
//       </div>

//       <style jsx>{`
//         .organic-shape {
//           border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Login;




// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { Eye, EyeOff, Lock, Mail, Sparkles, Leaf, Heart, Shield, AlertCircle, X } from "lucide-react";
// import { useAPI } from "../Context/AuthContext.jsx";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import bgImage from "../../assets/download.jpeg";
// import loginImage from "../../assets/image4.jpg";

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAPI();
  
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

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
//         type: "spring",
//         stiffness: 100,
//         damping: 15
//       }
//     }
//   };

//   const floatingShapeVariants = {
//     floating: {
//       y: [0, -15, 0],
//       rotate: [0, 4, 0],
//       transition: {
//         duration: 5,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const particleVariants = {
//     initial: { 
//       opacity: 0, 
//       scale: 0,
//       x: 0,
//       y: 0 
//     },
//     animate: (i) => ({
//       opacity: [0, 1, 0],
//       scale: [0, 1, 0],
//       x: Math.random() * 80 - 40,
//       y: Math.random() * 80 - 40,
//       transition: {
//         duration: 2.5,
//         delay: i * 0.15,
//         repeat: Infinity,
//         repeatDelay: Math.random() * 2
//       }
//     })
//   };

//   const wavePathVariants = {
//     animate: {
//       d: [
//         "M0,120 C240,200,360,200,600,120 C840,40,960,40,1200,120 L1200,240 L0,240 Z",
//         "M0,120 C240,40,360,40,600,120 C840,200,960,200,1200,120 L1200,240 L0,240 Z",
//         "M0,120 C240,200,360,200,600,120 C840,40,960,40,1200,120 L1200,240 L0,240 Z"
//       ],
//       transition: {
//         duration: 6,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const buttonVariants = {
//     initial: { scale: 1 },
//     hover: {
//       scale: 1.05,
//       background: "linear-gradient(135deg, #8B5E3C 0%, #A67C52 50%, #D1A15D 100%)",
//       boxShadow: "0 8px 15px -3px rgba(139, 94, 60, 0.3)",
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 20
//       }
//     },
//     tap: {
//       scale: 0.95,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 20
//       }
//     }
//   };

//   const inputFocusVariants = {
//     initial: { scale: 1, borderColor: "rgba(139, 94, 60, 0.3)" },
//     focus: {
//       scale: 1.02,
//       borderColor: "rgba(139, 94, 60, 0.8)",
//       boxShadow: "0 0 0 3px rgba(139, 94, 60, 0.1)",
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 25
//       }
//     }
//   };

//   const imageSlideVariants = {
//     hidden: { x: -50, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 20,
//         duration: 0.8
//       }
//     }
//   };

//   const formSlideVariants = {
//     hidden: { x: 50, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 20,
//         duration: 0.8,
//         delay: 0.2
//       }
//     }
//   };

//   const errorVariants = {
//     hidden: { opacity: 0, y: -10, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 500,
//         damping: 25
//       }
//     },
//     exit: {
//       opacity: 0,
//       y: -10,
//       scale: 0.8,
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 30
//       }
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.8,
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   const overlayVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.3
//       }
//     },
//     exit: {
//       opacity: 0,
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   const AnimatedWaves = () => (
//     <div className="absolute bottom-0 left-0 w-full h-24 sm:h-28 overflow-hidden">
//       <motion.svg
//         className="absolute bottom-0 w-full h-full"
//         viewBox="0 0 1200 240"
//         preserveAspectRatio="none"
//       >
//         <motion.path
//           variants={wavePathVariants}
//           animate="animate"
//           fill="rgba(139, 94, 60, 0.1)"
//         />
//       </motion.svg>
//     </div>
//   );

//   const FloatingParticles = () => (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {[...Array(10)].map((_, i) => (
//         <motion.div
//           key={i}
//           custom={i}
//           variants={particleVariants}
//           initial="initial"
//           animate="animate"
//           className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-30"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             backgroundColor: i % 3 === 0 ? '#8B5E3C' : i % 3 === 1 ? '#D1A15D' : '#A67C52'
//           }}
//         />
//       ))}
//     </div>
//   );

//   const PrivacyPolicyModal = () => (
//     <AnimatePresence>
//       {showPrivacyPolicy && (
//         <motion.div
//           variants={overlayVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//           onClick={() => setShowPrivacyPolicy(false)}
//         >
//           <motion.div
//             variants={modalVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex items-center justify-between p-6 border-b border-[#8B5E3C]/20 bg-gradient-to-r from-[#8B5E3C]/5 to-[#D1A15D]/5">
//               <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#8B5E3C]">
//                 Privacy Policy
//               </h2>
//               <motion.button
//                 whileHover={{ scale: 1.1, rotate: 90 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => setShowPrivacyPolicy(false)}
//                 className="p-1 hover:bg-[#8B5E3C]/10 rounded-full transition-colors"
//               >
//                 <X className="w-6 h-6 text-[#8B5E3C]" />
//               </motion.button>
//             </div>
            
//             <div className="p-6 overflow-y-auto max-h-[60vh]">
//               <div className="space-y-4 text-sm sm:text-base text-gray-700">
//                 <div>
//                   <h3 className="font-semibold text-[#8B5E3C] text-lg mb-2">Effective Date: October 13, 2025</h3>
//                 </div>

//                 <section>
//                   <h4 className="font-bold text-[#8B5E3C] mb-2">1. Introduction</h4>
//                   <p className="mb-3">
//                     Mom's Natural Foods ("Company", "we", "our", or "us") operates the Mom's Natural Foods 
//                     mobile and web application (the "App"). We value your privacy and are committed to 
//                     protecting your personal data in compliance with applicable laws in Turkey, including the 
//                     Law on the Protection of Personal Data (KVKK).
//                   </p>
//                 </section>

//                 <section>
//                   <h4 className="font-bold text-[#8B5E3C] mb-2">2. Data We Collect</h4>
//                   <p className="mb-3">
//                     We only collect the following personal data from our users:
//                   </p>
//                   <ul className="list-disc list-inside space-y-1 ml-4">
//                     <li>Email address</li>
//                     <li>Password</li>
//                   </ul>
//                   <p className="mt-2">
//                     We do not collect, track, or store any additional information such as location, payment 
//                     details, or browsing activity.
//                   </p>
//                 </section>

//                 <section>
//                   <h4 className="font-bold text-[#8B5E3C] mb-2">3. Purpose of Data Collection</h4>
//                   <p>
//                     The data collected is used solely for user authentication, account access, and secure login 
//                     to our services.
//                   </p>
//                 </section>

//                 <section>
//                   <h4 className="font-bold text-[#8B5E3C] mb-2">4. Data Storage</h4>
//                   <p>
//                     Your personal data is securely stored on Hostinger servers located in Germany. We 
//                     ensure that all data is encrypted and protected against unauthorized access or disclosure.
//                   </p>
//                 </section>

//                 <section>
//                   <h4 className="font-bold text-[#8B5E3C] mb-2">5. Data Sharing and Transfer</h4>
//                   <p>
//                     We do not share, sell, or transfer your data to any other party, organization, or external 
//                     domain. All data remains within our secure system hosted in Germany.
//                   </p>
//                 </section>

//                 <section>
//                   <h4 className="font-bold text-[#8B5E3C] mb-2">6. Data Deletion and User Rights</h4>
//                   <p className="mb-3">
//                     Users may request the deletion of their account and associated data at any time by 
//                     contacting us at info@site_url.nl. Upon verification, all personal data will be permanently 
//                     removed from our servers.
//                   </p>
//                 </section>

//                 <section>
//                   <h4 className="font-bold text-[#8B5E3C] mb-2">7. Contact Information</h4>
//                   <div className="space-y-1">
//                     <p><strong>Mom's Natural Foods</strong></p>
//                     <p>Address: temp_address</p>
//                     <p>Website: Site_url</p>
//                     <p>Email: info@site_url.nl</p>
//                     <p>Phone: +31 12345678</p>
//                   </div>
//                 </section>
//               </div>
//             </div>

//             <div className="p-4 border-t border-[#8B5E3C]/20 bg-gray-50">
//               <motion.button
//                 variants={buttonVariants}
//                 initial="initial"
//                 whileHover="hover"
//                 whileTap="tap"
//                 onClick={() => setShowPrivacyPolicy(false)}
//                 className="w-full bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white font-semibold py-3 rounded-xl shadow-md"
//               >
//                 Close
//               </motion.button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setIsLoading(true);

//     try {
//       const response = await login(formData);

//       if (response && response.success) {
//         toast.success("🎉 Login successful! Redirecting...", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           theme: "light",
//         });
        
//         setTimeout(() => {
//           navigate("/admin");
//         }, 1500);
//       } else {
//         const errorMessage = response?.message || "Login failed. Please try again.";
//         setError(errorMessage);
        
//         toast.error(`❌ ${errorMessage}`, {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           theme: "light",
//         });
//       }
//     } catch (error) {
//       const errorMessage = 
//         error.response?.data?.message ||
//         error.message ||
//         "An error occurred during login. Please try again.";
      
//       setError(errorMessage);
      
//       toast.error(`🚫 ${errorMessage}`, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: "light",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     if (error) {
//       setError("");
//     }
//   };

//   return (  
//     <section
//       className="min-h-screen mt-10 relative overflow-hidden flex items-center justify-center px-4 sm:px-6"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2 }}
//         className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/50 to-white/70"
//       />
      
//       <motion.div 
//         initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
//         animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
//         transition={{ duration: 1.5, delay: 0.2 }}
//         className="absolute inset-0 bg-white/25 backdrop-blur-2xl"
//       />

//       <FloatingParticles />
//       <AnimatedWaves />

//       <motion.div
//         variants={floatingShapeVariants}
//         animate="floating"
//         className="absolute -top-16 -left-16 sm:-top-20 sm:-left-20 w-48 h-48 sm:w-56 sm:h-56 bg-gradient-to-br from-[#e8e4d9] to-[#f0ede5] organic-shape opacity-40"
//       />
      
//       <motion.div
//         variants={floatingShapeVariants}
//         animate="floating"
//         initial={{ rotate: 180 }}
//         transition={{ duration: 7, repeat: Infinity, delay: 1.5 }}
//         className="absolute -bottom-24 -left-24 sm:-bottom-28 sm:-left-28 w-56 h-56 sm:w-64 sm:h-64 bg-gradient-to-tr from-[#f0ede5] to-[#e8e4d9] organic-shape opacity-40"
//       />

//       <motion.div
//         initial={{ opacity: 0, scale: 0, rotate: -180 }}
//         animate={{ opacity: 1, scale: 1, rotate: 0 }}
//         transition={{ duration: 0.8, delay: 0.4 }}
//         className="absolute top-20 sm:top-1/4 left-10 sm:left-1/4"
//       >
//         <Leaf className="w-6 h-6 sm:w-7 sm:h-7 text-[#8B5E3C]/40" />
//       </motion.div>
      
//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//         className="absolute bottom-20 sm:bottom-1/4 right-10 sm:right-1/4"
//       >
//         <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-[#8B5E3C]/40" />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, delay: 0.8 }}
//         className="absolute top-1/4 sm:top-1/3 right-1/4 sm:right-1/3"
//       >
//         <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#D1A15D]/50" />
//       </motion.div>

//       <div className="relative z-10 w-full max-w-5xl sm:max-w-6xl lg:max-w-7xl mx-auto ultra-wide pt-16 sm:pt-20">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/50 overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[80vh] max-h-[700px] sm:max-h-[800px]"
//         >
//           <motion.div
//             variants={imageSlideVariants}
//             className="w-full lg:w-1/2 relative overflow-hidden"
//           >
//             <div 
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage: `url(${loginImage || bgImage})`
//               }}
//             />
            
//             <div className="absolute inset-0 bg-gradient-to-t from-[#8B5E3C]/80 via-[#8B5E3C]/40 to-transparent" />
            
//             <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8 text-white">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className="space-y-3 sm:space-y-4"
//               >
//                 <motion.h1 
//                   className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold"
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.8 }}
//                 >
//                   Mom's Natural Foods
//                 </motion.h1>
                
//                 <motion.p 
//                   className="text-base sm:text-lg font-light opacity-90 max-w-sm"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 1 }}
//                 >
//                   Premium natural foods made with love and care
//                 </motion.p>

//                 <motion.div 
//                   className="space-y-2 sm:space-y-3 mt-4 sm:mt-6"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 1.2 }}
//                 >
//                   {[
//                     "100% Natural Ingredients",
//                     "No Artificial Preservatives",
//                     "Healthy & Delicious",
//                     "Family Recipes"
//                   ].map((feature, index) => (
//                     <motion.div
//                       key={feature}
//                       initial={{ opacity: 0, x: -15 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 1.4 + index * 0.1 }}
//                       className="flex items-center space-x-2 sm:space-x-3"
//                     >
//                       <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
//                       <span className="text-white/90 text-sm sm:text-base font-light">{feature}</span>
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 1.8 }}
//                   className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-6"
//                 >
//                   {[Sparkles, Leaf, Heart].map((Icon, index) => (
//                     <motion.div
//                       key={index}
//                       animate={{ 
//                         y: [0, -8, 0],
//                         rotate: [0, 4, 0]
//                       }}
//                       transition={{ 
//                         duration: 2.5,
//                         repeat: Infinity,
//                         delay: index * 0.4
//                       }}
//                     >
//                       <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               </motion.div>
//             </div>

//             <motion.div
//               initial={{ scale: 0, rotate: -180 }}
//               animate={{ scale: 1, rotate: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="absolute top-6 left-6 sm:top-8 sm:left-8"
//             >
//               <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white/60" />
//             </motion.div>
//           </motion.div>

//           <motion.div
//             variants={formSlideVariants}
//             className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center"
//           >
//             <motion.div
//               variants={itemVariants}
//               className="text-center mb-6 sm:mb-8"
//             >
//               <motion.h1 
//                 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#8B5E3C] mb-2"
//                 initial={{ opacity: 0, y: -15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 Welcome Back
//               </motion.h1>
              
//               <motion.p 
//                 className="text-[#8B5E3C]/80 text-sm sm:text-base font-light"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 Access your admin dashboard
//               </motion.p>

//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: "60px" }}
//                 transition={{ delay: 0.6, duration: 0.6 }}
//                 className="h-0.5 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mx-auto mt-3 sm:mt-4"
//               />
//             </motion.div>

//             <AnimatePresence>
//               {error && (
//                 <motion.div
//                   variants={errorVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl flex items-center space-x-2 sm:space-x-3"
//                 >
//                   <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
//                   <p className="text-red-700 text-xs sm:text-sm font-medium">{error}</p>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <motion.form
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               onSubmit={handleSubmit}
//               className="space-y-4 sm:space-y-6"
//             >
//               <motion.div variants={itemVariants}>
//                 <label className="block text-xs sm:text-sm font-medium text-[#8B5E3C] mb-2 sm:mb-3 font-semibold">
//                   Email Address
//                 </label>
//                 <motion.div
//                   variants={inputFocusVariants}
//                   whileFocus="focus"
//                   className="relative"
//                 >
//                   <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
//                     <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#8B5E3C]/60" />
//                   </div>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="block w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-3 sm:py-3.5 border border-[#8B5E3C]/30 rounded-xl sm:rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200 text-sm sm:text-base"
//                     placeholder="Enter your email"
//                     disabled={isLoading}
//                   />
//                 </motion.div>
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <label className="block text-xs sm:text-sm font-medium text-[#8B5E3C] mb-2 sm:mb-3 font-semibold">
//                   Password
//                 </label>
//                 <motion.div
//                   variants={inputFocusVariants}
//                   whileFocus="focus"
//                   className="relative"
//                 >
//                   <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
//                     <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-[#8B5E3C]/60" />
//                   </div>
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                     className="block w-full pl-8 sm:pl-10 pr-10 sm:pr-12 py-3 sm:py-3.5 border border-[#8B5E3C]/30 rounded-xl sm:rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200 text-sm sm:text-base"
//                     placeholder="Enter your password"
//                     disabled={isLoading}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center disabled:opacity-50"
//                     disabled={isLoading}
//                   >
//                     {showPassword ? (
//                       <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-[#8B5E3C]/60 hover:text-[#8B5E3C] transition-colors" />
//                     ) : (
//                       <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-[#8B5E3C]/60 hover:text-[#8B5E3C] transition-colors" />
//                     )}
//                   </button>
//                 </motion.div>
//               </motion.div>

//               <motion.div 
//                 variants={itemVariants}
//                 className="flex items-center justify-between text-xs sm:text-sm"
//               >
//                 <label className="flex items-center text-[#8B5E3C]/80">
//                   <input 
//                     type="checkbox" 
//                     className="rounded border-[#8B5E3C]/30 text-[#8B5E3C] focus:ring-[#8B5E3C]/20" 
//                     disabled={isLoading}
//                   />
//                   <span className="ml-1 sm:ml-2">Remember me</span>
//                 </label>
                
//                 <motion.a
//                   href="#"
//                   whileHover={{ scale: 1.05, color: "#8B5E3C" }}
//                   className="text-[#8B5E3C]/70 hover:text-[#8B5E3C] transition-colors"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     toast.info("📧 Password reset feature coming soon!", {
//                       position: "top-right",
//                       autoClose: 4000,
//                     });
//                   }}
//                 >
//                   Forgot password?
//                 </motion.a>
//               </motion.div>

//               <motion.button
//                 type="submit"
//                 variants={buttonVariants}
//                 initial="initial"
//                 whileHover={!isLoading ? "hover" : "initial"}
//                 whileTap={!isLoading ? "tap" : "initial"}
//                 disabled={isLoading}
//                 className="w-full bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white font-semibold py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl sm:rounded-2xl shadow-md flex items-center justify-center space-x-2 sm:space-x-3 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
//               >
//                 {!isLoading && (
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
//                   />
//                 )}
                
//                 <AnimatePresence mode="wait">
//                   {isLoading ? (
//                     <motion.div
//                       key="loading"
//                       initial={{ opacity: 0, scale: 0 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0 }}
//                       className="flex items-center space-x-2"
//                     >
//                       <motion.div
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                         className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
//                       />
//                       <span>Signing In...</span>
//                     </motion.div>
//                   ) : (
//                     <motion.span
//                       key="text"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="relative z-10"
//                     >
//                       Sign In to Dashboard
//                     </motion.span>
//                   )}
//                 </AnimatePresence>

//                 {!isLoading && (
//                   <>
//                     {[...Array(3)].map((_, i) => (
//                       <motion.div
//                         key={i}
//                         className="absolute w-1 h-1 bg-white rounded-full"
//                         initial={{ scale: 0, opacity: 0 }}
//                         whileHover={{
//                           scale: [0, 1, 0],
//                           opacity: [0, 1, 0],
//                           x: Math.random() * 40 - 20,
//                           y: Math.random() * 30 - 15,
//                         }}
//                         transition={{
//                           duration: 0.6,
//                           delay: i * 0.15,
//                         }}
//                       />
//                     ))}
//                   </>
//                 )}
//               </motion.button>

//               <motion.div
//                 variants={itemVariants}
//                 className="text-center pt-3 sm:pt-4 border-t border-[#8B5E3C]/20"
//               >
//                 <p className="text-xs sm:text-sm text-[#8B5E3C]/70 mb-2">
//                   Secure admin access to Mom's Natural Foods
//                 </p>
//                 <motion.button
//                   type="button"
//                   onClick={() => setShowPrivacyPolicy(true)}
//                   whileHover={{ scale: 1.05, color: "#8B5E3C" }}
//                   className="text-xs sm:text-sm text-[#8B5E3C]/60 hover:text-[#8B5E3C] transition-colors underline"
//                 >
//                   View Privacy Policy
//                 </motion.button>
//               </motion.div>
//             </motion.form>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="text-center mt-3 sm:mt-4"
//         >
//           <p className="text-[#8B5E3C]/70 font-light text-xs sm:text-sm">
//             Mom's Natural Foods Admin Portal
//           </p>
//         </motion.div>
//       </div>

//       <PrivacyPolicyModal />

//       <style jsx>{`
//         .organic-shape {
//           border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
//         }
//         @media (min-width: 2560px) {
//           .ultra-wide {
//             width: 2000px; /* Set your desired width > 1280px */
//             max-width: none !important; /* Remove max-w-7xl constraint */
//             padding-left: 2rem; /* Matches 2xl:px-10 */
//             padding-right: 2rem;
//             margin-left: auto;
//             margin-right: auto;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Login;


// src/pages/Login.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail, Sparkles, Leaf, Heart, Shield, AlertCircle, X } from "lucide-react";
import { useAPI } from "../Context/AuthContext.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgImage from "../../assets/download.jpeg";
import loginImage from "../../assets/image4.jpg";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation(); // Default namespace: "translation"
  const navigate = useNavigate();
  const { login } = useAPI();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  // Animation Variants (unchanged)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  const floatingShapeVariants = {
    floating: {
      y: [0, -15, 0],
      rotate: [0, 4, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const particleVariants = {
    initial: { opacity: 0, scale: 0, x: 0, y: 0 },
    animate: (i) => ({
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: Math.random() * 80 - 40,
      y: Math.random() * 80 - 40,
      transition: { duration: 2.5, delay: i * 0.15, repeat: Infinity, repeatDelay: Math.random() * 2 }
    })
  };

  const wavePathVariants = {
    animate: {
      d: [
        "M0,120 C240,200,360,200,600,120 C840,40,960,40,1200,120 L1200,240 L0,240 Z",
        "M0,120 C240,40,360,40,600,120 C840,200,960,200,1200,120 L1200,240 L0,240 Z",
        "M0,120 C240,200,360,200,600,120 C840,40,960,40,1200,120 L1200,240 L0,240 Z"
      ],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      background: "linear-gradient(135deg, #8B5E3C 0%, #A67C52 50%, #D1A15D 100%)",
      boxShadow: "0 8px 15px -3px rgba(139, 94, 60, 0.3)",
      transition: { type: "spring", stiffness: 400, damping: 20 }
    },
    tap: { scale: 0.95, transition: { type: "spring", stiffness: 400, damping: 20 } }
  };

  const inputFocusVariants = {
    initial: { scale: 1, borderColor: "rgba(139, 94, 60, 0.3)" },
    focus: {
      scale: 1.02,
      borderColor: "rgba(139, 94, 60, 0.8)",
      boxShadow: "0 0 0 3px rgba(139, 94, 60, 0.1)",
      transition: { type: "spring", stiffness: 400, damping: 25 }
    }
  };

  const imageSlideVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 } }
  };

  const formSlideVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.8, delay: 0.2 } }
  };

  const errorVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 500, damping: 25 } },
    exit: { opacity: 0, y: -10, scale: 0.8, transition: { duration: 0.3 } }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const AnimatedWaves = () => (
    <div className="absolute bottom-0 left-0 w-full h-24 sm:h-28 overflow-hidden">
      <motion.svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 240" preserveAspectRatio="none">
        <motion.path variants={wavePathVariants} animate="animate" fill="rgba(139, 94, 60, 0.1)" />
      </motion.svg>
    </div>
  );

  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={particleVariants}
          initial="initial"
          animate="animate"
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: i % 3 === 0 ? '#8B5E3C' : i % 3 === 1 ? '#D1A15D' : '#A67C52'
          }}
        />
      ))}
    </div>
  );

  const PrivacyPolicyModal = () => (
    <AnimatePresence>
      {showPrivacyPolicy && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowPrivacyPolicy(false)}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-[#8B5E3C]/20 bg-gradient-to-r from-[#8B5E3C]/5 to-[#D1A15D]/5">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#8B5E3C]">
                {t('login.privacyTitle')}
              </h2>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowPrivacyPolicy(false)}
                className="p-1 hover:bg-[#8B5E3C]/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-[#8B5E3C]" />
              </motion.button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-4 text-sm sm:text-base text-gray-700">
                <div>
                  <h3 className="font-semibold text-[#8B5E3C] text-lg mb-2">{t('login.effectiveDate')}</h3>
                </div>

                <section>
                  <h4 className="font-bold text-[#8B5E3C] mb-2">1. {t('login.introduction')}</h4>
                  <p className="mb-3">{t('login.introduction')}</p>
                </section>

                <section>
                  <h4 className="font-bold text-[#8B5E3C] mb-2">2. {t('login.dataCollect')}</h4>
                  <p className="mb-3">{t('login.dataCollect')}</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>{t('login.dataEmail')}</li>
                    <li>{t('login.dataPassword')}</li>
                  </ul>
                  <p className="mt-2">{t('login.dataNoMore')}</p>
                </section>

                <section>
                  <h4 className="font-bold text-[#8B5E3C] mb-2">3. {t('login.purpose')}</h4>
                  <p>{t('login.purpose')}</p>
                </section>

                <section>
                  <h4 className="font-bold text-[#8B5E3C] mb-2">4. {t('login.storage')}</h4>
                  <p>{t('login.storage')}</p>
                </section>

                <section>
                  <h4 className="font-bold text-[#8B5E3C] mb-2">5. {t('login.sharing')}</h4>
                  <p>{t('login.sharing')}</p>
                </section>

                <section>
                  <h4 className="font-bold text-[#8B5E3C] mb-2">6. {t('login.deletion')}</h4>
                  <p className="mb-3">{t('login.deletion')}</p>
                </section>

                <section>
                  <h4 className="font-bold text-[#8B5E3C] mb-2">7. {t('login.contactTitle')}</h4>
                  <div className="space-y-1">
                    <p><strong>{t('login.contactCompany')}</strong></p>
                    <p>{t('login.contactAddress')}</p>
                    <p>{t('login.contactWebsite')}</p>
                    <p>{t('login.contactEmail')}</p>
                    <p>{t('login.contactPhone')}</p>
                  </div>
                </section>
              </div>
            </div>

            <div className="p-4 border-t border-[#8B5E3C]/20 bg-gray-50">
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                onClick={() => setShowPrivacyPolicy(false)}
                className="w-full bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white font-semibold py-3 rounded-xl shadow-md"
              >
                {t('login.close')}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await login(formData);

      if (response && response.success) {
        toast.success(t('login.signIn') + "!", {
          position: "top-right",
          autoClose: 3000,
        });

        setTimeout(() => navigate("/admin"), 1500);
      } else {
        const msg = response?.message || t('login.error');
        setError(msg);
        toast.error(msg);
      }
    } catch (error) {
      const msg = error.response?.data?.message || error.message || t('login.error');
      setError(msg);
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  return (
    <section
      className="min-h-screen mt-10 relative overflow-hidden flex items-center justify-center px-4 sm:px-6"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/50 to-white/70" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="absolute inset-0 bg-white/25 backdrop-blur-2xl" />

      <FloatingParticles />
      <AnimatedWaves />

      {/* Floating Shapes */}
      <motion.div variants={floatingShapeVariants} animate="floating" className="absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-br from-[#e8e4d9] to-[#f0ede5] organic-shape opacity-40" />
      <motion.div variants={floatingShapeVariants} animate="floating" initial={{ rotate: 180 }} transition={{ delay: 1.5 }} className="absolute -bottom-24 -left-24 w-56 h-56 bg-gradient-to-tr from-[#f0ede5] to-[#e8e4d9] organic-shape opacity-40" />

      {/* Icons */}
      <motion.div initial={{ opacity: 0, scale: 0, rotate: -180 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.4 }} className="absolute top-20 left-10">
        <Leaf className="w-6 h-6 text-[#8B5E3C]/40" />
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="absolute bottom-20 right-10">
        <Heart className="w-6 h-6 text-[#8B5E3C]/40" />
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} className="absolute top-1/4 right-1/4">
        <Shield className="w-5 h-5 text-[#D1A15D]/50" />
      </motion.div>

      <div className="relative z-10 w-full max-w-5xl sm:max-w-6xl lg:max-w-7xl mx-auto ultra-wide pt-16 sm:pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/50 overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[80vh] max-h-[700px] sm:max-h-[800px]"
        >
          {/* Left Side - Image */}
          <motion.div variants={imageSlideVariants} className="w-full lg:w-1/2 relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${loginImage || bgImage})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#8B5E3C]/80 via-[#8B5E3C]/40 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8 text-white">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="space-y-3 sm:space-y-4">
                <motion.h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                  {t('login.title')}
                </motion.h1>
                <motion.p className="text-base sm:text-lg font-light opacity-90 max-w-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                  {t('login.subtitle')}
                </motion.p>

                <motion.div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                  {[t('login.highlight1'), t('login.highlight2'), t('login.highlight3'), t('login.highlight4')].map((feature, index) => (
                    <motion.div key={feature} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 + index * 0.1 }} className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
                      <span className="text-white/90 text-sm sm:text-base font-light">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-6">
                  {[Sparkles, Leaf, Heart].map((Icon, index) => (
                    <motion.div key={index} animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div variants={formSlideVariants} className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <motion.div variants={itemVariants} className="text-center mb-6 sm:mb-8">
              <motion.h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#8B5E3C] mb-2" initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                {t('login.welcome')}
              </motion.h1>
              <motion.p className="text-[#8B5E3C]/80 text-sm sm:text-base font-light" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                {t('login.access')}
              </motion.p>
              <motion.div initial={{ width: 0 }} animate={{ width: "60px" }} transition={{ delay: 0.6, duration: 0.6 }} className="h-0.5 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mx-auto mt-3 sm:mt-4" />
            </motion.div>

            <AnimatePresence>
              {error && (
                <motion.div variants={errorVariants} initial="hidden" animate="visible" exit="exit" className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <p className="text-red-700 text-xs font-medium">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.form variants={containerVariants} initial="hidden" animate="visible" onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-xs sm:text-sm font-medium text-[#8B5E3C] mb-2 sm:mb-3 font-semibold">
                  {t('login.emailLabel')}
                </label>
                <motion.div variants={inputFocusVariants} whileFocus="focus" className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#8B5E3C]/60" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full pl-8 sm:pl-10 pr-3 py-3 border border-[#8B5E3C]/30 rounded-xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 text-sm"
                    placeholder={t('login.emailPlaceholder')}
                    disabled={isLoading}
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-xs sm:text-sm font-medium text-[#8B5E3C] mb-2 sm:mb-3 font-semibold">
                  {t('login.passwordLabel')}
                </label>
                <motion.div variants={inputFocusVariants} whileFocus="focus" className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-[#8B5E3C]/60" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="block w-full pl-8 sm:pl-10 pr-10 py-3 border border-[#8B5E3C]/30 rounded-xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 text-sm"
                    placeholder={t('login.passwordPlaceholder')}
                    disabled={isLoading}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-2 flex items-center">
                    {showPassword ? <EyeOff className="h-4 w-4 text-[#8B5E3C]/60" /> : <Eye className="h-4 w-4 text-[#8B5E3C]/60" />}
                  </button>
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center justify-between text-xs sm:text-sm">
                <label className="flex items-center text-[#8B5E3C]/80">
                  <input type="checkbox" className="rounded border-[#8B5E3C]/30 text-[#8B5E3C] focus:ring-[#8B5E3C]/20" disabled={isLoading} />
                  <span className="ml-1 sm:ml-2">{t('login.remember')}</span>
                </label>
                <motion.a href="#" whileHover={{ scale: 1.05 }} className="text-[#8B5E3C]/70 hover:text-[#8B5E3C]" onClick={(e) => { e.preventDefault(); toast.info("Password reset coming soon!"); }}>
                  {t('login.forgot')}
                </motion.a>
              </motion.div>

              <motion.button
                type="submit"
                variants={buttonVariants}
                initial="initial"
                whileHover={!isLoading ? "hover" : "initial"}
                whileTap={!isLoading ? "tap" : "initial"}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white font-semibold py-3 rounded-xl shadow-md flex items-center justify-center space-x-2 relative overflow-hidden group disabled:opacity-50"
              >
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center space-x-2">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      <span>{t('login.signingIn')}</span>
                    </motion.div>
                  ) : (
                    <motion.span key="text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10">
                      {t('login.signIn')}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <motion.div variants={itemVariants} className="text-center pt-3 border-t border-[#8B5E3C]/20">
                <p className="text-xs text-[#8B5E3C]/70 mb-2">{t('login.secure')}</p>
                <motion.button type="button" onClick={() => setShowPrivacyPolicy(true)} whileHover={{ scale: 1.05 }} className="text-xs text-[#8B5E3C]/60 hover:text-[#8B5E3C] underline">
                  {t('login.viewPrivacy')}
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="text-center mt-3">
          <p className="text-[#8B5E3C]/70 font-light text-xs">{t('login.portal')}</p>
        </motion.div>
      </div>

      <PrivacyPolicyModal />

      <style jsx>{`
        .organic-shape {
          border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
        }
        @media (min-width: 2560px) {
          .ultra-wide { width: 2000px; max-width: none !important; padding-left: 2rem; padding-right: 2rem; margin-left: auto; margin-right: auto; }
        }
      `}</style>
    </section>
  );
};

export default Login;