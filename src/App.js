import React, { useState } from 'react'
import "./App.css"
import ToDoAppInput from './ToDoAppInput'
import ToDOAppList from './ToDOAppList'
import ClearAllBtn from './ClearAllBtn'
import { userList } from './data'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [data, setData] = useState(userList)
  const [texDecoration, setTextDecoration] = useState('none')
  //Update the user Data
  const updateList = () => {
    setData([...userList])
  }
  //Clear all Tasks
  const ClearAll = () => {
    userList.length = 0
    setData('')
    notify('Tasks List Cleared', 'Success')
  }
  //Delete one Task...
  const DeleteOneTask = (ID) => {
    if(data.length >= 1) {
      const index = userList.findIndex((q) => q.id === ID)
      userList.splice(index, 1)
      setData([...userList])
      notify('One Task Deleted', 'Success')
    }
  }
  //Change the decoration of the text
 
  //Push Notification..
  
  const notify = (message, type) => {
    if(type === 'Success'){
      toast.success(message);
    }
    else if(type === 'Error'){
      toast.error(message);

    }
    }
  return (
    <div className='body-cotainer'>
        <div className='container py-5'>
            <ToDoAppInput updateList ={updateList} notify = {notify}/>
            <ToDOAppList data = {data} DeleteOneTask = {DeleteOneTask}/>
            <ClearAllBtn data = {data} ClearAll = {ClearAll}/>
        </div>
        <ToastContainer />
    </div>
  )
}

export default App