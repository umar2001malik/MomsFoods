// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Link, useLocation } from "react-router-dom";
// // import { useTranslation } from "react-i18next";
// // import logo from '../../assets/logo.png'

// // const Header = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [isLanguageOpen, setIsLanguageOpen] = useState(false);
// //   const location = useLocation();
// //   const { t, i18n } = useTranslation();

// //   // Check if current route is login or admin
// //   const isLoginOrAdminRoute = location.pathname === "/login" || location.pathname === "/admin";

// //   const navItems = [
// //     { name: t('header.home'), path: "/", key: "home" },
// //     { name: t('header.products'), path: "/products", key: "products" },
// //     { name: t('header.about'), path: "/about", key: "about" },
// //     { name: t('header.contact'), path: "/contact", key: "contact" },
// //   ];

// //   // Language switcher function
// //   const changeLanguage = (lng) => {
// //     i18n.changeLanguage(lng);
// //     setIsLanguageOpen(false);
// //     setIsMenuOpen(false);
// //   };

// //   // Scroll detection for sticky header effect
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const scrollTop = window.scrollY;
// //       setIsScrolled(scrollTop > 50);
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   // Close mobile menu when route changes
// //   useEffect(() => {
// //     setIsMenuOpen(false);
// //   }, [location]);

// //   // Close language dropdown when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (isLanguageOpen && !event.target.closest('.language-switcher')) {
// //         setIsLanguageOpen(false);
// //       }
// //     };

// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => document.removeEventListener('mousedown', handleClickOutside);
// //   }, [isLanguageOpen]);

// //   // Motion variants
// //   const headerVariants = {
// //     hidden: { y: -100, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: { type: "spring", stiffness: 200, damping: 25 },
// //     },
// //     scrolled: {
// //       backgroundColor: "rgba(255, 255, 255, 0.95)",
// //       boxShadow: "0 10px 30px -10px rgba(139, 94, 60, 0.2)",
// //       backdropFilter: "blur(30px)",
// //       transition: { duration: 0.3, ease: "easeOut" },
// //     },
// //   };

// //   const logoVariants = {
// //     initial: { scale: 1 },
// //     hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } },
// //     tap: { scale: 0.95 },
// //     pulse: {
// //       boxShadow: [
// //         "0 0 0 0 rgba(139, 94, 60, 0.5)",
// //         "0 0 0 15px rgba(139, 94, 60, 0)",
// //         "0 0 0 0 rgba(139, 94, 60, 0)",
// //       ],
// //       transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
// //     },
// //   };

// //   const letterVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: (i) => ({
// //       opacity: 1,
// //       y: 0,
// //       transition: { delay: i * 0.05, type: "spring", stiffness: 200, damping: 15 },
// //     }),
// //   };

// //   const navItemVariants = {
// //     hidden: { opacity: 0, y: -20 },
// //     visible: (i) => ({
// //       opacity: 1,
// //       y: 0,
// //       transition: { delay: 0.5 + i * 0.1, duration: 0.6, ease: "easeOut" },
// //     }),
// //     hover: {
// //       scale: 1.1,
// //       y: -3,
// //       color: "#D18642",
// //       transition: { type: "spring", stiffness: 400, damping: 10 },
// //     },
// //   };

// //   const loginButtonVariants = {
// //     hidden: { opacity: 0, scale: 0.8 },
// //     visible: {
// //       opacity: 1,
// //       scale: 1,
// //       transition: { delay: 0.8, type: "spring", stiffness: 300, damping: 20 }
// //     },
// //     hover: {
// //       scale: 1.05,
// //       y: -2,
// //       boxShadow: "0 10px 25px -5px rgba(139, 94, 60, 0.4)",
// //       transition: { type: "spring", stiffness: 400, damping: 10 }
// //     },
// //     tap: { scale: 0.95 }
// //   };

// //   const languageButtonVariants = {
// //     hidden: { opacity: 0, scale: 0.8 },
// //     visible: {
// //       opacity: 1,
// //       scale: 1,
// //       transition: { delay: 0.9, type: "spring", stiffness: 300, damping: 20 }
// //     },
// //     hover: {
// //       scale: 1.05,
// //       y: -2,
// //       boxShadow: "0 10px 25px -5px rgba(139, 94, 60, 0.4)",
// //       transition: { type: "spring", stiffness: 400, damping: 10 }
// //     },
// //     tap: { scale: 0.95 }
// //   };

// //   const underlineVariants = {
// //     hidden: { width: 0 },
// //     hover: { width: "100%", transition: { duration: 0.3, ease: "easeOut" } },
// //     active: {
// //       width: "100%",
// //       backgroundColor: "#8B5E3C",
// //       transition: { duration: 0.3, ease: "easeOut" },
// //     },
// //   };

// //   const mobileMenuVariants = {
// //     closed: { 
// //       opacity: 0, 
// //       height: 0,
// //       transition: { 
// //         duration: 0.3, 
// //         ease: "easeInOut",
// //         when: "afterChildren"
// //       } 
// //     },
// //     open: { 
// //       opacity: 1, 
// //       height: "auto",
// //       transition: { 
// //         duration: 0.4, 
// //         ease: "easeOut",
// //         when: "beforeChildren"
// //       } 
// //     },
// //   };

// //   const mobileItemVariants = {
// //     closed: { opacity: 0, x: -20 },
// //     open: (i) => ({
// //       opacity: 1,
// //       x: 0,
// //       transition: { delay: 0.1 + i * 0.1, type: "spring", stiffness: 200, damping: 15 },
// //     }),
// //   };

// //   const menuButtonVariants = {
// //     initial: { scale: 1 },
// //     tap: { scale: 0.9 },
// //     hover: { scale: 1.1 },
// //   };

// //   const languageDropdownVariants = {
// //     closed: {
// //       opacity: 0,
// //       scale: 0.8,
// //       y: -10,
// //       transition: { duration: 0.2 }
// //     },
// //     open: {
// //       opacity: 1,
// //       scale: 1,
// //       y: 0,
// //       transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 20 }
// //     }
// //   };

// //   const particleVariants = {
// //     hidden: { opacity: 0, scale: 0, x: 0, y: 0 },
// //     visible: (i) => ({
// //       opacity: [0, 1, 0],
// //       scale: [0, 1, 0],
// //       x: Math.random() * 20 - 10,
// //       y: Math.random() * 20 - 10,
// //       transition: { duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeOut" },
// //     }),
// //   };

// //   const scrollBarVariants = {
// //     initial: { scaleX: 0 },
// //     animate: {
// //       scaleX: isScrolled ? 1 : 0,
// //       background: [
// //         "linear-gradient(to right, #8B5E3C, #D1A15D)",
// //         "linear-gradient(to right, #D1A15D, #8B5E3C)",
// //         "linear-gradient(to right, #8B5E3C, #D1A15D)",
// //       ],
// //       transition: {
// //         scaleX: { duration: 0.3 },
// //         background: { duration: 2, repeat: Infinity, ease: "linear" },
// //       },
// //     },
// //   };

// //   const logoText = "MOM'S NATURALS".split("");

// //   // Get current language name for display
// //   const getCurrentLanguageName = () => {
// //     switch(i18n.language) {
// //       case 'en': return 'English';
// //       case 'tr': return 'Türkçe';
// //       case 'nl': return 'Nederlands';
// //       case 'ar': return 'العربية';
// //       default: return 'English';
// //     }
// //   };

// //   return (
// //     <motion.header
// //       variants={headerVariants}
// //       initial="hidden"
// //       animate={["visible", isScrolled ? "scrolled" : ""]}
// //       className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl z-50 border-b border-white/20"
// //     >
// //       <div className="w-full max-w-[4000px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-3 sm:py-4 flex justify-between items-center">
        
// //         {/* Logo */}
// //         <motion.div
// //           variants={logoVariants}
// //           whileHover="hover"
// //           whileTap="tap"
// //           animate="pulse"
// //           className="cursor-pointer relative"
// //         >
// //           <Link to="/">
// //             <motion.div
// //               variants={logoVariants}
// //               whileHover="hover"
// //               whileTap="tap"
// //               animate="pulse"
// //               className="cursor-pointer relative"
// //             >
// //               <img 
// //                 src={logo} 
// //                 alt="Logo" 
// //                 className="w-32 h-auto" // Adjust size as needed
// //               />
// //             </motion.div>
// //           </Link>

// //           {/* Particle effect */}
// //           <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //             {[...Array(3)].map((_, i) => (
// //               <motion.div
// //                 key={i}
// //                 custom={i}
// //                 variants={particleVariants}
// //                 initial="hidden"
// //                 animate="visible"
// //                 className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-[#D1A15D]/50 rounded-full"
// //               />
// //             ))}
// //           </div>
// //         </motion.div>

// //         {/* Desktop Navigation */}
// //         <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10">
// //           {navItems.map((item, index) => (
// //             <motion.div
// //               key={item.path}
// //               custom={index}
// //               variants={navItemVariants}
// //               initial="hidden"
// //               animate="visible"
// //               whileHover="hover"
// //               className="relative"
// //             >
// //               <Link
// //                 to={item.path}
// //                 className={`text-[#8B5E3C] font-medium text-sm lg:text-base xl:text-lg 2xl:text-xl transition-colors duration-300 relative py-2 px-1 ${
// //                   location.pathname === item.path ? "text-[#D18642] font-semibold" : ""
// //                 }`}
// //               >
// //                 {item.name}
// //                 <motion.span
// //                   variants={underlineVariants}
// //                   animate={location.pathname === item.path ? "active" : "hidden"}
// //                   whileHover="hover"
// //                   className="absolute bottom-0 left-0 h-0.5 bg-[#D18642]"
// //                 />
// //               </Link>
// //             </motion.div>
// //           ))}
          
// //           {/* Language Switcher - Desktop - Hidden on login and admin routes */}
// //           {!isLoginOrAdminRoute && (
// //             <motion.div
// //               variants={languageButtonVariants}
// //               initial="hidden"
// //               animate="visible"
// //               whileHover="hover"
// //               whileTap="tap"
// //               className="relative language-switcher"
// //             >
// //               <button
// //                 onClick={() => setIsLanguageOpen(!isLanguageOpen)}
// //                 className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white px-4 lg:px-6 py-2 lg:py-2 rounded-2xl font-semibold text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group min-w-[100px]"
// //               >
// //                 <span className="relative z-10">{getCurrentLanguageName()}</span>
// //                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
// //               </button>

// //               {/* Language Dropdown */}
// //               <AnimatePresence>
// //                 {isLanguageOpen && (
// //                   <motion.div
// //                     variants={languageDropdownVariants}
// //                     initial="closed"
// //                     animate="open"
// //                     exit="closed"
// //                     className="absolute top-full right-0 mt-2 w-40 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 z-50"
// //                   >
// //                     <div className="py-2">
// //                       <button 
// //                         onClick={() => changeLanguage('en')}
// //                         className={`w-full text-left px-4 py-3 hover:bg-[#8B5E3C]/10 transition-colors duration-200 ${
// //                           i18n.language === 'en' ? 'text-[#8B5E3C] font-semibold bg-[#8B5E3C]/5' : 'text-gray-700'
// //                         }`}
// //                       >
// //                         English
// //                       </button>
// //                       <button 
// //                         onClick={() => changeLanguage('tr')}
// //                         className={`w-full text-left px-4 py-3 hover:bg-[#8B5E3C]/10 transition-colors duration-200 ${
// //                           i18n.language === 'tr' ? 'text-[#8B5E3C] font-semibold bg-[#8B5E3C]/5' : 'text-gray-700'
// //                         }`}
// //                       >
// //                         Türkçe
// //                       </button>
// //                       <button 
// //                         onClick={() => changeLanguage('nl')}
// //                         className={`w-full text-left px-4 py-3 hover:bg-[#8B5E3C]/10 transition-colors duration-200 ${
// //                           i18n.language === 'nl' ? 'text-[#8B5E3C] font-semibold bg-[#8B5E3C]/5' : 'text-gray-700'
// //                         }`}
// //                       >
// //                         Nederlands
// //                       </button>
// //                       <button 
// //                         onClick={() => changeLanguage('ar')}
// //                         className={`w-full text-left px-4 py-3 hover:bg-[#8B5E3C]/10 transition-colors duration-200 ${
// //                           i18n.language === 'ar' ? 'text-[#8B5E3C] font-semibold bg-[#8B5E3C]/5' : 'text-gray-700'
// //                         }`}
// //                       >
// //                         العربية
// //                       </button>
// //                     </div>
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </motion.div>
// //           )}

// //           {/* Login Button - Desktop */}
// //           <motion.div
// //             variants={loginButtonVariants}
// //             initial="hidden"
// //             animate="visible"
// //             whileHover="hover"
// //             whileTap="tap"
// //             className="relative"
// //           >
// //             <Link
// //               to="/login"
// //               className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white px-4 lg:px-6 xl:px-8 2xl:px-10 py-2 lg:py-3 rounded-2xl font-semibold text-sm lg:text-base xl:text-lg 2xl:text-xl transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
// //             >
// //               <span className="relative z-10">{t('header.login')}</span>
             
// //               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
// //             </Link>
// //           </motion.div>
// //         </nav>

// //         {/* Mobile Menu Button */}
// //         <motion.button
// //           variants={menuButtonVariants}
// //           whileHover="hover"
// //           whileTap="tap"
// //           className="md:hidden text-[#8B5E3C] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center relative"
// //           onClick={() => setIsMenuOpen(!isMenuOpen)}
// //           aria-label="Toggle menu"
// //         >
// //           <motion.div
// //             animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
// //             transition={{ duration: 0.3 }}
// //             className="w-6 h-0.5 bg-[#8B5E3C] absolute"
// //           />
// //           <motion.div
// //             animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
// //             transition={{ duration: 0.2 }}
// //             className="w-6 h-0.5 bg-[#8B5E3C] absolute"
// //             style={{ y: -6 }}
// //           />
// //           <motion.div
// //             animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
// //             transition={{ duration: 0.3 }}
// //             className="w-6 h-0.5 bg-[#8B5E3C] absolute"
// //             style={{ y: 6 }}
// //           />
// //         </motion.button>
// //       </div>

// //       {/* Mobile Menu */}
// //       <AnimatePresence>
// //         {isMenuOpen && (
// //           <motion.div
// //             variants={mobileMenuVariants}
// //             initial="closed"
// //             animate="open"
// //             exit="closed"
// //             className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-white/20 shadow-2xl overflow-hidden"
// //           >
// //             <div className="px-4 sm:px-6 py-4 flex flex-col space-y-2">
// //               {navItems.map((item, index) => (
// //                 <motion.div
// //                   key={item.path}
// //                   custom={index}
// //                   variants={mobileItemVariants}
// //                   initial="closed"
// //                   animate="open"
// //                   exit="closed"
// //                 >
// //                   <Link
// //                     to={item.path}
// //                     onClick={() => setIsMenuOpen(false)}
// //                     className={`block text-left py-3 sm:py-4 px-4 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 ${
// //                       location.pathname === item.path
// //                         ? "bg-gradient-to-r from-[#8B5E3C]/10 to-[#D1A15D]/10 text-[#D18642] border-l-4 border-[#8B5E3C]"
// //                         : "text-[#8B5E3C] hover:bg-white/50"
// //                     }`}
// //                   >
// //                     {item.name}
// //                   </Link>
// //                 </motion.div>
// //               ))}

// //               {/* Language Switcher - Mobile - Hidden on login and admin routes */}
// //               {!isLoginOrAdminRoute && (
// //                 <motion.div
// //                   custom={navItems.length}
// //                   variants={mobileItemVariants}
// //                   initial="closed"
// //                   animate="open"
// //                   exit="closed"
// //                   className="pt-2"
// //                 >
// //                   <div className="grid grid-cols-2 gap-2 p-2">
// //                     <button 
// //                       onClick={() => changeLanguage('en')}
// //                       className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
// //                         i18n.language === 'en' ? 'bg-[#8B5E3C] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// //                       }`}
// //                     >
// //                       English
// //                     </button>
// //                     <button 
// //                       onClick={() => changeLanguage('tr')}
// //                       className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
// //                         i18n.language === 'tr' ? 'bg-[#8B5E3C] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// //                       }`}
// //                     >
// //                       Türkçe
// //                     </button>
// //                     <button 
// //                       onClick={() => changeLanguage('nl')}
// //                       className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
// //                         i18n.language === 'nl' ? 'bg-[#8B5E3C] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// //                       }`}
// //                     >
// //                       Nederlands
// //                     </button>
// //                     <button 
// //                       onClick={() => changeLanguage('ar')}
// //                       className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
// //                         i18n.language === 'ar' ? 'bg-[#8B5E3C] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// //                       }`}
// //                     >
// //                       العربية
// //                     </button>
// //                   </div>
// //                 </motion.div>
// //               )}
              
// //               {/* Login Button - Mobile */}
// //               <motion.div
// //                 custom={navItems.length + 1}
// //                 variants={mobileItemVariants}
// //                 initial="closed"
// //                 animate="open"
// //                 exit="closed"
// //                 className="pt-4 mt-2 border-t border-[#8B5E3C]/20"
// //               >
// //                 <Link
// //                   to="/login"
// //                   onClick={() => setIsMenuOpen(false)}
// //                   className="block text-center py-3 sm:py-4 px-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white shadow-lg hover:shadow-xl"
// //                 >
// //                   {t('header.login')}
// //                 </Link>
// //               </motion.div>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* Scroll Progress Bar */}
// //       <motion.div
// //         variants={scrollBarVariants}
// //         initial="initial"
// //         animate="animate"
// //         className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D]"
// //         style={{ transformOrigin: "left", width: "100%" }}
// //       />
// //     </motion.header>
// //   );
// // };

// // export default Header;




// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link, useLocation } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import logo from '../../assets/logo.png'

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isLanguageOpen, setIsLanguageOpen] = useState(false);
//   const location = useLocation();
//   const { t, i18n } = useTranslation();

//   // Modified condition to include products route
//   const isRestrictedRoute = location.pathname === "/login" || 
//                           location.pathname === "/admin" || 
//                           location.pathname === "/products";

//   const navItems = [
//     { name: t('header.home'), path: "/", key: "home" },
//     { name: t('header.products'), path: "/products", key: "products" },
//     { name: t('header.about'), path: "/about", key: "about" },
//     { name: t('header.contact'), path: "/contact", key: "contact" },
//   ];

//   // Language switcher function with event prevention
//   const changeLanguage = (lng, event) => {
//     event.stopPropagation(); // Prevent click event from bubbling up
//     event.preventDefault(); // Prevent default link behavior
//     i18n.changeLanguage(lng);
//     setIsLanguageOpen(false);
//     setIsMenuOpen(false);
//   };

//   // Scroll detection for sticky header effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setIsScrolled(scrollTop > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [location]);

//   // Close language dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isLanguageOpen && !event.target.closest('.language-switcher')) {
//         setIsLanguageOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isLanguageOpen]);

//   // Motion variants (unchanged)
//   const headerVariants = {
//     hidden: { y: -100, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 200, damping: 25 },
//     },
//     scrolled: {
//       backgroundColor: "rgba(255, 255, 255, 0.95)",
//       boxShadow: "0 10px 30px -10px rgba(139, 94, 60, 0.2)",
//       backdropFilter: "blur(30px)",
//       transition: { duration: 0.3, ease: "easeOut" },
//     },
//   };

//   const logoVariants = {
//     initial: { scale: 1 },
//     hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } },
//     tap: { scale: 0.95 },
//     pulse: {
//       boxShadow: [
//         "0 0 0 0 rgba(139, 94, 60, 0.5)",
//         "0 0 0 15px rgba(139, 94, 60, 0)",
//         "0 0 0 0 rgba(139, 94, 60, 0)",
//       ],
//       transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
//     },
//   };

//   const letterVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.05, type: "spring", stiffness: 200, damping: 15 },
//     }),
//   };

//   const navItemVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: 0.5 + i * 0.1, duration: 0.6, ease: "easeOut" },
//     }),
//     hover: {
//       scale: 1.1,
//       y: -3,
//       color: "#D18642",
//       transition: { type: "spring", stiffness: 400, damping: 10 },
//     },
//   };

//   const loginButtonVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { delay: 0.8, type: "spring", stiffness: 300, damping: 20 }
//     },
//     hover: {
//       scale: 1.05,
//       y: -2,
//       boxShadow: "0 10px 25px -5px rgba(139, 94, 60, 0.4)",
//       transition: { type: "spring", stiffness: 400, damping: 10 }
//     },
//     tap: { scale: 0.95 }
//   };

//   const languageButtonVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { delay: 0.9, type: "spring", stiffness: 300, damping: 20 }
//     },
//     hover: {
//       scale: 1.05,
//       y: -2,
//       boxShadow: "0 10px 25px -5px rgba(139, 94, 60, 0.4)",
//       transition: { type: "spring", stiffness: 400, damping: 10 }
//     },
//     tap: { scale: 0.95 }
//   };

//   const underlineVariants = {
//     hidden: { width: 0 },
//     hover: { width: "100%", transition: { duration: 0.3, ease: "easeOut" } },
//     active: {
//       width: "100%",
//       backgroundColor: "#8B5E3C",
//       transition: { duration: 0.3, ease: "easeOut" },
//     },
//   };

//   const mobileMenuVariants = {
//     closed: { 
//       opacity: 0, 
//       height: 0,
//       transition: { 
//         duration: 0.3, 
//         ease: "easeInOut",
//         when: "afterChildren"
//       } 
//     },
//     open: { 
//       opacity: 1, 
//       height: "auto",
//       transition: { 
//         duration: 0.4, 
//         ease: "easeOut",
//         when: "beforeChildren"
//       } 
//     },
//   };

//   const mobileItemVariants = {
//     closed: { opacity: 0, x: -20 },
//     open: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: { delay: 0.1 + i * 0.1, type: "spring", stiffness: 200, damping: 15 },
//     }),
//   };

//   const menuButtonVariants = {
//     initial: { scale: 1 },
//     tap: { scale: 0.9 },
//     hover: { scale: 1.1 },
//   };

//   const languageDropdownVariants = {
//     closed: {
//       opacity: 0,
//       scale: 0.8,
//       y: -10,
//       transition: { duration: 0.2 }
//     },
//     open: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 20 }
//     }
//   };

//   const particleVariants = {
//     hidden: { opacity: 0, scale: 0, x: 0, y: 0 },
//     visible: (i) => ({
//       opacity: [0, 1, 0],
//       scale: [0, 1, 0],
//       x: Math.random() * 20 - 10,
//       y: Math.random() * 20 - 10,
//       transition: { duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeOut" },
//     }),
//   };

//   const scrollBarVariants = {
//     initial: { scaleX: 0 },
//     animate: {
//       scaleX: isScrolled ? 1 : 0,
//       background: [
//         "linear-gradient(to right, #8B5E3C, #D1A15D)",
//         "linear-gradient(to right, #D1A15D, #8B5E3C)",
//         "linear-gradient(to right, #8B5E3C, #D1A15D)",
//       ],
//       transition: {
//         scaleX: { duration: 0.3 },
//         background: { duration: 2, repeat: Infinity, ease: "linear" },
//       },
//     },
//   };

//   const logoText = "MOM'S NATURALS".split("");

//   const getCurrentLanguageName = () => {
//     switch(i18n.language) {
//       case 'en': return 'English';
//       case 'tr': return 'Türkçe';
//       case 'nl': return 'Nederlands';
//       case 'ar': return 'العربية';
//       default: return 'English';
//     }
//   };

//   return (
//     <motion.header
//       variants={headerVariants}
//       initial="hidden"
//       animate={["visible", isScrolled ? "scrolled" : ""]}
//       className="  top-0 left-0 right-0 bg-white/80 backdrop-blur-xl z-50 border-b border-white/20"
//     >
//       <div className="w-full max-w-[4000px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-3 sm:py-4 flex justify-between items-center">
        
//         {/* Logo */}
//         <motion.div
//           variants={logoVariants}
//           whileHover="hover"
//           whileTap="tap"
//           animate="pulse"
//           className="cursor-pointer relative"
//         >
//           <Link to="/">
//             <motion.div
//               variants={logoVariants}
//               whileHover="hover"
//               whileTap="tap"
//               animate="pulse"
//               className="cursor-pointer relative"
//             >
//               <img 
//                 src={logo} 
//                 alt="Logo" 
//                 className="w-32 h-auto"
//               />
//             </motion.div>
//           </Link>

//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {[...Array(3)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 custom={i}
//                 variants={particleVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-[#D1A15D]/50 rounded-full"
//               />
//             ))}
//           </div>
//         </motion.div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10">
//           {navItems.map((item, index) => (
//             <motion.div
//               key={item.path}
//               custom={index}
//               variants={navItemVariants}
//               initial="hidden"
//               animate="visible"
//               whileHover="hover"
//               className="relative"
//             >
//               <Link
//                 to={item.path}
//                 className={`text-[#8B5E3C] font-medium text-sm lg:text-base xl:text-lg 2xl:text-xl transition-colors duration-300 relative py-2 px-1 ${
//                   location.pathname === item.path ? "text-[#D18642] font-semibold" : ""
//                 }`}
//               >
//                 {item.name}
//                 <motion.span
//                   variants={underlineVariants}
//                   animate={location.pathname === item.path ? "active" : "hidden"}
//                   whileHover="hover"
//                   className="absolute bottom-0 left-0 h-0.5 bg-[#D18642]"
//                 />
//               </Link>
//             </motion.div>
//           ))}
          
//           {/* Language Switcher - Desktop - Hidden on restricted routes */}
//           {!isRestrictedRoute && (
//             <motion.div
//               variants={languageButtonVariants}
//               initial="hidden"
//               animate="visible"
//               whileHover="hover"
//               whileTap="tap"
//               className="relative language-switcher"
//             >
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setIsLanguageOpen(!isLanguageOpen)
//                 }}
//                 className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white px-4 lg:px-6 py-2 lg:py-2 rounded-2xl font-semibold text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group min-w-[100px]"
//               >
//                 <span className="relative z-10">{getCurrentLanguageName()}</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//               </button>

//               <AnimatePresence>
//                 {isLanguageOpen && (
//                   <motion.div
//                     variants={languageDropdownVariants}
//                     initial="closed"
//                     animate="open"
//                     exit="closed"
//                     className="absolute top-full right-0 mt-2 w-40 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 z-50"
//                   >
//                     <div className="py-2">
//                       <button 
//                         onClick={(e) => changeLanguage('en', e)}
//                         className={`w-full text-left px-4 py-3 hover:bg-[#8B5E3C]/10 transition-colors duration-200 ${
//                           i18n.language === 'en' ? 'text-[#8B5E3C] font-semibold bg-[#8B5E3C]/5' : 'text-gray-700'
//                         }`}
//                       >
//                         English
//                       </button>
//                       <button 
//                         onClick={(e) => changeLanguage('tr', e)}
//                         className={`w-full text-left px-4 py-3 hover:bg-[#8B5E3C]/10 transition-colors duration-200 ${
//                           i18n.language === 'tr' ? 'text-[#8B5E3C] font-semibold bg-[#8B5E3C]/5' : 'text-gray-700'
//                         }`}
//                       >
//                         Türkçe
//                       </button>
//                       <button 
//                         onClick={(e) => changeLanguage('nl', e)}
//                         className={`w-full text-left px-4 py-3 hover:bg-[#8B5E3C]/10 transition-colors duration-200 ${
//                           i18n.language === 'nl' ? 'text-[#8B5E3C] font-semibold bg-[#8B5E3C]/5' : 'text-gray-700'
//                         }`}
//                       >
//                         Nederlands
//                       </button>
//                       <button 
//                         onClick={(e) => changeLanguage('ar', e)}
//                         className={`w-full text-left px-4 py-3 hover:bg-[#8B5E3C]/10 transition-colors duration-200 ${
//                           i18n.language === 'ar' ? 'text-[#8B5E3C] font-semibold bg-[#8B5E3C]/5' : 'text-gray-700'
//                         }`}
//                       >
//                         العربية
//                       </button>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           )}

//           {/* Login Button - Desktop */}
//           <motion.div
//             variants={loginButtonVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//             whileTap="tap"
//             className="relative"
//           >
//             <Link
//               to="/login"
//               className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white px-4 lg:px-6 xl:px-8 2xl:px-10 py-2 lg:py-3 rounded-2xl font-semibold text-sm lg:text-base xl:text-lg 2xl:text-xl transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
//             >
//               <span className="relative z-10">{t('header.login')}</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//             </Link>
//           </motion.div>
//         </nav>

//         {/* Mobile Menu Button */}
//         <motion.button
//           variants={menuButtonVariants}
//           whileHover="hover"
//           whileTap="tap"
//           className="md:hidden text-[#8B5E3C] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center relative"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           <motion.div
//             animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
//             transition={{ duration: 0.3 }}
//             className="w-6 h-0.5 bg-[#8B5E3C] absolute"
//           />
//           <motion.div
//             animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
//             transition={{ duration: 0.2 }}
//             className="w-6 h-0.5 bg-[#8B5E3C] absolute"
//             style={{ y: -6 }}
//           />
//           <motion.div
//             animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
//             transition={{ duration: 0.3 }}
//             className="w-6 h-0.5 bg-[#8B5E3C] absolute"
//             style={{ y: 6 }}
//           />
//         </motion.button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             variants={mobileMenuVariants}
//             initial="closed"
//             animate="open"
//             exit="closed"
//             className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-white/20 shadow-2xl overflow-hidden"
//           >
//             <div className="px-4 sm:px-6 py-4 flex flex-col space-y-2">
//               {navItems.map((item, index) => (
//                 <motion.div
//                   key={item.path}
//                   custom={index}
//                   variants={mobileItemVariants}
//                   initial="closed"
//                   animate="open"
//                   exit="closed"
//                 >
//                   <Link
//                     to={item.path}
//                     onClick={() => setIsMenuOpen(false)}
//                     className={`block text-left py-3 sm:py-4 px-4 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 ${
//                       location.pathname === item.path
//                         ? "bg-gradient-to-r from-[#8B5E3C]/10 to-[#D1A15D]/10 text-[#D18642] border-l-4 border-[#8B5E3C]"
//                         : "text-[#8B5E3C] hover:bg-white/50"
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 </motion.div>
//               ))}

//               {/* Language Switcher - Mobile - Hidden on restricted routes */}
//               {!isRestrictedRoute && (
//                 <motion.div
//                   custom={navItems.length}
//                   variants={mobileItemVariants}
//                   initial="closed"
//                   animate="open"
//                   exit="closed"
//                   className="pt-2"
//                 >
//                   <div className="grid grid-cols-2 gap-2 p-2">
//                     <button 
//                       onClick={(e) => changeLanguage('en', e)}
//                       className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
//                         i18n.language === 'en' ? 'bg-[#8B5E3C] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                       }`}
//                     >
//                       English
//                     </button>
//                     <button 
//                       onClick={(e) => changeLanguage('tr', e)}
//                       className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
//                         i18n.language === 'tr' ? 'bg-[#8B5E3C] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                       }`}
//                     >
//                       Türkçe
//                     </button>
//                     <button 
//                       onClick={(e) => changeLanguage('nl', e)}
//                       className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
//                         i18n.language === 'nl' ? 'bg-[#8B5E3C] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                       }`}
//                     >
//                       Nederlands
//                     </button>
//                     <button 
//                       onClick={(e) => changeLanguage('ar', e)}
//                       className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
//                         i18n.language === 'ar' ? 'bg-[#8B5E3C] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                       }`}
//                     >
//                       العربية
//                     </button>
//                   </div>
//                 </motion.div>
//               )}
              
//               {/* Login Button - Mobile */}
//               <motion.div
//                 custom={navItems.length + 1}
//                 variants={mobileItemVariants}
//                 initial="closed"
//                 animate="open"
//                 exit="closed"
//                 className="pt-4 mt-2 border-t border-[#8B5E3C]/20"
//               >
//                 <Link
//                   to="/login"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block text-center py-3 sm:py-4 px-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white shadow-lg hover:shadow-xl"
//                 >
//                   {t('header.login')}
//                 </Link>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.div
//         variants={scrollBarVariants}
//         initial="initial"
//         animate="animate"
//         className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D]"
//         style={{ transformOrigin: "left", width: "100%" }}
//       />
//     </motion.header>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link, useLocation } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import logo from '../../assets/logo.png'

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isLanguageOpen, setIsLanguageOpen] = useState(false);
//   const location = useLocation();
//   const { t, i18n } = useTranslation();

//   // Modified condition to include products route
//   const isRestrictedRoute = location.pathname === "/login" || 
//                           location.pathname === "/admin" || 
//                           location.pathname === "/products";

//   const navItems = [
//     { name: t('header.home'), path: "/", key: "home" },
//     { name: t('header.products'), path: "/products", key: "products" },
//     { name: t('header.about'), path: "/about", key: "about" },
//     { name: t('header.contact'), path: "/contact", key: "contact" },
//   ];

//   // Language switcher function with better event prevention
//   const changeLanguage = (lng, event) => {
//     if (event) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
//     i18n.changeLanguage(lng);
//     setIsLanguageOpen(false);
//     setIsMenuOpen(false);
//   };

//   // Toggle language dropdown with proper event handling
//   const toggleLanguageDropdown = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     setIsLanguageOpen(!isLanguageOpen);
//   };

//   // Scroll detection for sticky header effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setIsScrolled(scrollTop > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [location]);

//   // Close language dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isLanguageOpen && !event.target.closest('.language-switcher')) {
//         setIsLanguageOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isLanguageOpen]);

//   // Close dropdown when pressing escape key
//   useEffect(() => {
//     const handleEscape = (event) => {
//       if (event.key === 'Escape' && isLanguageOpen) {
//         setIsLanguageOpen(false);
//       }
//     };

//     document.addEventListener('keydown', handleEscape);
//     return () => document.removeEventListener('keydown', handleEscape);
//   }, [isLanguageOpen]);

//   // Motion variants
//   const headerVariants = {
//     hidden: { y: -100, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 200, damping: 25 },
//     },
//     scrolled: {
//       backgroundColor: "rgba(255, 255, 255, 0.95)",
//       boxShadow: "0 10px 30px -10px rgba(139, 94, 60, 0.2)",
//       backdropFilter: "blur(30px)",
//       transition: { duration: 0.3, ease: "easeOut" },
//     },
//   };

//   const logoVariants = {
//     initial: { scale: 1 },
//     hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } },
//     tap: { scale: 0.95 },
//     pulse: {
//       boxShadow: [
//         "0 0 0 0 rgba(139, 94, 60, 0.5)",
//         "0 0 0 15px rgba(139, 94, 60, 0)",
//         "0 0 0 0 rgba(139, 94, 60, 0)",
//       ],
//       transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
//     },
//   };

//   const navItemVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: 0.5 + i * 0.1, duration: 0.6, ease: "easeOut" },
//     }),
//     hover: {
//       scale: 1.1,
//       y: -3,
//       color: "#D18642",
//       transition: { type: "spring", stiffness: 400, damping: 10 },
//     },
//   };

//   const loginButtonVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { delay: 0.8, type: "spring", stiffness: 300, damping: 20 }
//     },
//     hover: {
//       scale: 1.05,
//       y: -2,
//       boxShadow: "0 10px 25px -5px rgba(139, 94, 60, 0.4)",
//       transition: { type: "spring", stiffness: 400, damping: 10 }
//     },
//     tap: { scale: 0.95 }
//   };

//   const languageButtonVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { delay: 0.9, type: "spring", stiffness: 300, damping: 20 }
//     },
//     hover: {
//       scale: 1.05,
//       y: -2,
//       boxShadow: "0 10px 25px -5px rgba(139, 94, 60, 0.4)",
//       transition: { type: "spring", stiffness: 400, damping: 10 }
//     },
//     tap: { scale: 0.95 }
//   };

//   const underlineVariants = {
//     hidden: { width: 0 },
//     hover: { width: "100%", transition: { duration: 0.3, ease: "easeOut" } },
//     active: {
//       width: "100%",
//       backgroundColor: "#8B5E3C",
//       transition: { duration: 0.3, ease: "easeOut" },
//     },
//   };

//   const mobileMenuVariants = {
//     closed: { 
//       opacity: 0, 
//       height: 0,
//       transition: { 
//         duration: 0.3, 
//         ease: "easeInOut",
//         when: "afterChildren"
//       } 
//     },
//     open: { 
//       opacity: 1, 
//       height: "auto",
//       transition: { 
//         duration: 0.4, 
//         ease: "easeOut",
//         when: "beforeChildren"
//       } 
//     },
//   };

//   const mobileItemVariants = {
//     closed: { opacity: 0, x: -20 },
//     open: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: { delay: 0.1 + i * 0.1, type: "spring", stiffness: 200, damping: 15 },
//     }),
//   };

//   const menuButtonVariants = {
//     initial: { scale: 1 },
//     tap: { scale: 0.9 },
//     hover: { scale: 1.1 },
//   };

//   const languageDropdownVariants = {
//     closed: {
//       opacity: 0,
//       scale: 0.8,
//       y: -10,
//       transition: { duration: 0.2 }
//     },
//     open: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 20 }
//     }
//   };

//   const particleVariants = {
//     hidden: { opacity: 0, scale: 0, x: 0, y: 0 },
//     visible: (i) => ({
//       opacity: [0, 1, 0],
//       scale: [0, 1, 0],
//       x: Math.random() * 20 - 10,
//       y: Math.random() * 20 - 10,
//       transition: { duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeOut" },
//     }),
//   };

//   const scrollBarVariants = {
//     initial: { scaleX: 0 },
//     animate: {
//       scaleX: isScrolled ? 1 : 0,
//       background: [
//         "linear-gradient(to right, #8B5E3C, #D1A15D)",
//         "linear-gradient(to right, #D1A15D, #8B5E3C)",
//         "linear-gradient(to right, #8B5E3C, #D1A15D)",
//       ],
//       transition: {
//         scaleX: { duration: 0.3 },
//         background: { duration: 2, repeat: Infinity, ease: "linear" },
//       },
//     },
//   };

//   const getCurrentLanguageName = () => {
//     switch(i18n.language) {
//       case 'en': return 'English';
//       case 'tr': return 'Türkçe';
//       case 'nl': return 'Nederlands';
//       case 'ar': return 'العربية';
//       default: return 'English';
//     }
//   };

//   return (
//     <motion.header
//       variants={headerVariants}
//       initial="hidden"
//       animate={["visible", isScrolled ? "scrolled" : ""]}
//       className="fixed  top-0 left-0 right-0 bg-white/80 backdrop-blur-xl z-50 border-b border-white/20"
//     >
//       <div className="w-full max-w-[4000px] mx-auto  px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-3 sm:py-4 flex justify-between items-center">
        
//         {/* Logo */}
//         <motion.div
//           variants={logoVariants}
//           whileHover="hover"
//           whileTap="tap"
//           animate="pulse"
//           className="cursor-pointer relative"
//         >
//           <Link to="/">
//             <motion.div
//               variants={logoVariants}
//               whileHover="hover"
//               whileTap="tap"
//               animate="pulse"
//               className="cursor-pointer relative"
//             >
//               <img 
//                 src={logo} 
//                 alt="Logo" 
//                 className="w-32 h-auto"
//               />
//             </motion.div>
//           </Link>

//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {[...Array(3)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 custom={i}
//                 variants={particleVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-[#D1A15D]/50 rounded-full"
//               />
//             ))}
//           </div>
//         </motion.div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10">
//           {navItems.map((item, index) => (
//             <motion.div
//               key={item.path}
//               custom={index}
//               variants={navItemVariants}
//               initial="hidden"
//               animate="visible"
//               whileHover="hover"
//               className="relative"
//             >
//               <Link
//                 to={item.path}
//                 className={`text-[#8B5E3C] font-medium text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl transition-colors duration-300 relative py-2 px-1 ${
//                   location.pathname === item.path ? "text-[#D18642] font-semibold" : ""
//                 }`}
//               >
//                 {item.name}
//                 <motion.span
//                   variants={underlineVariants}
//                   animate={location.pathname === item.path ? "active" : "hidden"}
//                   whileHover="hover"
//                   className="absolute bottom-0 left-0 h-0.5 bg-[#D18642]"
//                 />
//               </Link>
//             </motion.div>
//           ))}
          
//           {/* Language Switcher - Desktop - Hidden on restricted routes */}
//           {!isRestrictedRoute && (
//             <motion.div
//               variants={languageButtonVariants}
//               initial="hidden"
//               animate="visible"
//               whileHover="hover"
//               whileTap="tap"
//               className="relative language-switcher"
//             >
//               <button
//                 onClick={toggleLanguageDropdown}
//                 className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white px-4 lg:px-6 2xl:px-7 3xl:px-8 py-2 lg:py-2 2xl:py-2.5 3xl:py-3 rounded-2xl font-semibold text-sm lg:text-base 2xl:text-lg 3xl:text-xl transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group min-w-[100px] 3xl:min-w-[140px]"
//               >
//                 <span className="relative z-10">{getCurrentLanguageName()}</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//               </button>

//               <AnimatePresence>
//                 {isLanguageOpen && (
//                   <motion.div
//                     variants={languageDropdownVariants}
//                     initial="closed"
//                     animate="open"
//                     exit="closed"
//                     className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 z-[1000] overflow-visible"
//                   >
//                     <div className="py-2">
//                       <button 
//                         onClick={(e) => changeLanguage('en', e)}
//                         className={`w-full text-left px-4 py-3 hover:bg-[#8B5E3C]/10 transition-colors duration-200 text-sm lg:text-base 3xl:text-lg ${
//                           i18n.language === 'en' ? 'text-[#8B5E3C] font-semibold bg-[#8B5E3C]/5' : 'text-gray-700'
//                         }`}
//                       >
//                         English
//                       </button>
//                       <button 
//                         onClick={(e) => changeLanguage('tr', e)}
//                         className={`w-full text-left px-4 py-3 hover:bg-[#8B5E3C]/10 transition-colors duration-200 text-sm lg:text-base 3xl:text-lg ${
//                           i18n.language === 'tr' ? 'text-[#8B5E3C] font-semibold bg-[#8B5E3C]/5' : 'text-gray-700'
//                         }`}
//                       >
//                         Türkçe
//                       </button>
//                       <button 
//                         onClick={(e) => changeLanguage('nl', e)}
//                         className={`w-full text-left px-4 py-3 hover:bg-[#8B5E3C]/10 transition-colors duration-200 text-sm lg:text-base 3xl:text-lg ${
//                           i18n.language === 'nl' ? 'text-[#8B5E3C] font-semibold bg-[#8B5E3C]/5' : 'text-gray-700'
//                         }`}
//                       >
//                         Nederlands
//                       </button>
//                       <button 
//                         onClick={(e) => changeLanguage('ar', e)}
//                         className={`w-full text-left px-4 py-3 hover:bg-[#8B5E3C]/10 transition-colors duration-200 text-sm lg:text-base 3xl:text-lg ${
//                           i18n.language === 'ar' ? 'text-[#8B5E3C] font-semibold bg-[#8B5E3C]/5' : 'text-gray-700'
//                         }`}
//                       >
//                         العربية
//                       </button>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           )}

//           {/* Login Button - Desktop */}
//           <motion.div
//             variants={loginButtonVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//             whileTap="tap"
//             className="relative"
//           >
//             <Link
//               to="/login"
//               className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white px-4 lg:px-6 xl:px-8 2xl:px-10 3xl:px-12 py-2 lg:py-3 2xl:py-3.5 3xl:py-4 rounded-2xl font-semibold text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
//             >
//               <span className="relative z-10">{t('header.login')}</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//             </Link>
//           </motion.div>
//         </nav>

//         {/* Mobile Menu Button */}
//         <motion.button
//           variants={menuButtonVariants}
//           whileHover="hover"
//           whileTap="tap"
//           className="md:hidden text-[#8B5E3C] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center relative"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           <motion.div
//             animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
//             transition={{ duration: 0.3 }}
//             className="w-6 h-0.5 bg-[#8B5E3C] absolute"
//           />
//           <motion.div
//             animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
//             transition={{ duration: 0.2 }}
//             className="w-6 h-0.5 bg-[#8B5E3C] absolute"
//             style={{ y: -6 }}
//           />
//           <motion.div
//             animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
//             transition={{ duration: 0.3 }}
//             className="w-6 h-0.5 bg-[#8B5E3C] absolute"
//             style={{ y: 6 }}
//           />
//         </motion.button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             variants={mobileMenuVariants}
//             initial="closed"
//             animate="open"
//             exit="closed"
//             className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-white/20 shadow-2xl overflow-hidden z-[1000]"
//           >
//             <div className="px-4 sm:px-6 py-4 flex flex-col space-y-2">
//               {navItems.map((item, index) => (
//                 <motion.div
//                   key={item.path}
//                   custom={index}
//                   variants={mobileItemVariants}
//                   initial="closed"
//                   animate="open"
//                   exit="closed"
//                 >
//                   <Link
//                     to={item.path}
//                     onClick={() => setIsMenuOpen(false)}
//                     className={`block text-left py-3 sm:py-4 px-4 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 ${
//                       location.pathname === item.path
//                         ? "bg-gradient-to-r from-[#8B5E3C]/10 to-[#D1A15D]/10 text-[#D18642] border-l-4 border-[#8B5E3C]"
//                         : "text-[#8B5E3C] hover:bg-white/50"
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 </motion.div>
//               ))}

//               {/* Language Switcher - Mobile - Hidden on restricted routes */}
//               {!isRestrictedRoute && (
//                 <motion.div
//                   custom={navItems.length}
//                   variants={mobileItemVariants}
//                   initial="closed"
//                   animate="open"
//                   exit="closed"
//                   className="pt-2"
//                 >
//                   <div className="grid grid-cols-2 gap-2 p-2">
//                     <button 
//                       onClick={(e) => changeLanguage('en', e)}
//                       className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
//                         i18n.language === 'en' ? 'bg-[#8B5E3C] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                       }`}
//                     >
//                       English
//                     </button>
//                     <button 
//                       onClick={(e) => changeLanguage('tr', e)}
//                       className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
//                         i18n.language === 'tr' ? 'bg-[#8B5E3C] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                       }`}
//                     >
//                       Türkçe
//                     </button>
//                     <button 
//                       onClick={(e) => changeLanguage('nl', e)}
//                       className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
//                         i18n.language === 'nl' ? 'bg-[#8B5E3C] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                       }`}
//                     >
//                       Nederlands
//                     </button>
//                     <button 
//                       onClick={(e) => changeLanguage('ar', e)}
//                       className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
//                         i18n.language === 'ar' ? 'bg-[#8B5E3C] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                       }`}
//                     >
//                       العربية
//                     </button>
//                   </div>
//                 </motion.div>
//               )}
              
//               {/* Login Button - Mobile */}
//               <motion.div
//                 custom={navItems.length + 1}
//                 variants={mobileItemVariants}
//                 initial="closed"
//                 animate="open"
//                 exit="closed"
//                 className="pt-4 mt-2 border-t border-[#8B5E3C]/20"
//               >
//                 <Link
//                   to="/login"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block text-center py-3 sm:py-4 px-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white shadow-lg hover:shadow-xl"
//                 >
//                   {t('header.login')}
//                 </Link>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.div
//         variants={scrollBarVariants}
//         initial="initial"
//         animate="animate"
//         className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D]"
//         style={{ transformOrigin: "left", width: "100%" }}
//       />
//     </motion.header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from '../../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const isRestrictedRoute = location.pathname === "/logins" || 
                          location.pathname === "/admins" 

  const navItems = [
    { name: t('header.home'), path: "/", key: "home" },
    { name: t('header.products'), path: "/products", key: "products" },
    { name: t('header.about'), path: "/about", key: "about" },
    { name: t('header.contact'), path: "/contact", key: "contact" },
  ];

  const changeLanguage = (lng, event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    i18n.changeLanguage(lng);
    setIsLanguageOpen(false);
    setIsMenuOpen(false);
    window.dispatchEvent(new Event('resize')); // Force layout reflow
  };

  const toggleLanguageDropdown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsLanguageOpen(!isLanguageOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLanguageOpen && !event.target.closest('.language-switcher')) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLanguageOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isLanguageOpen) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isLanguageOpen]);

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 25 },
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      boxShadow: "0 10px 30px -10px rgba(139, 94, 60, 0.2)",
      backdropFilter: "blur(30px)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } },
    tap: { scale: 0.95 },
    pulse: {
      boxShadow: [
        "0 0 0 0 rgba(139, 94, 60, 0.5)",
        "0 0 0 15px rgba(139, 94, 60, 0)",
        "0 0 0 0 rgba(139, 94, 60, 0)",
      ],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 + i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
    hover: {
      scale: 1.1,
      y: -3,
      color: "#D18642",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const loginButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.8, type: "spring", stiffness: 300, damping: 20 }
    },
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow: "0 10px 25px -5px rgba(139, 94, 60, 0.4)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  const languageButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.9, type: "spring", stiffness: 300, damping: 20 }
    },
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow: "0 10px 25px -5px rgba(139, 94, 60, 0.4)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  const underlineVariants = {
    hidden: { width: 0 },
    hover: { width: "100%", transition: { duration: 0.3, ease: "easeOut" } },
    active: {
      width: "100%",
      backgroundColor: "#8B5E3C",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.3, 
        ease: "easeInOut",
        when: "afterChildren"
      } 
    },
    open: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.4, 
        ease: "easeOut",
        when: "beforeChildren"
      } 
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.1, type: "spring", stiffness: 200, damping: 15 },
    }),
  };

  const menuButtonVariants = {
    initial: { scale: 1 },
    tap: { scale: 0.9 },
    hover: { scale: 1.1 },
  };

  const languageDropdownVariants = {
    closed: {
      opacity: 0,
      scale: 0.8,
      y: -10,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const particleVariants = {
    hidden: { opacity: 0, scale: 0, x: 0, y: 0 },
    visible: (i) => ({
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: Math.random() * 20 - 10,
      y: Math.random() * 20 - 10,
      transition: { duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeOut" },
    }),
  };

  const scrollBarVariants = {
    initial: { scaleX: 0 },
    animate: {
      scaleX: isScrolled ? 1 : 0,
      background: [
        "linear-gradient(to right, #8B5E3C, #D1A15D)",
        "linear-gradient(to right, #D1A15D, #8B5E3C)",
        "linear-gradient(to right, #8B5E3C, #D1A15D)",
      ],
      transition: {
        scaleX: { duration: 0.3 },
        background: { duration: 2, repeat: Infinity, ease: "linear" },
      },
    },
  };

  const getCurrentLanguageName = () => {
    switch(i18n.language) {
      case 'en': return 'English';
      case 'tr': return 'Türkçe';
      case 'nl': return 'Nederlands';
      case 'ar': return 'العربية';
      default: return 'English';
    }
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={["visible", isScrolled ? "scrolled" : ""]}
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl z-50 border-b border-white/20"
    >
      <div className="w-full max-w-[4000px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-3 sm:py-4 flex justify-between items-center">
        
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          whileHover="hover"
          whileTap="tap"
          animate="pulse"
          className="cursor-pointer relative"
        >
          <Link to="/">
            <motion.div
              variants={logoVariants}
              whileHover="hover"
              whileTap="tap"
              animate="pulse"
              className="cursor-pointer relative"
            >
              <img 
                src={logo} 
                alt="Logo" 
                className="w-32 h-auto sm:w-36 md:w-40"
              />
            </motion.div>
          </Link>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={particleVariants}
                initial="hidden"
                animate="visible"
                className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-[#D1A15D]/50 rounded-full"
              />
            ))}
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 2xl:space-x-12">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              custom={index}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="relative"
            >
              <Link
                to={item.path}
                className={`text-[#8B5E3C] font-medium text-sm sm:text-base md:text-lg lg:text-xl transition-colors duration-300 relative py-2 px-1 ${
                  location.pathname === item.path ? "text-[#D18642] font-semibold" : ""
                }`}
              >
                {item.name}
                <motion.span
                  variants={underlineVariants}
                  animate={location.pathname === item.path ? "active" : "hidden"}
                  whileHover="hover"
                  className="absolute bottom-0 left-0 h-0.5 bg-[#D18642]"
                />
              </Link>
            </motion.div>
          ))}
          
          {/* Language Switcher - Desktop - Hidden on restricted routes */}
          {!isRestrictedRoute && (
            <motion.div
              variants={languageButtonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              className="relative language-switcher"
            >
              <button
                onClick={toggleLanguageDropdown}
                className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white px-3 sm:px-4 md:px-5 lg:px-6 py-1 sm:py-2 md:py-2.5 rounded-xl font-semibold text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group min-w-[80px] sm:min-w-[100px] md:min-w-[120px]"
              >
                <span className="relative z-10">{getCurrentLanguageName()}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    variants={languageDropdownVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="absolute top-full right-0 mt-2 w-40 sm:w-48 md:w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 z-[1000] overflow-visible"
                  >
                    <div className="py-2">
                      <button 
                        onClick={(e) => changeLanguage('en', e)}
                        className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 hover:bg-[#8B5E3C]/10 transition-colors duration-200 text-xs sm:text-sm md:text-base ${
                          i18n.language === 'en' ? 'text-[#8B5E3C] font-semibold bg-[#8B5E3C]/5' : 'text-gray-700'
                        }`}
                      >
                        English
                      </button>
                      <button 
                        onClick={(e) => changeLanguage('tr', e)}
                        className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 hover:bg-[#8B5E3C]/10 transition-colors duration-200 text-xs sm:text-sm md:text-base ${
                          i18n.language === 'tr' ? 'text-[#8B5E3C] font-semibold bg-[#8B5E3C]/5' : 'text-gray-700'
                        }`}
                      >
                        Türkçe
                      </button>
                      <button 
                        onClick={(e) => changeLanguage('nl', e)}
                        className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 hover:bg-[#8B5E3C]/10 transition-colors duration-200 text-xs sm:text-sm md:text-base ${
                          i18n.language === 'nl' ? 'text-[#8B5E3C] font-semibold bg-[#8B5E3C]/5' : 'text-gray-700'
                        }`}
                      >
                        Nederlands
                      </button>
                      <button 
                        onClick={(e) => changeLanguage('ar', e)}
                        className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 hover:bg-[#8B5E3C]/10 transition-colors duration-200 text-xs sm:text-sm md:text-base ${
                          i18n.language === 'ar' ? 'text-[#8B5E3C] font-semibold bg-[#8B5E3C]/5' : 'text-gray-700'
                        }`}
                      >
                        العربية
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Login Button - Desktop */}
          <motion.div
            variants={loginButtonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            className="relative"
          >
            <Link
              to="/login"
              className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white px-3 sm:px-4 md:px-5 lg:px-6 py-1 sm:py-2 md:py-2.5 rounded-xl font-semibold text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10">{t('header.login')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          variants={menuButtonVariants}
          whileHover="hover"
          whileTap="tap"
          className="md:hidden text-[#8B5E3C] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-[#8B5E3C] absolute"
          />
          <motion.div
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-0.5 bg-[#8B5E3C] absolute"
            style={{ y: -6 }}
          />
          <motion.div
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-[#8B5E3C] absolute"
            style={{ y: 6 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-white/20 shadow-2xl overflow-hidden z-[1000]"
          >
            <div className="px-4 sm:px-6 py-4 flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  custom={index}
                  variants={mobileItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-left py-2 sm:py-3 px-4 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? "bg-gradient-to-r from-[#8B5E3C]/10 to-[#D1A15D]/10 text-[#D18642] border-l-4 border-[#8B5E3C]"
                        : "text-[#8B5E3C] hover:bg-white/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {!isRestrictedRoute && (
                <motion.div
                  custom={navItems.length}
                  variants={mobileItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="pt-2"
                >
                  <div className="grid grid-cols-2 gap-2 p-2">
                    <button 
                      onClick={(e) => changeLanguage('en', e)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        i18n.language === 'en' ? 'bg-[#8B5E3C] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      English
                    </button>
                    <button 
                      onClick={(e) => changeLanguage('tr', e)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        i18n.language === 'tr' ? 'bg-[#8B5E3C] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Türkçe
                    </button>
                    <button 
                      onClick={(e) => changeLanguage('nl', e)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        i18n.language === 'nl' ? 'bg-[#8B5E3C] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Nederlands
                    </button>
                    <button 
                      onClick={(e) => changeLanguage('ar', e)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        i18n.language === 'ar' ? 'bg-[#8B5E3C] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      العربية
                    </button>
                  </div>
                </motion.div>
              )}
              
              <motion.div
                custom={navItems.length + 1}
                variants={mobileItemVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="pt-4 mt-2 border-t border-[#8B5E3C]/20"
              >
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center py-2 sm:py-3 px-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white shadow-lg hover:shadow-xl"
                >
                  {t('header.login')}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={scrollBarVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D]"
        style={{ transformOrigin: "left", width: "100%" }}
      />
    </motion.header>
  );
};

export default Header;