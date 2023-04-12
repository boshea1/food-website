import React from 'react'
import Grid from '@/components/Grid';
import food from '../data/food';

const Mexican = () => {
  const food1 = [[...food[1]]]
  return (
    <div>
      <Grid food={food1}/>
    </div>
  )
}

export default Mexican