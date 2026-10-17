# 🏎️ Garagem em Miniatura | Coleção de Carrinhos

Catálogo digital e interativo desenvolvido para catalogar, preservar e expor um acervo particular com **105 veículos em miniatura**. O projeto reúne modelos clássicos mundiais, ícones nacionais, muscle cars, utilitários e superdesportivos.

Desenvolvido por **PereiraLabs** (divisão da *Louzada & Pereira - Soluções Digitais*).

---

## 🚀 Funcionalidades

- **Catálogo Dinâmico:** Visualização em grelha responsiva com cartões individuais e miniaturas fotográficas.
- **Identificação Automatizada:** Fotografias associadas e renomeadas via script Python de Visão Computacional (OCR / EasyOCR).
- **Pesquisa em Tempo Real:** Filtro imediato por modelo, fabricante ou ano do veículo.
- **Categorização Rápida:**
  - Clássicos
  - Nacionais
  - Esportivos / Hipercarros
  - Muscle Cars
  - Picapes & Utilitários
  - Viaturas & Serviços[cite:
- **Ficha Técnica (Modal):** Painel interativo com especificações do modelo, ano e fabricante da miniatura.
- **Estatísticas Automáticas:** Contadores dinâmicos no cabeçalho com o total de miniaturas e marcas registadas.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 & CSS3:** Interface em *Dark Mode* automotivo com variáveis CSS e design responsivo.
- **JavaScript (Modular):** 
  - `data.js`: Base de dados estruturada dos 105 veículos.
  - `app.js`: Lógica desacoplada de renderização, eventos e filtragem.
- **Python (OCR):** Processamento de imagem e correspondência textual com `easyocr` e `Pillow`.
- **GitHub Pages:** Alojamento estático de alta disponibilidade.

---

## 📂 Estrutura do Repositório

```text
├── index.html          # Estrutura principal da página
├── style.css           # Folha de estilos e responsividade
├── data.js             # Base de dados estruturada dos 105 carros
├── app.js              # Controlador e lógica da aplicação
├── organizar_fotos.py  # Script de processamento e OCR das imagens
├── img/                # Fotografias processadas das miniaturas (1.jpg, ...)
└── README.md           # Documentação do projeto
