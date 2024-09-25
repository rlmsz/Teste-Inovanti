export function SearchBar(){
    return(
        <div className="flex justify-center py-8">
        <label className="block">
            <span className="block text-sm font-medium text-slate-700"> Procurar Pokémon</span>
            <input type="text" className="mt-3 px-2 py-2 bg-white border border-slate-500 placeholder-slate-400 placeholder:italic focus:outline-none focus:border-sky-200 focus:ring-sky-200 block w-full rounded-md focus:ring-1" placeholder="Pikachu"></input>
        </label>
        </div>
    )
}