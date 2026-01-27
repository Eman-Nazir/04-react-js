import React from 'react'

const Card = (props) => {
    console.log(props);
    
  return (
    <div>
        <a href={props.elem.url} target='_blank'>
    <div className='h-40 w-44  rounded-xl '> 
    <img className='w-full h-full outline-hidden object-cover' src={props.elem.download_url} alt="" />
  </div>
  <h5 className='text-white  text-xl mt-2'>{props.elem.author}</h5>
  </a>
    </div>
  )
}

export default Card
