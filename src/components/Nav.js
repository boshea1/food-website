import React from 'react'
import styles from './Nav.module.css'
import Button from './Button'



const Nav = ({food}) => {
    
    
    
    const foods = food.map((f) => {
        return <Button food = {f[0].cuisine}
        img={f[0].href} alt={f[0].title}/>
    })
    
  return (
    <>
    <div className={styles.div}>
        {food && foods }
    </div>
        </>
        )
}

export default Nav