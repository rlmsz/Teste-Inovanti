import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ListaPoke } from "./components/ListaPoke";
import { SearchBar } from "./components/SearchBar";
<link href="./index.css" rel="stylesheet"></link>;

const App = () => {
  const [data, setData] = useState([]);
  const [pesquisa, setPesquisa] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon-species?limit=10100"
        );

        if (response.ok) {
          const data = await response.json();
          setData(data.results);
        } else {
          throw new Error(response.status.toString());
        }
      } catch {
        console.log(Error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header/>
      <SearchBar setPesquisa={setPesquisa} />
      <ListaPoke data={data} pesquisa={pesquisa} />
    </>
  );
}

export default App;
