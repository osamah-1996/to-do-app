import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ToDOAppList = ({data, DeleteOneTask}) => {
  return (
    <div className='toDo-list-content px-3'>
        {
          data.length >= 1 ? (data.map((item, index, array) => {
            return(
              <div className='row border-botm align-items-center px-2' key={index}>
                <div className='d-flex align-items-center justify-content-between py-2'>
                      <p className='text'>{item.l}</p>
                      <FontAwesomeIcon onClick={() => DeleteOneTask(item.id)} className='toDo-delete-item py-2 ' icon={faTrash} /> 
                </div>
             </div>
            )
          })): <h2 className='py-5 fs-4'>No Task to be Done Right Now!</h2>
        }
    </div>
  )
}

export default ToDOAppList