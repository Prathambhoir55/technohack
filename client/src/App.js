import './App.css'
import SignUp from './components/SignUp'
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from "react-router";
import SignIn from './components/SignIn'
import Landing from './components/landing/Landing'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
