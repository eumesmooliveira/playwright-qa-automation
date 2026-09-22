# Evidências de Execução

Este diretório contém evidências selecionadas das execuções automatizadas do projeto **Playwright QA Automation**.

O objetivo é disponibilizar exemplos visuais da suíte funcionando sem exigir que o avaliador execute o projeto localmente.

---

## CT06 - Fluxo completo de compra

**Arquivo:** `ct06-checkout-success.webm`

**Tipo:** Teste End-to-End (E2E)

**Navegador:** Chromium

**Resultado:** Aprovado

### Cenário

O vídeo demonstra a execução automatizada do cenário:

> CT06 - Deve concluir uma compra com sucesso

O fluxo contempla:

1. Acesso à aplicação SauceDemo.
2. Autenticação com usuário válido.
3. Navegação pelo inventário.
4. Adição de produto ao carrinho.
5. Acesso ao carrinho.
6. Início do checkout.
7. Preenchimento das informações solicitadas.
8. Continuação do checkout.
9. Finalização da compra.
10. Validação da conclusão da operação.

---

## Geração da evidência

A evidência foi gerada utilizando o recurso nativo de gravação de vídeo do Playwright.

A configuração principal do projeto mantém vídeos apenas em situações de falha, evitando o armazenamento desnecessário de artefatos em todas as execuções.

Para fins de documentação e portfólio, uma execução controlada do CT06 foi realizada com gravação habilitada e o resultado validado antes de ser incluído neste diretório.

---

## Artefatos automáticos

Durante as execuções normais, o Playwright também pode gerar artefatos como:

- Relatório HTML.
- Screenshots de falhas.
- Vídeos de falhas.
- Traces utilizados para diagnóstico.

Os diretórios temporários gerados pelo Playwright não são versionados no repositório. Apenas evidências selecionadas para documentação são mantidas neste diretório.