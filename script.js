// Base completa com os 105 carrinhos catalogados (30 + 30 + 30 + 10)
const colecaoCarros = [
  // --- FOLHA 1 (30 ITENS) ---
  { id: 1, marca: "Ferrari", modelo: "Sunnyside", ano: "—", fabricante: "Sunnyside", categoria: "Esportivo", icon: "🏎️" },
  { id: 2, marca: "Anotação / Miniatura", modelo: "Katalog Modellauto", ano: "—", fabricante: "Larven", categoria: "Clássico", icon: "🚗" },
  { id: 3, marca: "Gurgel", modelo: "Itaipu E-400 CPT", ano: "1976", fabricante: "Welly", categoria: "Nacional", icon: "🚙" },
  { id: 4, marca: "Ford", modelo: "Vicky", ano: "1932", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 5, marca: "Fiat", modelo: "Idea", ano: "2003", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { id: 6, marca: "Ford", modelo: "Mustang", ano: "1964", fabricante: "—", categoria: "Muscle Car", icon: "🏎️" },
  { id: 7, marca: "Peugeot", modelo: "504", ano: "1957", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 8, marca: "Volkswagen", modelo: "1600 (Zé do Caixão)", ano: "1969", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { id: 9, marca: "Ford", modelo: "F-1", ano: "1948", fabricante: "—", categoria: "Utilitário", icon: "🛻" },
  { id: 10, marca: "Dodge", modelo: "Ram 1500", ano: "2019", fabricante: "—", categoria: "Utilitário", icon: "🛻" },
  { id: 11, marca: "Utilitários", modelo: "Caminhão Antigo Calhambeque", ano: "1934", fabricante: "—", categoria: "Utilitário", icon: "🚚" },
  { id: 12, marca: "Utilitários", modelo: "Transport Truck", ano: "—", fabricante: "—", categoria: "Utilitário", icon: "🚛" },
  { id: 13, marca: "Jeep", modelo: "Open Jeep", ano: "—", fabricante: "—", categoria: "Viatura / Serviço", icon: "🚙" },
  { id: 14, marca: "Chevrolet", modelo: "Bel Air", ano: "1953", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 15, marca: "Aero Willys", modelo: "Aero Willys", ano: "1966", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { id: 16, marca: "Fiat", modelo: "125", ano: "—", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 17, marca: "Porsche", modelo: "911 GT3", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 18, marca: "Lamborghini", modelo: "Veneno", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 19, marca: "Bentley", modelo: "Continental GT", ano: "2018", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 20, marca: "Toyota", modelo: "Bandeirante", ano: "—", fabricante: "—", categoria: "Utilitário", icon: "🚙" },
  { id: 21, marca: "Jeep", modelo: "Wrangler Militar", ano: "—", fabricante: "—", categoria: "Viatura / Serviço", icon: "🚙" },
  { id: 22, marca: "Jeep", modelo: "Renegade Trailhawk", ano: "2017", fabricante: "—", categoria: "Utilitário", icon: "🚙" },
  { id: 23, marca: "Toyota", modelo: "Supra", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 24, marca: "Ford", modelo: "Focus ST", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🚗" },
  { id: 25, marca: "Utilitários", modelo: "Van", ano: "—", fabricante: "—", categoria: "Utilitário", icon: "🚐" },
  { id: 26, marca: "Hyundai", modelo: "i30", ano: "—", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { id: 27, marca: "Ford", modelo: "Explorer", ano: "—", fabricante: "—", categoria: "Utilitário", icon: "🚙" },
  { id: 28, marca: "Smart", modelo: "Fortwo Coupé", ano: "—", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 29, marca: "Utilitários", modelo: "Camburão", ano: "—", fabricante: "—", categoria: "Viatura / Serviço", icon: "🚓" },
  { id: 30, marca: "Modelo a Identificar", modelo: "Miniatura #30 (Folha 1)", ano: "—", fabricante: "—", categoria: "Clássico", icon: "🚗" },

  // --- FOLHA 2 (30 ITENS) ---
  { id: 31, marca: "Utilitários", modelo: "Auto Clássico", ano: "—", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 32, marca: "Ford", modelo: "Ka", ano: "1996", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { id: 33, marca: "Mercedes-Benz", modelo: "C63 AMG", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 34, marca: "Fiat", modelo: "147", ano: "1976", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { id: 35, marca: "Ford", modelo: "Fairlane 500 Skyliner", ano: "1957", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 36, marca: "Utilitários", modelo: "Calhambeque", ano: "1929", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 37, marca: "Chevrolet", modelo: "3100 (Boca de Sapo)", ano: "1950", fabricante: "—", categoria: "Utilitário", icon: "🛻" },
  { id: 38, marca: "Mini", modelo: "Mini Cooper", ano: "1970", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 39, marca: "Mercedes-Benz", modelo: "GLK", ano: "2009", fabricante: "—", categoria: "Utilitário", icon: "🚙" },
  { id: 40, marca: "Chrysler", modelo: "Sedan Anos 90", ano: "1990", fabricante: "Maisto", categoria: "Clássico", icon: "🚗" },
  { id: 41, marca: "Fiat", modelo: "Uno 1.5 R", ano: "1988", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { id: 42, marca: "Opel", modelo: "Astra GTC", ano: "2005", fabricante: "—", categoria: "Esportivo", icon: "🚗" },
  { id: 43, marca: "Ford", modelo: "GT", ano: "2006", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 44, marca: "Dodge", modelo: "Ram", ano: "—", fabricante: "—", categoria: "Utilitário", icon: "🛻" },
  { id: 45, marca: "Hyundai", modelo: "Tucson", ano: "2018", fabricante: "—", categoria: "Utilitário", icon: "🚙" },
  { id: 46, marca: "Utilitários", modelo: "Táxi Americano", ano: "—", fabricante: "—", categoria: "Viatura / Serviço", icon: "🚕" },
  { id: 47, marca: "Chevrolet", modelo: "Bel Air", ano: "—", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 48, marca: "Mitsubishi", modelo: "Pajero", ano: "—", fabricante: "—", categoria: "Utilitário", icon: "🚙" },
  { id: 49, marca: "Jeep", modelo: "Jipe do Exército dos EUA", ano: "—", fabricante: "—", categoria: "Viatura / Serviço", icon: "🚙" },
  { id: 50, marca: "Renault", modelo: "Clio RS", ano: "2013", fabricante: "—", categoria: "Esportivo", icon: "🚗" },
  { id: 51, marca: "Ford", modelo: "F-750", ano: "—", fabricante: "—", categoria: "Utilitário", icon: "🚚" },
  { id: 52, marca: "Toyota", modelo: "Camry", ano: "2015", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 53, marca: "BMW", modelo: "Sedan / Coupé", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 54, marca: "Utilitários", modelo: "Táxi de Londres", ano: "2006", fabricante: "—", categoria: "Viatura / Serviço", icon: "🚕" },
  { id: 55, marca: "Bugatti", modelo: "SUV Galibier", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 56, marca: "Ford", modelo: "F-100 Picape", ano: "1956", fabricante: "—", categoria: "Utilitário", icon: "🛻" },
  { id: 57, marca: "Koenigsegg", modelo: "Hipercarro", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 58, marca: "Lamborghini", modelo: "Superesportivo", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 59, marca: "Chevrolet", modelo: "Opala", ano: "—", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { id: 60, marca: "Dodge", modelo: "Viper GTS", ano: "2013", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },

  // --- FOLHA 3 (30 ITENS) ---
  { id: 61, marca: "Mercedes-Benz", modelo: "CLS 63 AMG", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 62, marca: "Mercedes-Benz", modelo: "300S", ano: "—", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 63, marca: "BMW", modelo: "i8", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 64, marca: "Ford", modelo: "GT", ano: "2006", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 65, marca: "Dodge", modelo: "Challenger T/A", ano: "1970", fabricante: "—", categoria: "Muscle Car", icon: "🏎️" },
  { id: 66, marca: "Lotus", modelo: "Exige S", ano: "2012", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 67, marca: "Maserati", modelo: "GranTurismo MC", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 68, marca: "Chevrolet", modelo: "Corvette Stingray", ano: "1963", fabricante: "—", categoria: "Clássico", icon: "🏎️" },
  { id: 69, marca: "Lamborghini", modelo: "Miura P400 SV", ano: "1971", fabricante: "—", categoria: "Clássico", icon: "🏎️" },
  { id: 70, marca: "Dodge", modelo: "Challenger SRT Demon", ano: "—", fabricante: "—", categoria: "Muscle Car", icon: "🏎️" },
  { id: 71, marca: "Mercedes-Benz", modelo: "AMG GT", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 72, marca: "Aston Martin", modelo: "DB5", ano: "1963", fabricante: "—", categoria: "Clássico", icon: "🏎️" },
  { id: 73, marca: "Porsche", modelo: "911 GT3 RS", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 74, marca: "Mercedes-Benz", modelo: "Classe SLK", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🚗" },
  { id: 75, marca: "BMW", modelo: "501", ano: "1952", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 76, marca: "BMW", modelo: "502", ano: "1963", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 77, marca: "Chevrolet", modelo: "Camaro", ano: "1969", fabricante: "—", categoria: "Muscle Car", icon: "🏎️" },
  { id: 78, marca: "Volkswagen", modelo: "Fusca Polícia Federal", ano: "1967", fabricante: "—", categoria: "Viatura / Serviço", icon: "🚓" },
  { id: 79, marca: "Subaru", modelo: "Impreza WRC", ano: "2007", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 80, marca: "Land Rover", modelo: "Defender", ano: "—", fabricante: "—", categoria: "Utilitário", icon: "🚙" },
  { id: 81, marca: "Chevrolet", modelo: "Camaro SS", ano: "1969", fabricante: "—", categoria: "Muscle Car", icon: "🏎️" },
  { id: 82, marca: "Alfa Romeo", modelo: "FNM JK 2000", ano: "1967", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { id: 83, marca: "Cadillac", modelo: "Clássico", ano: "1953", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 84, marca: "Toyota", modelo: "FJ Cruiser", ano: "—", fabricante: "—", categoria: "Utilitário", icon: "🚙" },
  { id: 85, marca: "Lada", modelo: "Samara Sedan", ano: "1991", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 86, marca: "Ford", modelo: "Mustang GT", ano: "2006", fabricante: "—", categoria: "Muscle Car", icon: "🏎️" },
  { id: 87, marca: "Bentley", modelo: "Continental GT", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 88, marca: "Porsche", modelo: "356 Carrera", ano: "—", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 89, marca: "Mercedes-Benz", modelo: "500 SL", ano: "—", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 90, marca: "Mercedes-Benz", modelo: "350", ano: "—", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 91, marca: "BMW", modelo: "Esportivo", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 92, marca: "Dodge", modelo: "Charger R/T", ano: "—", fabricante: "—", categoria: "Muscle Car", icon: "🏎️" },
  { id: 93, marca: "Lamborghini", modelo: "Urus", ano: "—", fabricante: "—", categoria: "Utilitário", icon: "🚙" },
  { id: 94, marca: "Utilitários", modelo: "Pick Up Truck", ano: "—", fabricante: "—", categoria: "Utilitário", icon: "🛻" },
  { id: 95, marca: "Modelo a Identificar", modelo: "Miniatura #95 (Folha 3)", ano: "—", fabricante: "—", categoria: "Clássico", icon: "🚗" },

  // --- FOLHA 4 (10 ITENS) ---
  { id: 96, marca: "Bugatti", modelo: "16C Galibier", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { id: 97, marca: "Cadillac", modelo: "Fleetwood Brougham", ano: "—", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { id: 98, marca: "Chevrolet", modelo: "El Camino", ano: "1965", fabricante: "—", categoria: "Utilitário", icon: "🛻" },
  { id: 99, marca: "Dodge", modelo: "Charger", ano: "—", fabricante: "—", categoria: "Muscle Car", icon: "🏎️" },
  { id: 100, marca: "Chevrolet", modelo: "Impala SS", ano: "1964", fabricante: "—", categoria: "Muscle Car", icon: "🚗" },
  { id: 101, marca: "Dodge", modelo: "Ram 1500", ano: "2019", fabricante: "—", categoria: "Utilitário", icon: "🛻" },
  { id: 102, marca: "Ferrari", modelo: "275 GTB", ano: "1966", fabricante: "—", categoria: "Clássico", icon: "🏎️" },
  { id: 103, marca: "Renault / Willys", modelo: "Gordini", ano: "1965", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { id: 104, marca: "Ford", modelo: "Picape V8", ano: "1932", fabricante: "—", categoria: "Utilitário", icon: "🛻" },
  { id: 105, marca: "McLaren", modelo: "Senna", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" }
];

// Elementos da interface
const carsGrid = document.getElementById("cars-grid");
const searchInput = document.getElementById("search-input");
const categoryFilters = document.getElementById("category-filters");
const noResults = document.getElementById("no-results");
const totalModelos = document.getElementById("total-modelos");
const totalMarcas = document.getElementById("total-marcas");

const carModal = document.getElementById("car-modal");
const modalDetails = document.getElementById("modal-details");
const modalClose = document.getElementById("modal-close");

let filtroAtual = "todos";

document.addEventListener("DOMContentLoaded", () => {
  totalModelos.innerText = colecaoCarros.length; // Agora exibe 105
  const marcas = new Set(colecaoCarros.map(c => c.marca));
  totalMarcas.innerText = marcas.size;

  renderizarCards(colecaoCarros);
  configurarEventos();
});

function renderizarCards(lista) {
  carsGrid.innerHTML = "";
  
  if (lista.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");

  lista.forEach(car => {
    const card = document.createElement("div");
    card.className = "car-card";
    
    // Suporte automático para fotos
    const visualContent = car.foto 
      ? `<img src="${car.foto}" alt="${car.marca} ${car.modelo}" style="width: 100%; height: 100%; object-fit: cover;">`
      : `<span>${car.icon}</span>`;

    card.innerHTML = `
      <div class="card-image">
        ${visualContent}
        ${car.ano !== "—" ? `<span class="card-tag-year">${car.ano}</span>` : ""}
      </div>
      <div class="card-content">
        <div class="card-brand">${car.marca}</div>
        <div class="card-title">${car.modelo}</div>
        <div class="card-footer">
          <span class="card-badge">${car.categoria}</span>
          <span>${car.fabricante !== "—" ? car.fabricante : "Ver detalhes"}</span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      const modalVisual = car.foto 
        ? `<img src="${car.foto}" alt="${car.marca} ${car.modelo}" style="width: 100%; max-height: 220px; object-fit: cover; border-radius: 8px; margin-bottom: 15px;">` 
        : "";

      modalDetails.innerHTML = `
        ${modalVisual}
        <h2 style="font-size: 1.5rem; margin-bottom: 15px;">${car.marca} ${car.modelo}</h2>
        <div class="detail-row"><span>Número no Acervo:</span> <strong>#${car.id}</strong></div>
        <div class="detail-row"><span>Ano de Fabricação:</span> <strong>${car.ano}</strong></div>
        <div class="detail-row"><span>Categoria:</span> <strong>${car.categoria}</strong></div>
        <div class="detail-row"><span>Fabricante da Miniatura:</span> <strong>${car.fabricante}</strong></div>
      `;
      carModal.classList.add("active");
    });

    carsGrid.appendChild(card);
  });
}

function configurarEventos() {
  searchInput.addEventListener("input", filtrar);

  categoryFilters.addEventListener("click", (e) => {
    if (e.target.classList.contains("pill")) {
      document.querySelectorAll(".pill").forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");
      filtroAtual = e.target.getAttribute("data-filter");
      filtrar();
    }
  });

  modalClose.addEventListener("click", () => carModal.classList.remove("active"));
  carModal.addEventListener("click", (e) => {
    if (e.target === carModal) carModal.classList.remove("active");
  });
}

function filtrar() {
  const busca = searchInput.value.toLowerCase().trim();

  const filtrados = colecaoCarros.filter(car => {
    const correspondeTexto = 
      car.modelo.toLowerCase().includes(busca) ||
      car.marca.toLowerCase().includes(busca) ||
      car.ano.includes(busca);

    const correspondeCategoria = 
      filtroAtual === "todos" || car.categoria === filtroAtual;

    return correspondeTexto && correspondeCategoria;
  });

  renderizarCards(filtrados);
}
