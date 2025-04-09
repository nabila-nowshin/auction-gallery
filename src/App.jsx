
import { Suspense } from 'react'
import Active_auction from './Active_auction'
import './App.css'
import Banner from './Banner'
import Footer from './Footer'
import Navbar from './Navbar'

function App() {
  const bidItemsPromise=fetch('bidItems.json').then(res=> res.json())

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h1>Its Loading</h1>}>
        <Active_auction bidItemsPromise={bidItemsPromise}></Active_auction>
      </Suspense>
      <Footer></Footer>
    </div>
    
    
  )
}

export default App
