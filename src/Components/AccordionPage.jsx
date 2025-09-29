import { useState } from "react";
import { Link } from "react-router";
import Products from "./Products";
function AccordionPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  const handleLeave = () => {
    setActiveIndex(0);
  };

  const accordNews = [
    {
      id: 0,
      image: "public/assets/Images/fauxfur.jpeg",
      heading: "Explore our latest collections.",
      text: "You don't need all the money in the world to speak elegance, just shopwell.",
    },
    {
      id: 1,
      image: "public/assets/Images/glasses.jpeg",
      heading: "Turning heads",
      text: "Choose your style and stay in game with shopwell.",
    },
    {
      id: 2,
      image: "public/assets/Images/panttro.jpeg",
      heading: "Unlimited fashion items.",
      text: "Fashion items for all occasion and for all.",
    },
  ];

  return (<>
    <div className="w-full h-[500px] lg:h-[500px] gap-2 flex flex-col lg:flex-row lg:gap-3 ">
        {accordNews.map((news, i) => (
          <div
            key={news.id}
            onMouseEnter={() => handleHover(i)}
            onMouseLeave={handleLeave}
            className={`border transition-all ease-out duration-1000 delay-300 relative grid place-items-center overflow-hidden border-black rounded-3xl  ${
              news.id === 0
                ? "bg-stone-400"
                : news.id === 1
                ? "bg-stone-600"
                : "bg-stone-900"
            } ${
              activeIndex === news.id
                ? "lg:w-3/5 w-full h-3/5 lg:h-full"
                : "lg:w-1/5 w-full h-1/5 lg:h-full"
            }`}>
            <img
              src={news.image}
              alt=""
              className={`${
                activeIndex === news.id ? "brightness-75" : "brightness-50"
              } w-full  h-full object-cover`}
            />
            <button
              className={`absolute right-5 top-5 text-sm lg:hidden font-normal p-2 bg-white rounded-full`}>
              Shop now
            </button>
            <div
              className={`absolute top-1/4 lg:top-1/2 left-5 flex flex-col justify-center lg:gap-4 pr-5 transform transition-all duration-700 ease-in-out
                ${
                  activeIndex === news.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-50 translate-y-4"
                }
            `}>
              <h1 className="text-white font-light text-lg lg:text-2xl capitalize ">
                {news.heading}
              </h1>
              <p className="text-white font-thin text-sm lg:text-base leading-snug text-wrap">
                {news.text}
              </p>

              <div className="lg:block hidden">
                <button
                  className={`${
                    activeIndex === news.id
                      ? "block opacity-100 translate-y-0"
                      : "hidden opacity-50 translate-y-4"
                  }  text-lg w-32 font-normal p-4 bg-white rounded-full`}>
                  Shop now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 my-[70px]">
          {Products.slice(24, 32).map((item) => (
          <div
            key={item.id}
            className="flex flex-col h-[426px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[312px] h-[339px] object-fit"
            />
            <Link to={`cartview/${item.id}`} className="flex mt-10 flex-row items-center justify-between w-[312px]">
              <h4 className="text-xl font-semibold text-[#001515]">{item.title}</h4>
              <p className="text-black text-lg font-semibold">#{item.price}</p>
            </Link>
          </div>
        ))}
        </div>
</>
  );
}

export default AccordionPage;