import React from 'react'
import styles from './Item.module.css'
import Image from 'next/image'

const Item = (props) => {
  return (<>
    <div className={styles.container}>
    <h1>
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
                                     <div className={styles.instructions}>steps:<br/><br/>{props.instruct.map((i) => {
                                      return <p>{i}</p>
                                     })}</div>
    <div className={styles.ingredients}>ingredients:<br/><br/>{props.ingred}</div>
      </div>
    <hr/>
    </>
  )
}

export default Item