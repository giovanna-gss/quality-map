Para rodar o projeto é preciso ter instalado em sua máquina o Node.js, Cypress, algum editor de texto (no meu caso utilizei o Visual Studio Code) e dentro do editor de texto instalar o faker-br.

1. Instalar Node.js
Link para download: https://nodejs.org/en/download/prebuilt-installer

2. Instalar Visual Studio Code
Link para download: https://code.visualstudio.com/Download

3. Iniciar projeto
Crie uma pasta no seu explorador de arquivos ou pelo terminal com o nome que desejar e abra ela no VSCode.
Abra o terminal do VSCode e rode os seguintes comandos:
  npm init --yes //Iniciar aplicação
  npm install -D cypress //Instalar cypress
  npm install faker-br //Intalar biblioteca faker-br

Para abrir o cypress, no terminal do VS rode o comando abaixo:
  npx cypress open
  Escolha a opção E2E Testing, o navegador e clique no botão "Start E2E Testing in Chrome".
