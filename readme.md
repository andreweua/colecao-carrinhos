# 🏎️ Garagem em Miniatura - Controlador da Aplicação

Catálogo interativo para exibição, filtragem, avaliação e preservação histórica de uma coleção de 105 veículos em miniatura com módulo de reconhecimento via Google Gemini Vision API.

Desenvolvido por **PereiraLabs (divisão da Louzada & Pereira - Soluções Digitais)**.

---

## 🌐 Acesso Online

Catálogo em produção:  
👉 [https://andreweua.github.io/colecao-carrinhos/](https://andreweua.github.io/colecao-carrinhos/)

---

## ✨ Recursos

- **Identificação de Miniaturas com IA:** Envio ou captura de fotos direto pela câmera do celular com análise em tempo real via **Google Gemini Vision API** para verificar se o modelo já consta no catálogo ou se é inédito.
- **Armazenamento Seguro da Chave:** A chave da API é configurada pelo próprio usuário no navegador e guardada localmente em `localStorage`.
- **Layout Mobile-First Responsivo (v5.0.0):** Menu de navegação responsivo sem quebras de viewport em celulares.
- **Área Visual Limpa:** Cards com fotos otimizadas, ano posicionado discretamente no rodapé e identificador `#ID`.
- **Sistema de Reações com Feedback:** Curtidas locais e envio automático de comentários de descurtida para o WhatsApp (+55 35 99234-4229) contendo o link do catálogo.

---

## 📂 Arquitetura do Projeto

```text
colecao-carrinhos/
├── index.html       # Estrutura com seção de IA e catálogo
├── style.css        # Folha de estilo v5.0.0
├── script.js        # Lógica da aplicação, IA Gemini e eventos
├── data.js          # Base estruturada dos 105 veículos
├── img/             # Imagens das réplicas automotivas
└── README.md        # Documentação técnica e institucional