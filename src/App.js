import {Header} from './component/Header'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import {Home} from './component/Home'
import {About} from './component/About'

import { useLocation } from 'react-router-dom';


function App() {
  const pathcheck = () => {
    console.log(window.location.pathname)
    return window.location.pathname
  }
  pathcheck()
  return (
    <>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
