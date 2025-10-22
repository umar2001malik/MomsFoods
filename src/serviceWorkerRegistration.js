export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('✅ Service Worker registered:', registration.scope)

          registration.onupdatefound = () => {
            const installingWorker = registration.installing
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  console.log('🔄 New content available! Please refresh.')
                } else {
                  console.log('🎉 Content cached for offline use.')
                }
              }
            }
          }
        })
        .catch(error => console.error('❌ SW registration failed:', error))
    })
  }
}
