import React from 'react'
import Grid from '@/components/Grid'
import food from '../data/food';

const thai = () => {
  const food1 = [[...food[4]]]
  return (
    <div>
<Grid food={food1}/>
    </div>
  )
}

export default thai