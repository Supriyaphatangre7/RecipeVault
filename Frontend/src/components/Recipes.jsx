import React, { useState, useEffect } from 'react';
import { useAuth } from '../../store/auth';
import { Link } from 'react-router-dom';

const Recipes = () => {
  const { recipes } = useAuth(); 
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  useEffect(() => {
    setFilteredRecipes(recipes); 
  }, [recipes]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  if (recipes.length === 0) {
    return <p>Loading or no recipes available...</p>;
  }

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4" style={{ fontWeight: "700", color: "#343a40" }}>Delicious Recipes for You</h1>
        <p className="lead" style={{ color: "#6c757d" }}>Browse through our collection of mouth-watering recipes!</p>
       
        <input
          type="text"
          className="form-control"
          placeholder="Search Recipes..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            width: "50%",
            margin: "20px auto",
            padding: "10px",
            borderRadius: "25px",
            border: "1px solid black",
            fontSize: "1rem",
          }}
        />
      </div>

      <div className="row text-center">
        {Array.isArray(filteredRecipes) && filteredRecipes.length > 0 ? (
          filteredRecipes.map((val) => (
            <div className="col-md-3 mb-4" key={val._id}>
              <div className="card shadow hover-effect">
                <img
                  src={val.image}
                  className="card-img-top"
                  alt={val.title}
                  height="100px"
                  style={{ objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ fontSize: "1.1rem", fontWeight: "600", color: "#333" }}>{val.title}</h5>
                  <Link to={`/recipe/${val._id}`} className="btn btn-dark">View Recipe</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found</p> 
        )}
      </div>
    </div>
  );
};

export default Recipes;
