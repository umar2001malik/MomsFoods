// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { Plus, Minus, ChevronDown, Heart, Sparkles, Zap, Star, Target, MessageCircle } from "lucide-react";
// import downloadimage from "../../assets/download.jpeg";

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const navigate = useNavigate();

//   const faqs = [
//     {
//       question: "Are your products 100% organic?",
//       answer: "Yes! All our products are made with 100% organic ingredients, free from harmful chemicals, preservatives, and artificial flavoring.",
//       icon: Sparkles
//     },
//     {
//       question: "Do you add sugar or sweeteners?",
//       answer: "No, we never add artificial sugar or sweeteners. Our products are naturally sweetened with organic fruits and honey.",
//       icon: Zap
//     },
//     {
//       question: "Is delivery available across Pakistan?",
//       answer: "Yes, we deliver our products nationwide with fast and eco-friendly packaging.",
//       icon: Target
//     },
//     {
//       question: "How should I store Mom's Natural Foods products?",
//       answer: "We recommend storing them in a cool, dry place. Products without preservatives stay fresh naturally if kept properly.",
//       icon: Star
//     },
//     {
//       question: "Are your products safe for kids?",
//       answer: "Absolutely! Since our foods are made with natural and chemical-free ingredients, they are completely safe and healthy for children.",
//       icon: Heart
//     },
//   ];

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const handleContactClick = () => {
//     navigate('/contact');
//   };

//   // Enhanced Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const titleVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 60,
//       filter: "blur(10px)"
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       filter: "blur(0px)",
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//         duration: 1
//       }
//     }
//   };

//   const faqItemVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 40,
//       scale: 0.9 
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 80,
//         damping: 15,
//         duration: 0.7
//       }
//     },
//     hover: {
//       scale: 1.02,
//       y: -3,
//       boxShadow: "0 20px 40px -10px rgba(139, 94, 60, 0.2)",
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 25
//       }
//     }
//   };

//   const questionButtonVariants = {
//     initial: { backgroundColor: "rgba(255, 255, 255, 0.7)" },
//     open: { 
//       backgroundColor: "rgba(248, 231, 211, 0.8)",
//       transition: { duration: 0.3 }
//     }
//   };

//   const iconVariants = {
//     initial: { scale: 1, rotate: 0 },
//     open: { 
//       scale: 1.2, 
//       rotate: 180,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 20
//       }
//     },
//     hover: {
//       scale: 1.1,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 10
//       }
//     }
//   };

//   const answerVariants = {
//     initial: { 
//       opacity: 0, 
//       height: 0,
//       y: -20 
//     },
//     animate: { 
//       opacity: 1, 
//       height: "auto",
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 20,
//         duration: 0.5
//       }
//     },
//     exit: { 
//       opacity: 0, 
//       height: 0,
//       y: -10,
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const floatingShapeVariants = {
//     floating: {
//       y: [0, -20, 0],
//       rotate: [0, 3, 0],
//       transition: {
//         duration: 6,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const pulseGlowVariants = {
//     initial: { scale: 1 },
//     pulse: {
//       scale: [1, 1.05, 1],
//       transition: {
//         duration: 2,
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
//       boxShadow: "0 15px 30px -10px rgba(139, 94, 60, 0.4)",
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

//   // NEW: Enhanced SVG Animation Variants
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

//   const morphingBlobVariants = {
//     animate: {
//       d: [
//         "M451,322.7Q413,395,340.5,423.5Q268,452,194.5,424.5Q121,397,93.5,322.7Q66,248.3,93.5,174.2Q121,100,194.5,72.5Q268,45,340.5,73.5Q413,102,451,175.1Q489,248.3,451,322.7Z",
//         "M437,315.3Q409,382.5,340.5,405.8Q272,429,198,414.3Q124,399.5,81.5,323.8Q39,248.1,85,174.5Q131,101,198.5,75.5Q266,50,340.5,78Q415,106,437,177.1Q459,248.3,437,315.3Z",
//         "M423.5,308.7Q402.5,369.2,340.5,388.8Q278.5,408.5,201,399.3Q123.5,390,85,319Q46.5,248,92,174.8Q137.5,101.5,198.5,78.5Q259.5,55.5,340.5,82.5Q421.5,109.5,423.5,178.8Q425.5,248.3,423.5,308.7Z",
//       ],
//       transition: {
//         duration: 10,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const grainVariants = {
//     animate: {
//       x: [0, -100, 0],
//       y: [0, -50, 0],
//       rotate: [0, 180, 360],
//       transition: {
//         duration: 20,
//         repeat: Infinity,
//         ease: "linear"
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
//         duration: 2,
//         delay: i * 0.1,
//         repeat: Infinity,
//         repeatDelay: Math.random() * 2
//       }
//     })
//   };

//   const floatingIconVariants = {
//     float: (i) => ({
//       y: [0, -15, 0],
//       x: [0, Math.random() * 8 - 4, 0],
//       rotate: [0, Math.random() * 5 - 2.5, 0],
//       transition: {
//         duration: 3 + i * 0.5,
//         repeat: Infinity,
//         ease: "easeInOut",
//         delay: i * 0.3
//       }
//     })
//   };

//   // NEW: Animated SVG Components
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
//       <motion.svg
//         className="absolute bottom-0 w-full h-full"
//         viewBox="0 0 1440 320"
//         preserveAspectRatio="none"
//       >
//         <motion.path
//           variants={wavePathVariants}
//           animate="animate"
//           fill="rgba(209, 161, 93, 0.05)"
//           transition={{ duration: 6, delay: 1 }}
//         />
//       </motion.svg>
//     </div>
//   );

//   const AnimatedGrainTexture = () => (
//     <motion.div
//       variants={grainVariants}
//       animate="animate"
//       className="absolute inset-0 opacity-[0.02] pointer-events-none"
//       style={{
//         backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//         backgroundSize: '200px 200px'
//       }}
//     />
//   );

//   const MorphingBlobs = () => (
//     <>
//       {[...Array(3)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute pointer-events-none"
//           style={{
//             top: `${20 + i * 25}%`,
//             left: i % 2 === 0 ? '-5%' : '85%',
//             width: `${100 + i * 30}px`,
//             height: `${100 + i * 30}px`,
//             opacity: 0.08 - i * 0.02,
//           }}
//         >
//           <motion.svg
//             viewBox="0 0 500 500"
//             variants={morphingBlobVariants}
//             animate="animate"
//           >
//             <motion.path
//               fill={`rgba(139, 94, 60, ${0.2 - i * 0.05})`}
//               variants={morphingBlobVariants}
//               animate="animate"
//             />
//           </motion.svg>
//         </motion.div>
//       ))}
//     </>
//   );

//   const FloatingIcons = () => (
//     <>
//       {[...Array(8)].map((_, i) => {
//         const icons = [Sparkles, Heart, Star, Target, Zap, MessageCircle];
//         const IconComponent = icons[i % icons.length];
//         return (
//           <motion.div
//             key={i}
//             custom={i}
//             variants={floatingIconVariants}
//             animate="float"
//             className="absolute pointer-events-none"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               opacity: 0.2 + Math.random() * 0.3,
//             }}
//           >
//             <IconComponent className="w-5 h-5 text-[#8B5E3C]" />
//           </motion.div>
//         );
//       })}
//     </>
//   );

//   const AnimatedBackgroundPattern = () => (
//     <motion.div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
//       <motion.svg
//         width="100%"
//         height="100%"
//         className="absolute"
//       >
//         <motion.pattern
//           id="grid"
//           width="40"
//           height="40"
//           patternUnits="userSpaceOnUse"
//         >
//           <motion.path
//             d="M 40 0 L 0 0 0 40"
//             fill="none"
//             stroke="rgba(139, 94, 60, 0.3)"
//             strokeWidth="1"
//             animate={{
//               pathLength: [0, 1, 0],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
//         </motion.pattern>
//         <rect width="100%" height="100%" fill="url(#grid)" />
//       </motion.svg>
//     </motion.div>
//   );

//   const ParticleEffects = () => (
//     <div className="absolute inset-0 overflow-hidden">
//       {[...Array(12)].map((_, i) => (
//         <motion.div
//           key={i}
//           custom={i}
//           variants={particleVariants}
//           initial="initial"
//           animate="animate"
//           className="absolute w-1 h-1 rounded-full opacity-30"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             backgroundColor: i % 3 === 0 ? '#8B5E3C' : i % 3 === 1 ? '#D1A15D' : '#A67C52'
//           }}
//         />
//       ))}
//     </div>
//   );

//   const FAQItemIcon = ({ icon: Icon, isOpen, index }) => (
//     <motion.div
//       className="w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 relative"
//       whileHover={{ scale: 1.1 }}
//       animate={{
//         backgroundColor: isOpen 
//           ? "rgba(139, 94, 60, 0.1)" 
//           : "rgba(139, 94, 60, 0.05)",
//         border: isOpen 
//           ? "2px solid rgba(139, 94, 60, 0.3)" 
//           : "2px solid rgba(139, 94, 60, 0.1)"
//       }}
//       transition={{ duration: 0.3 }}
//     >
//       <Icon className="w-5 h-5 text-[#8B5E3C]" />
//       {isOpen && (
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           className="absolute inset-0 rounded-full border-2 border-[#8B5E3C] opacity-30"
//         />
//       )}
//     </motion.div>
//   );

//   return (
//     <section
//       id="faq"
//       className="py-24 relative overflow-hidden"
//       style={{
//         backgroundImage: `url(${downloadimage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* NEW: Enhanced Background Animations */}
//       <AnimatedGrainTexture />
//       <AnimatedBackgroundPattern />
//       <FloatingIcons />
//       <MorphingBlobs />
//       <ParticleEffects />
//       <AnimatedWaves />

//       {/* Enhanced Animated Overlays */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/50 to-white/70"
//       />
      
//       <motion.div 
//         initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
//         whileInView={{ opacity: 1, backdropFilter: "blur(25px)" }}
//         transition={{ duration: 2, delay: 0.3 }}
//         className="absolute inset-0 bg-white/25 backdrop-blur-3xl"
//       />

//       {/* Enhanced Animated Background Shapes */}
//       <motion.div
//         variants={floatingShapeVariants}
//         animate="floating"
//         className="absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-br from-[#e8e4d9] to-[#f0ede5] organic-shape opacity-40"
//       />
      
//       <motion.div
//         variants={floatingShapeVariants}
//         animate="floating"
//         initial={{ rotate: 180 }}
//         transition={{ duration: 8, repeat: Infinity, delay: 2 }}
//         className="absolute -bottom-20 -right-20 w-56 h-56 bg-gradient-to-tr from-[#f0ede5] to-[#e8e4d9] organic-shape opacity-40"
//       />

//       {/* NEW: Additional floating shapes */}
//       <motion.div
//         variants={floatingShapeVariants}
//         animate="floating"
//         transition={{ duration: 7, repeat: Infinity, delay: 1 }}
//         className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-[#f0ede5] to-[#e8e4d9] organic-shape opacity-30"
//       />

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
//         {/* Enhanced Section Heading */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             variants={titleVariants}
//             className="relative inline-block"
//           >
//             <motion.h2 
//               className="text-5xl md:text-6xl font-serif font-bold text-[#8B5E3C] mb-6 relative"
//             >
//               Frequently Asked{" "}
//               <motion.span
//                 initial={{ backgroundPosition: "0%" }}
//                 whileInView={{ backgroundPosition: "100%" }}
//                 transition={{ duration: 2, delay: 0.5 }}
//                 className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5E3C] via-[#A67C52] to-[#D1A15D] bg-[length:200%_auto]"
//               >
//                 Questions
//               </motion.span>
              
//               {/* NEW: Enhanced decorative elements */}
//               <motion.div
//                 initial={{ scale: 0, rotate: 0 }}
//                 whileInView={{ scale: 1, rotate: 360 }}
//                 transition={{ duration: 1, delay: 1 }}
//                 className="absolute -top-2 -right-2"
//               >
//                 <MessageCircle className="w-8 h-8 text-[#D1A15D]" />
//               </motion.div>
//             </motion.h2>
//           </motion.div>

//           <motion.div
//             initial={{ width: 0, opacity: 0 }}
//             whileInView={{ width: 80, opacity: 1 }}
//             transition={{ duration: 1, delay: 0.8 }}
//             className="h-1 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mx-auto mb-6 shadow-lg relative overflow-hidden"
//           >
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
//               animate={{
//                 x: ["-100%", "100%"]
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 delay: 1.5
//               }}
//             />
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1 }}
//             className="text-lg text-[#6b4a2f] max-w-2xl mx-auto font-light"
//           >
//             Get answers to the most common questions about our natural products
//           </motion.p>
//         </motion.div>

//         {/* Enhanced FAQ List */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="space-y-4"
//         >
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               variants={faqItemVariants}
//               whileHover="hover"
//               onHoverStart={() => setHoveredIndex(index)}
//               onHoverEnd={() => setHoveredIndex(null)}
//               className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 overflow-hidden cursor-pointer group relative"
//               onClick={() => toggleFAQ(index)}
//             >
//               {/* Enhanced background effects */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
//               />
              
//               {/* Question Button */}
//               <motion.button
//                 variants={questionButtonVariants}
//                 animate={openIndex === index ? "open" : "initial"}
//                 className="w-full text-left px-6 py-6 flex items-center focus:outline-none relative overflow-hidden"
//               >
//                 {/* NEW: FAQ Item Icon */}
//                 <FAQItemIcon 
//                   icon={faq.icon} 
//                   isOpen={openIndex === index}
//                   index={index}
//                 />

//                 <motion.span
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
//                   className="text-xl font-semibold text-[#8B5E3C] font-serif pr-4 leading-relaxed flex-1 text-left"
//                 >
//                   {faq.question}
//                 </motion.span>

//                 <motion.div
//                   variants={iconVariants}
//                   animate={openIndex === index ? "open" : "initial"}
//                   whileHover="hover"
//                   className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-full flex items-center justify-center shadow-lg relative"
//                 >
//                   <motion.div
//                     initial={{ opacity: 1 }}
//                     animate={{ opacity: openIndex === index ? 0 : 1 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <Plus className="w-5 h-5 text-white" />
//                   </motion.div>
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     animate={{ opacity: openIndex === index ? 1 : 0, scale: 1 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute"
//                   >
//                     <Minus className="w-5 h-5 text-white" />
//                   </motion.div>

//                   {/* NEW: Button glow effect */}
//                   {openIndex === index && (
//                     <motion.div
//                       initial={{ scale: 0, opacity: 0 }}
//                       animate={{ scale: 1.5, opacity: 0 }}
//                       transition={{ duration: 0.5 }}
//                       className="absolute inset-0 rounded-full border-2 border-[#D1A15D]"
//                     />
//                   )}
//                 </motion.div>
//               </motion.button>

//               {/* Enhanced Animated Answer */}
//               <AnimatePresence>
//                 {openIndex === index && (
//                   <motion.div
//                     variants={answerVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     className="border-t border-[#EED7B5]/30 relative"
//                   >
//                     {/* NEW: Answer background particles */}
//                     <div className="absolute inset-0 overflow-hidden">
//                       {[...Array(5)].map((_, i) => (
//                         <motion.div
//                           key={i}
//                           className="absolute w-1 h-1 bg-[#8B5E3C] rounded-full opacity-20"
//                           initial={{ 
//                             scale: 0,
//                             x: 0,
//                             y: 0 
//                           }}
//                           animate={{
//                             scale: [0, 1, 0],
//                             x: Math.random() * 100 - 50,
//                             y: Math.random() * 30 - 15,
//                           }}
//                           transition={{
//                             duration: 2,
//                             delay: i * 0.3,
//                             repeat: Infinity,
//                           }}
//                           style={{
//                             left: `${20 + i * 15}%`,
//                             top: '50%',
//                           }}
//                         />
//                       ))}
//                     </div>

//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 0.2 }}
//                       className="px-6 pb-6 pt-4 relative z-10"
//                     >
//                       <motion.p
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.3 }}
//                         className="text-[#6b4a2f] text-lg leading-relaxed font-light bg-[#F8E7D3]/30 rounded-lg p-4 border border-[#EED7B5]/50 backdrop-blur-sm"
//                       >
//                         {faq.answer}
//                       </motion.p>
                      
//                       {/* Enhanced decorative elements for open state */}
//                       <motion.div
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         transition={{ delay: 0.5, type: "spring" }}
//                         className="flex justify-center mt-4 space-x-2"
//                       >
//                         {[...Array(4)].map((_, i) => (
//                           <motion.div
//                             key={i}
//                             initial={{ scale: 0, y: 10 }}
//                             animate={{ scale: 1, y: 0 }}
//                             transition={{ delay: 0.6 + i * 0.1 }}
//                             className="w-2 h-2 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-full"
//                             whileHover={{
//                               scale: 1.5,
//                               transition: { type: "spring", stiffness: 400 }
//                             }}
//                           />
//                         ))}
//                       </motion.div>
//                     </motion.div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Enhanced CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ 
//             type: "spring",
//             stiffness: 100,
//             damping: 15,
//             delay: 0.8 
//           }}
//           className="text-center mt-12"
//         >
//           <motion.div
//             variants={pulseGlowVariants}
//             initial="initial"
//             animate="pulse"
//             className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/50 max-w-2xl mx-auto relative overflow-hidden group"
//           >
//             {/* NEW: CTA background animation */}
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-[#8B5E3C]/5 to-[#D1A15D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//               animate={{
//                 background: [
//                   "linear-gradient(45deg, #8B5E3C05, #D1A15D05)",
//                   "linear-gradient(135deg, #D1A15D05, #8B5E3C05)",
//                   "linear-gradient(45deg, #8B5E3C05, #D1A15D05)"
//                 ]
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity
//               }}
//             />

//             <motion.h3
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1 }}
//               className="text-2xl font-serif font-bold text-[#8B5E3C] mb-4 relative z-10"
//             >
//               Still have questions?
//             </motion.h3>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.1 }}
//               className="text-[#6b4a2f] text-lg mb-6 relative z-10"
//             >
//               We're here to help you make the best choice for your health
//             </motion.p>
//             <motion.button
//               variants={buttonVariants}
//               whileHover="hover"
//               whileTap="tap"
//               onClick={handleContactClick}
//               className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white font-semibold py-3 px-8 rounded-xl shadow-lg text-lg cursor-pointer relative overflow-hidden group/btn"
//             >
//               {/* NEW: Button shine effect */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"
//               />
//               <span className="relative z-10">Contact Us</span>
              
//               {/* NEW: Button particles */}
//               {[...Array(3)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className="absolute w-1 h-1 bg-white rounded-full"
//                   initial={{ scale: 0, opacity: 0 }}
//                   whileHover={{
//                     scale: [0, 1, 0],
//                     opacity: [0, 1, 0],
//                     x: Math.random() * 60 - 30,
//                     y: Math.random() * 40 - 20,
//                   }}
//                   transition={{
//                     duration: 0.8,
//                     delay: i * 0.2,
//                   }}
//                 />
//               ))}
//             </motion.button>

//             {/* NEW: Floating icons in CTA */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 1.5 }}
//               className="absolute top-4 right-4"
//             >
//               <motion.div
//                 animate={{ 
//                   scale: [1, 1.2, 1],
//                   rotate: [0, 5, -5, 0]
//                 }}
//                 transition={{ 
//                   duration: 3, 
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               >
//                 <Heart className="w-6 h-6 text-[#8B5E3C] opacity-60" />
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Extra Styles */}
//       <style jsx>{`
//         .organic-shape {
//           border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FAQSection;



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Plus, Minus, ChevronDown, Heart, Sparkles, Zap, Star, Target, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import backgroundVideo from "../../assets/video9.mp4";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const faqs = t('faq.questions', { returnObjects: true });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1
      }
    }
  };

  const faqItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.7
      }
    },
    hover: {
      scale: 1.02,
      y: -3,
      boxShadow: "0 20px 40px -10px rgba(139, 94, 60, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const questionButtonVariants = {
    initial: { backgroundColor: "rgba(255, 255, 255, 0.7)" },
    open: { 
      backgroundColor: "rgba(248, 231, 211, 0.8)",
      transition: { duration: 0.3 }
    }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    open: { 
      scale: 1.2, 
      rotate: 180,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const answerVariants = {
    initial: { 
      opacity: 0, 
      height: 0,
      y: -20 
    },
    animate: { 
      opacity: 1, 
      height: "auto",
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.5
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const pulseGlowVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      background: "linear-gradient(135deg, #8B5E3C 0%, #A67C52 50%, #D1A15D 100%)",
      boxShadow: "0 15px 30px -10px rgba(139, 94, 60, 0.4)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  };

  const FAQItemIcon = ({ icon: Icon, isOpen, index }) => (
    <motion.div
      className="w-10 h-10 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16 rounded-full flex items-center justify-center mr-4 lg:mr-6 flex-shrink-0 relative"
      whileHover={{ scale: 1.1 }}
      animate={{
        backgroundColor: isOpen 
          ? "rgba(139, 94, 60, 0.1)" 
          : "rgba(139, 94, 60, 0.05)",
        border: isOpen 
          ? "2px solid rgba(139, 94, 60, 0.3)" 
          : "2px solid rgba(139, 94, 60, 0.1)"
      }}
      transition={{ duration: 0.3 }}
    >
      <Icon className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7 text-[#8B5E3C]" />
      {isOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-0 rounded-full border-2 border-[#8B5E3C] opacity-30"
        />
      )}
    </motion.div>
  );

  // Icon mapping function
  const getIcon = (iconName) => {
    const icons = {
      Sparkles,
      Zap,
      Target,
      Star,
      Heart,
      MessageCircle
    };
    return icons[iconName] || Sparkles;
  };

  return (
    <section
      id="faq"
      className="py-24 relative overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
          {t('faq.videoFallback')}
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/20 to-white/40"
        />
      </div>

      <div className="container max-w-[4000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-20 pb-10">
        {/* Enhanced Section Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16 lg:mb-20 2xl:mb-24"
        >
          <motion.div
            variants={titleVariants}
            className="relative inline-block"
          >
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-serif font-bold text-[#8B5E3C] mb-6 lg:mb-8 relative"
            >
              {t('faq.title.line1')}{" "}
              <motion.span
                initial={{ backgroundPosition: "0%" }}
                whileInView={{ backgroundPosition: "100%" }}
                transition={{ duration: 2, delay: 0.5 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5E3C] via-[#A67C52] to-[#D1A15D] bg-[length:200%_auto]"
              >
                {t('faq.title.highlighted')}
              </motion.span>
              
              {/* Enhanced decorative elements */}
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 2xl:-top-6 2xl:-right-6"
              >
                <MessageCircle className="w-8 h-8 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16 text-[#D1A15D]" />
              </motion.div>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 lg:h-1.5 2xl:h-2 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mx-auto mb-6 lg:mb-8 shadow-lg relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1.5
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg lg:text-xl 2xl:text-2xl text-[#6b4a2f] max-w-2xl lg:max-w-3xl 2xl:max-w-4xl mx-auto font-light leading-relaxed"
          >
            {t('faq.subtitle')}
          </motion.p>
        </motion.div>

        {/* Enhanced FAQ List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 lg:space-y-6 2xl:space-y-8 max-w-6xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={faqItemVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="bg-white/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl 2xl:rounded-4xl shadow-lg border border-white/50 overflow-hidden cursor-pointer group relative"
              onClick={() => toggleFAQ(index)}
            >
              {/* Enhanced background effects */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
              
              {/* Question Button */}
              <motion.button
                variants={questionButtonVariants}
                animate={openIndex === index ? "open" : "initial"}
                className="w-full text-left px-6 py-6 lg:px-8 lg:py-8 2xl:px-12 2xl:py-10 flex items-center focus:outline-none relative overflow-hidden"
              >
                {/* FAQ Item Icon */}
                <FAQItemIcon 
                  icon={getIcon(faq.icon)} 
                  isOpen={openIndex === index}
                  index={index}
                />

                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="text-xl lg:text-2xl 2xl:text-3xl font-semibold text-[#8B5E3C] font-serif pr-4 lg:pr-6 leading-relaxed lg:leading-loose 2xl:leading-loose flex-1 text-left"
                >
                  {faq.question}
                </motion.span>

                <motion.div
                  variants={iconVariants}
                  animate={openIndex === index ? "open" : "initial"}
                  whileHover="hover"
                  className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 2xl:w-14 2xl:h-14 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-full flex items-center justify-center shadow-lg relative"
                >
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: openIndex === index ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7 text-white" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: openIndex === index ? 1 : 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                  >
                    <Minus className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7 text-white" />
                  </motion.div>

                  {/* Button glow effect */}
                  {openIndex === index && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 rounded-full border-2 border-[#D1A15D]"
                    />
                  )}
                </motion.div>
              </motion.button>

              {/* Enhanced Animated Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    variants={answerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="border-t border-[#EED7B5]/30 relative"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="px-6 pb-6 pt-4 lg:px-8 lg:pb-8 lg:pt-6 2xl:px-12 2xl:pb-10 2xl:pt-8 relative z-10"
                    >
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-[#6b4a2f] text-lg lg:text-xl 2xl:text-2xl leading-relaxed lg:leading-loose 2xl:leading-loose font-light bg-[#F8E7D3]/30 rounded-lg lg:rounded-xl 2xl:rounded-2xl p-4 lg:p-6 2xl:p-8 border border-[#EED7B5]/50 backdrop-blur-sm"
                      >
                        {faq.answer}
                      </motion.p>
                      
                      {/* Enhanced decorative elements for open state */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="flex justify-center mt-4 lg:mt-6 2xl:mt-8 space-x-2 lg:space-x-3"
                      >
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, y: 10 }}
                            animate={{ scale: 1, y: 0 }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                            className="w-2 h-2 lg:w-3 lg:h-3 2xl:w-4 2xl:h-4 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-full"
                            whileHover={{
                              scale: 1.5,
                              transition: { type: "spring", stiffness: 400 }
                            }}
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.8 
          }}
          className="text-center mt-12 lg:mt-16 2xl:mt-20"
        >
          <motion.div
            variants={pulseGlowVariants}
            initial="initial"
            animate="pulse"
            className="bg-white/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl 2xl:rounded-4xl p-8 lg:p-12 2xl:p-16 shadow-2xl border border-white/50 max-w-2xl lg:max-w-3xl 2xl:max-w-4xl mx-auto relative overflow-hidden group"
          >
            {/* CTA background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#8B5E3C]/5 to-[#D1A15D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                background: [
                  "linear-gradient(45deg, #8B5E3C05, #D1A15D05)",
                  "linear-gradient(135deg, #D1A15D05, #8B5E3C05)",
                  "linear-gradient(45deg, #8B5E3C05, #D1A15D05)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
            />

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-2xl lg:text-3xl 2xl:text-4xl font-serif font-bold text-[#8B5E3C] mb-4 lg:mb-6 relative z-10"
            >
              {t('faq.cta.title')}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="text-[#6b4a2f] text-lg lg:text-xl 2xl:text-2xl mb-6 lg:mb-8 relative z-10 leading-relaxed"
            >
              {t('faq.cta.description')}
            </motion.p>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={handleContactClick}
              className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white font-semibold py-3 px-8 lg:py-4 lg:px-10 2xl:py-5 2xl:px-12 rounded-xl lg:rounded-2xl shadow-lg text-lg lg:text-xl 2xl:text-2xl cursor-pointer relative overflow-hidden group/btn"
            >
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"
              />
              <span className="relative z-10">{t('faq.cta.button')}</span>
              
              {/* Button particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 lg:w-1.5 lg:h-1.5 2xl:w-2 2xl:h-2 bg-white rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    x: Math.random() * 60 - 30,
                    y: Math.random() * 40 - 20,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.button>

            {/* Floating icons in CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute top-4 right-4 lg:top-6 lg:right-6 2xl:top-8 2xl:right-8"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10 text-[#8B5E3C] opacity-60" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;