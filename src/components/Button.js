import React from 'react'
import styles from './Button.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Button = (props) => {
  

  return (
    <div>
        <Link href={`${props.food}`}>
            <button className={styles.but}>{props.food != '/' ? `${props.food}` : 'Home' }<br/>
                                            <Image src={props.img} 
                                              alt={props.alt}
                                              width={50}
                                              height={50}/></button>
                                              
                                             </Link>
    </div>
  )
}

export default Button