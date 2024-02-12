import ItemListConteiner from '@/Components/productos/ItemListConteiner';
import CategorySelector from '@/Components/productos/CategorySelector';

const Productos = ({params}) => {

  const category = params.categoria;
  
  return (
    <>
    <CategorySelector/>
    <ItemListConteiner category={category}></ItemListConteiner>
    </>
  )
}

export default Productos