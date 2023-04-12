import React from 'react'
import Grid from '@/components/Grid'
import food from '../data/food';

const Indian = () => {
  const food1 = [[...food[3]]]
  return (
    <div><Grid food={food1}/></div>
  )
}

export default Indian