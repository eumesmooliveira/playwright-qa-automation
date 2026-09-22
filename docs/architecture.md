# Arquitetura da Automação

## 1. Visão geral

O projeto **Playwright QA Automation** foi estruturado para demonstrar uma solução de automação de testes organizada, reutilizável e adequada à execução local e em integração contínua.

A arquitetura contempla:

- Testes End-to-End (E2E) de interface.
- Testes de API REST.
- Page Object Model (POM).
- Execução cross-browser.
- Geração de evidências.
- Relatórios HTML.
- Integração contínua com GitHub Actions.

---

## 2. Estrutura do projeto

A organização principal do projeto é:

```text
playwright-qa-automation/
|
|-- .github/
|   `-- workflows/
|       `-- playwright-tests.yml
|
|-- docs/
|   |-- evidence/
|   |   |-- ct06-checkout-success.webm
|   |   `-- README.md
|   |-- architecture.md
|   `-- test-strategy.md
|
|-- pages/
|   |-- CartPage.js
|   |-- CheckoutPage.js
|   |-- InventoryPage.js
|   `-- LoginPage.js
|
|-- tests/
|   |-- api/
|   |   `-- users-api.spec.js
|   |-- inventory.spec.js
|   `-- login.spec.js
|
|-- .gitignore
|-- demo.config.js
|-- package.json
|-- package-lock.json
|-- playwright.config.js
`-- README.md
```

A estrutura separa configuração, documentação, Page Objects, testes e evidências, facilitando a manutenção e a compreensão do projeto.

---

## 3. Page Object Model

O projeto utiliza o padrão **Page Object Model (POM)** para separar a lógica de interação com as páginas dos cenários de teste.

Os Page Objects estão organizados no diretório `pages/`:

- `LoginPage.js` — ações e elementos relacionados à autenticação.
- `InventoryPage.js` — interações com a listagem de produtos.
- `CartPage.js` — operações relacionadas ao carrinho.
- `CheckoutPage.js` — fluxo de checkout e finalização da compra.

Essa abordagem reduz duplicação de código, melhora a legibilidade dos testes e facilita a manutenção da suíte.

---

## 4. Organização dos testes

Os testes foram separados de acordo com o tipo de validação realizada.

### Testes E2E

Os cenários de interface estão localizados em:

```text
tests/
|-- login.spec.js
`-- inventory.spec.js
```

Esses testes validam os principais fluxos funcionais da aplicação SauceDemo.

### Testes de API

Os testes de API estão isolados em:

```text
tests/api/
`-- users-api.spec.js
```

Essa separação permite executar e evoluir os testes de interface e de API de forma independente.

---

## 5. Execução cross-browser

Os testes E2E foram configurados para execução nos principais mecanismos de navegador suportados pelo Playwright:

- Chromium
- Firefox
- WebKit

Os testes de API utilizam um projeto próprio e não dependem da interface de um navegador.

Essa configuração permite validar os fluxos de interface em diferentes engines sem duplicar os cenários automatizados.

---

## 6. Estratégia de evidências

A configuração principal do Playwright prioriza a geração de evidências em situações de falha.

São utilizados:

- Screenshots em caso de falha.
- Vídeos retidos em caso de falha.
- Trace na primeira repetição executada em CI.
- Relatório HTML do Playwright.

Os artefatos temporários gerados automaticamente pelo framework não são versionados no repositório.

Para fins de portfólio e documentação, evidências selecionadas são armazenadas em:

```text
docs/evidence/
```

Essa estratégia mantém o repositório organizado, evitando o versionamento de todos os artefatos gerados durante cada execução, enquanto preserva evidências relevantes para demonstração.

---

## 7. Configuração para demonstração

O arquivo `demo.config.js` possui uma finalidade diferente da configuração principal do Playwright.

Ele foi criado especificamente para gerar uma demonstração visual controlada de um cenário E2E, permitindo a gravação do vídeo mesmo quando o teste é executado com sucesso.

A configuração de demonstração:

- utiliza Chromium;
- habilita a gravação de vídeo;
- mantém a geração do relatório HTML;
- utiliza a mesma aplicação testada pela suíte E2E;
- não substitui a configuração principal da automação.

A evidência selecionada atualmente demonstra o cenário:

**CT06 - Deve concluir uma compra com sucesso**

O vídeo correspondente está disponível em:

```text
docs/evidence/ct06-checkout-success.webm
```

Dessa forma, a geração de evidências para apresentação permanece separada da execução normal da suíte.

---

## 8. Integração contínua

A integração contínua é realizada através do **GitHub Actions**.

O workflow está localizado em:

```text
.github/workflows/playwright-tests.yml
```

A pipeline é executada em eventos de `push` e `pull_request` direcionados à branch `main`.

O processo contempla:

1. Checkout do repositório.
2. Configuração do Node.js.
3. Instalação das dependências.
4. Instalação dos navegadores do Playwright.
5. Execução da suíte automatizada.
6. Upload do relatório do Playwright como artifact.

Isso permite validar automaticamente o projeto após alterações enviadas ao repositório.

---

## 9. Relatórios

O projeto utiliza o relatório HTML nativo do Playwright para acompanhamento das execuções.

Após uma execução local, o relatório pode ser acessado através do comando:

```bash
npm run report
```

O relatório apresenta informações como:

- testes executados;
- duração;
- resultado de cada cenário;
- erros encontrados;
- evidências associadas às falhas, quando disponíveis.

No ambiente de CI, o relatório também é disponibilizado como artifact do GitHub Actions.

---

## 10. Separação entre código e documentação

O projeto mantém uma separação entre os componentes executáveis da automação e sua documentação técnica.

A pasta `docs/` contém:

- estratégia de testes;
- decisões arquiteturais;
- documentação das evidências;
- evidências selecionadas de execução.

O diretório `pages/` concentra os Page Objects responsáveis pela abstração das interações com a interface.

O diretório `tests/` concentra os cenários automatizados E2E e de API.

Essa separação facilita tanto a manutenção técnica quanto a avaliação do projeto como portfólio.

---

## 11. Decisões arquiteturais

As principais decisões adotadas no projeto foram:

- Utilização do Playwright Test como framework principal de automação.
- JavaScript como linguagem de implementação.
- Page Object Model para organização das interações de interface.
- Separação entre testes E2E e testes de API.
- Execução cross-browser dos cenários de interface.
- Configuração específica para geração de evidências demonstrativas.
- GitHub Actions para integração contínua.
- Relatório HTML nativo do Playwright para acompanhamento das execuções.
- Versionamento apenas de evidências selecionadas, evitando armazenar artefatos temporários desnecessários.

---

## 12. Manutenibilidade

A arquitetura foi planejada para permitir expansão progressiva da suíte.

Novos cenários E2E podem reutilizar os Page Objects existentes ou adicionar novas abstrações no diretório `pages/`.

Novos testes de API podem ser adicionados em `tests/api/`, preservando a separação entre as diferentes camadas de teste.

Novas evidências relevantes podem ser adicionadas em `docs/evidence/`, acompanhadas de sua respectiva documentação.

Essa organização permite evoluir o projeto sem concentrar toda a lógica em arquivos únicos ou duplicar interações comuns.

---

## 13. Objetivo arquitetural

A arquitetura adotada busca demonstrar não apenas a criação de scripts automatizados, mas também práticas relacionadas ao desenvolvimento e à manutenção de uma suíte de testes.

Entre elas:

- organização do código;
- separação de responsabilidades;
- reutilização;
- testes E2E;
- testes de API;
- execução cross-browser;
- integração contínua;
- rastreabilidade por evidências;
- documentação técnica;
- geração de relatórios.

O objetivo é aproximar a estrutura do projeto de práticas utilizadas em projetos reais de Quality Assurance e Test Automation.

---

## 14. Autor

**Felipe de Oliveira**

QA | Test Automation | Playwright | Cypress | API Testing