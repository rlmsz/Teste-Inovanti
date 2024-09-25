import PokeLogo from "../assets/Poké_Ball_icon.svg"
import './Header.css'

export function Header(){
    return(
        <div className="py-5 pb-5 shadow-md bg-neutral-300">
          <div className='flex flex-row gap-2 justify-center items-center '>
            <img src={PokeLogo} className='size-16'/>
            <p className="min-h text-2xl">PokeSearch</p>
            </div>
      </div>
  
    )
}