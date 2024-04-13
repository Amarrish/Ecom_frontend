import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import Shopcategory from './pages/Shopcategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Loginsignup from './pages/Loginsignup';
import Footer from './components/Footer/Footer';
import menbanner from './Assets/menbanner.png'
import womenbanner from './Assets/womens2.jpg'
import kidbanner from './Assets/kids4.jpg'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men' element={<Shopcategory banner={menbanner}  category='men'/>}/>
      <Route path='/women' element={<Shopcategory banner={womenbanner} category='women'/>}/>
      <Route path='/kids' element={<Shopcategory banner={kidbanner} category='kid'/>}/>

      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>

      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signup' element={<Loginsignup register/>}/>
      <Route path='/signin' element={<Loginsignup/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
