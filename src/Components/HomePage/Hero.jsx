// import React from "react";
// import { motion } from "framer-motion";
// import { Leaf, Heart, DollarSign, Shield } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import video1 from "../../assets/video4.webm";
// import bgVideo from "../../assets/video1.webm"; 
// import bgImage from "../../assets/download.jpeg";


// const Hero = () => {
//   const { t } = useTranslation();

//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, x: -80, filter: "blur(10px)" },
//     visible: {
//       opacity: 1,
//       x: 0,
//       filter: "blur(0px)",
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//         duration: 1.2,
//       },
//     },
//   };

//   const videoVariants = {
//     hidden: { opacity: 0, x: 80, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 80,
//         damping: 20,
//         duration: 1.5,
//       },
//     },
//   };

//   const featureVariants = {
//     hidden: { opacity: 0, y: 40, scale: 0.8 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 15,
//         delay: 0.8 + i * 0.1,
//       },
//     }),
//     hover: {
//       y: -8,
//       scale: 1.05,
//       backgroundColor: "rgba(255, 255, 255, 0.9)",
//       boxShadow: "0 20px 40px -10px rgba(139, 94, 60, 0.3)",
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 25,
//       },
//     },
//   };

//   const features = [
//     { icon: Leaf, text: t('hero.features.natural'), color: "#8B5E3C" },
//     { icon: Heart, text: t('hero.features.healthy'), color: "#8B5E3C" },
//     { icon: DollarSign, text: t('hero.features.affordable'), color: "#8B5E3C" },
//     { icon: Shield, text: t('hero.features.safe'), color: "#8B5E3C" },
//   ];

//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden min-h-screen flex items-center justify-center mt-10"
//       style={{ paddingTop: '80px' }}
//     >
//       {/* Background Video */}
//       <div className="absolute inset-0 z-0">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//           poster={bgImage}
//         >
//           <source src={bgVideo} type="video/mp4" />
//         </video>
//       </div>

//       {/* Content Container */}
//       <div className="relative z-20 container  mx-auto px-4 lg:px-8 2xl:px-24 max-w-[2000px]">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] gap-8 lg:gap-12 2xl:gap-24"
//         >
//           {/* LEFT TEXT */}
//           <motion.div
//             className="lg:w-1/2 text-center lg:text-left space-y-2 lg:space-y-3 2xl:space-y-6"
//             variants={containerVariants}
            
//           >
//                {/* <motion.h2
//   variants={textVariants}
//   className="font-bold text-[#5A3A1E] font-serif leading-tight
//     text-[clamp(1.2rem, 4vw, 2rem)] 
//     sm:text-[clamp(1.5rem, 4vw, 2.5rem)] 
//     lg:text-[clamp(2rem, 3.5vw, 4rem)]
//     2xl:text-[clamp(2.5rem, 3.5vw, 5rem)]"
// >
//   {t('hero.lines.noAddedSugar')}
// </motion.h2> */}

//             {/* NO ADDED SUGAR - Single line */}
//             {/* <motion.h2
//               variants={textVariants}
//               className="font-bold text-[#5A3A1E] font-serif leading-tight whitespace-nowrap
//                 text-[clamp(1.8rem,3vw,4rem)] 
//                 lg:text-[clamp(2rem,3.5vw,5rem)]
//                 2xl:text-[clamp(2.5rem,4vw,6rem)]"
//             >
//               {t('hero.lines.noAddedSugar')}
//             </motion.h2> */}

//          <motion.h2
//   variants={textVariants}
//   className="font-bold text-[#1C1C1C] font-serif leading-tight whitespace-nowrap
//     text-[1.1rem]          /* smaller size for mobile screens */
//     sm:text-[clamp(1.8rem,3vw,4rem)]  
//     lg:text-[clamp(2rem,3.5vw,5rem)]
//     2xl:text-[clamp(2.5rem,4vw,6rem)]"
// >
//   {t('hero.lines.noAddedSugar')}
// </motion.h2>

//             {/* OVEN BAKED WITH - Single line */}
//             <motion.h2
//               variants={textVariants}
//               className="font-bold text-[#1C1C1C] font-serif leading-tight whitespace-nowrap
//                  text-[1.2rem] 
//                 lg:text-[clamp(2rem,3.5vw,5rem)]
//                 2xl:text-[clamp(2.5rem,4vw,6rem)]"
//             >
//               {t('hero.lines.ovenBakedWith')}
//             </motion.h2>

//             {/* EXTRA VIRGIN - Single line */}
//             <motion.h2
//               variants={textVariants}
//               className="font-bold bg-gradient-to-r from-[#1C1C1C] via-[#A67C52] to-[#D1A15D] bg-clip-text text-transparent whitespace-nowrap
//                   text-[1.2rem] 
//                 lg:text-[clamp(2.5rem,4vw,6rem)]
//                 2xl:text-[clamp(3rem,4.5vw,7rem)] font-serif"
//             >
//               {t('hero.lines.extraVirgin')}
//             </motion.h2>

//             {/* OLIVE OIL - Single line */}
//             <motion.h2
//               variants={textVariants}
//               className="font-bold bg-gradient-to-r from-[#1C1C1C] via-[#A67C52] to-[#D1A15D] bg-clip-text text-transparent whitespace-nowrap
//                   text-[1.2rem] 
//                 lg:text-[clamp(2.5rem,4vw,6rem)]
//                 2xl:text-[clamp(3rem,4.5vw,7rem)] font-serif"
//             >
//               {t('hero.lines.oliveOil')}
//             </motion.h2>

//             {/* GRANOLA - Single line */}
//             <motion.h2
//               variants={textVariants}
//               className="font-bold bg-gradient-to-r from-[#1C1C1C] via-[#A67C52] to-[#D1A15D] bg-clip-text text-transparent whitespace-nowrap
//                   text-[1.2rem] 
//                 lg:text-[clamp(2.5rem,4vw,6rem)]
//                 2xl:text-[clamp(3rem,4.5vw,7rem)] font-serif"
//             >
//               {t('hero.lines.granola')}
//             </motion.h2>

//             {/* FEATURES */}
//             <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8 2xl:mt-12">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-center bg-white/80 px-6 py-3 rounded-2xl border border-white/40 shadow-md"
//                   variants={featureVariants}
//                   initial="hidden"
//                   animate="visible"
//                   custom={index}
//                   whileHover="hover"
//                 >
//                   <feature.icon className="w-6 h-6 2xl:w-7 2xl:h-7 text-[#8B5E3C]" />
//                   <span className="ml-2 text-lg 2xl:text-xl font-semibold text-[#5A3A1E]">
//                     {feature.text}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>

//             {/* BUTTON */}
//             <div className="mt-10 2xl:mt-14">
//               <button className="bg-[#8B5E3C] text-white px-10 py-4 rounded-full font-semibold 
//                 text-[clamp(1rem,1.5vw,1.5rem)] 
//                 2xl:text-[clamp(1.2rem,1.8vw,1.8rem)] 
//                 hover:bg-[#7A4E2C] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
//                 {t('hero.button.discover')}
//               </button>
//             </div>
//           </motion.div>

//           {/* RIGHT IMAGE/VIDEO */}
//           {/* <motion.div
//             className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0"
//             variants={videoVariants}
//           >
//             <div className="relative rounded-full border-[10px] 2xl:border-[12px] border-white/60 shadow-2xl overflow-hidden">
//               <video
//                 src={video1}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="rounded-full object-cover w-[clamp(20rem,30vw,40rem)] h-[clamp(20rem,30vw,40rem)] 2xl:w-[clamp(25rem,35vw,50rem)] 2xl:h-[clamp(25rem,35vw,50rem)]"
//               />
//             </div>
//           </motion.div> */}

//           <motion.div
//   className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0"
//   variants={videoVariants}
// >
//   <div className="relative rounded-full border-[10px] 2xl:border-[12px] border-white/60 shadow-2xl overflow-hidden bg-white">
//     <video
//       src={video1}
//       autoPlay
//       loop
//       muted
//       playsInline
//       className="rounded-full object-contain bg-white 
//                  w-[clamp(15rem,22vw,28rem)] h-[clamp(15rem,22vw,28rem)] 
//                  2xl:w-[clamp(20rem,28vw,35rem)] 2xl:h-[clamp(20rem,28vw,35rem)]"
//     />
//   </div>
// </motion.div>


//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Heart, DollarSign, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import video1 from "../../assets/video4.webm";
import bgVideo from "../../assets/video1.webm"; 
import bgImage from "../../assets/download.jpeg";

const Hero = () => {
  const { t } = useTranslation();
  const bgVideoRef = useRef(null);
  const [bgVideoReady, setBgVideoReady] = useState(false);

  useEffect(() => {
    const video = bgVideoRef.current;
    
    const handleCanPlay = () => {
      setBgVideoReady(true);
    };

    if (video) {
      video.addEventListener('canplay', handleCanPlay);
      // Preload video
      video.load();
    }

    return () => {
      if (video) {
        video.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
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

  const featureVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.8 + i * 0.1,
      },
    }),
    hover: {
      y: -8,
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      boxShadow: "0 20px 40px -10px rgba(139, 94, 60, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const features = [
    { icon: Leaf, text: t('hero.features.natural'), color: "#8B5E3C" },
    { icon: Heart, text: t('hero.features.healthy'), color: "#8B5E3C" },
    { icon: DollarSign, text: t('hero.features.affordable'), color: "#8B5E3C" },
    { icon: Shield, text: t('hero.features.safe'), color: "#8B5E3C" },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center mt-10"
      style={{ paddingTop: '80px' }}
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={bgVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            bgVideoReady ? "opacity-100" : "opacity-0"
          }`}
          poster={bgImage}
        >
          <source src={bgVideo} type="video/webm" />
        </video>
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8 2xl:px-24 max-w-[2000px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] gap-8 lg:gap-12 2xl:gap-24"
        >
          {/* LEFT TEXT */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left space-y-2 lg:space-y-3 2xl:space-y-6"
            variants={containerVariants}
          >
            <motion.h2
              variants={textVariants}
              className="font-bold text-[#1C1C1C] font-serif leading-tight whitespace-nowrap
                text-[1.1rem] sm:text-[clamp(1.8rem,3vw,4rem)]  
                lg:text-[clamp(2rem,3.5vw,5rem)]
                2xl:text-[clamp(2.5rem,4vw,6rem)]"
            >
              {t('hero.lines.noAddedSugar')}
            </motion.h2>

            <motion.h2
              variants={textVariants}
              className="font-bold text-[#1C1C1C] font-serif leading-tight whitespace-nowrap
                 text-[1.2rem] 
                lg:text-[clamp(2rem,3.5vw,5rem)]
                2xl:text-[clamp(2.5rem,4vw,6rem)]"
            >
              {t('hero.lines.ovenBakedWith')}
            </motion.h2>

            <motion.h2
              variants={textVariants}
              className="font-bold bg-gradient-to-r from-[#1C1C1C] via-[#A67C52] to-[#D1A15D] bg-clip-text text-transparent whitespace-nowrap
                  text-[1.2rem] 
                lg:text-[clamp(2.5rem,4vw,6rem)]
                2xl:text-[clamp(3rem,4.5vw,7rem)] font-serif"
            >
              {t('hero.lines.extraVirgin')}
            </motion.h2>

            <motion.h2
              variants={textVariants}
              className="font-bold bg-gradient-to-r from-[#1C1C1C] via-[#A67C52] to-[#D1A15D] bg-clip-text text-transparent whitespace-nowrap
                  text-[1.2rem] 
                lg:text-[clamp(2.5rem,4vw,6rem)]
                2xl:text-[clamp(3rem,4.5vw,7rem)] font-serif"
            >
              {t('hero.lines.oliveOil')}
            </motion.h2>

            <motion.h2
              variants={textVariants}
              className="font-bold bg-gradient-to-r from-[#1C1C1C] via-[#A67C52] to-[#D1A15D] bg-clip-text text-transparent whitespace-nowrap
                  text-[1.2rem] 
                lg:text-[clamp(2.5rem,4vw,6rem)]
                2xl:text-[clamp(3rem,4.5vw,7rem)] font-serif"
            >
              {t('hero.lines.granola')}
            </motion.h2>

            {/* FEATURES */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8 2xl:mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-white/80 px-6 py-3 rounded-2xl border border-white/40 shadow-md"
                  variants={featureVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  whileHover="hover"
                >
                  <feature.icon className="w-6 h-6 2xl:w-7 2xl:h-7 text-[#8B5E3C]" />
                  <span className="ml-2 text-lg 2xl:text-xl font-semibold text-[#5A3A1E]">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="mt-10 2xl:mt-14">
              <button className="bg-[#8B5E3C] text-white px-10 py-4 rounded-full font-semibold 
                text-[clamp(1rem,1.5vw,1.5rem)] 
                2xl:text-[clamp(1.2rem,1.8vw,1.8rem)] 
                hover:bg-[#7A4E2C] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                {t('hero.button.discover')}
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE/VIDEO */}
          <motion.div
            className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0"
            variants={videoVariants}
          >
            <div className="relative rounded-full border-[10px] 2xl:border-[12px] border-white/60 shadow-2xl overflow-hidden bg-white">
              <video
                src={video1}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-full object-contain bg-white 
                           w-[clamp(15rem,22vw,28rem)] h-[clamp(15rem,22vw,28rem)] 
                           2xl:w-[clamp(20rem,28vw,35rem)] 2xl:h-[clamp(20rem,28vw,35rem)]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;