import React from 'react'

const Statistics = ({all, average, positive}) => {
  return(
    <div>
      <h2>Stastistics</h2>
      all together: {all}<br/>
      average: {average}<br/>
      positive: {positive}
    </div>
  )
}

export default Statistics