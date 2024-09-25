import './App.css'
import {Header} from './components/Header'
import { ListaPoke } from './components/ListaPoke'
import {SearchBar} from './components/SearchBar'
<link href="./index.css" rel='stylesheet'></link>
function App() {
  return (
    <>
    <Header/>
    <SearchBar/>
    <ListaPoke/>
    </>
  )
}

export default App
