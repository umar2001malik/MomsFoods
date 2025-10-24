import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import video2 from "../../assets/milk_video.mp4";
import image2 from "../../assets/product_images.png";
import image4 from "../../assets/image4.png";
import video3 from "../../assets/video_dryFruit.mp4";
import backgroundVideo from "../../assets/video7.mp4"; 

const InfoSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLearnMore = () => {
    navigate("/about");
  };

  // Animation Variants - Matching Hero Section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
        duration: 1,
      },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, x: 80, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 1.5,
      },
    },
  };

  const imageCardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5 + i * 0.1,
      },
    }),
    hover: {
      y: -20,
      scale: 1.08,
      boxShadow: "0 35px 60px -15px rgba(139, 94, 60, 0.5)",
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.15,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.8 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(139, 94, 60, 0.3)"
    },
    tap: { scale: 0.95 },
  };

  const mediaItems = [
    { type: "video", src: video2 },
    { type: "image", src: image2 },
    { type: "image", src: image4 },
    { type: "video", src: video3 },
  ];

  return (
    <section id="about" className="relative overflow-hidden min-h-screen flex items-center justify-center py-20">
      {/* Background Video Only - No overlays (Same as Hero) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-20 container mx-auto px-4 lg:px-8 2xl:px-32 max-w-[2400px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] gap-8 lg:gap-16 2xl:gap-32"
        >
          {/* Left Text Section - Matching Hero Layout */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left space-y-2 lg:space-y-4 2xl:space-y-6"
            variants={containerVariants}
          >
            <motion.h2 
              variants={textVariants}
              className="font-bold font-serif text-[#5A3A1E] leading-tight
                text-[clamp(2.2rem,4vw,5rem)]
                lg:text-[clamp(3rem,5vw,7rem)]
                2xl:text-[clamp(1rem,6vw,4rem)]
                3xl:text-[clamp(5rem,7vw,11rem)]"
            >
              {t('infoSection.title')}
            </motion.h2>

            <motion.div
              variants={textVariants}
              className="space-y-2 lg:space-y-4 2xl:space-y-6 text-[#5A3A1E] leading-relaxed
                text-[clamp(1.1rem,1.5vw,1.8rem)]
                lg:text-[clamp(1.4rem,1.8vw,2.2rem)]
                2xl:text-[clamp(1.7rem,2.2vw,1.5rem)]
                3xl:text-[clamp(2.4rem,2.5vw,3.2rem)]"
            >
              <motion.p variants={textVariants}>
                {t('infoSection.description.part1')}{" "}
                <span className="font-semibold text-[#8B5E3C]
                  text-[clamp(1.2rem,1.6vw,2rem)]
                  lg:text-[clamp(1.5rem,2vw,2.5rem)]
                  2xl:text-[clamp(1.8rem,2.4vw,3rem)]
                  3xl:text-[clamp(2.1rem,2.8vw,3.5rem)]">
                  {t('infoSection.brandName')}
                </span>{" "}
                {t('infoSection.description.part2')}
              </motion.p>
              <motion.p variants={textVariants}>
                {t('infoSection.description.part3')}
              </motion.p>
            </motion.div>

            {/* Button - Matching Hero Style */}
          <motion.div variants={textVariants} className="mt-8 2xl:mt-16 flex justify-center lg:justify-start">
  <motion.button
    variants={buttonVariants}
    whileHover="hover"
    whileTap="tap"
    onClick={handleLearnMore}
    className="bg-[#8B5E3C] text-white 
      px-6 lg:px-9 py-2.5 lg:py-3.5 rounded-full font-semibold 
      text-[clamp(0.85rem,1vw,1.1rem)]
      lg:text-[clamp(0.95rem,1.1vw,1.25rem)]
      2xl:text-[clamp(1.05rem,1.2vw,1.35rem)]
      relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300"
  >
    <span className="relative z-10">{t('infoSection.button.learnMore')}</span>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-[#A67C52] to-[#8B5E3C]"
      initial={{ x: "-100%" }}
      whileHover={{ x: "0%" }}
      transition={{ duration: 0.3 }}
    />
  </motion.button>
</motion.div>

          </motion.div>

          {/* Right Media Grid - EXTRA LARGE for Large Screens */}
          <motion.div
            className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0"
            variants={videoVariants}
          >
            <div className="grid grid-cols-2 gap-6 lg:gap-8 2xl:gap-12 
              w-full max-w-lg lg:max-w-2xl 2xl:max-w-4xl">
              {mediaItems.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={imageCardVariants}
                  whileHover="hover"
                  className="bg-white/90 backdrop-blur-md rounded-3xl border-2 border-white/60 shadow-2xl overflow-hidden cursor-pointer group relative
                    w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 2xl:h-[28rem]"
                >
                  <motion.div
                    variants={imageVariants}
                    className="w-full h-full overflow-hidden"
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={t('infoSection.media.altText')}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <video
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                  </motion.div>
                  
                  {/* Enhanced Hover Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B5E3C]/20 to-[#D1A15D]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;