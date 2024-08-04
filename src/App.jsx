import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Shop from './pages/Shop'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
