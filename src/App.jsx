import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import LoginPage from './pages/LoginPage/LoginPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
function App() {


  return (
    <>
     <Router>
    <Routes>
        <Route path='/' element={<LoginPage/>}/>
     {/*    <Route path='/home' element={<HomePage/>}/> */}
      <Route path='*' element={<NotFoundPage/>}/> 
    </Routes>
 </Router>



    </>
  )
}

export default App
