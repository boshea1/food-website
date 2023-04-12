import React from 'react'
import Grid from '@/components/Grid'
import food from '../data/food';

const italian = () => {
  const food1 = [[...food[0]]]
  
  return (
    <div><Grid food={food1}/></div>
    
  )
}

export default italian