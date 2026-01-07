self.addEventListener('install', (e) => {
  console.log('SW instalado');
});

self.addEventListener('fetch', (e) => {
  // Necessário para funcionar offline/PWA
});
