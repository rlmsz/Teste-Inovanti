/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@jest/globals";
import { ListaPoke } from "./ListaPoke";

const dataPokemon = Array.from({ length: 100 }, (_, i) => ({
  name: `pokemon-${i + 1}`,
  url: `https://pokeapi.co/api/v2/pokemon/${i + 1}/`,
  originalIndex: i,
}));

describe("Testar ListaPoke", () => {
  test("Mostra o Nome e as imagens dos pokemons", () => {
    render(<ListaPoke data={dataPokemon} pesquisa="" />);

    //Verifica se os nomes estão sendo exibidos
    expect(screen.getByText("pokemon-1")).toBeInTheDocument();
    expect(screen.getByText("pokemon-40")).toBeInTheDocument();

    //Verifica se as imagens estão sendo exibidas
    const pokemonImg = screen.getByAltText("pokemon-1");
    expect(pokemonImg).toHaveAttribute(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    );
  });

  test("Testa se o botao direito avança a pagina", () => {
    render(<ListaPoke data={dataPokemon} pesquisa="" />);

    // Clicar na seta direita para ir pra proxima pagina
    const setaDireita = screen.getByLabelText("SetaDireita");
    fireEvent.click(setaDireita);

    // Verifica se os pokemons da segunda pagina estão sendo exibidos
    expect(screen.getByText("pokemon-41")).toBeInTheDocument();
    expect(screen.getByText("pokemon-80")).toBeInTheDocument();
  });

  test("Testa se o botao esquerdo volta a pagina", () => {
    render(<ListaPoke data={dataPokemon} pesquisa="" />);

    // Avança para pagina 2
    const rightArrow = screen.getByLabelText("SetaDireita");
    fireEvent.click(rightArrow);

    // Volta para pagina 1
    const leftArrow = screen.getByLabelText("SetaEsquerda");
    fireEvent.click(leftArrow);

    // Verifica se os pokemons da primeira pagina estão sendo exibidos
    expect(screen.getByText("pokemon-1")).toBeInTheDocument();
  });

  test("Verifica se o Modal é aberto quando o pokemon é clicado", () => {
    render(<ListaPoke data={dataPokemon} pesquisa="" />);

    // Clicar no pokemon abre o modal
    const pokemonButton = screen.getByText("pokemon-1");
    fireEvent.click(pokemonButton);

    // Verificar se o modal abre
    expect(screen.getByLabelText("Modal")).toBeInTheDocument();
  });

  test("Verifica se o botao direito está desativado na ultima pagina", () => {
    render(<ListaPoke data={dataPokemon} pesquisa="" />);

    // Vai até a ultima pagina
    const rightArrow = screen.getByLabelText("SetaDireita");
    for (let i = 0; i < 2; i++) {
      fireEvent.click(rightArrow);
    }

    // O botao direito deve estar desativado
    expect(rightArrow).toBeDisabled();
  });

  test("Verifica se o botao esquerdo está desativado na primeira pagina", () => {
    render(<ListaPoke data={dataPokemon} pesquisa="" />);

    const leftArrow = screen.getByLabelText("SetaEsquerda");

    // O botao esquerdo deve estar desativado
    expect(leftArrow).toBeDisabled();
  });
});
