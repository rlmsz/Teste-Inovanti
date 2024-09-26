/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@jest/globals";
import { SearchBar } from "./SearchBar";

describe("Testar SearchBar", () => {
  test("Verifica se o input está na pagina", () => {
    const setPesquisa = jest.fn();
    render(<SearchBar setPesquisa={setPesquisa} />);

    // Verificar se o input está na pagina
    const inputElement = screen.getByPlaceholderText("Pikachu");
    expect(inputElement).toBeInTheDocument();
  });

  test("Verificar se o estado está sendo alterado quando o usuario digita", () => {
    const setPesquisa = jest.fn(); // Create a mock function
    render(<SearchBar setPesquisa={setPesquisa} />);

    const inputElement = screen.getByPlaceholderText("Pikachu");

    // Simula usuario
    fireEvent.change(inputElement, { target: { value: "Charmander" } });

    // Verifica se o estado foi alterado corretamente
    expect(setPesquisa).toHaveBeenCalledWith("charmander"); // string tem que estar em minusculo
  });
});
