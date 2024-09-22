import CategoryCard from "../Card/CatergoryCard"
import { products } from "../Data/data"
import TitleCard from "../Card/TitleCard"
const WomenCategory=()=>{
    const category="women"
    const menCategory=products.filter((item)=>item.category===category)
    const uniqueItem=new Set()
    const uniqueMenItems=menCategory.filter((data)=>{
        if(uniqueItem.has(data.tag)){
            return false
        }
        uniqueItem.add(data.tag)
        return true
    })

  return(
    <section className="w-full h-full flex flex-col items-start px--5 xl:px-10 py-10 gap-10">
      <TitleCard title="Category for Women"/>
      <section className="w-full h-full flex flex-row gap-10 overflow-x-scroll">
       {uniqueMenItems.map((item)=>(
         <main key={item.id}>
          <CategoryCard img={item.img} title={item.tag} cateogry={category}/>
         </main>
       ))}
      </section>
    </section>
  )
}
export default WomenCategory