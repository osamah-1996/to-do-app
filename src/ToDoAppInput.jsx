import React, { useState } from 'react'
import { userList } from './data'
const ToDoAppInput = ({updateList, notify}) => {
  const [userNewTask, setUserNewTask] = useState('')
  const [textDecoration, setTextDecorqtion] = useState('none')
  const AddNewTask = () => {
    if(userNewTask === '' || userNewTask === null) {
      notify("Filed can't be Empty", 'Error')
    }
    else{
      notify("One Task Added", 'Success')
      userList.push({id:Math.random(), l:userNewTask})
      setUserNewTask('')
      updateList()
    }
  }
  
  
  return (
    <div className='container'>
      <div className='row Input-content mx-auto my-1'>
          <div className='col-sm-10'>
               <input value={userNewTask} onChange={(e) => setUserNewTask(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" placeholder='Task to be Done...'  />
          </div>
          <div className='col-sm-2'>
              <button onClick={AddNewTask} className='btn w-100'>Add</button>
          </div>
      </div>
    </div>
  )
}

export default ToDoAppInput