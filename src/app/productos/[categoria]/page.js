import React from 'react'
import products from "@/files/products.js"
import ItemList from "@/Components/ItemList.js"

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
    <ItemList producto={result}></ItemList>
    </>
  )
}

export default Productos