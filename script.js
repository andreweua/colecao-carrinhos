/**
 * Garagem em Miniatura - Controlador da Aplicacao
 * PereiraLabs (divisao da Louzada & Pereira - Solucoes Digitais)
 * URL de Producao: https://andreweua.github.io/colecao-carrinhos/
 * Versao: 6.2.2
 */

(function () {
  "use strict";

  const WHATSAPP_NUMERO = "5535992344229";
  const LOGO_PADRAO = "img/logo-garagem.png";

  // Fallback seguro caso o data.js falhe ou atrase o carregamento
  const BACKUP_CARS = [
    { "id": 1, "marca": "Mercedes-Benz", "modelo": "500 SL", "ano": "—", "fabricante": "—", "categoria": "Esportivo", "icon": "🏎️", "foto": "img/1.jpg" }
  ];

  function getCarrosIniciais() {
    if (typeof CARS_DATA !== "undefined" && Array.isArray(CARS_DATA) && CARS_DATA.length > 0) {
      return CARS_DATA;
    }
    return BACKUP_CARS;
  }

  const state = {
    cars: getCarrosIniciais(),
    categoryFilter: "todos",
    searchQuery: "",
    selectedImageBase64: null
  };

  const dom = {
    carsGrid: document.getElementById("cars-grid"),
    searchInput: document.getElementById("search-input"),
    categoryFilters: document.getElementById("category-filters"),
    noResults: document.getElementById("no-results"),
    totalModelos: document.getElementById("total-modelos"),
    totalMarcas: document.getElementById("total-marcas"),
    carModal: document.getElementById("car-modal"),
    modalDetails: document.getElementById("modal-details"),
    modalClose: document.getElementById("modal-close"),
    aboutModal: document.getElementById("about-modal"),
    aboutModalClose: document.getElementById("about-modal-close"),
    navBtnAbout: document.getElementById("nav-btn-about"),
    aiModal: document.getElementById("ai-modal"),
    aiModalClose: document.getElementById("ai-modal-close"),
    cardTriggerAi: document.getElementById("card-trigger-ai"),
    navBtnAi: document.getElementById("nav-btn-ai"),
    geminiKeyInput: document.getElementById("gemini-key-input"),
    btnSaveKey: document.getElementById("btn-save-key"),
    aiFileInput: document.getElementById("ai-file-input"),
    aiPreview: document.getElementById("ai-preview"),
    aiPreviewImg: document.getElementById("ai-preview-img"),
    btnAnalyzeAi: document.getElementById("btn-analyze-ai"),
    aiStatus: document.getElementById("ai-status"),
    aiResult: document.getElementById("ai-result")
  };

  function getReactions() {
    try {
      return JSON.parse(localStorage.getItem("garagem_reactions")) || {};
    } catch (e) {
      return {};
    }
  }

  function saveReactions(data) {
    try {
      localStorage.setItem("garagem_reactions", JSON.stringify(data));
    } catch (e) {}
  }

  function sanitize(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function updateStats() {
    if (dom.totalModelos) dom.totalModelos.textContent = state.cars.length;
    if (dom.totalMarcas) {
      const marcas = new Set(
        state.cars
          .map((c) => c.marca)
          .filter((m) => m && !m.includes("Modelo a Identificar"))
      );
      dom.totalMarcas.textContent = marcas.size;
    }
  }

  function renderCars(carList) {
    if (!dom.carsGrid) return;
    dom.carsGrid.innerHTML = "";

    if (!carList || carList.length === 0) {
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

      const hasDirectPhoto = Boolean(car.foto && car.foto.trim() !== "");
      const fotoPath = hasDirectPhoto ? car.foto : `img/${car.id}.jpg`;

      // Se falhar o carregamento da imagem, esconde o <img> e mostra a logo-garagem.png
      const visualNode = `
        <img src="${encodeURI(fotoPath)}" 
             alt="${sanitize(car.marca)} ${sanitize(car.modelo)}" 
             loading="lazy" 
             onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';">
        <div class="placeholder-fallback" style="display:none;">
          <img src="${LOGO_PADRAO}" alt="Garagem em Miniatura" class="logo-fallback-img">
        </div>`;

      card.innerHTML = `
        <div class="card-image" role="button" aria-label="Ver detalhes de ${car.modelo}">
          ${visualNode}
        </div>
        <div class="card-content">
          <div class="card-clickable" role="button" aria-label="Ver detalhes de ${car.modelo}">
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

          <div class="dislike-box hidden" id="dislike-box-${car.id}">
            <textarea placeholder="O que achou deste modelo? (opinião curta)...">${sanitize(carReactions.comment || "")}</textarea>
            <div class="dislike-box-actions">
              <button class="btn-mini btn-mini-cancel" data-id="${car.id}">Cancelar</button>
              <button class="btn-mini btn-mini-send" data-id="${car.id}">Enviar no WhatsApp</button>
            </div>
          </div>
        </div>
      `;

      const openDetails = () => showModal(car);
      card.querySelector(".card-image").addEventListener("click", openDetails);
      card.querySelector(".card-clickable").addEventListener("click", openDetails);

      card.querySelector(".btn-like").addEventListener("click", (e) => {
        e.stopPropagation();
        handleVote(car.id, "like");
      });

      card.querySelector(".btn-dislike").addEventListener("click", (e) => {
        e.stopPropagation();
        card.querySelector(`#dislike-box-${car.id}`).classList.toggle("hidden");
      });

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

        window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(msg)}`, "_blank");
      });

      card.querySelector(".btn-mini-cancel").addEventListener("click", (e) => {
        e.stopPropagation();
        card.querySelector(`#dislike-box-${car.id}`).classList.add("hidden");
      });

      fragment.appendChild(card);
    });

    dom.carsGrid.appendChild(fragment);
  }

  function handleVote(carId, type, comment = "") {
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
  }

  function showModal(car) {
    if (!dom.carModal || !dom.modalDetails) return;

    const hasDirectPhoto = Boolean(car.foto && car.foto.trim() !== "");
    const fotoPath = hasDirectPhoto ? car.foto : `img/${car.id}.jpg`;

    const modalVisual = `
      <div class="modal-image-wrapper">
        <img src="${encodeURI(fotoPath)}" 
             alt="${sanitize(car.marca)} ${sanitize(car.modelo)}" 
             class="modal-img" 
             onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';">
        <div class="modal-fallback" style="display:none;">
          <img src="${LOGO_PADRAO}" alt="Garagem em Miniatura" class="logo-fallback-modal">
        </div>
      </div>`;

    dom.modalDetails.innerHTML = `
      ${modalVisual}
      <h2>${sanitize(car.marca)} ${sanitize(car.modelo)}</h2>
      <div class="detail-row"><span>Número no Acervo:</span> <strong>#${car.id}</strong></div>
      <div class="detail-row"><span>Ano de Fabricação:</span> <strong>${sanitize(car.ano)}</strong></div>
      <div class="detail-row"><span>Categoria:</span> <strong>${sanitize(car.categoria)}</strong></div>
      <div class="detail-row"><span>Fabricante da Miniatura:</span> <strong>${sanitize(car.fabricante)}</strong></div>
    `;

    openModal(dom.carModal);
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  }

  function applyFilters() {
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
  }

  function setupAiModule() {
    const triggerAi = () => openModal(dom.aiModal);
    dom.cardTriggerAi?.addEventListener("click", triggerAi);
    dom.navBtnAi?.addEventListener("click", triggerAi);

    dom.aiModalClose?.addEventListener("click", () => closeModal(dom.aiModal));
    dom.aiModal?.addEventListener("click", (e) => {
      if (e.target === dom.aiModal) closeModal(dom.aiModal);
    });

    const savedKey = localStorage.getItem("gemini_api_key");
    if (savedKey && dom.geminiKeyInput) dom.geminiKeyInput.value = savedKey;

    dom.btnSaveKey?.addEventListener("click", () => {
      const key = dom.geminiKeyInput.value.trim();
      if (!key) {
        localStorage.removeItem("gemini_api_key");
        alert("Chave removida!");
        return;
      }
      localStorage.setItem("gemini_api_key", key);
      alert("Chave salva com sucesso!");
    });

    dom.aiFileInput?.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      state.selectedImageMime = file.type || "image/jpeg";

      const reader = new FileReader();
      reader.onload = (event) => {
        const fullBase64 = event.target.result;
        state.selectedImageBase64 = fullBase64.split(",")[1];
        dom.aiPreviewImg.src = fullBase64;
        dom.aiPreview.classList.remove("hidden");
        dom.aiResult.classList.add("hidden");
        dom.aiStatus.classList.add("hidden");
      };
      reader.readAsDataURL(file);
    });

    dom.btnAnalyzeAi?.addEventListener("click", async () => {
      const key = localStorage.getItem("gemini_api_key") || dom.geminiKeyInput?.value.trim();
      if (!key) {
        alert("Por favor, insira a chave da Google AI Studio.");
        return;
      }
      if (!state.selectedImageBase64) {
        alert("Por favor, selecione uma imagem.");
        return;
      }

      dom.aiStatus.classList.remove("hidden");
      dom.aiStatus.textContent = "⏳ Analisando miniatura com IA...";
      dom.aiResult.classList.add("hidden");

      // Monta a lista do acervo para o prompt de conferência
      const prompt = `Você é um especialista em carrinhos em miniatura e curador de acervos. 
Analise a imagem desta miniatura e compare com a lista dos 105 veículos deste acervo:
${state.cars.map((c) => `#${c.id}${c.marca} ${c.modelo} (${c.ano})`).join("; ")}

Responda de forma direta e objetiva:
1. Qual é a marca, modelo e categoria mais provável desta miniatura?
2. Este carrinho já consta na coleção acima? Se sim, qual é o número (#ID) dele? Se não, avise que se trata de uma nova aquisição em potencial.`;

      // Detecta dinamicamente se a imagem é png ou jpeg
      const mimeType = state.selectedImageMime || "image/jpeg";

      try {
        // Usa o modelo estável oficial gemini-1.5-flash ou gemini-2.0-flash
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;

        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: prompt },
                  {
                    inline_data: {
                      mime_type: mimeType,
                      data: state.selectedImageBase64
                    }
                  }
                ]
              }
            ]
          })
        });

        const data = await res.json();

        // Se a API do Google retornar erro (ex: chave inválida, cota esgotada)
        if (data.error) {
          throw new Error(data.error.message || "Erro retornado pela Google AI");
        }

        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        dom.aiStatus.classList.add("hidden");

        if (text) {
          dom.aiResult.classList.remove("hidden");
          dom.aiResult.textContent = text;
        } else {
          dom.aiResult.classList.remove("hidden");
          dom.aiResult.textContent = "A IA analisou a foto, mas não gerou descrição conclusiva. Tente uma foto com iluminação melhor.";
        }
      } catch (err) {
        dom.aiStatus.classList.remove("hidden");
        dom.aiStatus.textContent = `❌ Erro no Scanner: ${err.message}`;
      }
    });
  function setupEventListeners() {
    dom.searchInput?.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      applyFilters();
    });

    dom.categoryFilters?.addEventListener("click", (e) => {
      const btn = e.target.closest(".pill");
      if (!btn) return;
      dom.categoryFilters.querySelectorAll(".pill").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.categoryFilter = btn.getAttribute("data-filter") || "todos";
      applyFilters();
    });

    dom.modalClose?.addEventListener("click", () => closeModal(dom.carModal));
    dom.carModal?.addEventListener("click", (e) => {
      if (e.target === dom.carModal) closeModal(dom.carModal);
    });

    dom.navBtnAbout?.addEventListener("click", () => openModal(dom.aboutModal));
    dom.aboutModalClose?.addEventListener("click", () => closeModal(dom.aboutModal));
    dom.aboutModal?.addEventListener("click", (e) => {
      if (e.target === dom.aboutModal) closeModal(dom.aboutModal);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal(dom.carModal);
        closeModal(dom.aiModal);
        closeModal(dom.aboutModal);
      }
    });

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    if (menuToggle && navMenu) {
      menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");
      });
    }

    setupAiModule();
  }

  function init() {
    state.cars = getCarrosIniciais();
    updateStats();
    renderCars(state.cars);
    setupEventListeners();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
