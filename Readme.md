# 🏎️ Garagem em Miniatura - Acervo Digital

Catálogo interativo na web para exibição, busca e preservação histórica de uma coleção de 105 veículos em miniatura, hospedado via GitHub Pages.

Desenvolvido por **PereiraLabs** (divisão da *Louzada&Pereira - Soluções Digitais*).

---

## 🚀 Demonstração Online

Acesse o catálogo em:  
👉 [https://andreweua.github.io/colecao-carrinhos/](https://andreweua.github.io/colecao-carrinhos/)

---

## 📌 Funcionalidades

- **Visualização em Grade Responsiva:** Cards com proporção de imagem travada (`object-fit: cover`) e área visual limpa.
- **Categorização Rápida:** Filtros por botões para *Clássicos*, *Nacionais*, *Esportivos*, *Muscle Cars*, *Picapes & Utilitários* e *Viaturas*.
- **Busca em Tempo Real:** Pesquisa simultânea por modelo, marca ou ano de fabricação.
- **Modal de Detalhes:** Exibição ampliada da foto com ficha técnica da miniatura (ano, categoria, fabricante da réplica).
- **Sistema de Reações (Like / Dislike):**
  - Botão 👍 para curtir miniaturas favoritas.
  - Botão 👎 com caixa de texto rápida para feedback.
  - Integração direta com a API do WhatsApp para envio do comentário ao curador da coleção.
- **Automação de Fotos com OCR:** Processamento de imagens e vinculação de identificadores via script Python com EasyOCR e Pillow.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3 moderno (Flexbox, CSS Grid, Variáveis CSS), JavaScript Vanilla (ES6+).
- **Tipografia:** Google Fonts (*Plus Jakarta Sans*).
- **Hospedagem:** GitHub Pages.
- **Processamento de Imagens:** Python (Pillow, EasyOCR).

---

## 📂 Estrutura de Arquivos

```text
colecao-carrinhos/
├── index.html          # Estrutura da página e marcação semântica
├── style.css           # Estilos, tema escuro e responsividade
├── script.js           # Lógica do catálogo, filtros, modal e reações
├── data.js             # Base de dados estruturada das 105 miniaturas
├── img/                # Fotos otimizadas das miniaturas (1.jpg, 2.jpg...)
└── README.md           # Documentação do projeto