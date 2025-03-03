import { useAuth } from "../../store/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <nav className="navbar bg-white sticky-top">

        <div className="logo">
          <img id="img1" src="images/l1.jpg" alt="" />
          <span className="recipe-text">RECIPE</span>
          <span className="vault-text">VAULT</span>
        </div>


        <ul className="navLinks">
          <li><a href="/" className="link">HOME</a></li>
          <li><a href="/about" className="link">ABOUT</a></li>
          <li><a href="/recipes" className="link">RECIPES</a></li>
        </ul>


        <div className="rightSection">
          {/* <div className="search-container">
            <input type="text" className="search-bar" placeholder="Search..." />

          </div> */}
           

          {isLoggedIn ? (

             <div class="dropdown">
             <a class="btn btn-Light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style={{borderRadius:"60px"}} >
             <FontAwesomeIcon icon={faUser} style={{fontSize:"21px"}} /> 
             </a>
 
             <ul class="dropdown-menu">
               <li><a class="dropdown-item" href="/logout">Logout</a></li>
             </ul>
           </div>

          ) : (
            <>
              <a href="/register"> <button className="signup-button">Register</button></a>
              <a href="/login"> <button className="signup-button">Login</button></a>
            </>
          )}

        </div>
      </nav>
    </>
  )
}