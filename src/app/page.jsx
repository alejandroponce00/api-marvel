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

    axios.get(`https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
      .then(res => {
        setPersonajes(res.data.data.results);  // Accediendo correctamente a los resultados
     console.log(res.data) })
      .catch(error => console.log(error));
  }, []);

  return (
    <div  >
      <h1 className="text-center text-4xl text-red-400">Marvel</h1>
      <div className='    columns-3'>
      {personajes.map(per => (
        <div className=" container m-6 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 " key={per.id}>
          <div className="rounded container" >
            <img 
              src={`${per.thumbnail.path}.${per.thumbnail.extension}`} 
              className="card-img-top" 
              alt={per.name} 
            />
            
              
          
          </div><div className='border-red-700'><p className=" text-red-700  content-end">Id:{per.id}</p>
          <p className=" text-slate-300  content-end">Titulo:{per.title}</p>
        </div></div>
      ))}
    </div></div>
  );
}

export default Home;
