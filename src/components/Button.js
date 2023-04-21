import React from 'react'
import styles from './Button.module.css'
import Image from 'next/image'
import Link from 'next/link'

const MyButton = (props) => {


  return (
    <div key={props.food}>
    
            <button className={styles.but} key={props.food}>
        <Link href={`${props.food}`}>
              {props.food != '/' ? `${props.food}` : 'Home' }<br/>
                                            <Image src={props.img} 
                                              // alt={props.alt}
                                              alt='alt'
                                              width={50}
                                              height={50}/>
                                             </Link>
                                              </button>
    </div>
  )
}

export default MyButton