import Products from "./pages/Products"
import HomePage from "./pages/HomePage"
import { Routes, Route } from "react-router-dom"
import ProductDetails from "./pages/ProductDetails"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import Footer from "./components/footer"
import AboutPage from "./pages/AboutPage"

function App() {

  // const [pagename, setPagename] = useState('')
  // const location = useLocation()
  // setPagename(location.pathname)

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:name" element={<ProductDetails />} />
          <Route path="/About" element={<AboutPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
