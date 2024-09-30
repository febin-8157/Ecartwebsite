import {Route,Routes} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Whishlist from './Pages/Whislist';
import View from './Pages/View';
import PnF from './Pages/PnF';
import Footer from './Components/Footer'
function App() {

  return (
    <>
      <Routes>
    
       <Route path='/' element={<Home/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/whishlist' element={<Whishlist/>}/>
       {/* : indicate which is path parameter of url ,path parameter will be stored in variable id*/}
       <Route path='/:id/view' element={<View/>}/>
       <Route path='/*' element={<PnF/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
