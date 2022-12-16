import './App.css';
import AllRoutes from './Components/Allroute';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
// import Home from './Pages/Home';


function App() {
  return (
    <>
    <Navbar/>
    {/* <Home/> */}
    <AllRoutes/>
    <Footer/>
    </>
  );
}

export default App;