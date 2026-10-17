// Base de dados completa com as miniaturas das anotações manuscritas
const colecaoCarros = [
  // Folha 1
  { marca: "Ferrari", modelo: "Sunnyside Geral", ano: "—", fabricante: "Sunnyside", categoria: "Esportivo", icon: "🏎️" },
  { marca: "Gurgel", modelo: "Itaipu E-400 CPT", ano: "1976", fabricante: "Welly", categoria: "Nacional", icon: "🚙" },
  { marca: "Ford", modelo: "Vicky Hot Rod", ano: "1932", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { marca: "Fiat", modelo: "Idea", ano: "2003", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { marca: "Ford", modelo: "Mustang", ano: "1964", fabricante: "—", categoria: "Muscle Car", icon: "🏎️" },
  { marca: "Peugeot", modelo: "504", ano: "1957", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { marca: "Volkswagen", modelo: "1600 (Zé do Caixão)", ano: "1969", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { marca: "Ford", modelo: "F-1", ano: "1948", fabricante: "—", categoria: "Utilitário", icon: "🛻" },
  { marca: "Dodge", modelo: "Ram 1500", ano: "2019", fabricante: "—", categoria: "Utilitário", icon: "🛻" },
  { marca: "Utilitários", modelo: "Caminhão Calhambeque", ano: "1934", fabricante: "—", categoria: "Utilitário", icon: "🚚" },
  { marca: "Utilitários", modelo: "Transport Truck", ano: "—", fabricante: "—", categoria: "Utilitário", icon: "🚛" },
  { marca: "Jeep", modelo: "Open Jeep Militar", ano: "—", fabricante: "—", categoria: "Viatura / Serviço", icon: "🚙" },
  { marca: "Chevrolet", modelo: "Bel Air", ano: "1953", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { marca: "Aero Willys", modelo: "Aero Willys", ano: "1966", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { marca: "Fiat", modelo: "125", ano: "—", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { marca: "Porsche", modelo: "911 GT3", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { marca: "Lamborghini", modelo: "Veneno", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { marca: "Bentley", modelo: "Continental GT", ano: "2018", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { marca: "Toyota", modelo: "Bandeirante", ano: "—", fabricante: "—", categoria: "Utilitário", icon: "🚙" },
  { marca: "Jeep", modelo: "Wrangler Militar", ano: "—", fabricante: "—", categoria: "Viatura / Serviço", icon: "🚙" },
  { marca: "Jeep", modelo: "Renegade Trailhawk", ano: "2017", fabricante: "—", categoria: "Utilitário", icon: "🚙" },
  { marca: "Toyota", modelo: "Supra", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { marca: "Ford", modelo: "Focus ST", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🚗" },
  { marca: "Ford", modelo: "Explorer", ano: "—", fabricante: "—", categoria: "Utilitário", icon: "🚙" },
  { marca: "Hyundai", modelo: "i30", ano: "—", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { marca: "Smart", modelo: "Fortwo Coupé", ano: "—", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { marca: "Utilitários", modelo: "Camburão", ano: "—", fabricante: "—", categoria: "Viatura / Serviço", icon: "🚓" },

  // Folha 2
  { marca: "Utilitários", modelo: "Auto Clássico", ano: "—", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { marca: "Ford", modelo: "Ka", ano: "1996", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { marca: "Mercedes-Benz", modelo: "C63 AMG", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { marca: "Fiat", modelo: "147", ano: "1976", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { marca: "Ford", modelo: "Fairlane 500 Skyliner", ano: "1957", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { marca: "Utilitários", modelo: "Calhambeque", ano: "1929", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { marca: "Chevrolet", modelo: "3100 (Boca de Sapo)", ano: "1950", fabricante: "—", categoria: "Utilitário", icon: "🛻" },
  { marca: "Mini", modelo: "Mini Cooper", ano: "1970", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { marca: "Mercedes-Benz", modelo: "GLK", ano: "2009", fabricante: "—", categoria: "Utilitário", icon: "🚙" },
  { marca: "Chrysler", modelo: "Modelo Anos 90", ano: "1990", fabricante: "Maisto", categoria: "Clássico", icon: "🚗" },
  { marca: "Fiat", modelo: "Uno 1.5 R", ano: "1988", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { marca: "Opel", modelo: "Astra GTC", ano: "2005", fabricante: "—", categoria: "Esportivo", icon: "🚗" },
  { marca: "Ford", modelo: "GT", ano: "2006", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { marca: "Hyundai", modelo: "Tucson", ano: "2018", fabricante: "—", categoria: "Utilitário", icon: "🚙" },
  { marca: "Utilitários", modelo: "Táxi Americano", ano: "—", fabricante: "—", categoria: "Viatura / Serviço", icon: "🚕" },
  { marca: "Mitsubishi", modelo: "Pajero", ano: "—", fabricante: "—", categoria: "Utilitário", icon: "🚙" },
  { marca: "Renault", modelo: "Clio RS", ano: "2013", fabricante: "—", categoria: "Esportivo", icon: "🚗" },
  { marca: "Ford", modelo: "F-750", ano: "—", fabricante: "—", categoria: "Utilitário", icon: "🚚" },
  { marca: "Toyota", modelo: "Camry", ano: "2015", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { marca: "Utilitários", modelo: "Táxi de Londres", ano: "2006", fabricante: "—", categoria: "Viatura / Serviço", icon: "🚕" },
  { marca: "Bugatti", modelo: "SUV Galibier Concept", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { marca: "Ford", modelo: "F-100 Picape", ano: "1956", fabricante: "—", categoria: "Utilitário", icon: "🛻" },
  { marca: "Koenigsegg", modelo: "Hipercarro", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { marca: "Chevrolet", modelo: "Opala", ano: "—", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { marca: "Dodge", modelo: "Charger", ano: "—", fabricante: "—", categoria: "Muscle Car", icon: "🏎️" },
  { marca: "Lamborghini", modelo: "Urus", ano: "—", fabricante: "—", categoria: "Utilitário", icon: "🚙" },
  { marca: "Dodge", modelo: "Viper GTS", ano: "2013", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },

  // Folha 3
  { marca: "Mercedes-Benz", modelo: "CLS 63 AMG", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { marca: "Mercedes-Benz", modelo: "300S", ano: "—", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { marca: "BMW", modelo: "i8", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { marca: "Dodge", modelo: "Challenger T/A", ano: "1970", fabricante: "—", categoria: "Muscle Car", icon: "🏎️" },
  { marca: "Lotus", modelo: "Exige S", ano: "2012", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { marca: "Maserati", modelo: "GranTurismo MC", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { marca: "Chevrolet", modelo: "Corvette Stingray", ano: "1963", fabricante: "—", categoria: "Clássico", icon: "🏎️" },
  { marca: "Lamborghini", modelo: "Miura P400 SV", ano: "1971", fabricante: "—", categoria: "Clássico", icon: "🏎️" },
  { marca: "Dodge", modelo: "Challenger SRT Demon", ano: "—", fabricante: "—", categoria: "Muscle Car", icon: "🏎️" },
  { marca: "Mercedes-Benz", modelo: "AMG GT", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { marca: "Aston Martin", modelo: "DB5", ano: "1963", fabricante: "—", categoria: "Clássico", icon: "🏎️" },
  { marca: "Porsche", modelo: "911 GT3 RS", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { marca: "Mercedes-Benz", modelo: "Classe SLK", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🚗" },
  { marca: "BMW", modelo: "501 / 502", ano: "1952", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { marca: "Chevrolet", modelo: "Camaro", ano: "1969", fabricante: "—", categoria: "Muscle Car", icon: "🏎️" },
  { marca: "Volkswagen", modelo: "Fusca Polícia Federal", ano: "1967", fabricante: "—", categoria: "Viatura / Serviço", icon: "🚓" },
  { marca: "Subaru", modelo: "Impreza WRC", ano: "2007", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { marca: "Land Rover", modelo: "Defender", ano: "—", fabricante: "—", categoria: "Utilitário", icon: "🚙" },
  { marca: "Alfa Romeo", modelo: "FNM JK 2000", ano: "1967", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { marca: "Cadillac", modelo: "Clássico", ano: "1953", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { marca: "Toyota", modelo: "FJ Cruiser", ano: "—", fabricante: "—", categoria: "Utilitário", icon: "🚙" },
  { marca: "Lada", modelo: "Samara Sedan", ano: "1991", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { marca: "Ford", modelo: "Mustang GT", ano: "2006", fabricante: "—", categoria: "Muscle Car", icon: "🏎️" },
  { marca: "Porsche", modelo: "356 Carrera", ano: "—", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { marca: "Mercedes-Benz", modelo: "500 SL", ano: "—", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { marca: "Mercedes-Benz", modelo: "350", ano: "—", fabricante: "—", categoria: "Clássico", icon: "🚗" },

  // Folha 4
  { marca: "Bugatti", modelo: "16C Galibier", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" },
  { marca: "Cadillac", modelo: "Fleetwood Brougham", ano: "—", fabricante: "—", categoria: "Clássico", icon: "🚗" },
  { marca: "Chevrolet", modelo: "El Camino", ano: "1965", fabricante: "—", categoria: "Utilitário", icon: "🛻" },
  { marca: "Chevrolet", modelo: "Impala SS", ano: "1964", fabricante: "—", categoria: "Muscle Car", icon: "🚗" },
  { marca: "Ferrari", modelo: "275 GTB", ano: "1966", fabricante: "—", categoria: "Clássico", icon: "🏎️" },
  { marca: "Renault / Willys", modelo: "Gordini", ano: "1965", fabricante: "—", categoria: "Nacional", icon: "🚗" },
  { marca: "Ford", modelo: "Picape V8", ano: "1932", fabricante: "—", categoria: "Utilitário", icon: "🛻" },
  { marca: "McLaren", modelo: "Senna", ano: "—", fabricante: "—", categoria: "Esportivo", icon: "🏎️" }
];

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
  totalModelos.innerText = colecaoCarros.length;
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
    card.innerHTML = `
      <div class="card-image">
        <span>${car.icon}</span>
        ${car.ano !== "—" ? `<span class="card-tag-year">${car.ano}</span>` : ""}
      </div>
      <div class="card-content">
        <div class="card-brand">${car.marca}</div>
        <div class="card-title">${car.modelo}</div>
        <div class="card-footer">
          <span class="card-badge">${car.categoria}</span>
          <span>${car.fabricante !== "—" ? car.fabricante : "Miniatura"}</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => {
      modalDetails.innerHTML = `
        <h2 style="font-size: 1.5rem; margin-bottom: 15px;">${car.marca} ${car.modelo}</h2>
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