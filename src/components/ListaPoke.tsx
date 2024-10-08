import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "./Modal";
interface Pokemon {
  name: string;
  url: string;
  originalIndex: number;
}
// Icone Seta Esquerda
export function SetaEsquerda() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );
}
// Icone Seta Direita
export function SetaDireita() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}
// Componente da Lista de Pokemons recebe data e a pesquisa
export function ListaPoke({
  data,
  pesquisa,
}: {
  data: Pokemon[];
  pesquisa: string;
}) {
  // Definição de Estados
  const [pagina, setPagina] = useState(0);
  const filtroPesquisa = (pokemon: Pokemon) => pokemon.name.includes(pesquisa);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [idPokemon, setIdPokemon] = useState<number>(0);
  //Toda vez que a pesquisa muda, as paginas são resetadas
  useEffect(() => {
    setPagina(0);
  }, [pesquisa]);
  //Ao abrir o modal é setado o Id do pokemon, para poder realizar outro fetch
  const abrirModal = (index: number) => {
    setIdPokemon(index + 1);
    setShowModal(true);
  };
  // A lista, primeiro adiciona o valor da Index original, para ter como identificar cada pokemons apos alterar a array
  const listaPoke = data
    .map((pokemon: Pokemon, originalIndex: number) => ({
      ...pokemon,
      originalIndex,
    }))
    .filter(filtroPesquisa)//Depois é realizado o filtro de pesquisa
    .slice(pagina * 40, (pagina + 1) * 40)//Depois é realizado a divisão da lista com base na pagina atual, de forma que somente 40 pokemons são exibidos em cada momento.
    .map((pokemon: Pokemon) => (
      <li key={pokemon.name}>
        <button
          onClick={() => abrirModal(pokemon.originalIndex)}
          className="flex flex-col items-center "
        >
          <p className="pb-4  text-xl font-semibold">{pokemon.name}</p>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              pokemon.originalIndex + 1
            }.png`}
            style={{ width: 300, height: 300 }}
            className="object-scale-down border-2 border-stone-500 rounded-lg hover:bg-gray-500 hover:border-green-700"
            alt={pokemon.name}
          />
        </button>
      </li>
    ));

  return (
    <div className="flex flex-col py-10 gap-5">
      {showModal &&
        createPortal(
          <Modal idPokemon={idPokemon} onClose={() => setShowModal(false)} />,
          document.body
        )}
      <div className="flex justify-around gap-10">
        <button
          aria-label="SetaEsquerda"
          role="button"
          type="button"
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded disabled:bg-gray-200"
          disabled={pagina == 0}
          onClick={() => setPagina(pagina - 1)}
        >
          <SetaEsquerda />
        </button>
        <button
          aria-label="SetaDireita"
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded disabled:bg-gray-200"
          disabled={
            data.filter(filtroPesquisa).length <= 40 ||
            data.filter(filtroPesquisa).length / 40 <= pagina + 1
          }
          onClick={() => setPagina(pagina + 1)}
        >
          <SetaDireita />
        </button>
      </div>
      <ul className="flex flex-row justify-center flex-wrap gap-10 ">
        {listaPoke}
      </ul>
    </div>
  );
}
