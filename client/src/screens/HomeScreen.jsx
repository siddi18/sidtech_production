import React from 'react';
import Product from '../components/Product.jsx'
import { useGetProductsQuery } from '../slices/productsApiSlice.js';
import Spinner from '../components/Spinner.jsx'
import {useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
import {useDispatch} from 'react-redux'
import { setCredentials } from '../slices/userSlice.js';
import axios from 'axios'
import { useEffect } from 'react';
import Paginate from '../components/Paginate.jsx';
 
export default function HomeScreen() {
    const {keyword, pageNumber} = useParams()
 const dispatch = useDispatch()
 console.log('keyword from homescreem :',keyword)
 const {data, isLoading, error} = useGetProductsQuery({keyword, pageNumber})
 console.log('data form Home :',data)
 const getUser = async () => {
     try {
         const res = await axios.get('http://localhost:5000/auth/login/success', {
             withCredentials: true
         })
   
         dispatch(setCredentials({ ...res.data.user._json, _id: res.data._id, isAdmin: res.data.user.isAdmin }))
     } catch (error) {
         toast.error(error?.data?.message || error?.error)
     }
 }

 useEffect(() => {
     getUser()
 }, [])
 if(isLoading){
  return <Spinner />
 }
 if(error){
  toast.error(error?.data?.message || error?.error )
 }


  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
    {data?.products?.map((product, i)=>(
        <Product key={i} product={product} />
    ))}
    </div>
    <div className='flex justify-center mt-12'>
        <Paginate pages={data.pages} page={data.pageNumber} keyword={keyword ? keyword : ''} />
    </div>
    </>
    )
      
}
