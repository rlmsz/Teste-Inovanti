import { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
  originalIndex: number;
}

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

export function SetaDireita() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

export function ListaPoke({ data, pesquisa }:{data:never[],pesquisa:string}) {
  const [pagina, setPagina] = useState(0);
  const filtroPesquisa = (pokemon: Pokemon) => pokemon.name.includes(pesquisa);
  
  
  useEffect(() =>{
    setPagina(0)},[pesquisa])



  const listaPoke = data
    .map((pokemon: Pokemon, originalIndex: number) => ({
      ...pokemon,
      originalIndex,
    }))
    .filter(filtroPesquisa)
    .slice(pagina * 40, (pagina + 1) * 40)
    .map((pokemon: Pokemon) => (
      <li key={pokemon.name}>
        <button className="flex flex-col items-center ">
          <p className="pb-4  text-xl font-semibold">{pokemon.name}</p>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/official-artwork/${
              pokemon.originalIndex + 1
            }.png`}
            style={{ width: 300, height: 300 }}
            className="object-scale-down border-2 border-stone-500 rounded-lg"
            alt={pokemon.name}
          />
        </button>
      </li>
    ));

  return (
    <div className="flex flex-col py-10 gap-5">
      <div className="flex justify-around gap-10">
        <button
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded disabled:bg-gray-200"
          disabled={pagina == 0}
          onClick={() => setPagina(pagina - 1)}
        >
          <SetaEsquerda />
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded disabled:bg-gray-200"
          disabled={data.filter(filtroPesquisa).length <= 40}
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
