'use client'
import React from 'react';
import Link from 'next/link';


//React client component
function PostCard( { post}) {
  return (<div className="border p-3">
   <Link href={`/posts/${post.id}`}> <br />
   <h3 className='text-white'>{post.id}.{post.title}</h3></Link>
<p className='text-warning'>{post.url}</p>


</div>
  )
}

export default PostCard