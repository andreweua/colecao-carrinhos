# 🏎️ Garagem em Miniatura - Controlador da Aplicação

Catálogo interativo para exibição, filtragem, avaliação e preservação histórica de uma coleção de 105 miniaturas automotivas.

Desenvolvido por **PereiraLabs (divisão da Louzada & Pereira - Soluções Digitais)**.

---

## 🌐 Acesso Online

Catálogo em produção:  
👉 [https://andreweua.github.io/colecao-carrinhos/](https://andreweua.github.io/colecao-carrinhos/)

---

## ✨ Recursos

- **Layout Mobile-First Responsivo:** Sem vazamento horizontal (`overflow-x: hidden`), com menu sanduíche adaptado e proporções travadas.
- **Área Visual Limpa:** Cards com imagens enquadradas sem sobreposição de textos; ano integrado ao rodapé junto à categoria.
- **Sistema de Reações (Like & Dislike):**
  - Votos armazenados localmente via `localStorage`.
  - Formulário para comentários curtos em caso de descurtida.
  - Integração com a API do WhatsApp com mensagem pré-formatada e link do acervo.
- **Busca e Filtros Rápidos:** Pesquisa em tempo real e categorias organizadas (*Clássico*, *Nacional*, *Esportivo*, *Muscle Car*, *Utilitário*, *Viatura / Serviço*).

---

## 📂 Arquitetura do Projeto

```text
colecao-carrinhos/
├── index.html       # Estrutura e semântica
├── style.css        # Folha de estilo e responsividade
├── script.js        # Lógica da aplicação, menu e interações
├── data.js          # Base estruturada dos 105 veículos
├── img/             # Imagens das réplicas automotivas
└── README.md        # Documentação técnica e institucional