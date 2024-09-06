Para rodar o projeto é preciso ter instalado em sua máquina o Node.js, Cypress, algum editor de texto (no meu caso utilizei o Visual Studio Code) e dentro do editor de texto instalar o faker-br.

1. Instalar Node.js <br>
Link para download: https://nodejs.org/en/download/prebuilt-installer

2. Instalar Visual Studio Code <br>
Link para download: https://code.visualstudio.com/Download

3. Iniciar projeto e instalar Cypress <br>
Crie uma pasta no seu explorador de arquivos ou pelo terminal com o nome que desejar e abra ela no VSCode.
Abra o terminal do VSCode e rode os seguintes comandos:
  npm init --yes //Iniciar aplicação
  npm install -D cypress //Instalar cypress
  npm install faker-br //Intalar biblioteca faker-br

4. Rodar projeto <br>
Antes de rodar o projeto, é preciso ir ao diretório Cypress > support > command.js e atualizar a chave cookie para conseguir passar pela validação captcha.
Essa chave é encontrada no próprio site https://demo.nopcommerce.com/ no inspecionar, na área Application, no arquivo cookies com nome cf_clearance.
Depois disso rode o comando "npx Cypress open", sem as aspas, no terminal do VSCode, escolha a opção E2E Testing, o navegador de preferência e clique no botão "Start E2E Testing in []".
