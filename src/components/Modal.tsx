import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Sprites {
  front_default: string;
}

interface PokemonData {
  name: string;
  sprites: Sprites;
}

function XMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}
export function Modal({
  onClose,
  idPokemon,
}: {
  onClose: Dispatch<SetStateAction<boolean>>;
  idPokemon: number;
}) {
  //
  const [dataModal, setDataModal] = useState<PokemonData | null>(null);
  //Função para lidar com o fechamento do modal
  function handleClose() {
    onClose(false);
  }//Fetch em outro endpoint da api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
        );
        
        if (response.ok) {
          const data = await response.json();
          setDataModal(data);
        } else {
          throw new Error(response.status.toString());
        }
      } catch {
        console.log(Error);
      }
    };

    fetchData();
  }, [idPokemon]);

  return (
    <div
      aria-label="Modal"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="border-2 border-stone-500 rounded-lg bg-white/50 backdrop-blur-md">
        <button
          aria-label="onClose"
          className="h-8 w-8 absolute top-4 right-4 "
          onClick={handleClose}
        >
          <XMark />
        </button>
        <img
          src={dataModal?.sprites.front_default}
          style={{ width: 300, height: 300 }}
          className="object-cover"
          alt={dataModal?.name}
        />
        <p className="font-bold py-4 text-center">{dataModal?.name}</p>
      </div>
    </div>
  );
}
