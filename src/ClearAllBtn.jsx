import React from 'react'

const ClearAllBtn = ({data, ClearAll}) => {
  return (
    <div>
      {data.length >= 1 ? (<button onClick={() => ClearAll()} className='clear-btn w-50'>Clear All</button>): null}
    </div>
  )
}

export default ClearAllBtn