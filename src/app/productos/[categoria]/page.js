import React from 'react'
import products from "@/files/products.js"
import ItemListConteiner from '@/Components/ItemListConteiner';

const Productos = ({params}) => {

  const category = params.categoria;
  console.log(category)
  let result =[];

  if(category === "all")
  {result= products}
  else
  {
    result = products.filter((product) => product.categoria === params.categoria);
    console.log(result);
}


  return (
    <>
    <div>Productos de categoría: {category}</div>
    <ItemListConteiner producto={result}></ItemListConteiner>
    </>
  )
}

export default Productos