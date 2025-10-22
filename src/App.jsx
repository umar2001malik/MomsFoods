// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";

// // Pages
// import HomePage from "./Components/HomePage";
// import AboutPage from "./Components/AboutPage/AboutPage";
// import ContactPage from "./Components/ContactPage/ContactPage";
// import Products from "./Components/Products/Products";
// import ProductDetail from "./Components/Products/ProductDetail";
// import ScrollToTop from "./Components/ScrollToTop";
// import Login from "./Components/Login/Login";

// // Admin
// import AdminDashboard from "./Components/admin/AdminDashboard";
// import { APIProvider } from "./Components/Context/AuthContext";
// import WhatsAppIcon from "./Components/WhatsApp/FloatingWhatsApp";


// const App = () => {
//   return (
//     <Router>
//       <APIProvider>
//         <div className="App">
//           <ScrollToTop />

//           {/* ✅ Toast Notifications */}
//           <ToastContainer
//             position="top-right"
//             autoClose={5000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="light"
//           />

//           <Routes>
//             {/* Home Route */}
//             <Route
//               path="/"
//               element={
//                 <>
//                   {/* <Header /> */}
//                   <HomePage />
//                   {/* <Footer /> */}
//                 </>
//               }
//             />

//             {/* Login Route */}
//             <Route
//               path="/login"
//               element={
//                 <>
//                   <Header />
//                   <Login />
//                   <Footer/>
//                 </>
//               }
//             />

//             {/* About Route */}
//             <Route
//               path="/about"
//               element={
//                 <>
//                   <Header />
//                   <AboutPage />
//                   <Footer />
//                 </>
//               }
//             />

//             {/* Products Route */}
//             <Route
//               path="/products"
//               element={
//                 <>
//                   <Header />
//                   <Products />
//                   <Footer />
//                 </>
//               }
//             />

//             {/* Product Detail Route */}
//             <Route
//               path="/product/:id"
//               element={
//                 <>
//                   <Header />
//                   <ProductDetail />
//                   <Footer />
//                 </>
//               }
//             />

//             {/* Contact Route */}
//             <Route
//               path="/contact"
//               element={
//                 <>
//                   <Header />
//                   <ContactPage />
//                   <Footer />
//                 </>
//               }
//             />

//             {/* Admin Dashboard Route */}
//             <Route path="/admin" element={<AdminDashboard />} />

//             {/* Redirect any sub-path of admin to /admin */}
//             <Route path="/admin/*" element={<Navigate to="/admin" replace />} />
//           </Routes>
         
//         {/* ✅ WhatsApp icon visible on all screens */}
//           <WhatsAppIcon />
//         </div>
//       </APIProvider>
//     </Router>
//   );
// };

// export default App;



// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import Products from "./Components/Products/Products";
import ProductDetail from "./Components/Products/ProductDetail";
import ScrollToTop from "./Components/ScrollToTop";
import Login from "./Components/Login/Login";
import AdminDashboard from "./Components/admin/AdminDashboard";
import { APIProvider } from "./Components/Context/AuthContext";
import FloatingWhatsApp from "./Components/WhatsApp/FloatingWhatsApp";

const App = ({ onReady }) => {
  useEffect(() => {
    // Notify when app is ready to hide loading screen
    if (onReady) {
      onReady();
    }
  }, [onReady]);  
  return (
    <>
      <Router>
        <APIProvider>
          <div className="App">
            <ScrollToTop />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              pauseOnHover
              theme="light"
            />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/about"
                element={
                  <>
                    <Header />
                    <AboutPage />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/products"
                element={
                  <>
                    <Header />
                    <Products />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/product/:id"
                element={
                  <>
                    <Header />
                    <ProductDetail />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/contact"
                element={
                  <>
                    <Header />
                    <ContactPage />
                    <Footer />
                  </>
                }
              />

               <Route
                path="/login"
                element={
                  <>
                    <Header />
                    <Login />
                   
                  </>
                }
              />
              
              {/* <Route path="/login" element={
                <Login />

                
                } /> */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/*" element={<Navigate to="/admin" replace />} />
            </Routes>
          </div>
        </APIProvider>
      </Router>
      <FloatingWhatsApp />
    </>
  );
};

export default App;