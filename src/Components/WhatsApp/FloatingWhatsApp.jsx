// import React from "react";
// import { FaWhatsapp } from "react-icons/fa";

// const FloatingWhatsApp = () => {
//   return (
//     <a
//       href="https://wa.me/+31639216200"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="
//         fixed bottom-6 right-6
//         bg-[#25D366] text-white rounded-full
//         p-3 shadow-lg hover:scale-110 transition-transform duration-300
//       "
//       style={{ zIndex: 99999 }} // Move z-index to style prop for clarity
//     >
//       <FaWhatsapp size={50} />
//     </a>
//   );
// };

// export default FloatingWhatsApp;

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/+31639216200"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6
        bg-[#25D366] text-white rounded-full
        p-3 shadow-lg hover:scale-110 transition-transform duration-300
        flex items-center justify-center
      "
      style={{ zIndex: 99999 }}
    >
      {/* Responsive icon sizes */}
      <FaWhatsapp
        className="
          w-5 h-5   /* default for small screens */
          sm:w-10 sm:h-10  /* for tablets */
          md:w-10 md:h-10  /* for medium screens */
          lg:w-14 lg:h-14  /* for laptops/desktops */
        "
      />
    </a>
  );
};

export default FloatingWhatsApp;
