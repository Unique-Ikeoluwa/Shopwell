import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

const PageLayout = () => {
  return (
    <div className='min-h-screen bg-[#faffff] max-w-[1440px] mx-auto grid grid-rows-[auto_1fr_auto]'>
        <div className='px-16'>
          <Navbar />
          <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default PageLayout