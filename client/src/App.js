import './App.css'
import SignUp from './components/SignUp'
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from "react-router";
import SignIn from './components/SignIn'


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
