import React from 'react'
import styles from './Item.module.css'
import Image from 'next/image'

const Item = (props) => {
  return (<>
    <div className={styles.container} key={props.gem}>
    <h1 style={{zIndex:1}}>
      {props.gem}
      </h1>
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

export default Item