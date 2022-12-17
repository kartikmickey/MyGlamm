import { Routes , Route } from "react-router-dom"
import Home from "../Pages/Home"
import MakeUp from "../Pages/Makeup";
import SingleProduct from "../Pages/SingleProduct";

const AllRoutes = ()=>{
    return(
       <Routes>
       <Route path="/" element={<Home/>} ></Route>
       <Route path="/product" element={<Home/>} ></Route>
       <Route path="/product/:id" element={<SingleProduct/>} ></Route>
       <Route path="/makeup" element={<MakeUp/>} ></Route>
       </Routes>
    )
}

export default AllRoutes;