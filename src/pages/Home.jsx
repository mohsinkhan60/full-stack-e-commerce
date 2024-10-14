import FlashSales from "../Components/Home/FlashSales"
import FreshProducts from "../Components/Home/FreshProducts"
import Header from "../Components/Home/Header"


export const Home = () => {
  return (
    <div>
      <Header />
      <FreshProducts />
      <FlashSales />
    </div>
  )
}
export default Home