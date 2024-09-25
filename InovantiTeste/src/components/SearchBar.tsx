


export function SearchBar({setPesquisa}:{setPesquisa:React.Dispatch<React.SetStateAction<string>>}){
        function handleChange(event: { target: { value: string } }){
            console.log(event.target.value)
            setPesquisa((event.target.value).toLowerCase())
        }

    return(
    <div className="max-w-sm mx-auto pt-10 flex flex-col items-center gap-3">
    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"></label>
    <span className="flex">Procurar Pokémon</span>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" onChange={handleChange} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 " placeholder="Pikachu" required />      
    </div>
    </div>
    )
}