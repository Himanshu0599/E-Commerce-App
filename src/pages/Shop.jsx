import Banner from '../components/Home/Banner'
import NewArrival from '../components/Home/NewArrival'
import BigSavings from '../components/Home/BigSavings'
import MenCategory from '../components/Home/MenCategory'
import WomenCategory from '../components/Home/WomenCategory'
import Brand from '../components/Home/Brand'
const Shop=()=> {
  return (
    <>
    <main className="w-full h-full">
    <Banner />
    {/* <Hero /> */}
    <NewArrival/>
    <BigSavings/>
    <MenCategory/>
    <WomenCategory/>
    <Brand/>
  </main>
  </>
  )
}

export default Shop