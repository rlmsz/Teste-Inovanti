import { useEffect, useState } from 'react'
import './App.css'
import {Header} from './components/Header'
import { ListaPoke } from './components/ListaPoke'
import {SearchBar} from './components/SearchBar'
<link href="./index.css" rel='stylesheet'></link>





function App() {
  const [data,setData] = useState([])
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=10100').then(response => response.json()).then(data => {console.log(data.results) ; setData(data.results)})
},[])
  const [pesquisa,setPesquisa] = useState<string>("")
  return (
    <>
    <Header/>
    <SearchBar  setPesquisa={setPesquisa}/>
    <ListaPoke data={data} pesquisa={pesquisa}/>
    </>
  )
}

export default App
