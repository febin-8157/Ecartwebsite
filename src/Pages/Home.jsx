import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllproducts } from '../redux/Slices/ProductSlice'
Link
const Home = () => {
  const dispatch =useDispatch()
  const {allproducts ,loading,error}=useSelector(state=>state.productReducer)
  // console.log(allproducts);
  
  const[currentPage,setCurrentPage]= useState(1)
const productPerPage=8
const totalPages=Math.ceil(allproducts?.length/productPerPage)
const currentPageLastProductIndex=currentPage*productPerPage
const currentPageStartProductIndex=currentPageLastProductIndex-productPerPage
const visibleProductCards =allproducts?.slice(currentPageStartProductIndex,currentPageLastProductIndex)

const navigateToNextPage=()=>{
if(currentPage!=totalPages){
  setCurrentPage(currentPage+1)
}
}

const navigateToPrevPage=()=>{
  if(currentPage!=1){
    setCurrentPage(currentPage-1)
  }
  }


  useEffect(()=>{
    dispatch(fetchAllproducts())
  },[])
  return (
    <>
    <Header insideHome={true}/>
      <div style={{marginTop:'80px'}} className='container mx-auto px-4'>
      {
        loading ?
        <div style={{height:'60vh'}} className='flex justify-center items-center font-bold'><img style={{width:'90px',height:'90px'}} src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="" />Loading.. </div>
     :
     <>
       
       <div className='grid grid-cols-4 gap-4'>
        {
          allproducts.length>0 ?
          visibleProductCards?.map(product=>(
          <div key={product.id} className='rounded border p-2 shadow'>
            <img style={{width:'100%',height:'200px'}} src={product?.thumbnail} alt="" />
            <div className='text-center'>
              <h3 className='text-xl'>{product?.title}</h3>
              <Link className='bg-blue-400 text-white p-1 inline-block rounded' to={`/${product?.id}/view`}>View more</Link>
            </div>
           </div>)) 
           :
        <div className='font-bold text-center mt-5 mb-5 text-red-600'>Product not found</div>
      
        }
        </div>
        {/* pagination */}
        <div className="flex justify-center items-center mt-5 mb-5">
          <span onClick={navigateToPrevPage} style={{cursor:'pointer'}}><i className="fa-solid fa-backward me-5"/></span>
          <span className='font-bold'>{currentPage} of {totalPages}</span>
          <span onClick={navigateToNextPage} style={{cursor:'pointer'}}><i className="fa-solid fa-forward ms-5"/></span>

        </div>
     </>
      }          
          </div>

          
    </>
  )
}

export default Home
