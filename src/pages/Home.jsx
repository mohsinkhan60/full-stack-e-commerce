import FlashSales from "../Components/Home/FlashSales"
import FlashSalesBottom from "../Components/Home/FlashSalesBottom"
import FreshProducts from "../Components/Home/FreshProducts"
import Header from "../Components/Home/Header"
import Recommended from "../Components/Home/Recommended"


export const Home = () => {
  return (
    <div>
      <Header />
      <FreshProducts />
      <FlashSales />
      <FlashSalesBottom />
      <Recommended />
    </div>
  )
}
export default Home