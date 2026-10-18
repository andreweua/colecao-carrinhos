// Base completa com os 105 carrinhos catalogados (30 + 30 + 30 + 10)
/**
 * Garagem em Miniatura - Controlador da Aplicação
 * PereiraLabs (divisão da Louzada&Pereira - Soluções Digitais)
 */

(() => {
  "use strict";

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

    const fragment = document.createDocumentFragment();

    carList.forEach((car) => {
      const card = document.createElement("article");
      card.className = "car-card";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `${car.marca} ${car.modelo}`);

      // Verifica estritamente o campo 'foto' e aplica fallback caso o arquivo falhe
      const hasPhoto = Boolean(car.foto && car.foto.trim() !== "");
      const visualNode = hasPhoto
        ? `<img src="${encodeURI(car.foto)}" 
                alt="${sanitize(car.marca)} ${sanitize(car.modelo)}" 
                loading="lazy" 
                onerror="this.onerror=null; this.parentElement.innerHTML='<span>${car.icon || "🚗"}</span>';">`
        : `<span>${car.icon || "🚗"}</span>`;

      card.innerHTML = `
        <div class="card-image">
          ${visualNode}
          ${car.ano !== "—" ? `<span class="card-tag-year">${sanitize(car.ano)}</span>` : ""}
        </div>
        <div class="card-content">
          <div class="card-brand">${sanitize(car.marca)}</div>
          <h2 class="card-title">${sanitize(car.modelo)}</h2>
          <div class="card-footer">
            <span class="card-badge">${sanitize(car.categoria)}</span>
            <span>#${car.id}</span>
          </div>
        </div>
      `;

      const openHandler = () => showModal(car);
      card.addEventListener("click", openHandler);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openHandler();
        }
      });

      fragment.appendChild(card);
    });

    dom.carsGrid.appendChild(fragment);
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
