import Products from "../Components/Products";
import PaymentModal from "../Components/PaymentModal";
import { useState } from "react";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { PiSealWarningLight } from "react-icons/pi";
import { IoCard } from "react-icons/io5";

const ShoppingCart = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  return (
    <>
      {showModal && (
          <div onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40 flex justify-center items-center">
            <div onClick={(e) => e.stopPropagation()}>
              <PaymentModal onClose={handleClose} />
            </div>
          </div>
      )}        
      <div className="flex flex-col mt-16 justify-center items-start">
        <div className='w-[500px] h-[78px]'>
          <h1 className="text-3xl md:text-[40px] font-semibold mb-2">Shopping Cart.</h1>
          <p className="text-gray-700 text-sm md:text-lg font-normal">Effortlessly manage your purchases and checkout with ease.</p>
        </div>
        <div className={`${showModal ? 'blur-sm pointer-events-none select-none' : ''}`}>
  <div className="flex flex-col lg:flex-row gap-5 my-2">
    <div className="w-[873.88px] flex flex-col md:flex-row justify-between items-start gap-8 py-5 border-b">
      <div className='flex w-[332.02px] gap-4'>
        <img className='w-[128.02px] h-[140px] object-cover' src="" alt="" />
        <div>
          <h1 className='font-medium text-[28px]'>Plane totebag</h1>
          <p className='text-lg font-normal'>thetotebag1500</p>
          <div className='text-yellow-300 flex gap-1 pt-1'>
            <div className='bg-black p-1 rounded-md'><IoMdStar /></div>
            <div className='bg-black p-1 rounded-md'><IoMdStar /></div>
            <div className='bg-black p-1 rounded-md'><IoMdStar /></div>
            <div className='bg-black p-1 rounded-md'><IoMdStarHalf /></div>
            <div className='bg-black p-1 rounded-md'><IoMdStarOutline /></div>
          </div>
          <span className='text-gray-300 text-lg font-normal'>Color:</span> <span className='text-gray-800 text-lg font-normal'> Cream</span>
        </div>
      </div>

      <div className='flex flex-row w-[421.85px] items-center gap-20'>
        <div className='flex w-[107.49px] gap-6 items-center bg-white shadow p-2 rounded-md'>
          <p className='font-semibold text-2xl'>+</p>
          <p className='shadow px-2 py-1 rounded-md'>1</p>
          <p className='font-semibold text-2xl'>-</p>
        </div>
        <p className='font-bold text-[25.33px]'>&#8358;4,000</p>
        <div className='bg-black text-white text-3xl p-2 rounded'><FaRegTrashAlt /></div>
      </div>

      <hr className='border-t border-gray-300 mb-6' />
    </div>

    {/* Order Summary */}
    <div className="w-full lg:w-[427.35px] h-[594px] flex flex-col justify-between">
     <div className="border shadow-md p-4 rounded-md">
       <h1 className='font-medium text-3xl mb-4'>Order Summary</h1>
      <div className='space-y-6'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p className='font-semibold'>&#8358;4,000.00</p>
        </div>
        <div className='flex justify-between'>
          <p>Delivery</p>
          <p className='font-semibold'>&#8358;1,500.00</p>
        </div>
        <div className='flex justify-between'>
          <p>Zip</p>
          <p className='font-semibold'>&#8358;1,000.00</p>
        </div>
        <div className='flex justify-between'>
          <p>Front & Back Design</p>
          <p className='font-semibold'>&#8358;1,000.00</p>
        </div>

        <hr className='border-t border-gray-400' />

        <div className='flex justify-between font-semibold pt-2'>
          <p className='text-2xl'>Total</p>
          <p>&#8358;7,500.00</p>
        </div>

        <div className='flex items-start gap-2 p-3 mt-4 border shadow-md rounded'>
          <PiSealWarningLight className="mt-1" />
          <p className="text-sm">
            Please your totebag will be delivered in three to five working days
          </p>
        </div>
      </div>
     </div>

      <div className=''>
        <button
          onClick={() => setShowModal(true)}
          className='flex items-center gap-2 text-white bg-black rounded-lg py-2 px-6 w-full justify-center'
        >
          Payment options <IoCard />
        </button>
      </div>
    </div>

  </div>
</div>
</div>
</>
)}
export default ShoppingCart