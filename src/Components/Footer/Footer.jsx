// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart, Send, ArrowRight } from "lucide-react";
// import { useAPI } from "../Context/AuthContext";

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const navigate = useNavigate();
//   const { t } = useTranslation();
//   const {contactForm}= useAPI();

// const handleSubscribe = (e) => {
//   e.preventDefault();

//   const subscriptionData = {
//     email: email
    
//   };

//   console.log("Subscription Data:", subscriptionData);

//   // ✅ Call the API using then/catch
//   contactForm(subscriptionData)
//     .then((res) => {
//       console.log("Subscription successful:", res);
//       setIsSubscribed(true); // optional — update UI
//     })
//     .catch((err) => {
//       console.error("Error during subscription:", err);
//     });
// };

//   // Navigation handlers
//   const handleQuickLinkClick = (link) => {
//     const routeMap = {
//       'home': '/',
//       'products': '/products',
//       'about': '/about',
//       'contact': '/contact',
//     };
    
//     const route = routeMap[link.toLowerCase()];
//     if (route) {
//       navigate(route);
//     }
//   };

//   const handlePolicyClick = (policy) => {
//     // You can add specific routes for policies if needed
//     console.log(`Navigate to ${policy}`);
//     // For now, just scroll to top
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Animation Variants
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

//   const itemVariants = {
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
//         duration: 0.8
//       }
//     }
//   };

//   const socialIconVariants = {
//     hidden: { scale: 0, rotate: -180 },
//     visible: (i) => ({
//       scale: 1,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 15,
//         delay: 0.8 + (i * 0.1)
//       }
//     }),
//     hover: {
//       scale: 1.2,
//       rotate: 360,
//       y: -5,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 10
//       }
//     }
//   };

//   const linkItemVariants = {
//     hidden: { opacity: 0, x: -30 },
//     visible: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: {
//         type: "spring",
//         stiffness: 150,
//         damping: 15,
//         delay: 0.6 + (i * 0.1)
//       }
//     }),
//     hover: {
//       x: 8,
//       color: "#D1A15D",
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 20
//       }
//     }
//   };

//   const contactItemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: {
//         delay: 0.7 + (i * 0.15),
//         duration: 0.6
//       }
//     }),
//     hover: {
//       x: 5,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 20
//       }
//     }
//   };

//   const buttonVariants = {
//     initial: { scale: 1 },
//     hover: {
//       scale: 1.05,
//       background: "linear-gradient(135deg, #8B5E3C 0%, #A67C52 50%, #D1A15D 100%)",
//       boxShadow: "0 10px 25px -5px rgba(139, 94, 60, 0.4)",
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

//   const successVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 20
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

//   const floatingHeartVariants = {
//     float: {
//       y: [0, -10, 0],
//       scale: [1, 1.1, 1],
//       transition: {
//         duration: 3,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const quickLinks = t('footer.quickLinks', { returnObjects: true });
//   const contactInfo = t('footer.contactInfo', { returnObjects: true });
//   const socialIcons = [Facebook, Instagram, Twitter];
//   const policies = t('footer.policies', { returnObjects: true });

//   return (
//     <footer className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
//       {/* Background Elements */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="absolute inset-0 bg-gradient-to-br from-[#8B5E3C]/5 to-[#D1A15D]/5"
//       />
      
//       {/* Floating Particles */}
//       {[...Array(8)].map((_, i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, scale: 0 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ delay: i * 0.2, duration: 0.6 }}
//           className="absolute w-2 h-2 bg-[#8B5E3C] rounded-full"
//           style={{
//             top: `${20 + (i * 10)}%`,
//             left: `${10 + (i * 12)}%`,
//           }}
//           animate={{
//             y: [0, -20, 0],
//             x: [0, i % 2 === 0 ? -10 : 10, 0],
//             transition: {
//               duration: 4,
//               repeat: Infinity,
//               delay: i * 0.5
//             }
//           }}
//         />
//       ))}

//       <div className="container max-w-[4000px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12"
//         >
//           {/* Brand Column */}
//           <motion.div variants={itemVariants} className="col-span-1">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="cursor-pointer"
//               onClick={() => navigate('/')}
//             >
//               <motion.h2 
//                 className="text-2xl sm:text-3xl lg:text-3xl font-serif font-bold bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] bg-clip-text text-transparent mb-4 sm:mb-6"
//                 whileHover={{ 
//                   backgroundPosition: "100%",
//                   transition: { duration: 1.5 }
//                 }}
//                 style={{ backgroundSize: "200% auto" }}
//               >
//                 {t('footer.brandName')}
//               </motion.h2>
//             </motion.div>
//             <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
//               {t('footer.description')}
//             </p>
//             <div className="flex space-x-2 sm:space-x-3">
//               {socialIcons.map((Icon, index) => (
//                 <motion.a
//                   key={index}
//                   href="#"
//                   custom={index}
//                   variants={socialIconVariants}
//                   whileHover="hover"
//                   className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
//                 >
//                   <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white z-10" />
//                   <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div variants={itemVariants} className="col-span-1">
//             <motion.h3 
//               className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8"
//               whileHover={{ x: 5 }}
//             >
//               {t('footer.quickLinksTitle')}
//             </motion.h3>
//             <ul className="space-y-3 sm:space-y-4">
//               {quickLinks.map((link, index) => (
//                 <motion.li
//                   key={link}
//                   custom={index}
//                   variants={linkItemVariants}
//                   whileHover="hover"
//                 >
//                   <button
//                     onClick={() => handleQuickLinkClick(link)}
//                     className="text-gray-300 hover:text-[#D1A15D] transition-colors duration-300 flex items-center space-x-2 sm:space-x-3 group cursor-pointer w-full text-left text-sm sm:text-base lg:text-lg"
//                   >
//                     <motion.div
//                       whileHover={{ scale: 1.2 }}
//                       className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8B5E3C] rounded-full group-hover:bg-[#D1A15D] transition-colors flex-shrink-0"
//                     />
//                     <span className="font-medium">{link}</span>
//                     <motion.div
//                       initial={{ opacity: 0, x: -10 }}
//                       whileHover={{ opacity: 1, x: 0 }}
//                       className="text-[#D1A15D] ml-auto"
//                     >
//                       <ArrowRight size={14} className="sm:size-16" />
//                     </motion.div>
//                   </button>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-1">
//             <motion.h3 
//               className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8"
//               whileHover={{ x: 5 }}
//             >
//               {t('footer.contactTitle')}
//             </motion.h3>
//             <div className="space-y-4 sm:space-y-6">
//               {contactInfo.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   custom={index}
//                   variants={contactItemVariants}
//                   whileHover="hover"
//                   className="flex items-start space-x-3 sm:space-x-4 group cursor-pointer"
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.2, rotate: 360 }}
//                     className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg mt-0.5"
//                   >
//                     {item.icon === 'MapPin' && <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
//                     {item.icon === 'Phone' && <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
//                     {item.icon === 'Mail' && <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
//                   </motion.div>
//                   <span className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-white transition-colors flex-1">
//                     {item.text}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Newsletter */}
//           <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-1">
//             <motion.h3 
//               className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6"
//               whileHover={{ x: 5 }}
//             >
//               {t('footer.newsletterTitle')}
//             </motion.h3>
//             <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
//               {t('footer.newsletterDescription')}
//             </p>
            
//             <AnimatePresence mode="wait">
//               {!isSubscribed ? (
//                 <motion.form
//                   key="form"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   onSubmit={handleSubscribe}
//                   className="space-y-3 sm:space-y-4"
//                 >
//                   <motion.div whileHover={{ scale: 1.02 }} className="relative">
//                     <input 
//                       type="email" 
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder={t('footer.emailPlaceholder')}
//                       className="w-full px-3 sm:px-5 py-3 sm:py-4 rounded-2xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-300 text-sm sm:text-base lg:text-lg"
//                       required
//                     />
//                   </motion.div>
//                   <motion.button
//                     variants={buttonVariants}
//                     whileHover="hover"
//                     whileTap="tap"
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white font-bold py-3 sm:py-4 px-3 sm:px-6 rounded-2xl shadow-xl flex items-center justify-center space-x-1 sm:space-x-2 relative overflow-hidden group text-sm sm:text-base"
//                   >
//                     <span className="relative z-10">{t('footer.subscribeButton')}</span>
//                     <motion.div
//                       animate={{ x: [0, 5, 0] }}
//                       transition={{ duration: 1.5, repeat: Infinity }}
//                       className="relative z-10"
//                     >
//                       <Send className="w-4 h-4 sm:w-5 sm:h-5" />
//                     </motion.div>
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//                   </motion.button>
//                 </motion.form>
//               ) : (
//                 <motion.div
//                   key="success"
//                   variants={successVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="text-center py-6 sm:py-8 bg-gradient-to-br from-[#8B5E3C]/20 to-[#D1A15D]/20 rounded-2xl border border-[#8B5E3C]/30"
//                 >
//                   <motion.div
//                     variants={floatingHeartVariants}
//                     animate="float"
//                     className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg"
//                   >
//                     <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white" />
//                   </motion.div>
//                   <h4 className="text-lg sm:text-xl font-bold text-white mb-2 text-sm sm:text-base">{t('footer.successTitle')}</h4>
//                   <p className="text-gray-300 text-xs sm:text-sm">{t('footer.successMessage')}</p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Bottom Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//         className="border-t border-gray-800 pt-6 sm:pt-8 pb-4 sm:pb-6 relative z-10"
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="flex flex-col lg:flex-row justify-between items-center space-y-4 sm:space-y-6 lg:space-y-0"
//           >
//             <motion.p
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="text-gray-400 text-sm sm:text-base lg:text-lg text-center lg:text-left"
//             >
//               {t('footer.copyright')}
//             </motion.p>

//             <motion.div
//               className="flex flex-wrap justify-center lg:justify-end space-x-2 sm:space-x-4 lg:space-x-6 text-gray-400 w-full lg:w-auto"
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//             >
//               {policies.map((policy, index) => (
//                 <motion.button
//                   key={policy}
//                   onClick={() => handlePolicyClick(policy)}
//                   custom={index}
//                   variants={linkItemVariants}
//                   whileHover={{ color: "#D1A15D", x: 3 }}
//                   className="text-sm sm:text-base lg:text-lg hover:text-[#F8E7D3] transition-colors cursor-pointer py-1"
//                 >
//                   {policy}
//                 </motion.button>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Facebook, Instagram, Mail, Phone, MapPin, Heart, Send, ArrowRight } from "lucide-react";
import { useAPI } from "../Context/AuthContext";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {contactForm}= useAPI();

const handleSubscribe = (e) => {
  e.preventDefault();

  const subscriptionData = {
    email: email
  };

  console.log("Subscription Data:", subscriptionData);

  // ✅ Call the API using then/catch
  contactForm(subscriptionData)
    .then((res) => {
      console.log("Subscription successful:", res);
      setIsSubscribed(true); // optional — update UI
    })
    .catch((err) => {
      console.error("Error during subscription:", err);
    });
};

  // Navigation handlers
  const handleQuickLinkClick = (link) => {
    const routeMap = {
      'home': '/',
      'products': '/products',
      'about': '/about',
      'contact': '/contact',
    };
    
    const route = routeMap[link.toLowerCase()];
    if (route) {
      navigate(route);
    }
  };

  const handlePolicyClick = (policy) => {
    // You can add specific routes for policies if needed
    console.log(`Navigate to ${policy}`);
    // For now, just scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const itemVariants = {
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
        duration: 0.8
      }
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.8 + (i * 0.1)
      }
    }),
    hover: {
      scale: 1.2,
      rotate: 360,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const linkItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        delay: 0.6 + (i * 0.1)
      }
    }),
    hover: {
      x: 8,
      color: "#D1A15D",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  };

  const contactItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.7 + (i * 0.15),
        duration: 0.6
      }
    }),
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      background: "linear-gradient(135deg, #8B5E3C 0%, #A67C52 50%, #D1A15D 100%)",
      boxShadow: "0 10px 25px -5px rgba(139, 94, 60, 0.4)",
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

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  const floatingHeartVariants = {
    float: {
      y: [0, -10, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const quickLinks = t('footer.quickLinks', { returnObjects: true });
  const contactInfo = t('footer.contactInfo', { returnObjects: true });
  const socialIcons = [Facebook, Instagram];
  const policies = t('footer.policies', { returnObjects: true });

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-[#8B5E3C]/5 to-[#D1A15D]/5"
      />
      
      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
          className="absolute w-2 h-2 bg-[#8B5E3C] rounded-full"
          style={{
            top: `${20 + (i * 10)}%`,
            left: `${10 + (i * 12)}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, i % 2 === 0 ? -10 : 10, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5
            }
          }}
        />
      ))}

      <div className="container max-w-[4000px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => navigate('/')}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-3xl font-serif font-bold bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] bg-clip-text text-transparent mb-4 sm:mb-6"
                whileHover={{ 
                  backgroundPosition: "100%",
                  transition: { duration: 1.5 }
                }}
                style={{ backgroundSize: "200% auto" }}
              >
                {t('footer.brandName')}
              </motion.h2>
            </motion.div>
            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
              {t('footer.description')}
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              {socialIcons.map((Icon, index) => (
                <motion.a
                  key={index}
                  href={index === 0 ? "https://www.facebook.com/share/14JvQkD3TQY/" : "https://www.instagram.com/momsnaturalfoods.nl?igsh=ZHRsZjhpZGFyYmhs"}
                  custom={index}
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
              <motion.a
                href="https://tiktok.com/@momsnaturalfood.nl"
                custom={2}
                variants={socialIconVariants}
                whileHover="hover"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.39-1.27 4.29 4.29 0 0 1-1.71-3.47V2h-3.55v13.56a3.87 3.87 0 0 1-2.62 3.7 3.94 3.94 0 0 1-4.03-.18 4.19 4.19 0 0 1-1.46-3.62 4.1 4.1 0 0 1 1.15-2.9 3.84 3.84 0 0 1 2.9-1.27h.53v-2.3h-.53a6.31 6.31 0 0 0-5.07 2.67A6.25 6.25 0 0 0 0 16.2a6.27 6.27 0 0 0 6.29 6.27 6.34 6.34 0 0 0 4.23-1.62 6.74 6.74 0 0 0 2.47-4.8V9.12c1 .18 2 .53 2.9.98a5.38 5.38 0 0 0 3.51 0 11.87 11.87 0 0 0 2.12-.84v-2.47a2.44 2.44 0 0 0-.61-.16z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <motion.h3 
              className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8"
              whileHover={{ x: 5 }}
            >
              {t('footer.quickLinksTitle')}
            </motion.h3>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link}
                  custom={index}
                  variants={linkItemVariants}
                  whileHover="hover"
                >
                  <button
                    onClick={() => handleQuickLinkClick(link)}
                    className="text-gray-300 hover:text-[#D1A15D] transition-colors duration-300 flex items-center space-x-2 sm:space-x-3 group cursor-pointer w-full text-left text-sm sm:text-base lg:text-lg"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8B5E3C] rounded-full group-hover:bg-[#D1A15D] transition-colors flex-shrink-0"
                    />
                    <span className="font-medium">{link}</span>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="text-[#D1A15D] ml-auto"
                    >
                      <ArrowRight size={14} className="sm:size-16" />
                    </motion.div>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-1">
            <motion.h3 
              className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8"
              whileHover={{ x: 5 }}
            >
              {t('footer.contactTitle')}
            </motion.h3>
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={contactItemVariants}
                  whileHover="hover"
                  className="flex items-start space-x-3 sm:space-x-4 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg mt-0.5"
                  >
                    {item.icon === 'MapPin' && <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                    {item.icon === 'Phone' && <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                    {item.icon === 'Mail' && <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                  </motion.div>
                  <span className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-white transition-colors flex-1">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-1">
            <motion.h3 
              className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6"
              whileHover={{ x: 5 }}
            >
              {t('footer.newsletterTitle')}
            </motion.h3>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
              {t('footer.newsletterDescription')}
            </p>
            
            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubscribe}
                  className="space-y-3 sm:space-y-4"
                >
                  <motion.div whileHover={{ scale: 1.02 }} className="relative">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('footer.emailPlaceholder')}
                      className="w-full px-3 sm:px-5 py-3 sm:py-4 rounded-2xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-300 text-sm sm:text-base lg:text-lg"
                      required
                    />
                  </motion.div>
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white font-bold py-3 sm:py-4 px-3 sm:px-6 rounded-2xl shadow-xl flex items-center justify-center space-x-1 sm:space-x-2 relative overflow-hidden group text-sm sm:text-base"
                  >
                    <span className="relative z-10">{t('footer.subscribeButton')}</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="relative z-10"
                    >
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-center py-6 sm:py-8 bg-gradient-to-br from-[#8B5E3C]/20 to-[#D1A15D]/20 rounded-2xl border border-[#8B5E3C]/30"
                >
                  <motion.div
                    variants={floatingHeartVariants}
                    animate="float"
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg"
                  >
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white" />
                  </motion.div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 text-sm sm:text-base">{t('footer.successTitle')}</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">{t('footer.successMessage')}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="border-t border-gray-800 pt-6 sm:pt-8 pb-4 sm:pb-6 relative z-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col lg:flex-row justify-between items-center space-y-4 sm:space-y-6 lg:space-y-0"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-gray-400 text-sm sm:text-base lg:text-lg text-center lg:text-left"
            >
              {t('footer.copyright')}
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-end space-x-2 sm:space-x-4 lg:space-x-6 text-gray-400 w-full lg:w-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              {policies.map((policy, index) => (
                <motion.button
                  key={policy}
                  onClick={() => handlePolicyClick(policy)}
                  custom={index}
                  variants={linkItemVariants}
                  whileHover={{ color: "#D1A15D", x: 3 }}
                  className="text-sm sm:text-base lg:text-lg hover:text-[#F8E7D3] transition-colors cursor-pointer py-1"
                >
                  {policy}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;