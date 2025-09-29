
import { useState, useEffect } from "react";
function Carousel({ images, interval }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  console.log(currentIndex);

  const nextSlide = () => {
    return setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const slider = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(slider);
  }, [currentIndex]);

  return (
    <>
      <div className="relative w-11/12 lg:w-full md:h-[454.55px] bg-white mx-auto  rounded-2xl">
        {images && images.length > 0 && (
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full h-[450px] object-contain rounded-3xl transition duration-700 ease-in-out border border-stone-700"
          />
        )}


        <div className="absolute top-10">
          <div className="absolute transform -translate-x-1/2 left-32 flex flex-row gap-2">
            {images.map((_, index) => (
            <button
              key={index}
              className={` h-3 rounded-full ${
                index === currentIndex
                  ? "bg-stone-400 w-12"
                  : "bg-stone-900 w-5"
              }`}
              onClick={() => setCurrentIndex(index)}></button>
          ))}
          </div>
          <div className="relative top-60 left-16">
            <p className="text-xl font-normal">Trendy fashion</p>
            <h2 className="font-medium text-[41px]">Classy and Affordable</h2>
            <p className="text-xl font-medium">All items are picked with love and<br /> thoughts for you to slay to perfection.</p>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Carousel;