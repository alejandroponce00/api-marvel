"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

function Home() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const ts = '1';
    const privateKey = '9918f218ea7375995809a8da4f285f9543203e4a';
    const publicKey = '68f80bf784fe016d66c599ac79bd30ff';
    const hash = md5(ts + privateKey + publicKey);

    axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
      .then(res => {
        setPersonajes(res.data.data.results);  // Accediendo correctamente a los resultados
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="text-center text-4xl text-red-400">
      <h1>Marvel</h1>
      {personajes.map(per => (
        <div className="columns-3" key={per.id}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg" style={{ width: "18rem", height: "18rem" }}>
            <img 
              src={`${per.thumbnail.path}.${per.thumbnail.extension}`} 
              className="card-img-top" 
              alt={per.name} 
            />
            <div className="card-body">
              <p className="card-text">{per.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;