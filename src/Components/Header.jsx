import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/Slices/ProductSlice'
const Header = ({insideHome}) => {
  const dispatch = useDispatch()
  const myWhishlist =useSelector(state=>state.whishlistReducer)
  const myCart = useSelector(state=>state.cartReducer)
  return ( 
    <div>
      <nav className='flex w-full bg-teal-500 fixed top-0 p-5 items-center'>
        <Link className='text-white font-semibold' to={'/'}><i class="fa-solid fa-truck-fast me-1"></i>E Cart</Link>
      
      <ul className='flex-1 text-right'>
        { insideHome &&<li className='list-none inline-block px-5'><input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:'300px'}}className='rounded p-1' type="text" placeholder='Search Products Here' /></li>}
        <li  className='list-none inline-block px-5'><Link to={'/whishlist'} className='text-white px-2 font-semibold'><i class="fa-solid fa-heart text-red-600 me-1"></i>WhishList <span className='bg-black rounded p-1'>{myWhishlist.length}</span></Link></li>
        <li  className='list-none inline-block px-5'><Link to={'/cart'} className='text-white px-2 font-semibold'><i class="fa-solid fa-cart-shopping text-lime-400 me-1"></i>Cart <span className='bg-black rounded p-1'>{myCart.length}</span></Link></li>

      </ul></nav>
    </div>
  )
}

export default Header
