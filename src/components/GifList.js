import React from 'react';

function GifList({gifURL}) {
  return <li>
      <img src={gifURL}></img>
  </li>;
}

export default GifList;
