### ES6+

* Babel  -> Compilador para a nova gera��o do javascript.
* Webpack
* Classes
* Arrow Functions -> Fun��es an�nimas dentro do c�digo.
* Desestrutura��o
* Rest/spread
* Import/export
* Async/await


#### YARN
- yarn init
> Armazenamento das informa��es de dep�ndencia de minha aplica��o
- yarn add @babel/cli
> Linking da dep�ndencia babel. Possibilita trabalhar com a interface da linha de comando babel
- yarn add @babel/preset-env
> preset-env -> Converte para o que o navegador n�o entende ainda
- yarn add @babel/core
- yarn add @babel/plugin-proposal-object-rest-spread
> Para utiliza��o de operadores rest/spread
> yarn add babel-loader -D
- yarn add webpack-dev-server -D
- yarn add webpack webpack-cli -D
- yarn add @babel/polyfill -D
- yarn add @babel/plugin-transform-async-to-generator -D
> Async - await
- yarn add axios


#### BABEL
- .babelrc
> Cria��o de arquivo para configura��o do babel


** A cria��o de scripts dentro do package.json permitem a execu��o de funcionalidade atrav�s do terminal **

#### WEBPACK

> Espécie de serviço que nos disponibiliza uma forma de se utilizar várias formas de arquivos (JS, JSON, ...) em nossa aplicação (tudo será arquivado em um único arquivo bundle.js).
- yarn add webpack webpack-cli