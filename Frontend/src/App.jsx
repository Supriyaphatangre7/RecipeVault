import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import About from "./components/About";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Recipes from "./components/Recipes";
import RecipeDetail from "./components/RecipeDetail";
import Chickenwings from "./components/chickenwings";
import VeganSalad from "./components/VeganSalad";
import Chocolate from "./components/Chocolate";
import Pasta from "./components/Pasta";
import UploadRecipe from "./components/UploadRecipe";
import Footer from "./components/Footer";



function App() {

  return (
    <>
<div className="main-content">
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/recipes" element={<Recipes />} />
          <Route path="/chicken" element={<Chickenwings />} />
          <Route path="/vegan" element={<VeganSalad />} />
          <Route path="/choco" element={<Chocolate />} />
          <Route path="/pasta" element={<Pasta />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/recipe" element={<UploadRecipe />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    
      </div>

    </>

  )

}



export default App
