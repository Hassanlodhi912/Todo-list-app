import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ComA = () => {
 const [num,setNum] =useState();
 useEffect(()=>{

  // alert("hello world")
  async function getData(){
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/ditto/${num}`
  
      );
        console.log(res);
  }
  getData();
 })
  return (
  <>
  <h1>you choose {num}</h1>
  <select value={num} onChange={(e)=>{
    setNum(e.target.value);
  }}>
  <option value="1">1</option>
  <option value="25">25</option>
  <option value="3">3</option>
  <option value="4">4</option>
    <option value="5">5</option>
  </select>
  </>
  )
}

export default ComA
