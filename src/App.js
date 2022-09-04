import './App.css';
import { TextField,Button} from '@mui/material';
import { useState } from 'react';

function App() {
  const  [inputItem,setinputItem] = useState("")
  const  [thing,setThing] = useState([])

  const itemList=()=>{
    setThing([...thing,inputItem])
    setinputItem("")
  }

  function itemEvent(event){
setinputItem(event.target.value)
  }
  const itemDelete = (index)=>{
    let newArray = [...thing]
  newArray.splice(index,1)
  setThing(newArray)
  }
  // const itemUpdate = (itemvalue , index)=>{
  //   console.log(itemvalue , index)
  //   // let copyArray = [...thing]
  // // copyArray.splice(index,1)
  // setThing(itemvalue)
  // }
  
  return (
    <>

    <div className="container">
        <h1>TodoList App</h1>
      <TextField id="standard-basic"  value={inputItem}  size='small' onChange={itemEvent}/>
      <Button onClick={itemList} variant="text" size="large" >Add</Button>
      <br/>
  <ul>
  <li> {inputItem}</li>
 {thing.map((itemvalue,index)=>{return(
 <li> 
  <Button variant="outlined" onClick={()=>itemDelete(index)}>
        Delete
      </Button>
      {/* <Button variant="outlined" onClick={()=>itemUpdate(index,itemvalue)}> */}
        {/* Edit */}
      {/* </Button> */}
{itemvalue}
 
 </li>)})}
</ul>
</div>
  </>
  )}
export default App;
