import React from 'react'
import Item from './Item'
import styles from './grid.module.css';

const Grid = ({food}) => {
     const z=[]
    for (var k in food){
      
        var y = food[k][1]
          var x = y.map((i) => {
            return <Item gem={i.name} key={i.name}
            img={i.image}
            ingred={i.ingredients}
            instruct={i.instructions}/>
        })
        z.push(...x)
    
    }
   
    
  return (
    <div className={styles.container}>
      {z}
    </div>
  )
}

export default Grid