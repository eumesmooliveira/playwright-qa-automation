# 🎭 Playwright QA Automation

Projeto de automação de testes desenvolvido com **Playwright** e **JavaScript**, cobrindo testes **End-to-End (E2E)** de interface e testes de **API REST**.

O projeto foi estruturado com foco em boas práticas de automação de testes, organização utilizando **Page Object Model (POM)**, execução cross-browser, geração de evidências em caso de falha e integração contínua com **GitHub Actions**.

---

## 🧪 Tecnologias utilizadas

- JavaScript
- Node.js
- Playwright
- Playwright Test
- Git e GitHub
- GitHub Actions
- API REST / JSON

---

## 📋 Cobertura de testes

### Testes E2E

Os testes de interface utilizam o site **SauceDemo** como aplicação de demonstração.

Entre os cenários automatizados estão:

- Login com credenciais válidas
- Validação de login inválido
- Validação da página de inventário
- Adição de produto ao carrinho
- Validação dos produtos adicionados
- Fluxo de checkout
- Finalização de compra

Os testes E2E são executados nos navegadores:

- Chromium
- Firefox
- WebKit

### Testes de API

A suíte também possui testes automatizados de API utilizando o recurso de requisições HTTP do próprio Playwright.

Os cenários utilizam a API pública **JSONPlaceholder** e incluem operações relacionadas a:

- GET
- POST
- PUT
- DELETE
- Validação de status HTTP
- Validação da estrutura e dos dados retornados em JSON

---

playwright-qa-automation/
│
├── .github/
│   └── workflows/
│       └── playwright-tests.yml
│
├── docs/
│   ├── evidence/
│   │   ├── ct06-checkout-success.webm
│   │   └── README.md
│   ├── architecture.md
│   └── test-strategy.md
│
├── pages/
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── InventoryPage.js
│   └── LoginPage.js
│
├── tests/
│   ├── api/
│   │   └── users-api.spec.js
│   ├── inventory.spec.js
│   └── login.spec.js
│
├── .gitignore
├── demo.config.js
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md

---

## 🧩 Page Object Model

O projeto utiliza o padrão **Page Object Model (POM)** para separar os elementos e comportamentos das páginas dos cenários de teste.

Os Page Objects estão localizados em:

```text
pages/
├── LoginPage.js
├── InventoryPage.js
├── CartPage.js
└── CheckoutPage.js
```

Essa abordagem facilita a manutenção dos testes e reduz duplicação de código.

---

## ⚙️ Pré-requisitos

Para executar o projeto localmente é necessário possuir:

- Node.js
- npm
- Git

---

## 🚀 Instalação

Clone o repositório:

```bash
git clone https://github.com/eumesmooliveira/playwright-qa-automation.git
```

Entre na pasta do projeto:

```bash
cd playwright-qa-automation
```

Instale as dependências:

```bash
npm ci
```

Instale os navegadores utilizados pelo Playwright:

```bash
npx playwright install
```

---

## ▶️ Executando os testes

### Executar toda a suíte

```bash
npm test
```

### Executar somente no Chromium

```bash
npm run test:chromium
```

### Executar somente no Firefox

```bash
npm run test:firefox
```

### Executar somente no WebKit

```bash
npm run test:webkit
```

### Executar utilizando o Playwright UI Mode

```bash
npm run test:ui
```

---

## 📊 Relatório de testes

Após a execução, o Playwright gera um relatório HTML.

Para abrir o último relatório:

```bash
npm run report
```

O relatório permite visualizar os testes executados, duração, resultados e detalhes de eventuais falhas.

---

## 📸 Evidências de falha

O projeto está configurado para coletar automaticamente evidências quando um teste falha.

Entre as evidências disponíveis estão:

- Screenshot
- Vídeo da execução
- Trace em tentativas de repetição no ambiente de CI
- Relatório HTML

Esses recursos auxiliam na investigação e análise de falhas encontradas durante a execução dos testes.

---

## 🔄 Integração contínua

O projeto possui pipeline de **CI com GitHub Actions**.

A cada `push` ou `pull request` direcionado à branch `main`, o workflow executa automaticamente a suíte de testes.

O pipeline realiza:

1. Checkout do repositório
2. Configuração do Node.js
3. Instalação das dependências
4. Instalação dos navegadores do Playwright
5. Execução automatizada dos testes
6. Geração e upload do relatório do Playwright como artifact

Isso permite validar automaticamente o projeto a cada alteração enviada ao repositório.

---

## ✅ Execução validada

A suíte automatizada foi executada localmente com sucesso:

```text
Running 24 tests using 2 workers
24 passed
```

A mesma suíte também foi validada através do pipeline de CI no GitHub Actions.

---

## 📚 Documentação técnica

Além do README principal, o projeto possui documentação técnica detalhada sobre a estratégia e a arquitetura da automação.

- [Estratégia de Testes](docs/test-strategy.md) — escopo, cenários cobertos, abordagem E2E e API, evidências e critérios adotados.
- [Arquitetura da Automação](docs/architecture.md) — estrutura do projeto, Page Object Model, decisões arquiteturais, CI e organização da suíte.
- [Evidências de Execução](docs/evidence/README.md) — documentação das evidências selecionadas da execução automatizada.

### 🎥 Demonstração de execução

Uma execução real do cenário **CT06 - Deve concluir uma compra com sucesso** foi registrada para demonstrar o funcionamento da automação E2E.

📹 [Vídeo da execução do checkout](docs/evidence/ct06-checkout-success.webm)

A evidência foi gerada através de uma configuração específica de demonstração, mantendo os artefatos de portfólio separados da execução normal da suíte.

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido como parte de um portfólio de **Quality Assurance e Test Automation**, demonstrando conhecimentos práticos em:

- Automação de testes E2E
- Automação de API
- Page Object Model
- Testes cross-browser
- Validação de respostas HTTP e JSON
- Geração de evidências de teste
- Git e versionamento
- Integração contínua com GitHub Actions

---

## 👨‍💻 Autor

**Felipe de Oliveira**

QA | Test Automation | Playwright | Cypress | API Testing