import CategoryCard from "../Card/CatergoryCard"
import { products } from "../Data/data"
import TitleCard from "../Card/TitleCard"
const MenCategory=()=>{
    const category="men"
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
      <TitleCard title="Category for Men"/>
      <section className="w-full h-full flex flex-row gap-10 overflow-x-scroll">
       {uniqueMenItems.map((item)=>(
         <main key={item.id}>
          <CategoryCard img={item.img} title={item.tag} category={category}/>
         </main>
       ))}
      </section>
    </section>
  )
}
export default MenCategory