import Cart from "../Components/Cart";
import Carousel from "../Components/Carousel";
import AccordionPage from "../Components/AccordionPage";
import { VscSettings } from "react-icons/vsc";
const Home = () => {
  const images = [
  "/assets/Images/watch2.jpeg",
  "/assets/Images/bag.jpeg",
  "/assets/Images/skirts.jpeg",
];

  const interval = 4000
  return (
    <div>
      <div className="hidden w-[629px] mx-auto lg:flex gap-4 items-center mt-8">
        <button className="h-14 flex gap-[10px] items-center bg-black rounded-[30px] py-4 px-6 text-white">
          <VscSettings className="text-2xl" /> All
        </button>

        <button className="h-14 text-stone-700 text-lg font-medium flex items-center border border-stone-600 rounded-[30px] py-4 px-6 ">
          Clothings
        </button>
        <button className="h-14 text-stone-700 text-lg font-medium flex items-center border border-stone-600 rounded-[30px] py-4 px-6">
          Bags
        </button>
        <button className="h-14 text-stone-700 text-lg font-medium flex items-center border border-stone-600 rounded-l-full rounded-r-full p-5 ">
          Accesories
        </button>
        <button className="h-14 text-stone-700 text-lg font-medium flex items-center border border-stone-600 rounded-[30px] py-4 px-6">
          Footwears
        </button>
      </div>
      <div className="flex flex-col gap-2 w-[541px] h-[68px] mt-16 mb-8">
        <h2 className="text-[32px] font-semibold">Shop your favourite fashion item</h2>
        <p className="text-lg font-light">Your first stop for classy and trendy fashion item</p>
      </div>
      <Carousel images={images} interval={interval}/>
      <Cart />
      <AccordionPage />
    </div>
  )
}

export default Home