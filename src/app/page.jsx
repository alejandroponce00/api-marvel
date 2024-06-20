"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import md5 from "md5";
import { orbitron } from "./ui/fonts";

function Home() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const ts = "1";
    const privateKey = "9918f218ea7375995809a8da4f285f9543203e4a";
    const publicKey = "68f80bf784fe016d66c599ac79bd30ff";
    const hash = md5(ts + privateKey + publicKey);

    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
      )
      .then((res) => {
        setPersonajes(res.data.data.results); // Accediendo correctamente a los resultados
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mx-auto">
      <h1 className={`${orbitron.className}antialiased text-slate-300 text-7xl text-center`}>Marvel Api</h1>
      <div className=" container   columns-3 p-4">
        {personajes.map((per) => (
          <div
            className=" container m-6  max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
            key={per.id}
          >
              <p className=" text-slate-300  text-center">
                <strong>Titulo </strong>:<br /> {per.title}
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

export default Home;
