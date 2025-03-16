import React,{useState,useEffect} from 'react'
export default function useFetch(url){
    const [data,setdata]=useState([])
    const [error,seterror]=useState('')

    useEffect(()=>{
    const data =fetch('https://jsonplaceholder.typicode.com/posts').then(res=>{
        return res.json()
    }).then(data => console.log(data))
    },[])
}