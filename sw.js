/**
 * Garagem em Miniatura - Service Worker (Limpeza Ativa)
 * PereiraLabs (divisao da Louzada & Pereira - Solucoes Digitais)
 * URL de Producao: https://andreweua.github.io/colecao-carrinhos/
 */

self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  // Sempre busca direto da rede no F5 para nunca quebrar o estilo ou dados
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});