"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import md5 from "md5";


function Personajes() {
  const [personajes, setPersonajes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPersonajes, setFilteredPersonajes] = useState([]);

  useEffect(() => {
    const ts = "1";
    const privateKey = "9918f218ea7375995809a8da4f285f9543203e4a";
    const publicKey = "68f80bf784fe016d66c599ac79bd30ff";
    const hash = md5(ts + privateKey + publicKey);

    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
      )
      .then((res) => {
        setPersonajes(res.data.data.results);
        setFilteredPersonajes(res.data.data.results); // Inicializar el filtrado con todos los resultados
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setFilteredPersonajes(
      personajes.filter((per) =>
        per.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, personajes]);

  return (
    <div className="mx-auto">
        <h2 className="text-red-600 text-center text-4xl my-6">Personajes</h2>
      
      
      <div className="text-center my-4">
        <input
          type="text"
          placeholder="Buscar por título"
          className="px-4 py-2 rounded-lg border border-gray-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="container columns-3 p-4">
        {filteredPersonajes.map((per) => (
          <div
            className="container m-6 max-w-sm p-3 bg-red-500 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            key={per.id}
          >
            <p className="text-slate-300 text-center">
              <strong>Nombre</strong>:<br /> {per.name}
            </p>
            <p className="text-black text-center">
              <strong>Descripcion</strong>:<br /> {per.description}
            </p>
            <div className="rounded container">
              <img
                src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                className="card-img-top"
                alt={per.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personajes;
