// import React from "react";
// import Hero from "./Hero";
// import FoodMenu from "./Products";
// import InfoSection from "./InfoSection";
// import Services from "./WhatMakesDifferent";
// import ScrollingFeatures from "./ScrollingFeatures";
// import bgImage from "../../assets/download.jpeg";
// import FAQSection from "./FAQSection";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import "../../i18n/i18n"; // Import i18n configuration

// function HomePage() {
//   return (
//    <div
//   className="min-h-screen w-full bg-cover bg-center bg-no-repeat pt-3 pb-3"
//   style={{
//     backgroundImage: `url(${bgImage})`,
//   }}
// >
//   <div
//     className="w-full mx-auto rounded-3xl shadow-lg overflow-hidden  "
//     style={{
//       background: "rgba(255, 255, 255, 0.25)",
//       backdropFilter: "blur(60px)",
//       WebkitBackdropFilter: "blur(60px)",
//       border: "1px solid rgba(255, 255, 255, 0.86)",
//       maxWidth: "98%",
//     }}
//   >
//     <Header />
//     <Hero />
//     <InfoSection />
//     <ScrollingFeatures />
//     <FoodMenu />
//     <Services />
//     <FAQSection />
//     <Footer />
//   </div>
// </div>

//   );
// }
// export default HomePage;      



import React from "react";
import Hero from "./Hero";
import FoodMenu from "./Products";
import InfoSection from "./InfoSection";
import Services from "./WhatMakesDifferent";
import ScrollingFeatures from "./ScrollingFeatures";
import bgImage from "../../assets/download.jpeg";
import FAQSection from "./FAQSection";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../../i18n/i18n";

function HomePage() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat pt-3 pb-3"
      style={{
        backgroundImage: `url(${bgImage})`,
        zIndex: 1, // Ensure this is lower than FloatingWhatsApp's z-index
      }}
    >
      <div
        className="w-full mx-auto rounded-3xl shadow-lg overflow-hidden"
        style={{
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(60px)",
          WebkitBackdropFilter: "blur(60px)",
          border: "1px solid rgba(255, 255, 255, 0.86)",
          maxWidth: "98%",
          zIndex: 2, // Ensure this is lower than FloatingWhatsApp's z-index
        }}
      >
        <Header />
        <Hero />
        <InfoSection />
        <ScrollingFeatures />
        <FoodMenu />
        <Services />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;