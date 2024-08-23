import React from 'react'
import PostPage from '../Api/page'



async function loadPosts(id){
    const res = await fetch(`https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}${id}`)
    const data = await res.json()
    return data    
}



async function Page({params }) {
   const post = await loadPosts(params.id)
  return (
    <div className='text-white text-center'>
        <h1>{per.id}<br />{per.title}</h1>
        <div className="rounded container">
              <img
                src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                className="card-img-top"
                alt={per.name}
              />
            </div>
        <hr />
        <h3>Otras Publicaciones</h3>
        <PostPage />
        </div>
  )
}

export default Page