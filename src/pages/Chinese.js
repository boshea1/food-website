import React from 'react'
import Grid from '../components/Grid'
import food from '../data/food';

const chinese = () => {
  const food1 = [[...food[2]]]

  return (
    
    <div>
      <Grid food={food1}/>
      </div>
  )
}

export default chinese