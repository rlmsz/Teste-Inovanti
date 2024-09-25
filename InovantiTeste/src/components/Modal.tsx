import { useEffect, useState } from "react"

interface Sprites {
    front_default: string;
  }
  
  interface PokemonData {
    name: string;
    sprites: Sprites;
  }

function XMark() {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

    )
}
export function Modal({onClose, idPokemon}) {

    console.log(idPokemon)
    const [dataModal,setDataModal] = useState<PokemonData | null>(null)
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/'+idPokemon).then(response => response.json()).then(data => {console.log(data) ; setDataModal(data)})},[idPokemon])
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="border-2 border-stone-500 rounded-lg bg-white/50 backdrop-blur-md">
        <button className="h-8 w-8 absolute top-4 right-4 " onClick={onClose}><XMark/></button>
        <img
            src={dataModal?.sprites.front_default}
            style={{ width: 300, height: 300 }}
            className="object-cover border-2 border-stone-500 rounded-lg "
            alt={dataModal?.name}
          />
            </div>
        </div>
)
}