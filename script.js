/**
 * Garagem em Miniatura - Controlador da Aplicação
 * PereiraLabs — Divisão de Tecnologia e IA
 * Louzada & Pereira - Soluções Digitais
 * URL: https://andreweua.github.io/colecao-carrinhos/
 * Versão: 2.2.0
 */

(() => {
  "use strict";

  // Número de WhatsApp para receber feedbacks de Dislike
  const WHATSAPP_NUMERO = "5535992344229";

  // Estado da aplicação
  const state = {
    cars: (typeof CARS_DATA !== "undefined" && Array.isArray(CARS_DATA)) ? CARS_DATA : [],
    categoryFilter: "todos",
    searchQuery: ""
  };

  // Cache de elementos do DOM
  const dom = {
    carsGrid: document.getElementById("cars-grid"),
    searchInput: document.getElementById("search-input"),
    categoryFilters: document.getElementById("category-filters"),
    noResults: document.getElementById("no-results"),
    totalModelos: document.getElementById("total-modelos"),
    totalMarcas: document.getElementById("total-marcas"),
    carModal: document.getElementById("car-modal"),
    modalDetails: document.getElementById("modal-details"),
    modalClose: document.getElementById("modal-close")
  };

  // Gerenciamento de reações locais
  const getReactions = () => {
    try {
      return JSON.parse(localStorage.getItem("garagem_reactions")) || {};
    } catch {
      return {};
    }
  };

  const saveReactions = (data) => {
    localStorage.setItem("garagem_reactions", JSON.stringify(data));
  };

  const sanitize = (str) => {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const updateStats = () => {
    if (dom.totalModelos) dom.totalModelos.textContent = state.cars.length;
    if (dom.totalMarcas) {
      const marcas = new Set(
        state.cars
          .map((c) => c.marca)
          .filter((m) => m && !m.includes("Modelo a Identificar"))
      );
      dom.totalMarcas.textContent = marcas.size;
    }
  };

  const renderCars = (carList) => {
    if (!dom.carsGrid) return;
    dom.carsGrid.innerHTML = "";

    if (carList.length === 0) {
      if (dom.noResults) dom.noResults.classList.remove("hidden");
      return;
    }

    if (dom.noResults) dom.noResults.classList.add("hidden");

    const reactions = getReactions();
    const fragment = document.createDocumentFragment();

    carList.forEach((car) => {
      const carReactions = reactions[car.id] || { likes: 0, dislikes: 0, userChoice: null, comment: "" };

      const card = document.createElement("article");
      card.className = "car-card";
      card.setAttribute("data-id", car.id);

      // Foto limpa (sem tags flutuantes por cima)
      const hasPhoto = Boolean(car.foto && car.foto.trim() !== "");
      const visualNode = hasPhoto
        ? `<img src="${encodeURI(car.foto)}" 
                alt="${sanitize(car.marca)} ${sanitize(car.modelo)}" 
                loading="lazy" 
                onerror="this.onerror=null; this.parentElement.innerHTML='<span>${car.icon || "🚗"}</span>';">`
        : `<span>${car.icon || "🚗"}</span>`;

      card.innerHTML = `
        <div class="card-image" tabindex="0" role="button" aria-label="Ver detalhes de ${car.modelo}">
          ${visualNode}
        </div>
        <div class="card-content">
          <div class="card-clickable" tabindex="0" role="button" aria-label="Ver detalhes de ${car.modelo}">
            <div class="card-brand">${sanitize(car.marca)}</div>
            <h2 class="card-title">${sanitize(car.modelo)}</h2>
          </div>
          
          <div class="card-footer">
            <div class="card-tags">
              <span class="card-badge">${sanitize(car.categoria)}</span>
              ${car.ano !== "—" ? `<span class="card-year">${sanitize(car.ano)}</span>` : ""}
            </div>
            <span class="card-id">#${car.id}</span>
          </div>

          <!-- BOTÕES DE LIKE E DISLIKE -->
          <div class="card-actions">
            <div class="feedback-btns">
              <button class="btn-feedback btn-like ${carReactions.userChoice === "like" ? "liked" : ""}" data-id="${car.id}">
                👍 <span>${carReactions.likes}</span>
              </button>
              <button class="btn-feedback btn-dislike ${carReactions.userChoice === "dislike" ? "disliked" : ""}" data-id="${car.id}">
                👎 <span>${carReactions.dislikes}</span>
              </button>
            </div>
          </div>

          <!-- FORMULÁRIO DE FEEDBACK DO DISLIKE -->
          <div class="dislike-box hidden" id="dislike-box-${car.id}">
            <textarea placeholder="O que achou deste modelo? (opinião curta)...">${sanitize(carReactions.comment || "")}</textarea>
            <div class="dislike-box-actions">
              <button class="btn-mini btn-mini-cancel" data-id="${car.id}">Cancelar</button>
              <button class="btn-mini btn-mini-send" data-id="${car.id}">Enviar no WhatsApp</button>
            </div>
          </div>

        </div>
      `;

      // Modal de detalhes
      const openModal = () => showModal(car);
      card.querySelector(".card-image").addEventListener("click", openModal);
      card.querySelector(".card-clickable").addEventListener("click", openModal);

      // Ação de Like
      card.querySelector(".btn-like").addEventListener("click", (e) => {
        e.stopPropagation();
        handleVote(car.id, "like");
      });

      // Ação de Dislike (alterna exibição da caixa de texto)
      card.querySelector(".btn-dislike").addEventListener("click", (e) => {
        e.stopPropagation();
        const box = card.querySelector(`#dislike-box-${car.id}`);
        box.classList.toggle("hidden");
      });

      // Enviar opinião para o WhatsApp com link da coleção
      card.querySelector(".btn-mini-send").addEventListener("click", (e) => {
        e.stopPropagation();
        const textarea = card.querySelector(`#dislike-box-${car.id} textarea`);
        const comentario = textarea.value.trim();

        if (!comentario) {
          alert("Por favor, digite sua opinião antes de enviar!");
          return;
        }

        handleVote(car.id, "dislike", comentario);
        card.querySelector(`#dislike-box-${car.id}`).classList.add("hidden");

        const msg = `*Feedback Coleção de Carrinhos*\n` +
                    `🏎️ *Item:* #${car.id} - ${car.marca} ${car.modelo} (${car.ano})\n` +
                    `💬 *Opinião:* "${comentario}"\n\n` +
                    `🔗 *Acesse o catálogo:* https://andreweua.github.io/colecao-carrinhos/`;

        const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(msg)}`;
        window.open(url, "_blank");
      });

      // Cancelar envio de dislike
      card.querySelector(".btn-mini-cancel").addEventListener("click", (e) => {
        e.stopPropagation();
        card.querySelector(`#dislike-box-${car.id}`).classList.add("hidden");
      });

      fragment.appendChild(card);
    });

    dom.carsGrid.appendChild(fragment);
  };

  const handleVote = (carId, type, comment = "") => {
    const reactions = getReactions();
    if (!reactions[carId]) {
      reactions[carId] = { likes: 0, dislikes: 0, userChoice: null, comment: "" };
    }

    const item = reactions[carId];

    if (type === "like") {
      if (item.userChoice === "like") {
        item.likes = Math.max(0, item.likes - 1);
        item.userChoice = null;
      } else {
        if (item.userChoice === "dislike") item.dislikes = Math.max(0, item.dislikes - 1);
        item.likes += 1;
        item.userChoice = "like";
      }
    } else if (type === "dislike") {
      if (item.userChoice !== "dislike") {
        if (item.userChoice === "like") item.likes = Math.max(0, item.likes - 1);
        item.dislikes += 1;
        item.userChoice = "dislike";
      }
      if (comment) item.comment = comment;
    }

    saveReactions(reactions);
    applyFilters();
  };

  const showModal = (car) => {
    if (!dom.carModal || !dom.modalDetails) return;

    const modalVisual = car.foto && car.foto.trim() !== ""
      ? `<img src="${encodeURI(car.foto)}" alt="${sanitize(car.marca)} ${sanitize(car.modelo)}" class="modal-img">`
      : "";

    dom.modalDetails.innerHTML = `
      ${modalVisual}
      <h2>${sanitize(car.marca)} ${sanitize(car.modelo)}</h2>
      <div class="detail-row"><span>Número no Acervo:</span> <strong>#${car.id}</strong></div>
      <div class="detail-row"><span>Ano de Fabricação:</span> <strong>${sanitize(car.ano)}</strong></div>
      <div class="detail-row"><span>Categoria:</span> <strong>${sanitize(car.categoria)}</strong></div>
      <div class="detail-row"><span>Fabricante da Miniatura:</span> <strong>${sanitize(car.fabricante)}</strong></div>
    `;

    dom.carModal.classList.add("active");
    dom.carModal.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    if (!dom.carModal) return;
    dom.carModal.classList.remove("active");
    dom.carModal.setAttribute("aria-hidden", "true");
  };

  const applyFilters = () => {
    const q = state.searchQuery.toLowerCase().trim();
    const filtered = state.cars.filter((car) => {
      const matchText =
        car.modelo.toLowerCase().includes(q) ||
        car.marca.toLowerCase().includes(q) ||
        String(car.ano).includes(q);
      const matchCategory =
        state.categoryFilter === "todos" || car.categoria === state.categoryFilter;
      return matchText && matchCategory;
    });
    renderCars(filtered);
  };

  const setupEventListeners = () => {
    if (dom.searchInput) {
      dom.searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        applyFilters();
      });
    }

    if (dom.categoryFilters) {
      dom.categoryFilters.addEventListener("click", (e) => {
        const btn = e.target.closest(".pill");
        if (!btn) return;
        dom.categoryFilters.querySelectorAll(".pill").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.categoryFilter = btn.getAttribute("data-filter") || "todos";
        applyFilters();
      });
    }

    if (dom.modalClose) dom.modalClose.addEventListener("click", closeModal);
    if (dom.carModal) {
      dom.carModal.addEventListener("click", (e) => {
        if (e.target === dom.carModal) closeModal();
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && dom.carModal?.classList.contains("active")) {
        closeModal();
      }
    });
  };

  const init = () => {
    updateStats();
    renderCars(state.cars);
    setupEventListeners();
  };

  init();
})();

// Controle do Menu Sanduíche no Celular
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
      menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
      });

      // Fecha o menu automaticamente ao clicar em qualquer link
      navMenu.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("active");
          menuToggle.classList.remove("active");
          menuToggle.setAttribute("aria-expanded", "false");
        });
      });
    }
