import React from 'react'
import {BrowserRouter , Route ,Routes} from "react-router-dom"
import Checkout from './Component/Checkout'
import Home from './Component/Home'

const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route   path='/'  element = {<Home/>}/>
<Route  path='/d'  element =  {<Checkout/>}/>

</Routes>
</BrowserRouter>




    </div>
  )
}

export default App