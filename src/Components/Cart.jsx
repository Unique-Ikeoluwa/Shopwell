import { Link } from "react-router-dom";
import Products from "./Products";

function Cart(){

    return(
     <>
        <div className="my-10">
          <h2 className="text-4xl font-semibold">
            Items on sales
          </h2>
          <p className="text-2xl font-normal">
            These products are currently available on sales
          </p>
        </div>
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
          {Products.slice(0, 12).map((item) => (
          <div
            key={item.id}
            className="flex flex-col h-[426px]"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-[312px] h-[339px] object-fit"
            />
            <Link to={`cartview/${item.id}`} className="flex mt-10 flex-row items-center justify-between w-[312px]">
              <h4 className="text-xl font-semibold text-[#001515]">{item.title}</h4>
              <p className="text-black text-lg font-semibold">#{item.price}</p>
            </Link>
          </div>
        ))}
        </div>
        <div className="my-10">
          <h2 className="text-4xl font-semibold">
            Other Products
          </h2>
          <p className="text-2xl font-normal">
            These products are currently available for sales
          </p>
        </div>
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
          {Products.slice(12, 24).map((item) => (
          <div
            key={item.id}
            className="flex flex-col h-[426px]"
          >
            <img
              src={item.image}
              alt={item.name}
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
export default Cart