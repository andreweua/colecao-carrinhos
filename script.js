/**
 * Garagem em Miniatura - Controlador da Aplicação
 * PereiraLabs (divisão da Louzada & Pereira - Soluções Digitais)
 * URL: https://andreweua.github.io/colecao-carrinhos/
 * Versão: 5.3.0
 */

(() => {
  "use strict";

  const WHATSAPP_NUMERO = "5535992344229";

  const state = {
    cars: (typeof CARS_DATA !== "undefined" && Array.isArray(CARS_DATA)) ? CARS_DATA : [],
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
    
    // Modal Carro
    carModal: document.getElementById("car-modal"),
    modalDetails: document.getElementById("modal-details"),
    modalClose: document.getElementById("modal-close"),

    // Modal Sobre
    aboutModal: document.getElementById("about-modal"),
    aboutModalClose: document.getElementById("about-modal-close"),
    navBtnAbout: document.getElementById("nav-btn-about"),

    // Modal e Controles de IA
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

      // Define o caminho da foto: se car.foto estiver preenchido usa ele, 
      // senão tenta buscar automaticamente pelo ID na pasta img/ (ex: img/1.jpg)
      const fotoPath = (car.foto && car.foto.trim() !== "") 
        ? car.foto 
        : `img/${car.id}.jpg`;

      const visualNode = `
        <img src="${encodeURI(fotoPath)}" 
             alt="${sanitize(car.marca)} ${sanitize(car.modelo)}" 
             loading="lazy" 
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="placeholder-fallback" style="display:none;">
          <span class="fallback-icon">${car.icon || "🏎️"}</span>
          <span class="fallback-text">GaragemMini</span>
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
        const box = card.querySelector(`#dislike-box-${car.id}`);
        box.classList.toggle("hidden");
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

        const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(msg)}`;
        window.open(url, "_blank");
      });

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

    const fotoPath = (car.foto && car.foto.trim() !== "") 
      ? car.foto 
      : `img/${car.id}.jpg`;

    const modalVisual = `
      <img src="${encodeURI(fotoPath)}" 
           alt="${sanitize(car.marca)} ${sanitize(car.modelo)}" 
           class="modal-img" 
           onerror="this.style.display='none';">`;

    dom.modalDetails.innerHTML = `
      ${modalVisual}
      <h2>${sanitize(car.marca)} ${sanitize(car.modelo)}</h2>
      <div class="detail-row"><span>Número no Acervo:</span> <strong>#${car.id}</strong></div>
      <div class="detail-row"><span>Ano de Fabricação:</span> <strong>${sanitize(car.ano)}</strong></div>
      <div class="detail-row"><span>Categoria:</span> <strong>${sanitize(car.categoria)}</strong></div>
      <div class="detail-row"><span>Fabricante da Miniatura:</span> <strong>${sanitize(car.fabricante)}</strong></div>
    `;

    openModal(dom.carModal);
  };

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

  const closeModal = (modalElement) => {
    if (!modalElement) return;
    modalElement.classList.remove("active");
    modalElement.setAttribute("aria-hidden", "true");
  };

  const openModal = (modalElement) => {
    if (!modalElement) return;
    modalElement.classList.add("active");
    modalElement.setAttribute("aria-hidden", "false");
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

  /* INTEGRAÇÃO COM GEMINI 3.8 FLASH NO MODAL */
  const setupAiModule = () => {
    // Abrir Modal de IA
    const triggerAi = () => openModal(dom.aiModal);
    dom.cardTriggerAi?.addEventListener("click", triggerAi);
    dom.navBtnAi?.addEventListener("click", triggerAi);

    dom.aiModalClose?.addEventListener("click", () => closeModal(dom.aiModal));
    dom.aiModal?.addEventListener("click", (e) => {
      if (e.target === dom.aiModal) closeModal(dom.aiModal);
    });

    const savedKey = localStorage.getItem("gemini_api_key");
    if (savedKey && dom.geminiKeyInput) {
      dom.geminiKeyInput.value = savedKey;
    }

    dom.btnSaveKey?.addEventListener("click", () => {
      const key = dom.geminiKeyInput.value.trim();
      if (!key) {
        localStorage.removeItem("gemini_api_key");
        alert("Chave de API removida!");
        return;
      }
      localStorage.setItem("gemini_api_key", key);
      alert("Chave salva com sucesso!");
    });

    dom.aiFileInput?.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

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
        alert("Por favor, informe sua chave da Google AI Studio antes de analisar.");
        return;
      }

      if (!state.selectedImageBase64) {
        alert("Por favor, tire uma foto ou selecione uma imagem.");
        return;
      }

      dom.aiStatus.classList.remove("hidden");
      dom.aiStatus.textContent = "⏳ Analisando miniatura com a IA do Google (gemini-3.8-flash)...";
      dom.aiResult.classList.add("hidden");

      const acervoResumido = state.cars
        .map((c) => `#${c.id} ${c.marca} ${c.modelo} (${c.ano})`)
        .join("; ");

      const prompt = `Você é um curador especialista em réplicas de carrinhos em miniatura do projeto Garagem em Miniatura.
Analise a imagem enviada e determine qual veículo/modelo ela representa (marca, modelo provável, cor e estilo de carroceria).
Em seguida, compare rigorosamente com o catálogo de 105 veículos que o colecionador já possui:
[CATÁLOGO: ${acervoResumido}]

Responda em português de forma clara no seguinte formato:
1. Identificação da Foto: Modelo, marca e detalhes visíveis.
2. Comparação de Acervo: O colecionador JÁ POSSUI este veículo (ou algum modelo muito próximo)? Se sim, cite o #ID e o nome do carro correspondente no acervo. Se não possuir, confirme que se trata de uma peça inédita.
3. Veredito para compra: "Peça Inédita - Recomendada" ou "Atenção: Possível Duplicata".`;

      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${key}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    { text: prompt },
                    {
                      inline_data: {
                        mime_type: "image/jpeg",
                        data: state.selectedImageBase64
                      }
                    }
                  ]
                }
              ]
            })
          }
        );

        const data = await response.json();

        if (data.error) {
          throw new Error(data.error.message || "Erro retornado pela API do Google.");
        }

        const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!candidateText) {
          throw new Error("Não foi possível gerar a análise da imagem.");
        }

        dom.aiStatus.classList.add("hidden");
        dom.aiResult.classList.remove("hidden");
        dom.aiResult.textContent = candidateText;
      } catch (err) {
        dom.aiStatus.classList.remove("hidden");
        dom.aiStatus.textContent = `❌ Erro na análise: ${err.message}`;
      }
    });
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

    // Modal Carro
    dom.modalClose?.addEventListener("click", () => closeModal(dom.carModal));
    dom.carModal?.addEventListener("click", (e) => {
      if (e.target === dom.carModal) closeModal(dom.carModal);
    });

    // Modal Sobre o Projeto (Opção 1)
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
        const isOpen = navMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
      });

      navMenu.querySelectorAll(".nav-link, .nav-btn-link").forEach((link) => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("active");
          menuToggle.classList.remove("active");
          menuToggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    setupAiModule();
  };

  const init = () => {
    updateStats();
    renderCars(state.cars);
    setupEventListeners();
  };

  init();
})();
