import Navbar from './Navbar/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Signup_Login from '../Pages/Signup_Login'
import Categories from '../Pages/Categories'
import Product from '../Pages/Product'
import ShopCategory from '../Pages/ShopCategory'
import Footer from './Footer/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='sidespace'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/login' element={<Signup_Login />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/:categoryName' element={<ShopCategory />} />
          <Route path='/product/:productId' element={<Product />} />
        </Routes>
        </div>
      </BrowserRouter>
      <div className='sidespace'>
      <Footer />
      </div>
    </div>
  )
}

export default App;
