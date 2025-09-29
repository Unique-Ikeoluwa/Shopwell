import { Route, Routes } from "react-router"
import CartView from "./Pages/CartView"
import ShoppingCart from "./Pages/ShoppingCart"
import Home from "./Pages/Home"
import PageLayout from "./Components/Layout/PageLayout"

function App() {
  return (
    <div className="bg-[#dfe8e7] min-h-screen font-raleway">
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="shoppingcart" element={<ShoppingCart />} />
          <Route path="cartview/:id" element={<CartView />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
