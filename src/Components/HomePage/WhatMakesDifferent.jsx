import React from "react";
import { motion } from "framer-motion";
import { Check, X, Sparkles, Heart, Shield, Leaf, Zap, Star, Target } from "lucide-react";
import { useTranslation } from "react-i18next";
import backgroundVideo from "../../assets/video7.mp4";

const WhatMakesDifferent = () => {
  const { t } = useTranslation();

  const goodForYou = t('whatMakesDifferent.goodForYou', { returnObjects: true });
  const freeFrom = t('whatMakesDifferent.freeFrom', { returnObjects: true });

  // Animation Variants
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

  const columnVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 40 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      boxShadow: "0 25px 50px -12px rgba(139, 94, 60, 0.25)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.06,
        delayChildren: 0.4
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.8 
    },
    show: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      x: 8,
      backgroundColor: "rgba(248, 231, 211, 0.8)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0, 
      rotate: -180 
    },
    show: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const pulseGlowVariants = {
    initial: { 
      boxShadow: "0 0 0 0 rgba(139, 94, 60, 0.3)",
      scale: 1 
    },
    pulse: {
      boxShadow: [
        "0 0 0 0 rgba(139, 94, 60, 0.3)",
        "0 0 0 20px rgba(139, 94, 60, 0)",
        "0 0 0 0 rgba(139, 94, 60, 0)"
      ],
      scale: [1, 1.02, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const AnimatedListItem = ({ item, index, icon: Icon, isGood = true }) => (
    <motion.div
      key={index}
      variants={itemVariants}
      whileHover="hover"
      className="flex items-start space-x-3 text-[#8B5E3C] p-1 md:p-3 rounded-xl hover:bg-[#F8E7D3] transition-all duration-300 border border-transparent hover:border-[#EED7B5] cursor-pointer group relative overflow-hidden"
    >
      {/* Background shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
      />
      
      <motion.div
        variants={iconVariants}
        whileHover="hover"
        className="w-6 h-6 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg relative z-10 2xl:w-8 2xl:h-8"
      >
        <Icon className="w-3.5 h-3.5 text-white 2xl:w-5 2xl:h-5" />
      </motion.div>
      
      <motion.span 
        className="text-sm font-medium leading-relaxed relative z-10 2xl:text-lg"
        whileHover={{ 
          x: 4,
          transition: { type: "spring", stiffness: 400 }
        }}
      >
        {item}
      </motion.span>

      {/* Hover particles */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D1A15D] rounded-full"
            initial={{ 
              scale: 0,
              x: 0,
              y: 0 
            }}
            whileHover={{
              scale: [0, 1, 0],
              x: Math.random() * 40 - 20,
              y: Math.random() * 40 - 20,
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.2,
            }}
            style={{
              left: '50%',
              top: '50%',
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <section
      id="what-makes-different"
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
          {t('whatMakesDifferent.videoFallback')}
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

      <div className="container max-w-[4000px] mx-auto px-6 relative z-10">
        {/* Enhanced Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <motion.div
            variants={titleVariants}
            className="relative inline-block"
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-serif font-bold text-[#8B5E3C] mb-4 relative 2xl:text-8xl"
            >
              {t('whatMakesDifferent.title.line1')}{" "}
              <motion.span
                initial={{ backgroundPosition: "0%" }}
                whileInView={{ backgroundPosition: "100%" }}
                transition={{ duration: 2, delay: 0.5 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5E3C] via-[#A67C52] to-[#D1A15D] bg-[length:200%_auto]"
              >
                {t('whatMakesDifferent.title.highlighted')}
              </motion.span>
              
              {/* Animated Sparkles */}
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -top-2 -right-2 2xl:-top-4 2xl:-right-4"
              >
                <Sparkles className="w-6 h-6 text-[#D1A15D] 2xl:w-10 2xl:h-10" />
              </motion.div>

              {/* Additional decorative elements */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-2 -left-4 2xl:-bottom-4 2xl:-left-6"
              >
                <Target className="w-5 h-5 text-[#8B5E3C] opacity-60 2xl:w-8 2xl:h-8" />
              </motion.div>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-gradient-to-r from-[#EED7B5] via-[#8B5E3C] to-[#F8E7D3] rounded-full mx-auto mb-6 shadow-lg relative overflow-hidden 2xl:h-1.5 2xl:w-32"
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
            className="text-lg md:text-xl text-[#8B5E3C] max-w-2xl mx-auto font-light 2xl:text-3xl"
          >
            {t('whatMakesDifferent.subtitle')}
          </motion.p>
        </motion.div>

        {/* Enhanced Two Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {/* Good For You - Enhanced */}
          <motion.div
            variants={columnVariants}
            whileHover="hover"
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden group 2xl:p-12"
          >
            {/* Background Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -top-8 -right-8 opacity-10 2xl:-top-12 2xl:-right-12"
            >
              <Shield className="w-32 h-32 text-[#8B5E3C] 2xl:w-48 2xl:h-48" />
            </motion.div>

            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-[#8B5E3C] font-serif mb-8 text-center relative 2xl:text-5xl"
            >
              {t('whatMakesDifferent.goodForYouTitle')}
              <motion.div
                variants={pulseGlowVariants}
                initial="initial"
                animate="pulse"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full 2xl:w-24 2xl:h-1"
              />
            </motion.h3>

            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-0 md:gap-4 relative z-10"
            >
              {goodForYou.map((item, index) => (
                <AnimatedListItem 
                  key={index}
                  item={item}
                  index={index}
                  icon={Check}
                  isGood={true}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Free From - Enhanced */}
          <motion.div
            variants={columnVariants}
            whileHover="hover"
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden group 2xl:p-12"
          >
            {/* Background Icon */}
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-8 -left-8 opacity-10 2xl:-bottom-12 2xl:-left-12"
            >
              <Heart className="w-32 h-32 text-[#8B5E3C] 2xl:w-48 2xl:h-48" />
            </motion.div>

            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl font-bold text-[#8B5E3C] font-serif mb-8 text-center relative 2xl:text-5xl"
            >
              {t('whatMakesDifferent.freeFromTitle')}
              <motion.div
                variants={pulseGlowVariants}
                initial="initial"
                animate="pulse"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-[#D1A15D] to-[#8B5E3C] rounded-full 2xl:w-24 2xl:h-1"
              />
            </motion.h3>

            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-0 md:gap-4 relative z-10"
            >
              {freeFrom.map((item, index) => (
                <AnimatedListItem 
                  key={index}
                  item={item}
                  index={index}
                  icon={X}
                  isGood={false}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Extra Note */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.8 
          }}
          whileHover={{ 
            scale: 1.02,
            y: -5,
            transition: { type: "spring", stiffness: 400 }
          }}
          className="text-center mt-12 bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-green-200/50 max-w-2xl mx-auto relative overflow-hidden group 2xl:p-12 2xl:max-w-4xl"
        >
          {/* Animated background gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-green-50/30 to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{
              background: [
                "linear-gradient(45deg, #f0f9ff30, #fffbeb30)",
                "linear-gradient(135deg, #fffbeb30, #f0f9ff30)",
                "linear-gradient(45deg, #f0f9ff30, #fffbeb30)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
          />
          
          <motion.p 
            className="text-[#8B5E3C] text-lg md:text-xl leading-relaxed relative z-10 2xl:text-3xl"
          >
            {t('whatMakesDifferent.footer.part1')}{" "}
            <motion.span 
              className="font-semibold relative inline-block"
              whileInView={{ 
                scale: [1, 1.1, 1],
                transition: { duration: 0.8, delay: 1.2 }
              }}
            >
              {t('whatMakesDifferent.footer.highlighted')}
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B5E3C] 2xl:h-1"
                whileInView={{ 
                  width: "100%",
                  transition: { duration: 1, delay: 1.5 }
                }}
              />
            </motion.span>
            {t('whatMakesDifferent.footer.part2')}
          </motion.p>
          
          {/* Floating hearts */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="absolute top-2 right-4 2xl:top-4 2xl:right-6"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-5 h-5 text-green-400 fill-green-400/20 2xl:w-8 2xl:h-8" />
            </motion.div>
          </motion.div>

          {/* Additional floating icon */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-2 left-4 2xl:bottom-4 2xl:left-6"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Leaf className="w-4 h-4 text-amber-500 2xl:w-6 2xl:h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatMakesDifferent;