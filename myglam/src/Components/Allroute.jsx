import { Routes , Route } from "react-router-dom"
import Home from "../Pages/Home"
import Lipstick from "../Pages/Lipstick";
import MakeUp from "../Pages/Makeup";
import Nails from "../Pages/Nails";
import Powder from "../Pages/Powder";

import SingleProduct from "../Pages/SingleProduct";

const AllRoutes = ()=>{
    return(
       <Routes>
       <Route path="/" element={<Home/>} ></Route>
       <Route path="/product" element={<Home/>} ></Route>
       <Route path="/product/:id" element={<SingleProduct/>} ></Route>
       <Route path="/makeup" element={<MakeUp/>} ></Route>
       <Route path="/Lipstick" element={<Lipstick/>} ></Route>
       <Route path="/nailpolish" element={<Nails/>} ></Route>
       <Route path="/facepowder" element={<Powder/>} ></Route>
       </Routes>
    )
}

export default AllRoutes;