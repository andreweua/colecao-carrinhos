/**
 * Garagem em Miniatura - Service Worker PWA
 * PereiraLabs (divisão da Louzada & Pereira - Soluções Digitais)
 * URL: https://andreweua.github.io/colecao-carrinhos/
 * Versão: 5.4.0
 */

const CACHE_NAME = "garagem-miniatura-cache-v5.4.0";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./data.js",
  "./manifest.json"
];

// Instalação: grava os arquivos essenciais em cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Ativação: remove caches de versões antigas
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Intercepta requisições: tenta a rede, recorre ao cache em caso de offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});