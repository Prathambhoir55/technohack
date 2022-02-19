import './App.css'
import SignUp from './components/SignUp'
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from "react-router";
import SignIn from './components/SignIn'
import Landing from './components/landing/Landing'
import Dashboard from './components/Dashboard'
import SideBar from './components/SideBar'
import Shop from './components/Shop'
import Events from './components/Events'
import Learn from './components/Learn'
import Tutorials from './components/Tutorials'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
          <Route path="/events" element={<Events />} />
          {/* <Route path="/learn" element={<Learn />} /> */}
          <Route path="/tutorials" element={<Tutorials />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
