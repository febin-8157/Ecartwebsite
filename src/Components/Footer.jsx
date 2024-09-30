import React from 'react'

const Footer = () => {
  return (
    <div className='container bg-indigo-500 mt-5 font-bold footer'>
     <div className="grid grid-cols-4 ">
      <div className="ms-3 mt-5">
        <span  ><i class="fa-solid fa-truck-fast text-white"></i></span><a className='fw-bolder fs-4'style={{textDecoration:'none', color:'white'}}><>Ecart Website</></a>
        <p className='text-white'>Designed and built with all the love in the <br /> world by the luminar team with the help of<br /> our contributors</p>
    <br />
    <p className='text-white'> code licensed Luminar,docs cc By 3.0</p>
    <br />
    <p className='text-white'>Currently v5.3.2</p>

        </div>



      <div className="text-white mt-5"><h5>Links</h5>
      <a className='fw-bolder 'style={{textDecoration:'none', color:'white'}} href="/">Home Page</a><br />
      <a className='fw-bolder'style={{textDecoration:'none', color:'white'}} href="/cart">Cart Page</a><br />
      <a className='fw-bolder'style={{textDecoration:'none', color:'white'}} href="/whishlist">Whishlist </a>
      </div>



      <div className="text-white mt-5">
      <h5>Guides</h5>
      <a className='fw-bolder 'style={{textDecoration:'none', color:'white'}} href="">React</a><br />
      <a className='fw-bolder'style={{textDecoration:'none', color:'white'}} href="">React Bootstrap</a><br />
      <a className='fw-bolder'style={{textDecoration:'none', color:'white'}} href="">React Router</a>
      </div>



      <div className="text-white mt-5"><h5 >Contact Us</h5>
      <form action="">
        <input className='rounded p-2 w-75' placeholder='enter your email here' type="text" /><button className='ps-2 pe-2 rounded bg-info ms-1 ' style={{height:'45px',width:'50px'}}><i class="fa-solid fa-arrow-right"></i></button>
      </form>
      <div className='flex justify-evenly mt-3'>
            <i class="fa-brands fa-twitter text-white"></i>
            <i class="fa-brands fa-instagram text-white"></i>
            <i class="fa-brands fa-facebook text-white"></i>
            <i class="fa-brands fa-linkedin text-white"></i>
            <i class="fa-brands fa-github text-white"></i>
            <i class="fa-solid fa-phone text-white"></i>
          </div>
        </div>
     </div>
     <div className='text-center text-white ' >Copright <span><i class="fa-regular fa-copyright"></i> Jan 2024 Batch,Ecart Website.Built with React</span></div>
    </div>
  )
}

export default Footer
