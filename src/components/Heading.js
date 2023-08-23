import React from 'react'

function Heading(props) {
  return (
    <h1 className='font-serif text-cyan-400 underline font-extrabold text-center text-4xl'>{props.title}</h1>
  )
}

export default Heading