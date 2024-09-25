import { useEffect, useState } from "react"




interface Pokemon{
    name:string;
    url:string;
}
export function ListaPoke(){
const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/').then(response => response.json()).then(data => setData(data.results))
    },[])

    
    const listaPoke = data.map(((pokemon:Pokemon,index:number) => (
        <li>
                <button className="flex flex-col items-center ">
                <p className="pb-4  text-xl font-semibold">{pokemon.name}</p>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/official-artwork/"+(index+1)+ ".png"} style={{width: 300, height: 300}} className="object-scale-down border-2 border-stone-500 rounded-lg" alt={pokemon.name}/>
                </button>
        </li>
    )))
    return(
        <div>
        <ul className="flex flex-row flex-wrap justify-center gap-10">{listaPoke}</ul>
        </div>
    )
}