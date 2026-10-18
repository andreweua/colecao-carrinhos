# 🏎️ Garagem em Miniatura - Controlador da Aplicação

Catálogo interativo para exibição, filtragem, avaliação e preservação histórica de uma coleção de 105 veículos em miniatura com módulo sob demanda de reconhecimento via Google Gemini Vision API (`gemini-3.8-flash`).

Desenvolvido por **PereiraLabs (divisão da Louzada & Pereira - Soluções Digitais)**.

---

## 🌐 Acesso Online

Catálogo em produção:  
👉 [https://andreweua.github.io/colecao-carrinhos/](https://andreweua.github.io/colecao-carrinhos/)

---

## 🚀 Novidades da Versão 5.2.0

- **Painel de IA Sob Demanda:** Os campos de inserção de chave de API e carregamento de foto permanecem recolhidos até o clique no botão "Identificar com IA", mantendo a tela inicial limpa e focada no catálogo.
- **Modelo Google Gemini Atualizado:** Requisições migradas para o endpoint oficial `gemini-3.8-flash`.
- **Armazenamento Seguro da Chave:** Chave da API mantida localmente no `localStorage` do dispositivo.
- **Responsividade Travada:** Layout otimizado para celulares sem vazamento lateral e com navegação fluida.
- **Interação Social via WhatsApp:** Feedback de descurtida com envio direto para o curador (+55 35 99234-4229) contendo o link do acervo.

---

## 📂 Arquitetura do Projeto

```text
colecao-carrinhos/
├── index.html       # Estrutura semântica v5.2.0
├── style.css        # Folha de estilo e design responsivo
├── script.js        # Lógica do acervo, filtros e módulo de IA
├── data.js          # Base estruturada dos 105 modelos
├── img/             # Fotos individuais das réplicas
└── README.md        # Documentação técnica e institucional