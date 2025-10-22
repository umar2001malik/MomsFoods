// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { registerServiceWorker } from './serviceWorkerRegistration.js'


// ReactDOM.createRoot(document.getElementById('root')).render(
// <React.StrictMode>
//   <App />
// </React.StrictMode>,
// )
// // ✅ Register service worker after app loads
// registerServiceWorker()


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// // ✅ Register the Vite PWA Service Worker
// import { registerSW } from 'virtual:pwa-register'

// // This registers and auto-updates your service worker for PWA functionality
// registerSW({ immediate: true })

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Hide loading screen when React loads
const hideLoadingScreen = () => {
  const loadingScreen = document.querySelector('.loading-screen');
  if (loadingScreen) {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.remove();
    }, 500);
  }
};

// The Vite PWA plugin auto-registers the service worker
// No need for manual registration in development

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App onReady={hideLoadingScreen} />
  </React.StrictMode>,
)