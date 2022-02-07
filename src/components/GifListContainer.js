import React, {useState, useEffect} from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
    const [gifs, setGifs]= useState([])
    const [search, setSearch] = useState("dolphins")

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=qjwIHqJhFTNhgNsPlgBkvm8wREHeSSix&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(data => setGifs(data.data))
    }, [search])

    function handleSearch (gifSearch) {
        setSearch(gifSearch)
    }

  return <div>
        <GifSearch onSearch={handleSearch}/>
        <ul>
      {gifs.map(gif => {
          return <GifList key={gif.id} gifURL={gif.images.original.url}/>
      })}
  </ul>

  </div>

}

export default GifListContainer;
