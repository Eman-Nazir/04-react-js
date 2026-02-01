import React from 'react'

const PostList = ({data}) => {
  return (
    <ul className='m-3'>
         {data.map(post => (
            <li key={post.id}>
                {post.title}

            </li>
         ))}
    </ul>
  )
}

export default PostList
