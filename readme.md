# 🏎️ Garagem em Miniatura - Controlador da Aplicação

> Sistema web interativo para catalogação, preservação histórica, filtragem inteligente e curadoria visual de réplicas automotivas em miniatura.

Desenvolvido por **PereiraLabs (divisão da Louzada & Pereira - Soluções Digitais)**.  
Hospedagem em Produção: [andreweua.github.io/colecao-carrinhos/](https://andreweua.github.io/colecao-carrinhos/)

---

## 📌 Visão Geral do Projeto

A **Garagem em Miniatura** estrutura e preserva digitalmente um acervo particular composto por 105 modelos manuscritos organizados por marcas históricas, ano de fabricação e tipologia de carroceria. A aplicação opera de ponta a ponta sem dependência de servidores complexos, permitindo acesso rápido via dispositivos móveis no momento de novas aquisições.

---

## ✨ Principais Funcionalidades

1. **Card de Acionamento Rápido da IA:**
   * Localizado diretamente na barra de métricas do topo (ao lado dos números do acervo).
   * Abre um modal flutuante limpo para fotografar miniaturas usando a câmera do celular.
2. **Reconhecimento Visual com Google Gemini:**
   * Utiliza o modelo oficial **`gemini-3.8-flash`** para comparar imagens capturadas contra o catálogo de 105 modelos[cite: 3, 4, 5, 6].
   * Emite parecer imediato indicando se o modelo é uma novidade recomendada ou uma potencial duplicata.
3. **Documentação Integrada e Não Intrusiva:**
   * **Modal "Sobre o Projeto":** Acessível pelo menu de navegação com especificações técnicas e institucionais completas.
   * **Accordion Retrátil de Rodapé:** Bloco colapsável com notas da versão sem poluir a interface visual do catálogo.
4. **Curadoria Social via WhatsApp:**
   * Mecanismo de feedback direto com envio de comentários de descurtida formatados para o WhatsApp do curador (`+55 35 99234-4229`).
5. **Design Mobile-First:**
   * Trava de viewport responsiva sem quebras de rolagem horizontal ou desalinhamentos de modal.

---

## 🛠️ Tecnologias Utilizadas

* **Linguagens:** HTML5 semântico, CSS3 Moderno (Custom Properties e Flexbox/Grid), JavaScript Vanilla (ES6+).
* **Visão Computacional & IA:** Google Gemini Vision API (`models/gemini-3.8-flash`).
* **Hospedagem & CI/CD:** GitHub Pages com controle de cache via query string de versões.

---

## 📂 Estrutura de Arquivos

```text
colecao-carrinhos/
├── index.html       # Estrutura com modais de IA e Sobre
├── style.css        # Folha de estilo v5.3.0
├── script.js        # Controlador de dados, modais e IA Gemini
├── data.js          # Base estruturada das 105 miniaturas
├── CHANGELOG.md     # Histórico detalhado de versões do projeto
└── README.md        # Documentação técnica oficial