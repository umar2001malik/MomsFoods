import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Sparkles, Heart, ShoppingBag, Zap, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import image6 from "../../assets/image67.png";
import image7 from "../../assets/image677.png";
import backgroundVideo from "../../assets/video5.mp4";
import rightSideVideo from "../../assets/video9.mp4";

const Products = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      name: t('products.granola.name'),
      description: t('products.granola.description'),
      image: image6,
      rating: 5,
      category: t('products.granola.category'),
      details: t('products.granola.details'),
      ingredients: t('products.granola.ingredients'),
      badges: t('products.granola.badges', { returnObjects: true }),
      weight: t('products.granola.weight'),
      color: "#8B5E3C"
    },
    {
      id: 2,
      name: t('products.peachMelba.name'),
      description: t('products.peachMelba.description'),
      image: image7,
      rating: 5,
      category: t('products.peachMelba.category'),
      details: t('products.peachMelba.details'),
      ingredients: t('products.peachMelba.ingredients'),
      badges: t('products.peachMelba.badges', { returnObjects: true }),
      weight: t('products.peachMelba.weight'),
      color: "#8B5E3C"
    },
  ];

  const handleProductClick = () => {
    // navigate(`/product/${product.id}`, { state: { product } });
       navigate("/products");
  };

  const handleExploreAll = () => {
    navigate("/products");
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -80, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1.2,
      },
    },
  };

  const productCardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: i * 0.3,
        duration: 1.2
      }
    })
  };

  const magicButtonVariants = {
    initial: {
      scale: 1,
      background: "linear-gradient(135deg, #8B5E3C 0%, #D1A15D 100%)"
    },
    hover: {
      scale: 1.05,
      background: [
        "linear-gradient(135deg, #8B5E3C 0%, #D1A15D 100%)",
        "linear-gradient(135deg, #D1A15D 0%, #8B5E3C 100%)",
        "linear-gradient(135deg, #8B5E3C 0%, #D1A15D 100%)"
      ],
      transition: {
        background: {
          duration: 2,
          repeat: Infinity
        },
        scale: {
          type: "spring",
          stiffness: 400
        }
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const arrowButtonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      backgroundColor: "#8B5E3C",
      color: "white",
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  const ProductBadgeAnimation = ({ badges, productColor }) => (
    <div className="flex flex-wrap justify-center gap-3 mt-4">
      {badges.map((badge, index) => (
        <motion.span
          key={index}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2 + index * 0.2, type: "spring" }}
          className="px-4 py-2 font-bold rounded-full border-2 whitespace-nowrap
            text-[clamp(0.9rem,1.1vw,1.3rem)]
            lg:text-[clamp(1rem,1.2vw,1.4rem)]
            2xl:text-[clamp(1.1rem,1.3vw,1.5rem)]"
          style={{
            borderColor: productColor,
            color: productColor,
            backgroundColor: `${productColor}15`
          }}
        >
          {badge}
        </motion.span>
      ))}
    </div>
  );

  const AnimatedProductImage = ({ image, name }) => (
    <div className="relative z-10  overflow-hidden   mb-6
      w-[clamp(8rem,12vw,14rem)] h-[clamp(13rem,12vw,14rem)]
      lg:w-[clamp(10rem,15vw,18rem)] lg:h-[clamp(10rem,15vw,18rem)]
      2xl:w-[clamp(12rem,18vw,22rem)] 2xl:h-[clamp(12rem,18vw,22rem)]">
      <motion.img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <section
      id="products"
      className="relative overflow-hidden min-h-screen flex items-center justify-center py-20 w-full"
    >
      {/* Main Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
          {t('products.videoFallback')}
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/20 to-white/40"
        />
      </div>

      <div className="relative z-20 w-full px-4 lg:px-8 2xl:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-16 items-center min-h-[80vh] w-full"
        >
          {/* Left Side - Product Cards - FULL WIDTH */}
          <motion.div
            className="relative w-full"
            variants={containerVariants}
          >
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 2xl:gap-10 w-full px-0">
              {products.map((product, idx) => (
                <motion.div
                  key={product.id}
                  custom={idx}
                  variants={productCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  onClick={() => handleProductClick(product)}
                  className="group relative bg-white/90 backdrop-blur-xl 
                    rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center p-6 lg:p-8 2xl:p-10
                    border-2 border-white/60 cursor-pointer transition-all duration-300 h-full w-full
                    hover:shadow-3xl hover:border-white/80
                    min-h-[500px] lg:min-h-[550px] 2xl:min-h-[600px]"
                >
                  <div className="absolute  z-0" />

                  <AnimatedProductImage
                    image={product.image}
                    name={product.name}
                  />

                  <div className="relative z-10 w-full text-center space-y-4 lg:space-y-5 2xl:space-y-6 flex-1 flex flex-col">
                    <motion.h3
                      variants={textVariants}
                      className="font-bold font-serif text-[#8B5E3E] leading-tight
                        text-[clamp(1.5rem,2vw,2.2rem)]
                        lg:text-[clamp(1.7rem,2.2vw,2.5rem)]
                        2xl:text-[clamp(2rem,2.5vw,3rem)]"
                    >
                      {product.name}
                    </motion.h3>

                    <motion.div className="flex justify-center space-x-1">
                      {[...Array(product.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                        >
                          <Star
                            size={20}
                            className="text-yellow-500 fill-yellow-500"
                          />
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.p
                      variants={textVariants}
                      className="text-[#6b4a2f]/80 leading-relaxed flex-1
                        text-[clamp(1rem,1.3vw,1.5rem)]
                        lg:text-[clamp(1.1rem,1.4vw,1.6rem)]
                        2xl:text-[clamp(1.2rem,1.5vw,1.7rem)]"
                    >
                      {product.description}
                    </motion.p>

                    {/* Badges */}
                    <ProductBadgeAnimation
                      badges={product.badges}
                      productColor={product.color}
                    />

                   <motion.button
  variants={arrowButtonVariants}
  initial="initial"
  whileHover="hover"
  className="relative z-10 mt-4 bg-[#8B5E3C] text-white border border-[#8B5E3C]/30
    rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-3 shadow-lg transition-all duration-300
    flex items-center justify-center space-x-2 font-semibold w-full max-w-[200px] mx-auto
    text-[clamp(0.9rem,1.1vw,1.2rem)]
    sm:text-[clamp(1.0rem,1.2vw,1.3rem)]
    lg:text-[clamp(1.1rem,1.3vw,1.4rem)]"
>
  <span className="whitespace-nowrap">{t('products.buttons.seeMore')}</span>
  <motion.div
    animate={{ x: [0, 5, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    <ArrowRight size={20} />
  </motion.div>
</motion.button>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 }}
                    className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 font-semibold text-[#8B5E3C] border border-white/30
                      text-[clamp(0.9rem,1.1vw,1.3rem)]
                      lg:text-[clamp(1rem,1.2vw,1.4rem)]
                      2xl:text-[clamp(1.1rem,1.3vw,1.5rem)]"
                  >
                    {product.weight}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Text Content with Background Video - FULL WIDTH */}
          <motion.div
            variants={containerVariants}
            className="text-left space-y-8 lg:space-y-12 2xl:space-y-16 relative rounded-3xl overflow-hidden w-full h-full min-h-[600px] lg:min-h-[800px] 2xl:min-h-[900px]"
          >
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={rightSideVideo} type="video/mp4" />
                {t('products.videoFallback')}
              </video>
              
              {/* Dark Overlay for Better Text Readability */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            </div>

            {/* Content - FULL WIDTH */}
            <div className="relative z-10 p-8 lg:p-12 2xl:p-16 h-full flex flex-col justify-center w-full">
              {/* Heading */}
              <motion.h2
                variants={textVariants}
                className="font-bold font-serif text-white leading-tight
                  text-[clamp(2.5rem,4vw,5.5rem)]
                  lg:text-[clamp(3rem,4.5vw,6.5rem)]
                  2xl:text-[clamp(3.5rem,5.5vw,8rem)]"
              >
                {t('products.title.line1')}{" "}
                <motion.span
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
                  className="inline-block"
                >
                  {t('products.title.natural')}
                </motion.span>
                <br />
                {t('products.title.line2')}
              </motion.h2>

              <motion.div
                variants={containerVariants}
                className="space-y-6 lg:space-y-8 2xl:space-y-12 relative w-full"
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                  className="h-1 bg-gradient-to-r bg-[#8B5E3C]"
                />

                <motion.p
                  variants={textVariants}
                  className="text-white leading-relaxed font-medium
                    text-[clamp(1.1rem,1.4vw,1.7rem)]
                    lg:text-[clamp(1.2rem,1.5vw,1.8rem)]
                    2xl:text-[clamp(1.4rem,1.7vw,2rem)]"
                >
                  {t('products.description.part1')}
                </motion.p>

                <motion.p
                  variants={textVariants}
                  className="text-white leading-relaxed font-medium
                    text-[clamp(1.1rem,1.4vw,1.7rem)]
                    lg:text-[clamp(1.2rem,1.5vw,1.8rem)]
                    2xl:text-[clamp(1.4rem,1.7vw,2rem)]"
                >
                  {t('products.description.part2')}
                </motion.p>
              </motion.div>

              <motion.button
                onClick={handleExploreAll}
                variants={magicButtonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="px-8 lg:px-12 py-4 lg:py-5 text-white rounded-2xl font-semibold 
                  shadow-2xl flex items-center space-x-3 mt-8 lg:mt-12 2xl:mt-16 relative overflow-hidden group w-fit
                  text-[clamp(1.1rem,1.4vw,1.7rem)]
                  lg:text-[clamp(1.2rem,1.5vw,1.8rem)]
                  2xl:text-[clamp(1.4rem,1.7vw,2rem)]"
              >
                <span className="relative z-10">{t('products.buttons.exploreAll')}</span>
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >
                  <ArrowRight size={24} />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;