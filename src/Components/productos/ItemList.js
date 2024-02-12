
import Item from "@/Components/productos/Item.js"



const ItemList = ({items})=>{
    return(
      <>
        {items.map((item)=>{
          return(
            <Item
            name={item.name}
            price={item.price}
            category={item.category}
            />
          );
        })}  
      </>
    );
}

export default ItemList;