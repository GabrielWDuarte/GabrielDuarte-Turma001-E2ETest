# API Integration Tests - Reqres API

Este projeto realiza testes de integração automatizados para a API Reqres, focando nos principais endpoints da API, como GET, POST, PUT e DELETE. Utiliza as ferramentas **PactumJS**, **ESLint**, **GitHub Actions** e **SonarCloud** para garantir qualidade, padronização e cobertura dos testes.

## Tecnologias Utilizadas
 
- **PactumJS** - Framework para testes de API
- **ESLint** - Linter para JavaScript
- **SonarCloud** - Análise de qualidade de código
- **GitHub Actions** - Integração contínua para execução de testes e pipeline automatizado

## Endpoints Testados

Os principais endpoints testados deste projeto são:

- `GET /api/users?page={page_number}` - Obtém uma lista de usuários de acordo com o número da página.
- `POST /api/users` - Cria um novo usuário com o nome e trabalho fornecidos.
- `GET /api/users/{id}` - Obtém detalhes de um usuário específico.
- `PUT /api/users/{id}` - Atualiza o nome e o trabalho de um usuário específico.
- `DELETE /api/users/{id}` - Deleta um usuário específico.

A documentação completa da API pode ser encontrada [aqui](https://reqres.in/).

## Pré-requisitos

- **Node.js** `v21` ou superior
- **npm** - Gerenciador de pacotes

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/GabrielDuarte-Turma001-ApiTest.git
cd GabrielDuarte-Turma001-ApiTest
npm install


## Como executar os testes

Execute os testes com o comando:

```bash
npm test
```
Ou, para rodar o pipeline completo (incluindo lint e prettier):
```bash
npm run ci
```
Após a execução, os relatórios de testes podem ser encontrados na pasta ./output.

## Padronização de Código

Para formatar o código:
```bash
npm run format
```
Para checar problemas de lint:
```bash
npm run lint
```

## Análise de Qualidade

A análise de qualidade do código é feita via SonarQube. Consulte o pipeline CI para detalhes.


## Referências

- [Reqres API Documentation](#)
- [PactumJS Docs](#)
- [Jest Docs](#)
- [SonarCloud Docs](#)
- [GitHub Actions Docs](#)
