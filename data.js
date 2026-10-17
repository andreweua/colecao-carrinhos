const CARS_DATA = [
  {
    "id": 1,
    "marca": "Ferrari",
    "modelo": "Sunnyside",
    "ano": "—",
    "fabricante": "Sunnyside",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": "img/1.jpg"
  },
  {
    "id": 2,
    "marca": "Anotação / Miniatura",
    "modelo": "Katalog Modellauto",
    "ano": "—",
    "fabricante": "Larven",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": "img/2.jpg"
  },
  {
    "id": 3,
    "marca": "Gurgel",
    "modelo": "Itaipu E-400 CPT",
    "ano": "1976",
    "fabricante": "Welly",
    "categoria": "Nacional",
    "icon": "🚙",
    "foto": ""
  },
  {
    "id": 4,
    "marca": "Ford",
    "modelo": "Vicky",
    "ano": "1932",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": "img/4.jpg"
  },
  {
    "id": 5,
    "marca": "Fiat",
    "modelo": "Idea",
    "ano": "2003",
    "fabricante": "—",
    "categoria": "Nacional",
    "icon": "🚗",
    "foto": "img/5.jpg"
  },
  {
    "id": 6,
    "marca": "Ford",
    "modelo": "Mustang",
    "ano": "1964",
    "fabricante": "—",
    "categoria": "Muscle Car",
    "icon": "🏎️",
    "foto": "img/6.jpg"
  },
  {
    "id": 7,
    "marca": "Peugeot",
    "modelo": "504",
    "ano": "1957",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": "img/7.jpg"
  },
  {
    "id": 8,
    "marca": "Volkswagen",
    "modelo": "1600 (Zé do Caixão)",
    "ano": "1969",
    "fabricante": "—",
    "categoria": "Nacional",
    "icon": "🚗",
    "foto": "img/8.jpg"
  },
  {
    "id": 9,
    "marca": "Ford",
    "modelo": "F-1",
    "ano": "1948",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🛻",
    "foto": "img/9.jpg"
  },
  {
    "id": 10,
    "marca": "Dodge",
    "modelo": "Ram 1500",
    "ano": "2019",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🛻",
    "foto": "img/10.jpg"
  },
  {
    "id": 11,
    "marca": "Utilitários",
    "modelo": "Caminhão Antigo Calhambeque",
    "ano": "1934",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🚚",
    "foto": "img/11.jpg"
  },
  {
    "id": 12,
    "marca": "Utilitários",
    "modelo": "Transport Truck",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🚛",
    "foto": "img/12.jpg"
  },
  {
    "id": 13,
    "marca": "Jeep",
    "modelo": "Open Jeep",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Viatura / Serviço",
    "icon": "🚙",
    "foto": "img/13.jpg"
  },
  {
    "id": 14,
    "marca": "Chevrolet",
    "modelo": "Bel Air",
    "ano": "1953",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": "img/14.jpg"
  },
  {
    "id": 15,
    "marca": "Aero Willys",
    "modelo": "Aero Willys",
    "ano": "1966",
    "fabricante": "—",
    "categoria": "Nacional",
    "icon": "🚗",
    "foto": "img/15.jpg"
  },
  {
    "id": 16,
    "marca": "Fiat",
    "modelo": "125",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": "img/16.jpg"
  },
  {
    "id": 17,
    "marca": "Porsche",
    "modelo": "911 GT3",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": ""
  },
  {
    "id": 18,
    "marca": "Lamborghini",
    "modelo": "Veneno",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": "img/18.jpg"
  },
  {
    "id": 19,
    "marca": "Bentley",
    "modelo": "Continental GT",
    "ano": "2018",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": "img/19.jpg"
  },
  {
    "id": 20,
    "marca": "Toyota",
    "modelo": "Bandeirante",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🚙",
    "foto": "img/20.jpg"
  },
  {
    "id": 21,
    "marca": "Jeep",
    "modelo": "Wrangler Militar",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Viatura / Serviço",
    "icon": "🚙",
    "foto": "img/21.jpg"
  },
  {
    "id": 22,
    "marca": "Jeep",
    "modelo": "Renegade Trailhawk",
    "ano": "2017",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🚙",
    "foto": "img/22.jpg"
  },
  {
    "id": 23,
    "marca": "Toyota",
    "modelo": "Supra",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": "img/23.jpg"
  },
  {
    "id": 24,
    "marca": "Ford",
    "modelo": "Focus ST",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🚗",
    "foto": "img/24.jpg"
  },
  {
    "id": 25,
    "marca": "Utilitários",
    "modelo": "Van",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🚐",
    "foto": "img/25.jpg"
  },
  {
    "id": 26,
    "marca": "Hyundai",
    "modelo": "i30",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Nacional",
    "icon": "🚗",
    "foto": "img/26.jpg"
  },
  {
    "id": 27,
    "marca": "Ford",
    "modelo": "Explorer",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🚙",
    "foto": "img/27.jpg"
  },
  {
    "id": 28,
    "marca": "Smart",
    "modelo": "Fortwo Coupé",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": "img/28.jpg"
  },
  {
    "id": 29,
    "marca": "Utilitários",
    "modelo": "Camburão",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Viatura / Serviço",
    "icon": "🚓",
    "foto": ""
  },
  {
    "id": 30,
    "marca": "Modelo a Identificar",
    "modelo": "Miniatura #30 (Folha 1)",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": ""
  },
  {
    "id": 31,
    "marca": "Utilitários",
    "modelo": "Auto Clássico",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": ""
  },
  {
    "id": 32,
    "marca": "Ford",
    "modelo": "Ka",
    "ano": "1996",
    "fabricante": "—",
    "categoria": "Nacional",
    "icon": "🚗",
    "foto": ""
  },
  {
    "id": 33,
    "marca": "Mercedes-Benz",
    "modelo": "C63 AMG",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": "img/33.jpg"
  },
  {
    "id": 34,
    "marca": "Fiat",
    "modelo": "147",
    "ano": "1976",
    "fabricante": "—",
    "categoria": "Nacional",
    "icon": "🚗",
    "foto": ""
  },
  {
    "id": 35,
    "marca": "Ford",
    "modelo": "Fairlane 500 Skyliner",
    "ano": "1957",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": "img/35.jpg"
  },
  {
    "id": 36,
    "marca": "Utilitários",
    "modelo": "Calhambeque",
    "ano": "1929",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": "img/36.jpg"
  },
  {
    "id": 37,
    "marca": "Chevrolet",
    "modelo": "3100 (Boca de Sapo)",
    "ano": "1950",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🛻",
    "foto": "img/37.jpg"
  },
  {
    "id": 38,
    "marca": "Mini",
    "modelo": "Mini Cooper",
    "ano": "1970",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": "img/38.jpg"
  },
  {
    "id": 39,
    "marca": "Mercedes-Benz",
    "modelo": "GLK",
    "ano": "2009",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🚙",
    "foto": "img/39.jpg"
  },
  {
    "id": 40,
    "marca": "Chrysler",
    "modelo": "Sedan Anos 90",
    "ano": "1990",
    "fabricante": "Maisto",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": "img/40.jpg"
  },
  {
    "id": 41,
    "marca": "Fiat",
    "modelo": "Uno 1.5 R",
    "ano": "1988",
    "fabricante": "—",
    "categoria": "Nacional",
    "icon": "🚗",
    "foto": "img/41.jpg"
  },
  {
    "id": 42,
    "marca": "Opel",
    "modelo": "Astra GTC",
    "ano": "2005",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🚗",
    "foto": "img/42.jpg"
  },
  {
    "id": 43,
    "marca": "Ford",
    "modelo": "GT",
    "ano": "2006",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": "img/43.jpg"
  },
  {
    "id": 44,
    "marca": "Dodge",
    "modelo": "Ram",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🛻",
    "foto": ""
  },
  {
    "id": 45,
    "marca": "Hyundai",
    "modelo": "Tucson",
    "ano": "2018",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🚙",
    "foto": "img/45.jpg"
  },
  {
    "id": 46,
    "marca": "Utilitários",
    "modelo": "Táxi Americano",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Viatura / Serviço",
    "icon": "🚕",
    "foto": "img/46.jpg"
  },
  {
    "id": 47,
    "marca": "Chevrolet",
    "modelo": "Bel Air",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": ""
  },
  {
    "id": 48,
    "marca": "Mitsubishi",
    "modelo": "Pajero",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🚙",
    "foto": "img/48.jpg"
  },
  {
    "id": 49,
    "marca": "Jeep",
    "modelo": "Jipe do Exército dos EUA",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Viatura / Serviço",
    "icon": "🚙",
    "foto": ""
  },
  {
    "id": 50,
    "marca": "Renault",
    "modelo": "Clio RS",
    "ano": "2013",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🚗",
    "foto": "img/50.jpg"
  },
  {
    "id": 51,
    "marca": "Ford",
    "modelo": "F-750",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🚚",
    "foto": "img/51.jpg"
  },
  {
    "id": 52,
    "marca": "Toyota",
    "modelo": "Camry",
    "ano": "2015",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": "img/52.jpg"
  },
  {
    "id": 53,
    "marca": "BMW",
    "modelo": "Sedan / Coupé",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": ""
  },
  {
    "id": 54,
    "marca": "Utilitários",
    "modelo": "Táxi de Londres",
    "ano": "2006",
    "fabricante": "—",
    "categoria": "Viatura / Serviço",
    "icon": "🚕",
    "foto": "img/54.jpg"
  },
  {
    "id": 55,
    "marca": "Bugatti",
    "modelo": "SUV Galibier",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": "img/55.jpg"
  },
  {
    "id": 56,
    "marca": "Ford",
    "modelo": "F-100 Picape",
    "ano": "1956",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🛻",
    "foto": "img/56.jpg"
  },
  {
    "id": 57,
    "marca": "Koenigsegg",
    "modelo": "Hipercarro",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": ""
  },
  {
    "id": 58,
    "marca": "Lamborghini",
    "modelo": "Superesportivo",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": ""
  },
  {
    "id": 59,
    "marca": "Chevrolet",
    "modelo": "Opala",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Nacional",
    "icon": "🚗",
    "foto": ""
  },
  {
    "id": 60,
    "marca": "Dodge",
    "modelo": "Viper GTS",
    "ano": "2013",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": "img/60.jpg"
  },
  {
    "id": 61,
    "marca": "Mercedes-Benz",
    "modelo": "CLS 63 AMG",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": ""
  },
  {
    "id": 62,
    "marca": "Mercedes-Benz",
    "modelo": "300S",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": "img/62.jpg"
  },
  {
    "id": 63,
    "marca": "BMW",
    "modelo": "i8",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": "img/63.jpg"
  },
  {
    "id": 64,
    "marca": "Ford",
    "modelo": "GT",
    "ano": "2006",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": ""
  },
  {
    "id": 65,
    "marca": "Dodge",
    "modelo": "Challenger T/A",
    "ano": "1970",
    "fabricante": "—",
    "categoria": "Muscle Car",
    "icon": "🏎️",
    "foto": "img/65.jpg"
  },
  {
    "id": 66,
    "marca": "Lotus",
    "modelo": "Exige S",
    "ano": "2012",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": "img/66.jpg"
  },
  {
    "id": 67,
    "marca": "Maserati",
    "modelo": "GranTurismo MC",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": "img/67.jpg"
  },
  {
    "id": 68,
    "marca": "Chevrolet",
    "modelo": "Corvette Stingray",
    "ano": "1963",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🏎️",
    "foto": "img/68.jpg"
  },
  {
    "id": 69,
    "marca": "Lamborghini",
    "modelo": "Miura P400 SV",
    "ano": "1971",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🏎️",
    "foto": "img/69.jpg"
  },
  {
    "id": 70,
    "marca": "Dodge",
    "modelo": "Challenger SRT Demon",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Muscle Car",
    "icon": "🏎️",
    "foto": "img/70.jpg"
  },
  {
    "id": 71,
    "marca": "Mercedes-Benz",
    "modelo": "AMG GT",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": "img/71.jpg"
  },
  {
    "id": 72,
    "marca": "Aston Martin",
    "modelo": "DB5",
    "ano": "1963",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🏎️",
    "foto": "img/72.jpg"
  },
  {
    "id": 73,
    "marca": "Porsche",
    "modelo": "911 GT3 RS",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": ""
  },
  {
    "id": 74,
    "marca": "Mercedes-Benz",
    "modelo": "Classe SLK",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🚗",
    "foto": "img/74.jpg"
  },
  {
    "id": 75,
    "marca": "BMW",
    "modelo": "501",
    "ano": "1952",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": "img/75.jpg"
  },
  {
    "id": 76,
    "marca": "BMW",
    "modelo": "502",
    "ano": "1963",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": ""
  },
  {
    "id": 77,
    "marca": "Chevrolet",
    "modelo": "Camaro",
    "ano": "1969",
    "fabricante": "—",
    "categoria": "Muscle Car",
    "icon": "🏎️",
    "foto": "img/77.jpg"
  },
  {
    "id": 78,
    "marca": "Volkswagen",
    "modelo": "Fusca Polícia Federal",
    "ano": "1967",
    "fabricante": "—",
    "categoria": "Viatura / Serviço",
    "icon": "🚓",
    "foto": "img/78.jpg"
  },
  {
    "id": 79,
    "marca": "Subaru",
    "modelo": "Impreza WRC",
    "ano": "2007",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": "img/79.jpg"
  },
  {
    "id": 80,
    "marca": "Land Rover",
    "modelo": "Defender",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🚙",
    "foto": "img/80.jpg"
  },
  {
    "id": 81,
    "marca": "Chevrolet",
    "modelo": "Camaro SS",
    "ano": "1969",
    "fabricante": "—",
    "categoria": "Muscle Car",
    "icon": "🏎️",
    "foto": ""
  },
  {
    "id": 82,
    "marca": "Alfa Romeo",
    "modelo": "FNM JK 2000",
    "ano": "1967",
    "fabricante": "—",
    "categoria": "Nacional",
    "icon": "🚗",
    "foto": "img/82.jpg"
  },
  {
    "id": 83,
    "marca": "Cadillac",
    "modelo": "Clássico",
    "ano": "1953",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": "img/83.jpg"
  },
  {
    "id": 84,
    "marca": "Toyota",
    "modelo": "FJ Cruiser",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🚙",
    "foto": "img/84.jpg"
  },
  {
    "id": 85,
    "marca": "Lada",
    "modelo": "Samara Sedan",
    "ano": "1991",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": "img/85.jpg"
  },
  {
    "id": 86,
    "marca": "Ford",
    "modelo": "Mustang GT",
    "ano": "2006",
    "fabricante": "—",
    "categoria": "Muscle Car",
    "icon": "🏎️",
    "foto": "img/86.jpg"
  },
  {
    "id": 87,
    "marca": "Bentley",
    "modelo": "Continental GT",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": ""
  },
  {
    "id": 88,
    "marca": "Porsche",
    "modelo": "356 Carrera",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": "img/88.jpg"
  },
  {
    "id": 89,
    "marca": "Mercedes-Benz",
    "modelo": "500 SL",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": "img/89.jpg"
  },
  {
    "id": 90,
    "marca": "Mercedes-Benz",
    "modelo": "350",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": "img/90.jpg"
  },
  {
    "id": 91,
    "marca": "BMW",
    "modelo": "Esportivo",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": ""
  },
  {
    "id": 92,
    "marca": "Dodge",
    "modelo": "Charger R/T",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Muscle Car",
    "icon": "🏎️",
    "foto": ""
  },
  {
    "id": 93,
    "marca": "Lamborghini",
    "modelo": "Urus",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🚙",
    "foto": "img/93.jpg"
  },
  {
    "id": 94,
    "marca": "Utilitários",
    "modelo": "Pick Up Truck",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🛻",
    "foto": "img/94.jpg"
  },
  {
    "id": 95,
    "marca": "Modelo a Identificar",
    "modelo": "Miniatura #95 (Folha 3)",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": ""
  },
  {
    "id": 96,
    "marca": "Bugatti",
    "modelo": "16C Galibier",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": ""
  },
  {
    "id": 97,
    "marca": "Cadillac",
    "modelo": "Fleetwood Brougham",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🚗",
    "foto": ""
  },
  {
    "id": 98,
    "marca": "Chevrolet",
    "modelo": "El Camino",
    "ano": "1965",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🛻",
    "foto": ""
  },
  {
    "id": 99,
    "marca": "Dodge",
    "modelo": "Charger",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Muscle Car",
    "icon": "🏎️",
    "foto": "img/99.jpg"
  },
  {
    "id": 100,
    "marca": "Chevrolet",
    "modelo": "Impala SS",
    "ano": "1964",
    "fabricante": "—",
    "categoria": "Muscle Car",
    "icon": "🚗",
    "foto": ""
  },
  {
    "id": 101,
    "marca": "Dodge",
    "modelo": "Ram 1500",
    "ano": "2019",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🛻",
    "foto": ""
  },
  {
    "id": 102,
    "marca": "Ferrari",
    "modelo": "275 GTB",
    "ano": "1966",
    "fabricante": "—",
    "categoria": "Clássico",
    "icon": "🏎️",
    "foto": ""
  },
  {
    "id": 103,
    "marca": "Renault / Willys",
    "modelo": "Gordini",
    "ano": "1965",
    "fabricante": "—",
    "categoria": "Nacional",
    "icon": "🚗",
    "foto": ""
  },
  {
    "id": 104,
    "marca": "Ford",
    "modelo": "Picape V8",
    "ano": "1932",
    "fabricante": "—",
    "categoria": "Utilitário",
    "icon": "🛻",
    "foto": ""
  },
  {
    "id": 105,
    "marca": "McLaren",
    "modelo": "Senna",
    "ano": "—",
    "fabricante": "—",
    "categoria": "Esportivo",
    "icon": "🏎️",
    "foto": ""
  }
];
