/**
 * Garagem em Miniatura - Controlador da Aplicacao
 * PereiraLabs (divisao da Louzada & Pereira - Solucoes Digitais)
 * URL de Producao: https://andreweua.github.io/colecao-carrinhos/
 * Versao: 7.0.1
 */

(function () {
  "use strict";

  const WHATSAPP_NUMERO = "5535992344229";
  const LOGO_PADRAO = "img/logo-garagem.png";

  function getCarrosDisponiveis() {
    if (typeof CARS_DATA !== "undefined" && Array.isArray(CARS_DATA)) {
      return CARS_DATA;
    }
    return [];
  }

  const state = {
    cars: getCarrosDisponiveis(),
    categoryFilter: "todos",
    searchQuery: "",
    selectedImageBase64: null,
    selectedImageMime: "image/jpeg"
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
    const totalModelos = document.getElementById("total-modelos");
    const totalMarcas = document.getElementById("total-marcas");
    if (totalModelos) totalModelos.textContent = state.cars.length;
    if (totalMarcas) {
      const marcas = new Set(
        state.cars
          .map((c) => c.marca)
          .filter((m) => m && !m.includes("Modelo a Identificar"))
      );
      totalMarcas.textContent = marcas.size;
    }
  }

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }

  function showModal(car) {
    const carModal = document.getElementById("car-modal");
    const modalDetails = document.getElementById("modal-details");
    if (!carModal || !modalDetails) return;

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

    modalDetails.innerHTML = `
      ${modalVisual}
      <h2>${sanitize(car.marca)} ${sanitize(car.modelo)}</h2>
      <div class="detail-row"><span>Número no Acervo:</span> <strong>#${car.id}</strong></div>
      <div class="detail-row"><span>Ano de Fabricação:</span> <strong>${sanitize(car.ano)}</strong></div>
      <div class="detail-row"><span>Categoria:</span> <strong>${sanitize(car.categoria)}</strong></div>
      <div class="detail-row"><span>Fabricante da Miniatura:</span> <strong>${sanitize(car.fabricante)}</strong></div>
    `;

    openModal(carModal);
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

  function renderCars(carList) {
    const carsGrid = document.getElementById("cars-grid");
    const noResults = document.getElementById("no-results");
    if (!carsGrid) return;

    carsGrid.innerHTML = "";

    if (!carList || carList.length === 0) {
      if (noResults) noResults.classList.remove("hidden");
      return;
    }

    if (noResults) noResults.classList.add("hidden");

    const reactions = getReactions();
    const fragment = document.createDocumentFragment();

    carList.forEach((car) => {
      const carReactions = reactions[car.id] || { likes: 0, dislikes: 0, userChoice: null, comment: "" };

      const card = document.createElement("article");
      card.className = "car-card";
      card.setAttribute("data-id", car.id);

      const hasDirectPhoto = Boolean(car.foto && car.foto.trim() !== "");
      const fotoPath = hasDirectPhoto ? car.foto : `img/${car.id}.jpg`;

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

    carsGrid.appendChild(fragment);
  }

  function applyFilters() {
    const q = state.searchQuery.toLowerCase().trim();
    const filtered = state.cars.filter((car) => {
      const matchText =
        (car.modelo && car.modelo.toLowerCase().includes(q)) ||
        (car.marca && car.marca.toLowerCase().includes(q)) ||
        String(car.ano).includes(q);
      const matchCategory =
        state.categoryFilter === "todos" || car.categoria === state.categoryFilter;
      return matchText && matchCategory;
    });
    renderCars(filtered);
  }

  function setupAiModule() {
    const aiModal = document.getElementById("ai-modal");
    const aiModalClose = document.getElementById("ai-modal-close");
    const cardTriggerAi = document.getElementById("card-trigger-ai");
    const navBtnAi = document.getElementById("nav-btn-ai");
    const geminiKeyInput = document.getElementById("gemini-key-input");
    const btnSaveKey = document.getElementById("btn-save-key");
    const aiFileInput = document.getElementById("ai-file-input");
    const aiPreview = document.getElementById("ai-preview");
    const aiPreviewImg = document.getElementById("ai-preview-img");
    const btnAnalyzeAi = document.getElementById("btn-analyze-ai");
    const aiStatus = document.getElementById("ai-status");
    const aiResult = document.getElementById("ai-result");

    const triggerAi = () => openModal(aiModal);
    cardTriggerAi?.addEventListener("click", triggerAi);
    navBtnAi?.addEventListener("click", triggerAi);

    aiModalClose?.addEventListener("click", () => closeModal(aiModal));
    aiModal?.addEventListener("click", (e) => {
      if (e.target === aiModal) closeModal(aiModal);
    });

    const savedKey = localStorage.getItem("gemini_api_key");
    if (savedKey && geminiKeyInput) geminiKeyInput.value = savedKey;

    btnSaveKey?.addEventListener("click", () => {
      const key = geminiKeyInput.value.trim();
      if (!key) {
        localStorage.removeItem("gemini_api_key");
        alert("Chave removida!");
        return;
      }
      localStorage.setItem("gemini_api_key", key);
      alert("Chave salva com sucesso!");
    });

    aiFileInput?.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      state.selectedImageMime = file.type || "image/jpeg";

      const reader = new FileReader();
      reader.onload = (event) => {
        const fullBase64 = event.target.result;
        state.selectedImageBase64 = fullBase64.split(",")[1];
        if (aiPreviewImg) aiPreviewImg.src = fullBase64;
        aiPreview?.classList.remove("hidden");
        aiResult?.classList.add("hidden");
        aiStatus?.classList.add("hidden");
      };
      reader.readAsDataURL(file);
    });

    btnAnalyzeAi?.addEventListener("click", async () => {
      const rawKey = localStorage.getItem("gemini_api_key") || geminiKeyInput?.value || "";
      const key = rawKey.trim();

      if (!key) {
        alert("Por favor, insira e salve sua chave da Google AI Studio.");
        return;
      }
      if (!state.selectedImageBase64) {
        alert("Por favor, selecione ou tire uma foto primeiro.");
        return;
      }

      if (aiStatus) {
        aiStatus.classList.remove("hidden");
        aiStatus.style.backgroundColor = "#1e293b";
        aiStatus.style.color = "#f59e0b";
        aiStatus.textContent = "⏳ Analisando com gemini-1.5-flash...";
      }
      aiResult?.classList.add("hidden");

      const prompt = `Você é um curador especialista em réplicas de automóveis e miniaturas.
Analise detalhadamente a foto desta miniatura e compare com a lista dos 105 veículos deste acervo:
${state.cars.map((c) => `#${c.id}${c.marca} ${c.modelo} (${c.ano})`).join("; ")}

Responda em português de forma clara e estruturada:
1. Marca, Modelo e Categoria mais prováveis do veículo na foto.
2. Este modelo já existe na lista acima? Se sim, cite o número (#ID) correspondente. Se não existir, declare como 'Possível Nova Aquisição'.`;

      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(key)}`;

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
                      mime_type: state.selectedImageMime,
                      data: state.selectedImageBase64
                    }
                  }
                ]
              }
            ]
          })
        });

        const data = await res.json();

        if (!res.ok || data.error) {
          throw new Error(data.error?.message || `Erro HTTP ${res.status}`);
        }

        const candidate = data.candidates?.[0];
        if (!candidate) {
          throw new Error("A IA não gerou candidatos de resposta.");
        }

        const textoResposta = candidate.content?.parts?.[0]?.text;
        aiStatus?.classList.add("hidden");

        if (textoResposta && aiResult) {
          aiResult.classList.remove("hidden");
          aiResult.textContent = textoResposta;
        }
      } catch (err) {
        if (aiStatus) {
          aiStatus.classList.remove("hidden");
          aiStatus.style.backgroundColor = "#450a0a";
          aiStatus.style.color = "#fca5a5";
          aiStatus.innerHTML = `<strong>❌ Erro no Scanner:</strong><br>${err.message}`;
        }
      }
    });
  }

  function setupEventListeners() {
    const searchInput = document.getElementById("search-input");
    searchInput?.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      applyFilters();
    });

    const categoryFilters = document.getElementById("category-filters");
    categoryFilters?.addEventListener("click", (e) => {
      const btn = e.target.closest(".pill");
      if (!btn) return;
      categoryFilters.querySelectorAll(".pill").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.categoryFilter = btn.getAttribute("data-filter") || "todos";
      applyFilters();
    });

    const carModal = document.getElementById("car-modal");
    const modalClose = document.getElementById("modal-close");
    modalClose?.addEventListener("click", () => closeModal(carModal));
    carModal?.addEventListener("click", (e) => {
      if (e.target === carModal) closeModal(carModal);
    });

    const aboutModal = document.getElementById("about-modal");
    const aboutModalClose = document.getElementById("about-modal-close");
    const navBtnAbout = document.getElementById("nav-btn-about");
    navBtnAbout?.addEventListener("click", () => openModal(aboutModal));
    aboutModalClose?.addEventListener("click", () => closeModal(aboutModal));
    aboutModal?.addEventListener("click", (e) => {
      if (e.target === aboutModal) closeModal(aboutModal);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal(carModal);
        closeModal(document.getElementById("ai-modal"));
        closeModal(aboutModal);
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
    state.cars = getCarrosDisponiveis();
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