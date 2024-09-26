
<img src="https://github.com/user-attachments/assets/b6bf5b23-6780-4676-9ea4-2e65519303cd" width="500"> <img src="https://github.com/user-attachments/assets/8f5259e6-1857-4cf2-9046-2839f3093640" width="500"> <img src="https://github.com/user-attachments/assets/14ae9d24-a64d-41d3-8fe6-244dfd0b1146" width="500"> <img src="https://github.com/user-attachments/assets/5ca2e5b8-93fb-4002-9467-2c070ce766fe" width="500">


# PokeSearch
Aplicação Web em ReactJs,Typescript, Vite e Tailwind, utilizando a PokeAPI, a aplicação consiste de uma lista de pokemons, que exibe todos os pokemons existentes, ordenados pela ordem da pokedex, a lista é dividida em paginas, com cada pagina contendo 40 pokemons, ao clicar num pokemon, é possivel ver seu sprite em um modal, além disso, também é possivel procurar pokémons utilizando a barra de pequisa no centro da tela. Utilizei a Poke Api para pegar uma lista com todos os pokemons existentes, ao abrir o modal de um pokemon, é feita outra requisição a API para pegar a imagem do sprite que será exibida para o usuario. A renderização da lista é feita de forma dinamica, sendo carregadas somente as imagens dos 40 pokemons na tela no momento. A api é requisitada utilizando o useEffect(), e o dados são exibidos utilizando o useState(). 
# Componentes
A aplicação é dividida em 5 Componentes: App, a pagina principal que junta todos os outros componentes, Header, o header do site, SearchBar, a barra de pesquisa, ListaPoke, o Componente com a lista dos pokémons e o Modal, que é o componente que é aberto ao apertar em algum Pokémon
# Api
A api utilizada foi a PokeApi, que tem dados da serie de jogos Pokémon, eu utilizei dois endpoints diferentes: Pokemon-species, para recuperar a lista com todos os pokemons, e Pokemon, para recuperar o link dos sprites que são exibidos dentro do modal, as imagens exibidas na lista foram obtidas atraves do id de cada pokemon, junto com uma base de dados de imagens da API, onde o link das fotos é o mesmo, só mudando os ultimos numeros, assim esses numeros são substituidos dinamicamente. 
# Tailwind
Utilizei o tailwind para realizar o styling dos componentes.
# Testes
Elaborei varios testes unitarios para os componentes individuais, todos os componentes foram testados e tiveram sua estabilidade confirmada, é possivel ver os teste no repositorio do github, os arquivos test.tsx contem as instruções dos testes, para a realização dos testes utilizei as bibliotecas react testing library, jest, e jest-dom.
# Rodar Localmente
Para rodar o projeto localmente é necessario baixar ou clonar o repositorio do github, já ter ou baixar e installar o Node.Js, installar o npm, abrir um terminal, ir até o diretorio em que o projeto está, digitar o comando npm install no terminal, e logo após ser concluido, é possivel digitar o comando npm run dev, a pagina será hospedada localmente e será possivel acessar pelo navegador, com o link que é exibido no terminal.
# Realizar Testes
Para realizar os testes é preciso baixar ou clonar o repositorio, utilizar o comando npm install na pasta em que o arquivo package.json se encontra, e apos a instalação dos arquivos, é preciso utilizar o comando npm test, apos a utilização dos comandos os testes automaticos serao feitos e os resultados serão exibidos no terminal.
# Realizar Build
Para realizar a build desse projeto, é preciso ja ter o projeto instalado com npm install, e utilizar o comando npm run build, após utilizar o comando, a aplicação final estará disponivel na pasta dist, no mesmo diretorio do projeto.
