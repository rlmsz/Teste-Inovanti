# PokeSearch
Aplicação Web em ReactJs, Typescript e Tailwind, utilizando a PokeAPI, a aplicação consiste de uma lista de pokemons, que exibe todos os pokemons existentes, ordenados pela ordem da pokedex, a lista é dividida em paginas, com cada pagina contendo 40 pokemons, ao clicar num pokemon, é possivel ver seu sprite em um modal, além disso, também é possivel procurar pokémons utilizando a barra de pequisa no centro da tela. Utilizei a Poke Api para pegar uma lista com todos os pokemons existentes, ao abrir o modal de um pokemon, é feita outra requisição a API para pegar a imagem do sprite que será exibida para o usuario. A renderização da lista é feita de forma dinamica, sendo carregadas somente as imagens dos 40 pokemons na tela no momento. A api é requisitada utilizando o useEffect(), e o dados são exibidos utilizando o useState(). 
# Componentes
A aplicação é dividida em 5 Componentes: App, a pagina principal que junta todos os outros componentes, Header, o header do site, SearchBar, a barra de pesquisa, ListaPoke, o Componente com a lista dos pokémons e o Modal, que é o componente que é aberto ao apertar em algum Pokémon
# Api
A api utilizada foi a PokeApi, que tem dados da serie de jogos Pokémon, eu utilizei dois endpoints diferentes: Pokemon-species, para recuperar a lista com todos os pokemons, e Pokemon, para recuperar o link dos sprites que são exibidos dentro do modal,as imagens exibidas na lista foram obtidas atraves do id de cada pokemon, junto com uma base de dados de imagens da API, onde o link das fotos é o mesmo, só mudando os ultimos numeros, assim esses numeros são substituidos dinamicamente. 
#
