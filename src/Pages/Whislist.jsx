import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/Slices/whishlistSlice'
import { addToCart } from '../redux/Slices/cartSlice'

const Whislist = () => {
  const myCart=useSelector(state=>state.cartReducer)
  const myWhishlist =useSelector(state=>state.whishlistReducer)
  const dispatch =useDispatch()

  const handleAddToCart=(product)=>{
    const existingProduct =myCart?.find(item=>item.id==product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
      alert("product quantity is incrementing!!!")
    }else{
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
    }
  }


  return (
    <>
    <Header/>
      <div style={{marginTop:'80px'}} className='container mx-auto px-4'>
        {myWhishlist.length>0 ?
          <>
          <h1 className='text-red-500 text-3xl font-bold mb-5'>Your Wishlist</h1>
          {
            myWhishlist?.map(product=>(<div className='grid grid-cols-4 gap-4 shadow'>
              <div key={product?.id} className='rounded border p-2 shadow'>
                <img style={{width:'100%'}} src={product?.thumbnail} alt="" />
                <div className='text-center'>
                  <h3 className='text-xl font-bold'>{product?.title}</h3>
                  <div className='flex justify-evenly mt-3'>
                    <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className=''><i class="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                    <button onClick={()=>handleAddToCart(product)} className=''><i class="fa-solid fa-cart-plus text-lime-400"></i></button>
                  </div>
                </div>
              </div>
              </div>))
            }
            </>
            :
            <div style={{height:'100vh'}} className='flex flex-col items-center justify-center w-full'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLSz1SYhpDvBfqDubCPfMflLOfO9rk87MNhw&s" alt="" />
            
            <h1 className='text-3xl font-bold text-blue-600'></h1></div>
            }
          
          </div>

          
    </>
  )
}

export default Whislist
