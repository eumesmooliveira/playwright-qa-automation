# Estratégia de Testes

## 1. Objetivo

Este documento descreve a estratégia de testes adotada no projeto **Playwright QA Automation**, desenvolvido com Playwright e JavaScript.

O objetivo da suíte é demonstrar a aplicação prática de automação de testes em diferentes camadas, contemplando testes End-to-End (E2E) de interface e testes de API REST, além de práticas relacionadas à organização, execução cross-browser, integração contínua e geração de evidências.

---

## 2. Escopo dos testes

A estratégia foi dividida em duas frentes principais:

- Testes E2E de interface utilizando a aplicação SauceDemo.
- Testes de API REST utilizando a API pública JSONPlaceholder.

A suíte busca validar fluxos funcionais relevantes e demonstrar diferentes técnicas de automação utilizando o Playwright Test.

---

## 3. Estratégia de testes E2E

Os testes E2E simulam interações realizadas por um usuário na aplicação SauceDemo.

Os principais fluxos cobertos incluem:

- Login com credenciais válidas.
- Validação de tentativa de login inválida.
- Acesso e validação da página de inventário.
- Adição de produtos ao carrinho.
- Validação dos produtos adicionados.
- Navegação pelo fluxo de checkout.
- Preenchimento das informações necessárias para a compra.
- Finalização da compra com sucesso.

O cenário de conclusão de compra representa o principal fluxo E2E da suíte, pois percorre diferentes páginas da aplicação até a confirmação final da operação.

---

## 4. Estratégia de testes de API

Os testes de API utilizam o recurso de requisições HTTP disponibilizado pelo próprio Playwright.

A API pública JSONPlaceholder é utilizada para exercitar diferentes operações REST.

A cobertura inclui:

- GET para consulta de recursos.
- POST para criação de recursos.
- PUT para atualização completa.
- PATCH para atualização parcial.
- DELETE para remoção de recursos.
- Validação de status HTTP.
- Validação da estrutura das respostas.
- Validação de propriedades e dados retornados em JSON.

Como o JSONPlaceholder é uma API de simulação, operações de escrita são utilizadas para validar requisições e respostas sem persistência real dos dados.

---

## 5. Execução cross-browser

Os testes E2E são executados nos seguintes navegadores:

- Chromium
- Firefox
- WebKit

A execução cross-browser tem como objetivo verificar o comportamento dos cenários automatizados em diferentes engines de navegador.

Os testes de API são mantidos em um projeto separado na configuração do Playwright, pois não dependem da interface ou de um navegador específico.

---

## 6. Organização da automação

O projeto utiliza o padrão **Page Object Model (POM)** para separar responsabilidades entre os cenários de teste e as interações com as páginas.

Os Page Objects estão organizados no diretório:

```text
pages/