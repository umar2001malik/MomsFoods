// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { Heart, Leaf, Shield, Star, Users, Target, X } from "lucide-react";
// import image2 from "../../assets/image2.png";
// import video2 from '../../assets/milk_video.mp4'
// import OurStory from '../../assets/story.mp4'
// import image3 from "../../assets/image67.png";
// import image4 from "../../assets/image677.png";
// import image5 from "../../assets/image7.png";
// import downloadimage from "../../assets/download.jpeg";

// const AboutPage = () => {
//   const { t } = useTranslation();
//   const [selectedValue, setSelectedValue] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [clickedCardIndex, setClickedCardIndex] = useState(null);
//   const valuesSectionRef = useRef(null);
//   const cardRefs = useRef([]);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const textVariants = {
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
//         duration: 1.2
//       }
//     }
//   };

//   const imageVariants = {
//     hidden: { 
//       opacity: 0, 
//       scale: 0.8,
//       x: 100 
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       x: 0,
//       transition: {
//         type: "spring",
//         stiffness: 80,
//         damping: 20,
//         duration: 1.5
//       }
//     },
//     hover: {
//       scale: 1.05,
//       rotate: 1,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 20
//       }
//     }
//   };

//   const floatingShapeVariants = {
//     floating: {
//       y: [0, -25, 0],
//       rotate: [0, 5, 0],
//       transition: {
//         duration: 8,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const valueCardVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 40,
//       scale: 0.9 
//     },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//         delay: 0.6 + (i * 0.2)
//       }
//     }),
//     hover: {
//       y: -10,
//       scale: 1.02,
//       boxShadow: "0 25px 50px -12px rgba(139, 94, 60, 0.2)",
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 25
//       }
//     }
//   };

//   const storySectionVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.5
//       }
//     }
//   };

//   const paragraphVariants = {
//     hidden: { opacity: 0, x: -30 },
//     visible: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.8,
//         delay: 0.8 + (i * 0.1)
//       }
//     })
//   };

//   const modalVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0.8,
//       transition: {
//         duration: 0.3
//       }
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 30,
//         duration: 0.6
//       }
//     }
//   };

//   const overlayVariants = {
//     hidden: {
//       opacity: 0,
//       transition: {
//         duration: 0.3
//       }
//     },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   const cardModalVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0.8,
//       y: 20
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 30,
//         duration: 0.6
//       }
//     }
//   };

//   // Mobile modal variants
//   const mobileModalVariants = {
//     hidden: {
//       y: "100%",
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut"
//       }
//     },
//     visible: {
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 30,
//         duration: 0.5
//       }
//     }
//   };

//   const values = t('about.values', { returnObjects: true });
//   const valueDetails = t('about.valueDetails', { returnObjects: true });

//   // Icon mapping function
//   const getIcon = (iconName) => {
//     const icons = {
//       Heart,
//       Leaf,
//       Shield,
//       Users,
//       Target,
//       Star
//     };
//     return icons[iconName] || Heart;
//   };

//   const handleCardClick = (value, index) => {
//     setSelectedValue(value);
//     setClickedCardIndex(index);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setTimeout(() => {
//       setSelectedValue(null);
//       setClickedCardIndex(null);
//     }, 300);
//   };

//   // Close modal on escape key
//   useEffect(() => {
//     const handleEscape = (event) => {
//       if (event.keyCode === 27 && isModalOpen) {
//         handleCloseModal();
//       }
//     };
//     document.addEventListener('keydown', handleEscape);
//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//     };
//   }, [isModalOpen]);

//   // Initialize card refs
//   useEffect(() => {
//     cardRefs.current = cardRefs.current.slice(0, values.length);
//   }, [values.length]);

//   return (
//     <div className="min-h-screen bg-white">
      
//       {/* Hero Section */}
//       <section className="relative overflow-hidden pt-28 md:pt-32 lg:pt-40 2xl:pt-48 pb-16 md:pb-20 lg:pb-28 2xl:pb-32">
//   {/* Video Background */}
//   <div className="absolute inset-0 w-full h-full">
//     <video
//       autoPlay
//       loop
//       muted
//       playsInline
//       className="w-full h-full object-cover"
//       style={{ 
//         filter: "blur(0px) brightness(0.7)",
//       transform: "scale(1.15)", // zoom fixes white edges after blur
//       zIndex: "10",
//       }}
//     >
//       <source src={OurStory} type="video/mp4" />
//       {/* Fallback image in case video doesn't load */}
//       <img 
//         src={downloadimage} 
//         alt="Background" 
//         className="w-full h-full object-cover"
//       />
//     </video>
//   </div>

//   {/* Enhanced Animated Overlays */}
//   <motion.div 
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     transition={{ duration: 1.5 }}
//     className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/40 to-white/60"
//   />
  
//   <motion.div 
//     initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
//     animate={{ opacity: 1, backdropFilter: "blur(25px)" }}
//     transition={{ duration: 2, delay: 0.3 }}
//     className="absolute inset-0 bg-white/20 backdrop-blur-3xl"
//   />

//   {/* Animated Background Shapes */}
//   <motion.div
//     variants={floatingShapeVariants}
//     animate="floating"
//     className="absolute -top-20 -right-20 w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 2xl:w-96 2xl:h-96 bg-gradient-to-br from-[#e8e4d9] to-[#f0ede5] organic-shape opacity-40"
//   />
  
//   <motion.div
//     variants={floatingShapeVariants}
//     animate="floating"
//     initial={{ rotate: 180 }}
//     transition={{ duration: 10, repeat: Infinity, delay: 3 }}
//     className="absolute -bottom-32 -left-32 w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 2xl:w-120 2xl:h-120 bg-gradient-to-tr from-[#f0ede5] to-[#e8e4d9] organic-shape opacity-40"
//   />

//   {/* Content Container */}
//   <div className="w-full px-4 md:px-6 lg:px-8 2xl:px-16 relative z-10">
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       className="text-center max-w-full mx-auto"
//     >
//       <motion.h1 
//         variants={textVariants}
//         className="text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-serif font-bold text-[#8B5E3C] mb-4 md:mb-6 lg:mb-8 2xl:mb-12"
//       >
//         {t('about.hero.title')}
//       </motion.h1>
      
//       <motion.div
//         variants={textVariants}
//         className="h-1 w-20 md:w-24 lg:w-28 2xl:w-32 2xl:h-1.5 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mx-auto mb-6 md:mb-8 lg:mb-10 2xl:mb-14 shadow-lg"
//       />
      
//       <motion.p
//         variants={textVariants}
//         className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl text-[#6b4a2f] font-light leading-relaxed lg:leading-loose 2xl:leading-loose px-4 lg:px-8 2xl:px-16"
//       >
//         {t('about.hero.subtitle')}
//       </motion.p>
//     </motion.div>
//   </div>
// </section>

//       {/* Story Section */}
//       <section className="py-16 md:py-20 lg:py-28 2xl:py-32 bg-gradient-to-b from-white to-amber-50/30">
//         {/* REMOVED container class */}
//         <div className="w-full px-4 md:px-6 lg:px-8 2xl:px-16">
//           <motion.div
//             variants={storySectionVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-50px" }}
//             className="max-w-full mx-auto" // Changed to max-w-full
//           >
//             <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 2xl:gap-24 items-center mb-16 md:mb-20 lg:mb-24 2xl:mb-28">
//               {/* Story Text */}
//               <motion.div variants={containerVariants}>
//                 <motion.h2
//                   variants={textVariants}
//                   className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-bold text-[#8B5E3C] mb-6 md:mb-8 lg:mb-10 2xl:mb-12"
//                 >
//                   {t('about.story.title')}
//                 </motion.h2>
                
//                 <div className="space-y-4 md:space-y-6 lg:space-y-8 2xl:space-y-10 text-base md:text-lg lg:text-xl 2xl:text-2xl text-[#6b4a2f] leading-relaxed lg:leading-loose 2xl:leading-loose">
//                   {t('about.story.paragraphs', { returnObjects: true }).map((paragraph, index) => (
//                     <motion.p key={index} variants={paragraphVariants} custom={index}>
//                       {paragraph}
//                     </motion.p>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Story Image */}
//               <motion.div
//                 variants={imageVariants}
//                 whileHover="hover"
//                 className="relative"
//               >
//                 <video
//                   src={video2}
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="rounded-2xl md:rounded-3xl lg:rounded-3xl 2xl:rounded-4xl shadow-2xl w-full h-80 md:h-96 lg:h-104 2xl:h-120 object-cover border-4 md:border-8 lg:border-8 2xl:border-12 border-white [backface-visibility:hidden] [transform-style:preserve-3d]"
//                 />
//                 <div className="absolute inset-0 rounded-2xl md:rounded-3xl lg:rounded-3xl 2xl:rounded-4xl bg-gradient-to-br from-[#8B5E3C]/20 to-[#D1A15D]/20 -z-10 transform rotate-2 md:rotate-3 lg:rotate-3 2xl:rotate-3 scale-105" />
//               </motion.div>
//             </div>

//             {/* Evolution Section */}
//             <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 2xl:gap-24 items-center">
//               {/* Evolution Image */}
//               <motion.div
//                 variants={imageVariants}
//                 whileHover="hover"
//                 className="relative lg:order-2"
//               >
//                 <img
//                   src={image3}
//                   alt={t('about.evolution.imageAlt')}
//                   className="rounded-2xl md:rounded-3xl lg:rounded-3xl 2xl:rounded-4xl shadow-2xl w-full h-80 md:h-96 lg:h-104 2xl:h-120 object-cover border-4 md:border-8 lg:border-8 2xl:border-12 border-white"
//                 />
//                 <div className="absolute inset-0 rounded-2xl md:rounded-3xl lg:rounded-3xl 2xl:rounded-4xl bg-gradient-to-bl from-[#8B5E3C]/20 to-[#D1A15D]/20 -z-10 transform -rotate-2 md:-rotate-3 lg:-rotate-3 2xl:-rotate-3 scale-105" />
//               </motion.div>

//               {/* Evolution Text */}
//               <motion.div variants={containerVariants} className="lg:order-1">
//                 <motion.h2
//                   variants={textVariants}
//                   className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-bold text-[#8B5E3C] mb-6 md:mb-8 lg:mb-10 2xl:mb-12"
//                 >
//                   {t('about.evolution.title')}
//                 </motion.h2>
                
//                 <div className="space-y-4 md:space-y-6 lg:space-y-8 2xl:space-y-10 text-base md:text-lg lg:text-xl 2xl:text-2xl text-[#6b4a2f] leading-relaxed lg:leading-loose 2xl:leading-loose">
//                   {t('about.evolution.paragraphs', { returnObjects: true }).map((paragraph, index) => (
//                     <motion.p key={index} variants={paragraphVariants} custom={index}>
//                       {paragraph}
//                     </motion.p>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section 
//         ref={valuesSectionRef}
//         className="py-16 md:py-20 lg:py-28 2xl:py-32 relative overflow-hidden"
//         style={{
//           backgroundImage: `url(${downloadimage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        
//         {/* REMOVED container class */}
//         <div className="w-full px-4 md:px-6 lg:px-8 2xl:px-16 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12 md:mb-16 lg:mb-20 2xl:mb-24"
//           >
//             <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-bold text-[#8B5E3C] mb-4 md:mb-6 lg:mb-8 2xl:mb-10">
//               {t('about.valuesTitle')}
//             </h2>
//             <div className="h-1 w-16 md:w-20 lg:w-24 2xl:w-28 2xl:h-1.5 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mx-auto"></div>
//           </motion.div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 2xl:gap-12 max-w-full mx-auto relative" // Changed to max-w-full
//           >
//             {values.map((value, index) => (
//               <motion.div
//                 key={index}
//                 ref={el => cardRefs.current[index] = el}
//                 custom={index}
//                 variants={valueCardVariants}
//                 whileHover="hover"
//                 onClick={() => handleCardClick(value, index)}
//                 className={`bg-white/80 backdrop-blur-lg rounded-2xl md:rounded-3xl lg:rounded-3xl 2xl:rounded-4xl p-6 md:p-8 lg:p-10 2xl:p-12 shadow-lg border border-white/50 text-center group cursor-pointer transition-all duration-300 ${
//                   isModalOpen && clickedCardIndex !== index ? 'opacity-30 blur-sm scale-95' : ''
//                 }`}
//                 style={{ 
//                   minHeight: '400px', // Increased card height
//                   height: '100%'
//                 }}
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.1, rotate: 360 }}
//                   className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-xl md:rounded-2xl lg:rounded-2xl 2xl:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 lg:mb-8 2xl:mb-10 shadow-lg"
//                 >
//                   {React.createElement(getIcon(value.icon), { className: "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 text-white" })}
//                 </motion.div>
                
//                 <h3 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-[#8B5E3C] font-serif mb-3 md:mb-4 lg:mb-5 2xl:mb-6">
//                   {value.title}
//                 </h3>
                
//                 <p className="text-[#6b4a2f] leading-relaxed lg:leading-loose text-sm md:text-base lg:text-lg 2xl:text-xl mb-3 md:mb-4 lg:mb-5 2xl:mb-6 flex-grow">
//                   {value.description}
//                 </p>

//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="inline-flex items-center gap-2 text-[#8B5E3C] font-semibold text-xs md:text-sm lg:text-base 2xl:text-lg"
//                 >
//                   <span>{t('about.clickForDetails')}</span>
//                 </motion.div>
//               </motion.div>
//             ))}

//             {/* In-place Modal */}
//             <AnimatePresence>
//               {isModalOpen && selectedValue && (
//                 <>
//                   {/* Desktop Modal */}
//                   <motion.div
//                     variants={overlayVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="hidden"
//                     className="hidden md:flex fixed inset-0 bg-black/50 backdrop-blur-sm z-40 items-center justify-center p-4 lg:p-6 2xl:p-8"
//                     onClick={handleCloseModal}
//                   >
//                     <motion.div
//                       variants={cardModalVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="hidden"
//                       className="bg-white rounded-3xl lg:rounded-3xl 2xl:rounded-4xl shadow-2xl w-full max-w-4xl lg:max-w-5xl 2xl:max-w-6xl mx-auto max-h-[85vh] overflow-hidden flex flex-col"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       {/* Modal Header */}
//                       <div className="flex-shrink-0 p-6 md:p-8 lg:p-10 2xl:p-12 border-b border-amber-100 bg-white">
//                         <div className="flex items-start justify-between">
//                           <div className="flex items-start gap-4 md:gap-6 lg:gap-8 2xl:gap-10 flex-1">
//                             <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-xl md:rounded-2xl lg:rounded-2xl 2xl:rounded-3xl flex items-center justify-center flex-shrink-0 mt-1">
//                               {React.createElement(getIcon(selectedValue.icon), { className: "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 text-white" })}
//                             </div>
//                             <div className="flex-1 min-w-0">
//                               <h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-[#8B5E3C] font-serif mb-2 md:mb-3 lg:mb-4 2xl:mb-5">
//                                 {selectedValue.title}
//                               </h3>
//                               <p className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-[#6b4a2f] leading-relaxed lg:leading-loose">
//                                 {selectedValue.description}
//                               </p>
//                             </div>
//                           </div>
//                           <button
//                             onClick={handleCloseModal}
//                             className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 2xl:w-14 2xl:h-14 flex items-center justify-center rounded-full hover:bg-amber-50 transition-colors flex-shrink-0 ml-4 md:ml-6 lg:ml-8 2xl:ml-10"
//                           >
//                             <X className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8 text-[#8B5E3C]" />
//                           </button>
//                         </div>
//                       </div>

//                       {/* Modal Content */}
//                       <div className="flex-1 overflow-y-auto">
//                         <div className="p-6 md:p-8 lg:p-10 2xl:p-12">
//                           {valueDetails[selectedValue.title] && (
//                             <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 2xl:gap-12">
//                               {/* Left Column */}
//                               <div className="space-y-6 md:space-y-8 lg:space-y-10 2xl:space-y-12">
//                                 {/* Details Section */}
//                                 <div>
//                                   <h4 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-[#8B5E3C] mb-3 md:mb-4 lg:mb-5 2xl:mb-6 flex items-center gap-2 md:gap-3 lg:gap-4 2xl:gap-5">
//                                     <span className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5 bg-[#8B5E3C] rounded-full"></span>
//                                     {t('about.modal.details')}
//                                   </h4>
//                                   <p className="text-[#6b4a2f] leading-relaxed lg:leading-loose text-base md:text-lg lg:text-xl 2xl:text-2xl">
//                                     {valueDetails[selectedValue.title].details}
//                                   </p>
//                                 </div>

//                                 {/* Commitment Section */}
//                                 <div>
//                                   <h4 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-[#8B5E3C] mb-3 md:mb-4 lg:mb-5 2xl:mb-6 flex items-center gap-2 md:gap-3 lg:gap-4 2xl:gap-5">
//                                     <span className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5 bg-[#8B5E3C] rounded-full"></span>
//                                     {t('about.modal.commitment')}
//                                   </h4>
//                                   <p className="text-[#6b4a2f] leading-relaxed lg:leading-loose text-base md:text-lg lg:text-xl 2xl:text-2xl">
//                                     {valueDetails[selectedValue.title].commitment}
//                                   </p>
//                                 </div>
//                               </div>

//                               {/* Right Column - Benefits */}
//                               <div>
//                                 <h4 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-[#8B5E3C] mb-3 md:mb-4 lg:mb-5 2xl:mb-6 flex items-center gap-2 md:gap-3 lg:gap-4 2xl:gap-5">
//                                   <span className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5 bg-[#8B5E3C] rounded-full"></span>
//                                   {t('about.modal.benefits')}
//                                 </h4>
//                                 <ul className="space-y-3 md:space-y-4 lg:space-y-5 2xl:space-y-6">
//                                   {valueDetails[selectedValue.title].benefits.map((benefit, index) => (
//                                     <li key={index} className="flex items-start gap-3 md:gap-4 lg:gap-5 2xl:gap-6 text-[#6b4a2f] text-base md:text-lg lg:text-xl 2xl:text-2xl">
//                                       <span className="w-1.5 h-1.5 md:w-2 md:h-2 lg:w-2.5 lg:h-2.5 2xl:w-3 2xl:h-3 bg-[#D1A15D] rounded-full mt-2 md:mt-3 lg:mt-3.5 2xl:mt-4 flex-shrink-0"></span>
//                                       <span className="leading-relaxed lg:leading-loose">{benefit}</span>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </div>
//                             </div>
//                           )}

//                           {/* Footer */}
//                           <div className="pt-6 md:pt-8 lg:pt-10 2xl:pt-12 mt-6 md:mt-8 lg:mt-10 2xl:mt-12 border-t border-amber-100">
//                             <p className="text-center text-[#8B5E3C] font-semibold italic text-base md:text-lg lg:text-xl 2xl:text-2xl">
//                               {t('about.modal.footer')}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   </motion.div>

//                   {/* Mobile Modal */}
//                   <motion.div
//                     variants={overlayVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="hidden"
//                     className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
//                     onClick={handleCloseModal}
//                   >
//                     <motion.div
//                       variants={mobileModalVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="hidden"
//                       className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 max-h-[85vh] overflow-hidden"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       {/* Modal Header */}
//                       <div className="flex-shrink-0 p-6 border-b border-amber-100 bg-white sticky top-0">
//                         <div className="flex items-start justify-between mb-4">
//                           <div className="flex items-start gap-4 flex-1">
//                             <div className="w-12 h-12 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-2xl flex items-center justify-center flex-shrink-0">
//                               {React.createElement(getIcon(selectedValue.icon), { className: "w-6 h-6 text-white" })}
//                             </div>
//                             <div className="flex-1 min-w-0">
//                               <h3 className="text-xl font-bold text-[#8B5E3C] font-serif mb-2">
//                                 {selectedValue.title}
//                               </h3>
//                               <p className="text-base text-[#6b4a2f] leading-relaxed">
//                                 {selectedValue.description}
//                               </p>
//                             </div>
//                           </div>
//                           <button
//                             onClick={handleCloseModal}
//                             className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-amber-50 transition-colors flex-shrink-0 ml-4"
//                           >
//                             <X className="w-4 h-4 text-[#8B5E3C]" />
//                           </button>
//                         </div>
//                         {/* Drag Handle */}
//                         <div className="flex justify-center">
//                           <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
//                         </div>
//                       </div>

//                       {/* Modal Content */}
//                       <div className="flex-1 overflow-y-auto">
//                         <div className="p-6">
//                           {valueDetails[selectedValue.title] && (
//                             <div className="space-y-6">
//                               {/* Details Section */}
//                               <div>
//                                 <h4 className="text-lg font-bold text-[#8B5E3C] mb-3 flex items-center gap-2">
//                                   <span className="w-2 h-2 bg-[#8B5E3C] rounded-full"></span>
//                                   {t('about.modal.details')}
//                                 </h4>
//                                 <p className="text-[#6b4a2f] leading-relaxed text-base">
//                                   {valueDetails[selectedValue.title].details}
//                                 </p>
//                               </div>

//                               {/* Commitment Section */}
//                               <div>
//                                 <h4 className="text-lg font-bold text-[#8B5E3C] mb-3 flex items-center gap-2">
//                                   <span className="w-2 h-2 bg-[#8B5E3C] rounded-full"></span>
//                                   {t('about.modal.commitment')}
//                                 </h4>
//                                 <p className="text-[#6b4a2f] leading-relaxed text-base">
//                                   {valueDetails[selectedValue.title].commitment}
//                                 </p>
//                               </div>

//                               {/* Benefits Section */}
//                               <div>
//                                 <h4 className="text-lg font-bold text-[#8B5E3C] mb-3 flex items-center gap-2">
//                                   <span className="w-2 h-2 bg-[#8B5E3C] rounded-full"></span>
//                                   {t('about.modal.benefits')}
//                                 </h4>
//                                 <ul className="space-y-3">
//                                   {valueDetails[selectedValue.title].benefits.map((benefit, index) => (
//                                     <li key={index} className="flex items-start gap-3 text-[#6b4a2f] text-base">
//                                       <span className="w-1.5 h-1.5 bg-[#D1A15D] rounded-full mt-2 flex-shrink-0"></span>
//                                       <span className="leading-relaxed">{benefit}</span>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </div>
//                             </div>
//                           )}

//                           {/* Footer */}
//                           <div className="pt-6 mt-6 border-t border-amber-100">
//                             <p className="text-center text-[#8B5E3C] font-semibold italic text-base">
//                               {t('about.modal.footer')}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   </motion.div>
//                 </>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="py-16 md:py-20 lg:py-28 2xl:py-32 bg-amber-50/20">
//         {/* REMOVED container class */}
//         <div className="w-full px-4 md:px-6 lg:px-8 2xl:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12 md:mb-16 lg:mb-20 2xl:mb-24"
//           >
//             <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-bold text-[#8B5E3C] mb-4 md:mb-6 lg:mb-8 2xl:mb-10">
//               {t('about.gallery.title')}
//             </h2>
//             <div className="h-1 w-16 md:w-20 lg:w-24 2xl:w-28 2xl:h-1.5 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mx-auto"></div>
//           </motion.div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 2xl:gap-10 max-w-full mx-auto" // Changed to max-w-full
//           >
//             {[image2, image3, image4, image5].map((src, index) => (
//               <motion.div
//                 key={index}
//                 variants={valueCardVariants}
//                 custom={index}
//                 whileHover="hover"
//                 className="relative group overflow-hidden rounded-xl md:rounded-2xl lg:rounded-2xl 2xl:rounded-3xl shadow-lg"
//               >
//                 <img
//                   src={src}
//                   alt={t('about.gallery.imageAlt', { number: index + 1 })}
//                   className="w-full h-48 md:h-64 lg:h-72 2xl:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6 lg:p-6 2xl:p-8">
//                   <span className="text-white font-semibold text-base md:text-lg lg:text-xl 2xl:text-2xl">
//                     {t('about.gallery.memory', { number: index + 1 })}
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       <style jsx>{`
//         .organic-shape {
//           border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
//         }
//       `}</style>
      
//       <style jsx global>{`
//         .h-104 {
//           height: 26rem;
//         }
//         .h-120 {
//           height: 30rem;
//         }
//         .w-120 {
//           width: 30rem;
//         }
        
//         /* Remove container constraints for large screens */
//         @media (min-width: 2560px) {
//           .container {
//             max-width: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AboutPage;




import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Heart, Leaf, Shield, Star, Users, Target, X, ChevronLeft, ChevronRight } from "lucide-react";
import image2 from "../../assets/image2.png";
import video2 from '../../assets/milk_video.mp4'
import OurStory from '../../assets/story.mp4'
import image3 from "../../assets/image67.png";
import image4 from "../../assets/image677.png";
import image5 from "../../assets/image7.png";
import downloadimage from "../../assets/download.jpeg";

// Import additional images for the gallery
import gallery1 from "../../assets/image2.png"; // You can replace these with actual gallery images
import gallery2 from "../../assets/image67.png";
import gallery3 from "../../assets/image677.png";
import gallery4 from "../../assets/image3.jpg";
import gallery5 from "../../assets/resim_2021-10-04_141528.png";
import gallery6 from "../../assets/image7.png";

const AboutPage = () => {
  const { t } = useTranslation();
  const [selectedValue, setSelectedValue] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedCardIndex, setClickedCardIndex] = useState(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const valuesSectionRef = useRef(null);
  const cardRefs = useRef([]);

  // Gallery images array
  const galleryImages = [
    { src: gallery1, alt: "Gallery image 1" },
    { src: gallery2, alt: "Gallery image 2" },
    { src: gallery3, alt: "Gallery image 3" },
    { src: gallery4, alt: "Gallery image 4" },
    { src: gallery5, alt: "Gallery image 5" },
    { src: gallery6, alt: "Gallery image 6" },
  ];

  // Gallery navigation functions
  const nextImage = () => {
    setCurrentGalleryIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentGalleryIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const openGalleryModal = (index = 0) => {
    setCurrentGalleryIndex(index);
    setIsGalleryModalOpen(true);
  };

  const closeGalleryModal = () => {
    setIsGalleryModalOpen(false);
  };

  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isGalleryModalOpen) return;
      
      if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'Escape') {
        closeGalleryModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryModalOpen]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
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
        duration: 1.2
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      x: 100 
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 1.5
      }
    },
    hover: {
      scale: 1.05,
      rotate: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const galleryVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      x: 100 
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 1.5
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const floatingShapeVariants = {
    floating: {
      y: [0, -25, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const valueCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9 
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.6 + (i * 0.2)
      }
    }),
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(139, 94, 60, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const storySectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.8 + (i * 0.1)
      }
    })
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.6
      }
    }
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const cardModalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 0.6
      }
    }
  };

  // Gallery modal variants
  const galleryModalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      }
    }
  };

  // Mobile modal variants
  const mobileModalVariants = {
    hidden: {
      y: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5
      }
    }
  };

  const values = t('about.values', { returnObjects: true });
  const valueDetails = t('about.valueDetails', { returnObjects: true });

  // Icon mapping function
  const getIcon = (iconName) => {
    const icons = {
      Heart,
      Leaf,
      Shield,
      Users,
      Target,
      Star
    };
    return icons[iconName] || Heart;
  };

  const handleCardClick = (value, index) => {
    setSelectedValue(value);
    setClickedCardIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedValue(null);
      setClickedCardIndex(null);
    }, 300);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        if (isModalOpen) {
          handleCloseModal();
        }
        if (isGalleryModalOpen) {
          closeGalleryModal();
        }
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen, isGalleryModalOpen]);

  // Initialize card refs
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, values.length);
  }, [values.length]);
  // Prevent body scroll when modal is open
useEffect(() => {
  if (isModalOpen || isGalleryModalOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return () => {
    document.body.style.overflow = 'unset';
  };
}, [isModalOpen, isGalleryModalOpen]);
<style jsx global>{`
  /* Prevent body scroll when modal is open */
  body.modal-open {
    overflow: hidden;
  }
  
  .h-104 {
    height: 26rem;
  }
  .h-120 {
    height: 30rem;
  }
  .w-120 {
    width: 30rem;
  }
  
  /* Remove container constraints for large screens */
  @media (min-width: 2560px) {
    .container {
      max-width: none;
    }
  }
`}</style>

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 md:pt-32 lg:pt-40 2xl:pt-48 pb-16 md:pb-20 lg:pb-28 2xl:pb-32">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ 
              filter: "blur(0px) brightness(0.7)",
            transform: "scale(1.15)", // zoom fixes white edges after blur
            zIndex: "10",
            }}
          >
            <source src={OurStory} type="video/mp4" />
            {/* Fallback image in case video doesn't load */}
            <img 
              src={downloadimage} 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </video>
        </div>

        {/* Enhanced Animated Overlays */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/40 to-white/60"
        />
        
        <motion.div 
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(25px)" }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute inset-0 bg-white/20 backdrop-blur-3xl"
        />

        {/* Animated Background Shapes */}
        <motion.div
          variants={floatingShapeVariants}
          animate="floating"
          className="absolute -top-20 -right-20 w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 2xl:w-96 2xl:h-96 bg-gradient-to-br from-[#e8e4d9] to-[#f0ede5] organic-shape opacity-40"
        />
        
        <motion.div
          variants={floatingShapeVariants}
          animate="floating"
          initial={{ rotate: 180 }}
          transition={{ duration: 10, repeat: Infinity, delay: 3 }}
          className="absolute -bottom-32 -left-32 w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 2xl:w-120 2xl:h-120 bg-gradient-to-tr from-[#f0ede5] to-[#e8e4d9] organic-shape opacity-40"
        />

        {/* Content Container */}
        <div className="w-full px-4 md:px-6 lg:px-8 2xl:px-16 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-full mx-auto"
          >
            <motion.h1 
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-serif font-bold text-[#8B5E3C] mb-4 md:mb-6 lg:mb-8 2xl:mb-12"
            >
              {t('about.hero.title')}
            </motion.h1>
            
            <motion.div
              variants={textVariants}
              className="h-1 w-20 md:w-24 lg:w-28 2xl:w-32 2xl:h-1.5 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mx-auto mb-6 md:mb-8 lg:mb-10 2xl:mb-14 shadow-lg"
            />
            
            <motion.p
              variants={textVariants}
              className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl text-[#6b4a2f] font-light leading-relaxed lg:leading-loose 2xl:leading-loose px-4 lg:px-8 2xl:px-16"
            >
              {t('about.hero.subtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 lg:py-28 2xl:py-32 bg-gradient-to-b from-white to-amber-50/30">
        {/* REMOVED container class */}
        <div className="w-full px-4 md:px-6 lg:px-8 2xl:px-16">
          <motion.div
            variants={storySectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-full mx-auto" // Changed to max-w-full
          >
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 2xl:gap-24 items-center mb-16 md:mb-20 lg:mb-24 2xl:mb-28">
              {/* Story Text */}
              <motion.div variants={containerVariants}>
                <motion.h2
                  variants={textVariants}
                  className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-bold text-[#8B5E3C] mb-6 md:mb-8 lg:mb-10 2xl:mb-12"
                >
                  {t('about.story.title')}
                </motion.h2>
                
                <div className="space-y-4 md:space-y-6 lg:space-y-8 2xl:space-y-10 text-base md:text-lg lg:text-xl 2xl:text-2xl text-[#6b4a2f] leading-relaxed lg:leading-loose 2xl:leading-loose">
                  {t('about.story.paragraphs', { returnObjects: true }).map((paragraph, index) => (
                    <motion.p key={index} variants={paragraphVariants} custom={index}>
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </motion.div>

              {/* Story Image */}
              <motion.div
                variants={imageVariants}
                whileHover="hover"
                className="relative"
              >
                <video
                  src={video2}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-2xl md:rounded-3xl lg:rounded-3xl 2xl:rounded-4xl shadow-2xl w-full h-80 md:h-96 lg:h-104 2xl:h-120 object-cover border-4 md:border-8 lg:border-8 2xl:border-12 border-white [backface-visibility:hidden] [transform-style:preserve-3d]"
                />
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl lg:rounded-3xl 2xl:rounded-4xl bg-gradient-to-br from-[#8B5E3C]/20 to-[#D1A15D]/20 -z-10 transform rotate-2 md:rotate-3 lg:rotate-3 2xl:rotate-3 scale-105" />
              </motion.div>
            </div>

            {/* Evolution Section */}
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 2xl:gap-24 items-center">
              {/* Evolution Gallery */}
              <motion.div
                variants={galleryVariants}
                whileHover="hover"
                className="relative lg:order-2"
              >
                {/* Main Gallery Display */}
                <div className="relative rounded-2xl md:rounded-3xl lg:rounded-3xl 2xl:rounded-4xl shadow-2xl overflow-hidden border-4 md:border-8 lg:border-8 2xl:border-12 border-white">
                  <img
                    src={galleryImages[currentGalleryIndex].src}
                    alt={galleryImages[currentGalleryIndex].alt}
                    className="w-full h-80 md:h-96 lg:h-104 2xl:h-120 object-cover cursor-pointer"
                    onClick={() => openGalleryModal(currentGalleryIndex)}
                  />
                  
                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#8B5E3C]" />
                  </button>
                  
                  <button 
                    onClick={nextImage}
                    className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#8B5E3C]" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm md:text-base backdrop-blur-sm">
                    {currentGalleryIndex + 1} / {galleryImages.length}
                  </div>

                  {/* Thumbnail Strip */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex justify-center space-x-2 overflow-x-auto py-2">
                      {galleryImages.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentGalleryIndex(index)}
                          className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                            index === currentGalleryIndex 
                              ? 'border-white scale-110' 
                              : 'border-white/50 hover:border-white'
                          }`}
                        >
                          <img
                            src={image.src}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Background Decorative Element */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl lg:rounded-3xl 2xl:rounded-4xl bg-gradient-to-bl from-[#8B5E3C]/20 to-[#D1A15D]/20 -z-10 transform -rotate-2 md:-rotate-3 lg:-rotate-3 2xl:-rotate-3 scale-105" />
              </motion.div>

              {/* Evolution Text */}
              <motion.div variants={containerVariants} className="lg:order-1">
                <motion.h2
                  variants={textVariants}
                  className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-bold text-[#8B5E3C] mb-6 md:mb-8 lg:mb-10 2xl:mb-12"
                >
                  {t('about.evolution.title')}
                </motion.h2>
                
                <div className="space-y-4 md:space-y-6 lg:space-y-8 2xl:space-y-10 text-base md:text-lg lg:text-xl 2xl:text-2xl text-[#6b4a2f] leading-relaxed lg:leading-loose 2xl:leading-loose">
                  {t('about.evolution.paragraphs', { returnObjects: true }).map((paragraph, index) => (
                    <motion.p key={index} variants={paragraphVariants} custom={index}>
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={valuesSectionRef}
        className="py-16 md:py-20 lg:py-28 2xl:py-32 relative overflow-hidden"
        style={{
          backgroundImage: `url(${downloadimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        
        {/* REMOVED container class */}
        <div className="w-full px-4 md:px-6 lg:px-8 2xl:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16 lg:mb-20 2xl:mb-24"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-bold text-[#8B5E3C] mb-4 md:mb-6 lg:mb-8 2xl:mb-10">
              {t('about.valuesTitle')}
            </h2>
            <div className="h-1 w-16 md:w-20 lg:w-24 2xl:w-28 2xl:h-1.5 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 2xl:gap-12 max-w-full mx-auto relative" // Changed to max-w-full
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                ref={el => cardRefs.current[index] = el}
                custom={index}
                variants={valueCardVariants}
                whileHover="hover"
                onClick={() => handleCardClick(value, index)}
                className={`bg-white/80 backdrop-blur-lg rounded-2xl md:rounded-3xl lg:rounded-3xl 2xl:rounded-4xl p-6 md:p-8 lg:p-10 2xl:p-12 shadow-lg border border-white/50 text-center group cursor-pointer transition-all duration-300 ${
                  isModalOpen && clickedCardIndex !== index ? 'opacity-30 blur-sm scale-95' : ''
                }`}
                style={{ 
                  minHeight: 'auto', // Increased card height
                  height: '100%'
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-xl md:rounded-2xl lg:rounded-2xl 2xl:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 lg:mb-8 2xl:mb-10 shadow-lg"
                >
                  {React.createElement(getIcon(value.icon), { className: "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 text-white" })}
                </motion.div>
                
                <h3 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-[#8B5E3C] font-serif mb-3 md:mb-4 lg:mb-5 2xl:mb-6">
                  {value.title}
                </h3>
                
                <p className="text-[#6b4a2f] leading-relaxed lg:leading-loose text-sm md:text-base lg:text-lg 2xl:text-xl mb-3 md:mb-4 lg:mb-5 2xl:mb-6 flex-grow">
                  {value.description}
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 text-[#8B5E3C] font-semibold text-xs md:text-sm lg:text-base 2xl:text-lg pb-4 sm:pb-6 md:pb-0"
                >
                  <span>{t('about.clickForDetails')}</span>
                </motion.div>
              </motion.div>
            ))}

            {/* In-place Modal */}
            <AnimatePresence>
              {isModalOpen && selectedValue && (
                <>
                  {/* Desktop Modal */}
                  <motion.div
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="hidden md:flex fixed inset-0 bg-black/50 backdrop-blur-sm z-40 items-center justify-center p-4 lg:p-6 2xl:p-8"
                    onClick={handleCloseModal}
                  >
                    <motion.div
                      variants={cardModalVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="bg-white rounded-3xl lg:rounded-3xl 2xl:rounded-4xl shadow-2xl w-full max-w-4xl lg:max-w-5xl 2xl:max-w-6xl mx-auto max-h-[85vh] overflow-hidden flex flex-col"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Modal Header */}
                      <div className="flex-shrink-0 p-6 md:p-8 lg:p-10 2xl:p-12 border-b border-amber-100 bg-white">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4 md:gap-6 lg:gap-8 2xl:gap-10 flex-1">
                            <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-xl md:rounded-2xl lg:rounded-2xl 2xl:rounded-3xl flex items-center justify-center flex-shrink-0 mt-1">
                              {React.createElement(getIcon(selectedValue.icon), { className: "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 text-white" })}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-[#8B5E3C] font-serif mb-2 md:mb-3 lg:mb-4 2xl:mb-5">
                                {selectedValue.title}
                              </h3>
                              <p className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-[#6b4a2f] leading-relaxed lg:leading-loose">
                                {selectedValue.description}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={handleCloseModal}
                            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 2xl:w-14 2xl:h-14 flex items-center justify-center rounded-full hover:bg-amber-50 transition-colors flex-shrink-0 ml-4 md:ml-6 lg:ml-8 2xl:ml-10"
                          >
                            <X className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8 text-[#8B5E3C]" />
                          </button>
                        </div>
                      </div>

                      {/* Modal Content */}
                      <div className="flex-1 overflow-y-auto">
                        <div className="p-6 md:p-8 lg:p-10 2xl:p-12">
                          {valueDetails[selectedValue.title] && (
                            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 2xl:gap-12">
                              {/* Left Column */}
                              <div className="space-y-6 md:space-y-8 lg:space-y-10 2xl:space-y-12">
                                {/* Details Section */}
                                <div>
                                  <h4 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-[#8B5E3C] mb-3 md:mb-4 lg:mb-5 2xl:mb-6 flex items-center gap-2 md:gap-3 lg:gap-4 2xl:gap-5">
                                    <span className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5 bg-[#8B5E3C] rounded-full"></span>
                                    {t('about.modal.details')}
                                  </h4>
                                  <p className="text-[#6b4a2f] leading-relaxed lg:leading-loose text-base md:text-lg lg:text-xl 2xl:text-2xl">
                                    {valueDetails[selectedValue.title].details}
                                  </p>
                                </div>

                                {/* Commitment Section */}
                                <div>
                                  <h4 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-[#8B5E3C] mb-3 md:mb-4 lg:mb-5 2xl:mb-6 flex items-center gap-2 md:gap-3 lg:gap-4 2xl:gap-5">
                                    <span className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5 bg-[#8B5E3C] rounded-full"></span>
                                    {t('about.modal.commitment')}
                                  </h4>
                                  <p className="text-[#6b4a2f] leading-relaxed lg:leading-loose text-base md:text-lg lg:text-xl 2xl:text-2xl">
                                    {valueDetails[selectedValue.title].commitment}
                                  </p>
                                </div>
                              </div>

                              {/* Right Column - Benefits */}
                              <div>
                                <h4 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-[#8B5E3C] mb-3 md:mb-4 lg:mb-5 2xl:mb-6 flex items-center gap-2 md:gap-3 lg:gap-4 2xl:gap-5">
                                  <span className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5 bg-[#8B5E3C] rounded-full"></span>
                                  {t('about.modal.benefits')}
                                </h4>
                                <ul className="space-y-3 md:space-y-4 lg:space-y-5 2xl:space-y-6">
                                  {valueDetails[selectedValue.title].benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3 md:gap-4 lg:gap-5 2xl:gap-6 text-[#6b4a2f] text-base md:text-lg lg:text-xl 2xl:text-2xl">
                                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 lg:w-2.5 lg:h-2.5 2xl:w-3 2xl:h-3 bg-[#D1A15D] rounded-full mt-2 md:mt-3 lg:mt-3.5 2xl:mt-4 flex-shrink-0"></span>
                                      <span className="leading-relaxed lg:leading-loose">{benefit}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          {/* Footer */}
                          <div className="pt-6 md:pt-8 lg:pt-10 2xl:pt-12 mt-6 md:mt-8 lg:mt-10 2xl:mt-12 border-t border-amber-100">
                            <p className="text-center text-[#8B5E3C] font-semibold italic text-base md:text-lg lg:text-xl 2xl:text-2xl">
                              {t('about.modal.footer')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Mobile Modal */}
                  {/* <motion.div
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={handleCloseModal}
                  >
                    <motion.div
                      variants={mobileModalVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 max-h-[85vh] overflow-hidden"
                      onClick={(e) => e.stopPropagation()}
                    >
                    
                      <div className="flex-shrink-0 p-6 border-b border-amber-100 bg-white sticky top-0">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-2xl flex items-center justify-center flex-shrink-0">
                              {React.createElement(getIcon(selectedValue.icon), { className: "w-6 h-6 text-white" })}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-xl font-bold text-[#8B5E3C] font-serif mb-2">
                                {selectedValue.title}
                              </h3>
                              <p className="text-base text-[#6b4a2f] leading-relaxed">
                                {selectedValue.description}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={handleCloseModal}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-amber-50 transition-colors flex-shrink-0 ml-4"
                          >
                            <X className="w-4 h-4 text-[#8B5E3C]" />
                          </button>
                        </div>
                     
                        <div className="flex justify-center">
                          <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>

                      <div className="flex-1 overflow-y-auto">
                        <div className="p-6">
                          {valueDetails[selectedValue.title] && (
                            <div className="space-y-6">
                             
                              <div>
                                <h4 className="text-lg font-bold text-[#8B5E3C] mb-3 flex items-center gap-2">
                                  <span className="w-2 h-2 bg-[#8B5E3C] rounded-full"></span>
                                  {t('about.modal.details')}
                                </h4>
                                <p className="text-[#6b4a2f] leading-relaxed text-base">
                                  {valueDetails[selectedValue.title].details}
                                </p>
                              </div>

                             
                              <div>
                                <h4 className="text-lg font-bold text-[#8B5E3C] mb-3 flex items-center gap-2">
                                  <span className="w-2 h-2 bg-[#8B5E3C] rounded-full"></span>
                                  {t('about.modal.commitment')}
                                </h4>
                                <p className="text-[#6b4a2f] leading-relaxed text-base">
                                  {valueDetails[selectedValue.title].commitment}
                                </p>
                              </div>

                           
                              <div>
                                <h4 className="text-lg font-bold text-[#8B5E3C] mb-3 flex items-center gap-2">
                                  <span className="w-2 h-2 bg-[#8B5E3C] rounded-full"></span>
                                  {t('about.modal.benefits')}
                                </h4>
                                <ul className="space-y-3">
                                  {valueDetails[selectedValue.title].benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3 text-[#6b4a2f] text-base">
                                      <span className="w-1.5 h-1.5 bg-[#D1A15D] rounded-full mt-2 flex-shrink-0"></span>
                                      <span className="leading-relaxed">{benefit}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          
                          <div className="pt-6 mt-6 border-t border-amber-100">
                            <p className="text-center text-[#8B5E3C] font-semibold italic text-base">
                              {t('about.modal.footer')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div> */}

                  {/* Mobile Modal */}
<motion.div
  variants={overlayVariants}
  initial="hidden"
  animate="visible"
  exit="hidden"
  className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 overflow-hidden"
  onClick={handleCloseModal}
>
  <motion.div
    variants={mobileModalVariants}
    initial="hidden"
    animate="visible"
    exit="hidden"
    className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 max-h-[85vh] flex flex-col"
    onClick={(e) => e.stopPropagation()}
  >
    {/* Drag Handle */}
    <div className="flex-shrink-0 flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing">
      <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
    </div>

    {/* Modal Header - Fixed */}
    <div className="flex-shrink-0 p-6 border-b border-amber-100 bg-white">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4 flex-1">
          <div className="w-12 h-12 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-2xl flex items-center justify-center flex-shrink-0">
            {React.createElement(getIcon(selectedValue.icon), { className: "w-6 h-6 text-white" })}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-[#8B5E3C] font-serif mb-2">
              {selectedValue.title}
            </h3>
            <p className="text-base text-[#6b4a2f] leading-relaxed">
              {selectedValue.description}
            </p>
          </div>
        </div>
        <button
          onClick={handleCloseModal}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-amber-50 transition-colors flex-shrink-0 ml-4"
        >
          <X className="w-4 h-4 text-[#8B5E3C]" />
        </button>
      </div>
    </div>

    {/* Scrollable Content Area */}
    <div className="flex-1 overflow-y-auto">
      <div className="p-6">
        {valueDetails[selectedValue.title] && (
          <div className="space-y-6">
            {/* Details Section */}
            <div>
              <h4 className="text-lg font-bold text-[#8B5E3C] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#8B5E3C] rounded-full"></span>
                {t('about.modal.details')}
              </h4>
              <p className="text-[#6b4a2f] leading-relaxed text-base">
                {valueDetails[selectedValue.title].details}
              </p>
            </div>

            {/* Commitment Section */}
            <div>
              <h4 className="text-lg font-bold text-[#8B5E3C] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#8B5E3C] rounded-full"></span>
                {t('about.modal.commitment')}
              </h4>
              <p className="text-[#6b4a2f] leading-relaxed text-base">
                {valueDetails[selectedValue.title].commitment}
              </p>
            </div>

            {/* Benefits Section */}
            <div>
              <h4 className="text-lg font-bold text-[#8B5E3C] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#8B5E3C] rounded-full"></span>
                {t('about.modal.benefits')}
              </h4>
              <ul className="space-y-3">
                {valueDetails[selectedValue.title].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#6b4a2f] text-base">
                    <span className="w-1.5 h-1.5 bg-[#D1A15D] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="pt-6 mt-6 border-t border-amber-100">
          <p className="text-center text-[#8B5E3C] font-semibold italic text-base">
            {t('about.modal.footer')}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
</motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 lg:py-28 2xl:py-32 bg-amber-50/20">
        {/* REMOVED container class */}
        <div className="w-full px-4 md:px-6 lg:px-8 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16 lg:mb-20 2xl:mb-24"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-bold text-[#8B5E3C] mb-4 md:mb-6 lg:mb-8 2xl:mb-10">
              {t('about.gallery.title')}
            </h2>
            <div className="h-1 w-16 md:w-20 lg:w-24 2xl:w-28 2xl:h-1.5 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 2xl:gap-10 max-w-full mx-auto" // Changed to max-w-full
          >
            {[image2, image3, image4, image5].map((src, index) => (
              <motion.div
                key={index}
                variants={valueCardVariants}
                custom={index}
                whileHover="hover"
                className="relative group overflow-hidden rounded-xl md:rounded-2xl lg:rounded-2xl 2xl:rounded-3xl shadow-lg"
              >
                <img
                  src={src}
                  alt={t('about.gallery.imageAlt', { number: index + 1 })}
                  className="w-full h-48 md:h-64 lg:h-72 2xl:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6 lg:p-6 2xl:p-8">
                  <span className="text-white font-semibold text-base md:text-lg lg:text-xl 2xl:text-2xl">
                    {t('about.gallery.memory', { number: index + 1 })}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {isGalleryModalOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeGalleryModal}
          >
            <motion.div
              variants={galleryModalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative w-full max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeGalleryModal}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <motion.img
                  key={currentGalleryIndex}
                  src={galleryImages[currentGalleryIndex].src}
                  alt={galleryImages[currentGalleryIndex].alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Navigation Arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-lg backdrop-blur-sm">
                  {currentGalleryIndex + 1} / {galleryImages.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex justify-center space-x-3 mt-6 overflow-x-auto py-2">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentGalleryIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === currentGalleryIndex 
                        ? 'border-white scale-110' 
                        : 'border-white/50 hover:border-white'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .organic-shape {
          border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
        }
      `}</style>
      
      <style jsx global>{`
        .h-104 {
          height: 26rem;
        }
        .h-120 {
          height: 30rem;
        }
        .w-120 {
          width: 30rem;
        }
        
        /* Remove container constraints for large screens */
        @media (min-width: 2560px) {
          .container {
            max-width: none;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;