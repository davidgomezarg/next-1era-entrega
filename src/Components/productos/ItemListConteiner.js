import React from 'react'
import ItemList from './ItemList.js'

async function ItemListConteiner({category}) {

  const items = await fetch(`http://localhost:3000/api/productos/${category}`,{
    cache: 'no-store'})
  .then(res => res.json())
  .then((r)=>{
    //console.log(r);
    return r
  })

  return (
    <div className='flex flex-wrap justify-center'>
        <ItemList items={items}/>
    </div>
  )
}

export default ItemListConteiner