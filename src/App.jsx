import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./css/style.css";
import "./styles/custom.css"; // Importing custom styles
import Home from './components/Home';
import Navbar from "./components/Navbar";
import DetailsPage from "./pages/DetailsPage";
import ContactUs from "./components/ContactUs";
import Accountes from './Pages/Accountes';
import Footer from "./components/Footer";

function App() {
 
  return (
    <Router>
     
     <Navbar/>
     
     <Routes>
      <Route path="/" element={<Home/>} />
       <Route path='/account' element={<Accountes/>}/>
       <Route path='/details/:id' element={<DetailsPage/>}/>
       <Route path='/contact'element={<ContactUs/>}/>
     </Routes>
     <Footer/>
    </Router>
  )
}

export default App
