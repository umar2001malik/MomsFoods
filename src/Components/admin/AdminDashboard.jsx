// // src/components/admin/AdminDashboard.jsx
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import ProductManagement from './ProductManagement';
// import CategoryManagement from './CategoryManagement';

// import {  
// ShoppingBag, 
// Layers, 
// BarChart3, 
// Settings as SettingsIcon, 
// LogOut,
// Menu,
// X,
// Sparkles,
// Leaf
// } from 'lucide-react';
// import bgImage from '../../assets/download.jpeg';
// import { useAPI } from '../Context/AuthContext';

// const AdminDashboard = () => {
// const [activeTab, setActiveTab] = useState('categories');
// const [sidebarOpen, setSidebarOpen] = useState(false);
// const [isMobile, setIsMobile] = useState(false);
// const {logout} = useAPI();

// const handleLogout = () => {
//   logout();
//   console.log("User logged out successfully");
// };

// useEffect(() => {
//   const checkScreenSize = () => {
//     setIsMobile(window.innerWidth < 1024);
//   };

//   checkScreenSize();
//   window.addEventListener('resize', checkScreenSize);

//   return () => window.removeEventListener('resize', checkScreenSize);
// }, []);

// useEffect(() => {
//   if (isMobile) {
//     setSidebarOpen(false);
//   }
// }, [activeTab, isMobile]);

// useEffect(() => {
//   if (!isMobile) {
//     setSidebarOpen(true);
//   }
// }, [isMobile]);

// const tabs = [
//   { id: 'categories', name: 'Categories', icon: Layers },
//   { id: 'products', name: 'Products', icon: ShoppingBag },
// ];

// const sidebarVariants = {
//   closed: { 
//     x: -320, 
//     opacity: 0,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 30
//     }
//   },
//   open: { 
//     x: 0, 
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 30
//     }
//   }
// };

// const overlayVariants = {
//   closed: { opacity: 0, pointerEvents: "none" },
//   open: { 
//     opacity: 1, 
//     pointerEvents: "auto",
//     transition: {
//       duration: 0.3
//     }
//   }
// };

// const contentVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 20,
//       duration: 0.6
//     }
//   },
//   exit: {
//     opacity: 0,
//     y: -20,
//     transition: {
//       duration: 0.3
//     }
//   }
// };

// const tabButtonVariants = {
//   initial: { scale: 1, backgroundColor: "rgba(255, 255, 255, 0)" },
//   active: { 
//     scale: 1.02, 
//     backgroundColor: "rgba(139, 94, 60, 1)",
//     transition: {
//       type: "spring",
//       stiffness: 400,
//       damping: 25
//     }
//   },
//   hover: {
//     scale: 1.05,
//     backgroundColor: "rgba(139, 94, 60, 0.8)",
//     transition: {
//       type: "spring",
//       stiffness: 400,
//       damping: 25
//     }
//   }
// };

// const handleTabClick = (tabId) => {
//   setActiveTab(tabId);
// };

// return (
//   <div 
//     className="h-screen flex relative overflow-hidden"
//     style={{
//       backgroundImage: `url(${bgImage})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundAttachment: "fixed",
//     }}
//   >
//     {/* Background Overlay */}
//     <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

//     {/* Mobile Overlay */}
//     <AnimatePresence>
//       {isMobile && sidebarOpen && (
//         <motion.div
//           variants={overlayVariants}
//           initial="closed"
//           animate="open"
//           exit="closed"
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}
//     </AnimatePresence>

//     {/* Sidebar - Fixed with full height */}
//     <motion.div
//       variants={sidebarVariants}
//       initial="closed"
//       animate={sidebarOpen ? "open" : "closed"}
//       className="fixed lg:fixed top-0 left-0 bg-white/95 backdrop-blur-xl shadow-2xl border-r border-white/50 z-30 w-80 h-screen lg:translate-x-0 flex flex-col"
//     >
//       {/* Header */}
//       <div className="p-6 border-b border-[#8B5E3C]/20 flex-shrink-0">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex items-center space-x-3"
//         >
//           <div className="w-10 h-10 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-full flex items-center justify-center">
//             <Leaf className="w-6 h-6 text-white" />
//           </div>
//           <div>
//             <h1 className="text-2xl font-serif font-bold text-[#8B5E3C]">Admin Panel</h1>
//             <p className="text-[#8B5E3C]/70 text-sm">Mom's Natural Foods</p>
//           </div>
//         </motion.div>
//       </div>

//       {/* Navigation - Takes available space */}
//       <nav className="p-6 space-y-3 flex-1">
//         {tabs.map((tab) => (
//           <motion.button
//             key={tab.id}
//             variants={tabButtonVariants}
//             initial="initial"
//             animate={activeTab === tab.id ? "active" : "initial"}
//             whileHover="hover"
//             onClick={() => handleTabClick(tab.id)}
//             className={`w-full flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-200 ${
//               activeTab === tab.id
//                 ? 'text-white shadow-lg'
//                 : 'text-[#8B5E3C] hover:text-white'
//             }`}
//           >
//             <tab.icon size={22} />
//             <span className="font-semibold text-lg">{tab.name}</span>
//           </motion.button>
//         ))}
//       </nav>

//       {/* Footer - Stays at bottom */}
//       <div className="p-6 border-t border-[#8B5E3C]/20 flex-shrink-0">
//         <motion.button
//           whileHover={{
//             scale: 1.02,
//             backgroundColor: "rgba(239, 68, 68, 0.1)",
//           }}
//           whileTap={{ scale: 0.98 }}
//           className="w-full flex items-center space-x-4 px-4 py-4 text-red-600 rounded-2xl font-semibold transition-colors"
//           onClick={handleLogout}
//         >
//           <LogOut size={22} />
//           <span>Logout</span>
//         </motion.button>
//       </div>

//       {/* Decorative Elements */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.5 }}
//         className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-[#8B5E3C]/10 to-[#D1A15D]/10 rounded-full blur-xl"
//       />
//     </motion.div>

//     {/* Main Content - Scrollable area with proper margin */}
//     <div className="flex-1 min-w-0 lg:ml-80 transition-all duration-300 h-full flex flex-col">
//       {/* Header - Fixed at top */}
//       <motion.header 
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/50 p-6 sticky top-0 z-10 flex-shrink-0"
//       >
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             {/* Menu Button - Only show on mobile */}
//             <button
//               onClick={() => setSidebarOpen(!sidebarOpen)}
//               className="p-3 rounded-2xl hover:bg-[#8B5E3C]/10 transition-colors lg:hidden"
//             >
//               {sidebarOpen ? (
//                 <X size={24} className="text-[#8B5E3C]" />
//               ) : (
//                 <Menu size={24} className="text-[#8B5E3C]" />
//               )}
//             </button>
            
//             <motion.h2 
//               className="text-2xl font-serif font-bold text-[#8B5E3C] capitalize"
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               {tabs.find(tab => tab.id === activeTab)?.name}
//             </motion.h2>
            
//             <motion.div
//               initial={{ scale: 0, rotate: -180 }}
//               animate={{ scale: 1, rotate: 0 }}
//               transition={{ delay: 0.3 }}
//               className="hidden sm:block"
//             >
//               <Sparkles className="w-6 h-6 text-[#D1A15D]" />
//             </motion.div>
//           </div>

//           <div className="flex items-center space-x-4">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="w-10 h-10 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-full flex items-center justify-center shadow-lg"
//             >
//               <span className="text-white font-semibold text-sm">A</span>
//             </motion.div>
//           </div>
//         </div>
//       </motion.header>

//       {/* Content - Scrollable area */}
//       <main className="flex-1 overflow-auto p-4 sm:p-6">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             variants={contentVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="h-full"
//           >
//             {activeTab === 'categories' && <CategoryManagement />}
//             {activeTab === 'products' && <ProductManagement />}
//           </motion.div>
//         </AnimatePresence>
//       </main>
//     </div>
//   </div>
// );
// };

// export default AdminDashboard;



// src/components/admin/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductManagement from './ProductManagement';
import CategoryManagement from './CategoryManagement';
import { useTranslation } from 'react-i18next'; // ADDED

import {  
  ShoppingBag, 
  Layers, 
  LogOut,
  Menu,
  X,
  Sparkles,
  Leaf,
  Globe // ADDED
} from 'lucide-react';
import bgImage from '../../assets/download.jpeg';
import { useAPI } from '../Context/AuthContext';

const AdminDashboard = () => {
  const { t, i18n } = useTranslation(); // ADDED
  const [activeTab, setActiveTab] = useState('categories');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false); // ADDED
  const { logout } = useAPI();

  const handleLogout = () => {
    logout();
    console.log("User logged out successfully");
  };

  // Language change handler
  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  //   setIsLanguageOpen(false);
  //   setSidebarOpen(false);
  // };


  const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  setIsLanguageOpen(false);

  // Only close sidebar on mobile
  if (isMobile) {
    setSidebarOpen(false);
  }
};
  // Get current language name
  const getCurrentLanguageName = () => {
    switch(i18n.language) {
      case 'en': return t('language.en');
      case 'tr': return t('language.tr');
      case 'nl': return t('language.nl');
      case 'ar': return t('language.ar');
      default: return t('language.en');
    }
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMobile) setSidebarOpen(false);
  }, [activeTab, isMobile]);

  useEffect(() => {
    if (!isMobile) setSidebarOpen(true);
  }, [isMobile]);

  const tabs = [
    { id: 'categories', name: t('admin.categories'), icon: Layers },
    { id: 'products', name: t('admin.products'), icon: ShoppingBag },
  ];

  const sidebarVariants = {
    closed: { x: -320, opacity: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  const overlayVariants = {
    closed: { opacity: 0, pointerEvents: "none" },
    open: { opacity: 1, pointerEvents: "auto", transition: { duration: 0.3 } }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const tabButtonVariants = {
    initial: { scale: 1, backgroundColor: "rgba(255, 255, 255, 0)" },
    active: { scale: 1.02, backgroundColor: "rgba(139, 94, 60, 1)", transition: { type: "spring", stiffness: 400, damping: 25 } },
    hover: { scale: 1.05, backgroundColor: "rgba(139, 94, 60, 0.8)", transition: { type: "spring", stiffness: 400, damping: 25 } }
  };

  const languageDropdownVariants = {
    closed: { opacity: 0, scale: 0.8, y: -10, transition: { duration: 0.2 } },
    open: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 20 } }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div 
      className="h-screen flex relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobile && sidebarOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        variants={sidebarVariants}
        initial="closed"
        animate={sidebarOpen ? "open" : "closed"}
        className="fixed lg:fixed top-0 left-0 bg-white/95 backdrop-blur-xl shadow-2xl border-r border-white/50 z-30 w-80 h-screen lg:translate-x-0 flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-[#8B5E3C]/20 flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-[#8B5E3C]">{t('admin.panel')}</h1>
              <p className="text-[#8B5E3C]/70 text-sm">{t('admin.subtitle')}</p>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="p-6 space-y-3 flex-1">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              variants={tabButtonVariants}
              initial="initial"
              animate={activeTab === tab.id ? "active" : "initial"}
              whileHover="hover"
              onClick={() => handleTabClick(tab.id)}
              className={`w-full flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-200 ${
                activeTab === tab.id ? 'text-white shadow-lg' : 'text-[#8B5E3C] hover:text-white'
              }`}
            >
              <tab.icon size={22} />
              <span className="font-semibold text-lg">{tab.name}</span>
            </motion.button>
          ))}
        </nav>

        {/* Language Switcher */}
        <div className="px-6 pb-3">
          <motion.div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <Globe size={20} />
                <span>{getCurrentLanguageName()}</span>
              </div>
              <motion.div
                animate={{ rotate: isLanguageOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {isLanguageOpen && (
                <motion.div
                  variants={languageDropdownVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="absolute bottom-full left-0 right-0 mb-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-50"
                >
                  <div className="p-2">
                    {[
                      { code: 'en', label: t('language.en') },
                      { code: 'tr', label: t('language.tr') },
                      { code: 'nl', label: t('language.nl') },
                      { code: 'ar', label: t('language.ar') },
                    ].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-colors duration-200 flex items-center space-x-3 ${
                          i18n.language === lang.code
                            ? 'bg-[#8B5E3C]/10 text-[#8B5E3C] font-semibold'
                            : 'text-[#8B5E3C]/80 hover:bg-[#8B5E3C]/5'
                        }`}
                      >
                        <Globe size={16} />
                        <span>{lang.label}</span>
                        {i18n.language === lang.code && (
                          <motion.div
                            layoutId="active-lang-indicator"
                            className="ml-auto w-2 h-2 bg-[#8B5E3C] rounded-full"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Logout */}
        <div className="p-6 border-t border-[#8B5E3C]/20 flex-shrink-0">
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "rgba(239, 68, 68, 0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center space-x-4 px-4 py-4 text-red-600 rounded-2xl font-semibold transition-colors"
            onClick={handleLogout}
          >
            <LogOut size={22} />
            <span>{t('admin.logout')}</span>
          </motion.button>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-[#8B5E3C]/10 to-[#D1A15D]/10 rounded-full blur-xl"
        />
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 min-w-0 lg:ml-80 transition-all duration-300 h-full flex flex-col">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/50 p-6 sticky top-0 z-10 flex-shrink-0"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-3 rounded-2xl hover:bg-[#8B5E3C]/10 transition-colors lg:hidden"
              >
                {sidebarOpen ? (
                  <X size={24} className="text-[#8B5E3C]" />
                ) : (
                  <Menu size={24} className="text-[#8B5E3C]" />
                )}
              </button>
              
              <motion.h2 
                className="text-2xl font-serif font-bold text-[#8B5E3C] capitalize"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {tabs.find(tab => tab.id === activeTab)?.name}
              </motion.h2>
              
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3 }}
                className="hidden sm:block"
              >
                <Sparkles className="w-6 h-6 text-[#D1A15D]" />
              </motion.div>
            </div>

            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-semibold text-sm">A</span>
              </motion.div>
            </div>
          </div>
        </motion.header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="h-full"
            >
              {activeTab === 'categories' && <CategoryManagement />}
              {activeTab === 'products' && <ProductManagement />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;