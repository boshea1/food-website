import React from 'react'
import styles from './Nav.module.css'
import MyButton from './Button'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import Button from 'react-bootstrap/Button';



const Nav = ({food}) => {
    if (typeof window !== 'undefined'){
        const [width, setWidth] = useState(window.innerWidth);
        
        
    
        const foods = food.map((f) => {
            return <MyButton food = {f[0].cuisine}
            img={f[0].href} alt={f[0].title}/>
        })
        
    const food1 = food.map((f) => {
        return (
            <div>
            <Button variant="outline-secondary">
                <Link href={f[0].cuisine}>
                {f[0].cuisine}
            </Link>
            </Button>
            </div>
                )
    
        
    })
    
    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
      // subscribe to window resize event "onComponentDidMount"
      window.addEventListener("resize", handleResizeWindow);
      return () => {
          // unsubscribe "onComponentDestroy"
          window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);
    
    return (
        <>
    <div className={styles.div}>
        {window.innerWidth < 720 ? food && food1 : food && foods}
    </div>
        </>
        )
    }
    }
    
    export default Nav