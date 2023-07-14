import '@/styles/globals.css'
import Nav from '../components/Nav'
// import food from '../data/food'
import { useRouter } from "next/router";
import MyButton from '../components/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';
import { StoreProvider, useStoreState } from 'easy-peasy';
import store from '@/store/store';
export default function App({ Component, pageProps}) {
  const router = useRouter()
  const [showHomeButton, setShowHomeButton]=useState(null)
  useEffect(()=>{
   setShowHomeButton(router.pathname === "/" ? false : true);
  }
  );

 
  return (
    <>
    <StoreProvider store={store}>

     <div className='homeButton'>

      {showHomeButton && <MyButton food='/'
                                  img='https://cdn-icons-png.flaticon.com/512/2163/2163350.png'
                                  />}
    </div>
  
    <Nav/>
  <Component {...pageProps} />
    </StoreProvider>
  
  </>
  )
}
