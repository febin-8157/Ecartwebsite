import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllproducts = createAsyncThunk("product/fetchAllProducts",async ()=>{
    const result = await axios.get("https://dummyjson.com/products")
    // console.log(result);
    sessionStorage.setItem("allproducts",JSON.stringify(result.data.products))
    return result.data.products
    
})
const productSlice = createSlice({
    name:'products',
    initialState : {
        allproducts : [],
    dummyAllProducts:[],
        loading:false,
        error:""
    },
    reducers :{
    //  product search
     searchProduct :(state,actionFromHeader)=>{
        state.allproducts=state.dummyAllProducts.filter(item=>item.title.toLowerCase().includes(actionFromHeader.payload))
        
     }
    },
    extraReducers :(builder)=>{
        builder.addCase(fetchAllproducts.fulfilled,(state,apiResult)=>{
            state.allproducts=apiResult.payload
            state.dummyAllProducts=apiResult.payload
            state.loading=false
            state.error=""
        })

        builder.addCase(fetchAllproducts.pending,(state,apiResult)=>{
            state.allproducts=[]
            state.dummyAllProducts=[]
            state.loading=true
            state.error=""
        })

        builder.addCase(fetchAllproducts.rejected,(state,apiResult)=>{
            state.allproducts=[]
            state.dummyAllProducts=[]
            state.loading=false
            state.error=""
        })
    }
})
export const{ searchProduct}=productSlice.actions
export default productSlice.reducer