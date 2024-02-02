import React from 'react'
import ItemList from './ItemList'

function ItemListConteiner({producto}) {
  return (
    <div className='flex flex-wrap justify-center'>
        <ItemList producto={producto}/>
    </div>
  )
}

export default ItemListConteiner