import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/Slices/whishlistSlice'
import { addToCart } from '../redux/Slices/cartSlice'
addToCart
Header
const View = () => {
  const myCart=useSelector(state=>state.cartReducer)

   const myWhishlist =useSelector(state=>state.whishlistReducer)
  const dispatch =useDispatch()

  const [product,setProduct]=useState({})
  const {id}= useParams()
  // console.log(id);
  
  useEffect(()=>{
    if(sessionStorage.getItem("allproducts")){
      const allproducts=JSON.parse(sessionStorage.getItem("allproducts"))
      setProduct(allproducts.find(item=>item.id==id))
    }
  },[])

  const handleWhishlist =(product)=>{
    if(myWhishlist?.includes(product)){
      alert("product already in ypour whishlist")
    }else{
      // add product
      dispatch(addToWishlist(product))
    }
  }

  const handleAddToCart=(product)=>{
    const existingProduct =myCart?.find(item=>item.id==product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      alert("product quantity is incrementing!!!")
    }else{
      dispatch(addToCart(product))
    }
  }

  
  return (
    <>
   <Header/> 
   <div style={{minHeight:'90vh'}} className="flex justify-center items-center mt-5">
    <div className='grid grid-cols-2 items-center'>
      <img style={{width:'100%',height:'300px'}} src={product?.thumbnail} alt="" />
      <div> <h3>PID:{product?.id}</h3>
       <h1 className='text-3xl font-bold'>{product?.title}</h1>
       <h4 className='font-bold text-red-500 text-xl'>{product?.price}</h4>  
         <p><span className='font-bold'>Description :</span>{product?.description}</p>
          <div className='flex justify-evenly m-5'>
      <button onClick={()=>handleWhishlist(product)} className='bg-blue-600 text-white p-2 rounded'>ADD to Whishlist</button>
      <button onClick={()=>handleAddToCart(product)} className='bg-green-600 text-white p-2 rounded'>ADD to Cart</button>
       </div>

      </div>
    </div>
   
   
    

    
   </div>
    </>
  )
}

export default View
