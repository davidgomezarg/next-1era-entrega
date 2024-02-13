import ItemListConteiner from '@/Components/productos/ItemListConteiner';
import CategorySelector from '@/Components/productos/CategorySelector';

const Productos = ({params}) => {

  const category = params.categoria;
  
  return (
    <>
    <section className='flex justify-center'>
      <CategorySelector/>
    </section>
    
    <section className='flex flex-wrap justify-center'>
      <ItemListConteiner category={category}></ItemListConteiner>
    </section>
    </>
  )
}

export default Productos