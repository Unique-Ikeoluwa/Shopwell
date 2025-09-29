import { useParams } from "react-router";
import Products from "../Components/Products";
import { Link } from "react-router";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const CartView = () => {
  const { id } = useParams()
  const item = Products.find((product) => product.id.toString() === id);
  return (
    <div className="min-h-screen px-4 py-8 font-sans max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold">Your Cart.</h2>
      <p className="text-gray-600">Review and manage the items in your shopping cart.</p>

      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={item.image}
              alt={item.title}
            className="object-cover rounded-lg w-full max-h-96"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-3">
          <p className="text-xs text-gray-500 mt-4">Product</p>
          <div className="flex items-center gap-2 text-sm text-gray-800 bg-green-100 border px-2 py-1 w-fit rounded">
            🚚 Delivery fee
            <span className="bg-gray-900 px-1 py-1 rounded text-xs text-gray-100">₦1,500</span>
          </div>

          <h3 className="text-xl">{item.title}</h3>

          <div className="flex flex-wrap items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-400 bg-black rounded-md p-2">
                <AiFillStar />
              </span>
            ))}
            <span className="p-2 bg-black text-yellow-400 rounded-md">
              <AiOutlineStar />
            </span>
            <span className="p-1 ml-2 border rounded-md font-bold">2.4</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="text-sm font-medium">
              Price:
              <span className="text-lg border border-gray-300 p-1 ml-1 rounded">{item.price}</span>
            </div>
            <span className="font-bold text-lg text-gray-400">|</span>
            <div className="flex items-center gap-2">
              <span>Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded px-2">
                <button className="text-lg">+</button>
                <span className="px-2">1</span>
                <button className="text-lg">-</button>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            {item.description}
          </p>

          <div className="flex flex-col gap-3">
            <Link to="/shoppingcart">
              <button className="py-2 w-full sm:w-7/12 border border-black rounded-md text-black font-medium">
              Buy Now
            </button>
            </Link>
            <button className="py-3 bg-black text-white rounded-md font-medium w-full sm:w-7/12">
              Add to cart
            </button>
          </div>

          <div className="relative mt-4">
            <select className="w-full border border-green-700 outline-none rounded-md px-4 py-3 text-green-700">
              <option>Select your location</option>
              <option>Lagos</option>
              <option>Abuja</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-6 items-center justify-center sm:justify-start text-center">
        {["Black", "White", "coloured"].map((color, i) => (
          <div key={i} className="text-center">
            <img src={item.image} alt="Color Option" className="h-20 w-20 object-contain mx-auto" />
            <p className="text-sm mt-1">{color}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 space-x-3 text-sm text-gray-600 flex flex-wrap">
        <label><input type="radio" name="zip" /> Branded box</label>
        <label><input type="radio" name="zip" /> Branded nylon</label>
        <label><input type="radio" name="zip" /> Both</label>
        <label><input type="radio" name="zip" /> None</label>
        <p className="text-xs text-gray-400 mt-2 w-full">Box adds ₦2,000 extra while Nylon adds ₦1000</p>
      </div>

      <div className="mt-4">
        <p className="text-gray-900 text-xl font-bold">Description</p>
        <p className="text-sm text-gray-600 mb-6">
          {item.lengthyDes}
        </p>

      </div>

      <div className="mt-6 max-w-2xl flex flex-col mx-auto px-4">
        <h3 className="text-xl font-semibold">Customer Reviews</h3>
        <p className="text-gray-500 mb-6 text-sm">Customer's Testimonies</p>

        <div className="mb-10 pb-6">
          <div className="flex items-center gap-3">
            <img src="/assets/Images/CEO.jpg" alt="User" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-medium">Yusuf</p>
              <p className="text-sm text-gray-500">May 15, 2024</p>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-1 flex-wrap">
            <span className="text-sm font-semibold">Rating:</span>
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-400 bg-black rounded-md p-2">
                <AiFillStar />
              </span>
            ))}
            <span className="p-2 bg-black text-yellow-400 rounded-md">
              <AiOutlineStar />
            </span>
          </div>

          <p className="text-sm text-gray-600 mt-2">
            Size: <span className="font-semibold">16.g</span> | Color:{" "}
            <span className="font-semibold">White</span> | Design Pattern:
            <span className="font-semibold">Classic</span>
          </p>

          <div className="flex flex-wrap gap-3 mt-3">
            <img src={item.image} alt={item.title} className="h-24 w-24 rounded-lg border object-cover" />
            <div className="h-24 w-24 rounded-lg border flex items-center justify-center text-gray-400">+</div>
          </div>

          <p className="text-sm text-gray-700 mt-4">
            I recently purchased a few items from this store, and I must say, I am beyond impressed! Each product exceeded my expectations in both quality and style. The materials feel premium, the stitching is durable, and the designs are clearly crafted with attention to detail. I’ve received so many compliments already! Delivery was swift, and everything came neatly packaged. Whether I’m dressing up for an event, heading to the office, or just running errands, these pieces fit effortlessly into my wardrobe. I will definitely be recommending this store to friends and returning for more purchases. Highly satisfied!
          </p>
        </div>
        <div className="mb-10 pb-6">
          <div className="flex items-center gap-3">
            <img src="/assets/Images/CEO.jpg" alt="User" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-medium">Yusuf</p>
              <p className="text-sm text-gray-500">May 15, 2024</p>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-1 flex-wrap">
            <span className="text-sm font-semibold">Rating:</span>
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-400 bg-black rounded-md p-2">
                <AiFillStar />
              </span>
            ))}
            <span className="p-2 bg-black text-yellow-400 rounded-md">
              <AiOutlineStar />
            </span>
          </div>

          <p className="text-sm text-gray-600 mt-2">
            Size: <span className="font-semibold">16.g</span> | Color:{" "}
            <span className="font-semibold">White</span> | Design Pattern:
            <span className="font-semibold">Classic</span>
          </p>

          <div className="flex flex-wrap gap-3 mt-3">
            <img src={item.image} alt={item.title} className="h-24 w-24 rounded-lg border object-cover" />
            <div className="h-24 w-24 rounded-lg border flex items-center justify-center text-gray-400">+</div>
          </div>

          <p className="text-sm text-gray-700 mt-4">
            I recently purchased a few items from this store, and I must say, I am beyond impressed! Each product exceeded my expectations in both quality and style. The materials feel premium, the stitching is durable, and the designs are clearly crafted with attention to detail. I’ve received so many compliments already! Delivery was swift, and everything came neatly packaged. Whether I’m dressing up for an event, heading to the office, or just running errands, these pieces fit effortlessly into my wardrobe. I will definitely be recommending this store to friends and returning for more purchases. Highly satisfied!
          </p>
        </div>
        <div className="mb-10 pb-6">
          <div className="flex items-center gap-3">
            <img src="/assets/Images/CEO.jpg" alt="User" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-medium">Yusuf</p>
              <p className="text-sm text-gray-500">May 15, 2024</p>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-1 flex-wrap">
            <span className="text-sm font-semibold">Rating:</span>
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-400 bg-black rounded-md p-2">
                <AiFillStar />
              </span>
            ))}
            <span className="p-2 bg-black text-yellow-400 rounded-md">
              <AiOutlineStar />
            </span>
          </div>

          <p className="text-sm text-gray-600 mt-2">
            Size: <span className="font-semibold">16.g</span> | Color:{" "}
            <span className="font-semibold">White</span> | Design Pattern:
            <span className="font-semibold">Classic</span>
          </p>

          <div className="flex flex-wrap gap-3 mt-3">
            <img src={item.image} alt={item.title} className="h-24 w-24 rounded-lg border object-cover" />
            <div className="h-24 w-24 rounded-lg border flex items-center justify-center text-gray-400">+</div>
          </div>

          <p className="text-sm text-gray-700 mt-4">
            I recently purchased a few items from this store, and I must say, I am beyond impressed! Each product exceeded my expectations in both quality and style. The materials feel premium, the stitching is durable, and the designs are clearly crafted with attention to detail. I’ve received so many compliments already! Delivery was swift, and everything came neatly packaged. Whether I’m dressing up for an event, heading to the office, or just running errands, these pieces fit effortlessly into my wardrobe. I will definitely be recommending this store to friends and returning for more purchases. Highly satisfied!
          </p>
        </div>
      </div>
        <div className="my-10">
          <h2 className="text-4xl font-semibold">
            Other Products you may like
          </h2>
          <p className="text-2xl font-normal">
            These products have been carefully selected to pair with your choice.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
          {Products.slice(26, 38).map((item) => (
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
    </div>
  );
};

export default CartView;