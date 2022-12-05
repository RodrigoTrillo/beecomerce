import React,{useState,useEffect} from 'react'
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'
import ItemList from '../ItemList/indes'
import Title from '../Tilte'
import { useParams } from 'react-router-dom'
import './styles.css'




const ItemListContainer = ({texto}) => {

  const [data, setData]= useState([]);

  const{categoriaId}=useParams();

  useEffect(()=>{
    const querydb = getFirestore();
    const queryCollection = collection(querydb,'products')
    if (categoriaId) 
    {
      const queryFilter = query(queryCollection, where('category','==',categoriaId))
      getDocs(queryFilter)
      .then(res =>setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
    }else{
      getDocs(queryCollection)
      .then(res =>setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
      
    }

  },[categoriaId])

 

  return (
    <>
    <div className="card-cont">

    <Title greeting={texto}/>
    <ItemList data = {data}/>
    </div>
    </>
  )
}

export default ItemListContainer