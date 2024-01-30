import React from 'react'

function Item({ id, image, name, price, category }) {
  return (
    <>
    <p>Nombre: {name}</p>
    <p>Precio: ${price}</p>
    <p>Categoria: {category}</p>
    </>
  )
}

export default Item