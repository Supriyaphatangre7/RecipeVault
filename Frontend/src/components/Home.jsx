import React from 'react';
import About from './About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export const Home = () => {

  return (
    <>
  
        <div className='home'>
          <div className="hero-container">
            <div className="hero-content">
              <div className="left-section">
                <button className="revbtn">
                  <img id="img2" src="images/l2.jpg" alt="" /> Hot Recipes
                </button>
                <div className="hero-text">
                  <h2 className="dish-title">Spicy Delicious</h2>
                  <h2 className="dish-title">Chicken Wings</h2>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exxon tie enim
                    POLARIONS, singula cupidatius qua ut aptitudinis, la eius seduta fugiat.
                  </p>

                  <a href="#about">
                    <button className="reviews-btn">Get Started</button>
                  </a>
                  <Link to="/recipe">
                    <button className="reviews-btn" id="btn1">
                      Upload <FontAwesomeIcon icon={faCloudArrowUp} style={{ marginLeft: "3px", fontSize: "18px" }} />
                    </button>
                  </Link>
                </div>
              </div>

              <div className="hero-img">
                <img src="images/d3.jpg" alt="Hero Image" height="540px" width="700px" />
              </div>
            </div>
          </div>

          <div className="categories">
            <div className='parent'>
              <div>
                <h4 className="categories-title">Categories</h4>
              </div>
              <div>
                <a href="/recipes"><button className="categorybtn"><h6 id='catetext'>View All Categories</h6></button></a>
              </div>
            </div>


            <div className="containercard">
              <div className="row">
                <div className="col">
                  <Link to="/recipes?category=breakfast" className="card-link">
                    <div className="card hover-effect">
                      <img src="images/r1.png" alt="Breakfast" />
                      <h5>breakfast</h5>
                    </div>
                  </Link>
                </div>
                <div className="col">
                  <Link to="/recipes?category=vegan" className="card-link">
                    <div className="card hover-effect">
                      <img src="images/r2.png" alt="Vegan" />
                      <h5>vegan</h5>
                    </div>
                  </Link>
                </div>

                <div className="col">
                  <Link to="/recipes?category=meat" className="card-link">
                    <div className="card hover-effect">
                      <img src="images/r3.png" alt="Meat" />
                      <h5>Meat</h5>
                    </div>
                  </Link>
                </div>


                <div className="col">
                  <Link to="/recipes?category=drinks-smoothies" className="card-link">
                    <div className="card hover-effect">
                      <img src="images/r8.png" alt="Drinks" />
                      <h5>Drinks & Smoothies</h5>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="row" style={{ marginTop: "40px" }}>
                <div className="col">
                  <Link to="/recipes?category=dessert" className="card-link">
                    <div className="card hover-effect">
                      <img src="images/r4.png" alt="Dessert" />
                      <h5>Dessert</h5>
                    </div>
                  </Link>
                </div>

                <div className="col">
                  <Link to="/recipes?category=snacks" className="card-link">
                    <div className="card hover-effect">
                      <img src="images/r5.png" alt="Snacks" />
                      <h5>Snacks</h5>
                    </div>
                  </Link>
                </div>

                <div className="col">
                  <Link to="/recipes?category=lunch" className="card-link">
                    <div className="card hover-effect">
                      <img src="images/r6.png" alt="Lunch" />
                      <h5>Lunch</h5>
                    </div>
                  </Link>
                </div>

                <div className="col">
                  <Link to="/recipes?category=soup" className="card-link">
                    <div className="card hover-effect">
                      <img src="images/r7.png" alt="Soup" />
                      <h5>Soup</h5>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>


          <h4 className="categories-title">Explore More</h4>
          <div className="container" style={{ marginTop: "50px" }}>
            <div className="row g-4">
              <div className="col-lg-3 mb-4">
                <div className="card shadow hover-effect">
                  <img
                    src="images/g1.jpg"
                    className="card-img-top"
                    alt="Spicy Chicken Wings"
                    height="200px" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Spicy Chicken Wings</h5>
                    <a href="/chicken" className="btn btn-dark">
                      View Recipe
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 mb-4">
                <div className="card shadow hover-effect">
                  <img
                    src="images/g2.jpg"
                    className="card-img-top"
                    alt="Vegan Salad"
                    height="200px"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Vegan Salad</h5>
                    <a href="/vegan" className="btn btn-dark">
                      View Recipe
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 mb-4">
                <div className="card shadow hover-effect">
                  <img
                    src="images/g3.jpg"
                    className="card-img-top"
                    alt="Chocolate Cake"
                    height="200px"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Chocolate Cake</h5>
                    <a href="/choco" className="btn btn-dark">
                      View Recipe
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 mb-4">
                <div className="card shadow hover-effect">
                  <img
                    src="images/g4.jpg"
                    className="card-img-top"
                    alt="Pasta Carbonara"
                    height="200px"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Pasta Carbonara</h5>
                    <a href="/pasta" className="btn btn-dark">
                      View Recipe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="containerdemo">
            <div className="row justify-content-center" style={{ marginTop: "140px" }}>
              <div className="col-md-6 col-lg-5">
                <p style={{ fontSize: "20px", lineHeight: "1.6", textAlign: "justify", marginLeft: "80px", marginTop: "60px" }}>
                  Samosas are a popular and delicious snack, often enjoyed as an appetizer or street food in many cultures. To make samosas, start by preparing the filling, typically a spiced mixture of mashed potatoes, peas, onions, and various aromatic spices like cumin, coriander, garam masala, and turmeric. Some variations include minced meat, such as chicken or lamb, instead of potatoes. Once the filling is ready, prepare the dough by mixing flour, salt, and a little oil or ghee to form a smooth dough. Roll the dough into small balls, flatten them into circles, and cut each circle in half to form a semi-circle.
                </p>
              </div>

              <div className="col-md-6 col-lg-5">
                <div className="card" style={{ height: "490px", overflow: "hidden", width: "350px", marginLeft: "200px" }}>
                  <img src="images/z4.jpg" className="card-img-top" alt="Image description" style={{ height: "700px", width: "400px" }} />
                </div>
              </div>
            </div>
          </div>


          <div className="containerdemo">
            <div className="row justify-content-center" style={{ marginTop: "100px" }}>
              <div className="col-md-6 col-lg-5">
                <div className="card" style={{ height: "490px", overflow: "hidden", width: "350px", marginLeft: "80px" }}>
                  <img src="images/z5.jpg" className="card-img-top" alt="Image description" style={{ height: "800px", width: "350px" }} />
                </div>
              </div>

              <div className="col-md-6 col-lg-5">
                <p style={{ fontSize: "20px", lineHeight: "1.6", textAlign: "justify", marginLeft: "10px", marginTop: "60px" }}>
                  Crispy Beef Spring Rolls are a popular dish in many Asian cuisines, especially in Chinese and Vietnamese cooking. They consist of a savory filling made from seasoned ground beef and vegetables, wrapped in a thin rice paper or flour wrapper. After being tightly rolled, they are deep-fried until golden and crunchy. These spring rolls are typically served as appetizers, snacks, or even a main dish depending on the portion size, often accompanied by a dipping sauce like sweet chili sauce or soy sauce.The crispy exterior combined with the tender, flavorful filling offers a satisfying contrast.Crispy Beef Spring Rolls are beloved for their satisfying crunch and rich filling, making them perfect for parties.
                </p>
              </div>
            </div>
          </div>


          <div id="about">
            <About />
          </div>


          <div style={{ marginTop: "150px", padding: "40px", backgroundColor: "black", color: "white", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "space-around", height: "120px" }}>
              {[
                { number: "500+", label: "Happy Clients" },
                { number: "300+", label: "Projects Delivered" },
                { number: "100+", label: "Team Members" },
                { number: "24/7", label: "Support" },
              ].map((item, index) => (
                <div key={index} style={{ borderRight: index !== 3 ? "2px solid #fff" : "none", padding: "0 20px" }}>
                  <h2 style={{ fontSize: "2.5rem", margin: "0" }}>{item.number}</h2>
                  <p style={{ fontSize: "1.2rem" }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    

    </>
  );
};
