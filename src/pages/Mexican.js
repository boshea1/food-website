import React from 'react'
import Grid from '@/components/Grid';
import { useStoreState } from 'easy-peasy';

const Mexican = () => {
  const food = useStoreState((state)=> state.screenModel.food);
  const food1 = [[...food[1]]]
  return (
    <div>
      <Grid food={food1}/>
    </div>
  )
}

export default Mexican