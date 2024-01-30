
import Item from "@/Components/Item.js"



const ItemList = ({producto})=>{
    return(
      <>
        {producto.map((p)=>{
          return(
            <Item
            name={p.nombre}
            price={p.precio}
            category={p.categoria}
            />
          );
        })}  
      </>
    );
}

export default ItemList;