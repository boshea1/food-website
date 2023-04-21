import '@/styles/globals.css'
import Nav from '../components/Nav'
import food from '../data/food'
import { useRouter } from "next/router";
import MyButton from '../components/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet,HelmetProvider} from 'react-helmet-async';
import { useEffect,useState } from 'react';

export default function App({ Component, pageProps}) {
  const router = useRouter()
  const [showHomeButton, setShowHomeButton]=useState(null)
  useEffect(()=>{
   setShowHomeButton(router.pathname === "/" ? false : true);
  }
  );

  const helmetContext={};
  return (
    <HelmetProvider context={helmetContext}>
    {/* // bodyAttributes={{style: 'background-color : #6D9DAF'}} */}
    {/* <div className='homeButton'> */}

      {showHomeButton && <MyButton food='/'
                                  img='https://cdn-icons-png.flaticon.com/512/2163/2163350.png'
                                   />}
    
    {/* </div> */}
    <Nav food={food}/>
  <Component {...pageProps} />
  </HelmetProvider>
  )
}
