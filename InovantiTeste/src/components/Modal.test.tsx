/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@jest/globals";
import { Modal } from "./Modal";

describe("Testar Modal", () => {
  const onClose = jest.fn();

  test("Verificar se o modal está sendo exibido corretamente", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            name: "pikachu",
            sprites: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
            },
          }),
      })
    ) as jest.Mock;

    render(<Modal onClose={onClose} idPokemon={25} />);

    // Verificar imagem
    const imagem = await waitFor(() =>
      screen.getByRole("img", { name: "pikachu" })
    );
    expect(imagem).toHaveAttribute(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    );

    // Verificar Nome
    const name = screen.getByText(/pikachu/i);
    expect(name).toBeInTheDocument();
  });

  test("Verificar se o Modal esta sendo fechado", () => {
    render(<Modal onClose={onClose} idPokemon={25} />);

    const closeButton = screen.getByLabelText("onClose");
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("Verificar mensagem de erro do fetch", async () => {
    // Falhar Fetch
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ) as jest.Mock;
    console.log = jest.fn();
    render(<Modal onClose={onClose} idPokemon={9999} />);
    // Verificar se
    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith(Error);
    });
  });
});
