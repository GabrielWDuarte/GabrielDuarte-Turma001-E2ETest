
# 🎯 SauceDemo Playwright E2E Automation

Automação de testes end-to-end utilizando **Playwright**, com suporte a **Inteligência Artificial via ZeroStep**, **CI/CD no GitHub Actions** e **Análise de Qualidade com SonarCloud**.

---

## 🛠️ Tecnologias Utilizadas

- ✅ **Playwright** — Testes E2E
- ✅ **TypeScript**
- ✅ **ZeroStep AI** — Para comandos inteligentes via IA
- ✅ **GitHub Actions** — Pipeline de Integração Contínua
- ✅ **SonarCloud** — Análise de qualidade do código
- ✅ **Node.js**

---

## 📂 Estrutura do Projeto

```
📁 .github/workflows       → Pipelines CI/CD
📁 src
 ┣ 📁 scenarios            → Scripts de testes
 ┣ 📁 pages                → Page Objects
 ┣ 📁 elements             → Mapeamento de elementos
 ┗ 📁 fixtures             → Dados de massa (ex.: users.json)
📁 test-results             → Relatórios de execução
📁 playwright-report        → Relatórios HTML dos testes
📄 zerostep.config.json     → Token de acesso da IA
📄 sonar-project.properties → Configuração do SonarCloud
📄 package.json             → Dependências
```

---

## 🚀 Como Executar Localmente

### 1️⃣ Instale as dependências
```bash
npm install
```

### 2️⃣ Instale os navegadores do Playwright
```bash
npx playwright install --with-deps
```

### 3️⃣ Configure seu Token do ZeroStep
Crie o arquivo `zerostep.config.json` na raiz do projeto:

```json
{
  "TOKEN": "seu_token_da_zerostep_aqui"
}
```

### 4️⃣ Execute os testes
```bash
npx playwright test
```

### 5️⃣ Gere e visualize o relatório
```bash
npx playwright show-report
```

---

## 🔥 Como Rodar no GitHub Actions

O pipeline executa:
- 🛠️ Instalação de dependências
- 🚀 Instalação dos navegadores
- ✅ Execução dos testes Playwright
- 📄 Upload do relatório
- 🔍 Análise de qualidade com SonarCloud

---

## ✅ Critérios Avaliados

- ✔️ Casos de testes rodando corretamente
- ✔️ Pipeline CI com GitHub Actions + SonarCloud
- ✔️ Testes usando ZeroStep AI
- ✔️ Implementação correta do Playwright com boas práticas

---

## 🔗 Links Importantes

- 🔸 [Playwright Docs](https://playwright.dev)
- 🔸 [ZeroStep](https://app.zerostep.com)
- 🔸 [SonarCloud](https://sonarcloud.io)
- 🔸 [GitHub Actions Docs](https://docs.github.com/actions)

---

## 👨‍💻 Autor

**Gabriel Duarte**

---
