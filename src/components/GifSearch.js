import React, {useState} from 'react';

function GifSearch({onSearch}) {
const [gifSearch, setGifSearch] = useState("")

function handleSubmit(e) {
    e.preventDefault();
    onSearch(gifSearch)
}

  return <div>
      <form onSubmit={handleSubmit}>
          <input type="text" value={gifSearch} onChange={e => setGifSearch(e.target.value)}/>
          <button type="submit">Search</button>
      </form>
  </div>;
}

export default GifSearch;
