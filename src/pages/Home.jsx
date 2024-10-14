import FlashSales from "../Components/Home/FlashSales"
import FlashSalesBottom from "../Components/Home/FlashSalesBottom"
import FreshProducts from "../Components/Home/FreshProducts"
import Header from "../Components/Home/Header"


export const Home = () => {
  return (
    <div>
      <Header />
      <FreshProducts />
      <FlashSales />
      <FlashSalesBottom />
    </div>
  )
}
export default Home