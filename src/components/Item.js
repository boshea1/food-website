import React, { useState } from 'react'
import styles from './Item.module.css'
import Image from 'next/image'
import { useStoreActions, useStoreState} from "easy-peasy";


const Item = (props) => {
  if (typeof window !== "undefined") {
    // browser code
    const food = useStoreState((state)=> state.screenModel.food);
    const addFavorite = useStoreActions((state)=> state.screenModel.addFavorite);
    const indexes = {Italian:0,Mexican:1,Chinese:2,Indian:3,Thai:4}
    const handleChange = (no, index) => {
      
      if (window.location.pathname === '/'){
        
        addFavorite({index1:no,index2: index})
        
        
      } else {
        
      addFavorite({index1:indexes[props.cuisine],index2:index})
     
      
    }
    
    
  }
  
  

  
  
  return (<>
    <div className={styles.container} key={props.gem}>
    <h1 style={{zIndex:1}}>
      {props.gem}
      </h1>
      <button onClick={()=>handleChange(props.no, props.index)}>
        Make fav </button>
        <p>{window.location.pathname === '/'? food[props.no][1][props.index].checked ? 'favorite':'not':food[indexes[props.cuisine]][1][props.index].checked? 'favorite':'not'}</p>
    <div className ={styles.images}>
                                   {props.img ? 
                                     <Image src={props.img}
                                     width={250}
                                     height={250}
                                     alt={'alt'}></Image>: 'alternative'
                                    }
                                    </div>
                                     <div className={styles.instructions}><h4>steps:</h4><br/><br/>{props.instruct.map((i) => {
                                       return <p key={i}>{i}</p>
                                      })}</div>
    <div className={styles.ingredients}><h4>ingredients:</h4><br/><br/>{props.ingred}</div>
    <hr/>
      </div>
      <hr className={styles.rule}/>

    </>
  )
}
}

export default Item