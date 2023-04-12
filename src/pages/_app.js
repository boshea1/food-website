import '@/styles/globals.css'
import Nav from '../components/Nav'
import food from '../data/food'
import { useRouter } from "next/router";
import Button from '../components/Button'

export default function App({ Component, pageProps}) {
  const router = useRouter()
  const showHomeButton = router.pathname === "/" ? false : true;;
  return (
    <>
    <div className='homeButton'>
      {showHomeButton && <Button food='/'
                                  img='https://cdn-icons-png.flaticon.com/512/2163/2163350.png' />}
    </div>
    <Nav food={food}/>
  <Component {...pageProps} />
    </>
  )
}
