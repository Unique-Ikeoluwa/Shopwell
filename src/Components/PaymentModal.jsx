
import { RiVisaLine } from "react-icons/ri";
import { FaStripe } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const PaymentModal = () => {
  return (
    <div className='flex justify-center items-center mb-12'>
      <div className='bg-gray-200 text-center w-[550px] h-[550px] pt-12 items-center'>
        <h1 className='text-3xl font-semibold font-raleway'>Payment Method.</h1>
        <p className='font-raleway text-gray-600 pt-4'>Effortlessly manage your purchases and checkout with ease.</p>
        <div className='items-center flex gap-8 mt-4 ml-28'>
          <RiVisaLine size={40} />
          <FaStripe size={44} />
          <FaCcMastercard size={32} />
          <FaPaypal size={32} />
          <FaApple size={32} />
        </div>
        <div className="pt-6">
          <label className='font-raleway text-gray-600 text-xl pr-64'>Card Number</label> <br />
          <input type="text" className='w-96 h-12 p-4 bg-lightcyan mt-4 border-2 border-gray-400 rounded-md' placeholder='5355 0348 5945 5045' />
        </div>
        <div className='mt-6 flex gap-12 justify-center'>
          <div>
            <label className='text-gray-600 font-raleway pr-20'>CVV</label> <br />
            <input type="text" className='bg-lightcyan h-12 w-40 border-2 border-gray-400 rounded-md p-4 font-montserrat' placeholder='0522' />
          </div>
          <div>
            <label className='text-gray-600 font-raleway pr-14'>Expires</label> <br />
            <input type="text" className='bg-lightcyan h-12 w-44 border-2 border-gray-400 rounded-md p-4 font-montserrat' placeholder='07/06/2024' />
          </div>
        </div>
        <div className='flex gap-2 justify-center pt-4'>
          <input type="checkbox" className='accent-green-800 w-5 h-5' />
          <p className='text-customGray font-montserrat'>save my debit card information</p>
        </div>
        <div className='mt-8'>
          <button className='text-lightWhite bg-darkGreen w-96 h-12 rounded-md font-semibold font-raleway'>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default PaymentModal