'use client';
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [task,setTask] = useState() // ค่าตัวแรกคือ เรียกใช้ , ฟังชั้นที่จะเปลี่ยนค่า useState ค่า initail (ค่าเริ่มต้น)
  const [todoList,settodoList] = useState([{check: false ,des: "go buy book" },{check: false ,des: "go school" },{check: false ,des: "go ho" }]) 
  // const [friend,setFriendList] = useState(["Tep","Pun","Hum"]) 



  let inputValue = (newName) => { 
    // console.log(newName.target.value)
  
  setTask(newName.target.value) 


    // setName(newName)
  }
  
  function clickTask () {
  let addTask = {check: false ,des: task}
  let aaa = [...todoList]
  aaa.push(addTask)

  settodoList(aaa)

  }

  return (
<>

    <h1> Hello  {task}</h1> 

    { todoList.map( meMo => {
      return (

        <h3 key= {meMo.des}> {meMo.des}


        </h3>
      
        )
      
    })}
    <input type="input" onChange={inputValue}/>
    <button onClick={() => clickTask()}> Add Click</button>
    
</>

      )
}
