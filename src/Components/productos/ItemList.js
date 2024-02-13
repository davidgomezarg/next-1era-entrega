
import Item from "@/Components/productos/Item.js"



const ItemList = ({items})=>{

    return(
      <>
        {items.map((item)=>{
          return(
            <Item
            key={item.id}
            name={item.name}
            price={item.price}
            category={item.category}
            id={item.id}
            image={item.image}
            />
          )
        })}  
      </>
    );
}

export default ItemList;