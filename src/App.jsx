import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'


function App() {


  return (
    <Router>
    <Routes>
       {/*  <Route path='/' element={<LoginPage/>}/> */}
        <Route path='/home' element={<HomePage/>}/>
{/*         <Route path='*' element={}/> */}
    </Routes>
 </Router>

  )
}

export default App;
