import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');


  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setIsLoading(true);
        console.log('Fetching recipes for category:', category);
        let url = 'http://localhost:3000/recipe';
        
        if (category) {
          const formattedCategory = category.toLowerCase().replace(/[\s&]+/g, '-');
          console.log('Formatted category:', formattedCategory);
          url += `?category=${encodeURIComponent(formattedCategory)}`;
        }
  
        console.log('Request URL:', url);
        const response = await fetch(url);
        console.log('Response status:', response.status);
        
        const data = await response.json();
        console.log('Received data:', data);
        
        if (data.success) {
          setRecipes(data.data);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      }
      finally {
        setIsLoading(false); 
      }
    };
  
    fetchRecipes();
  }, [category]);


  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(query)
    );
    setFilteredRecipes(filtered);
  };

  if (isLoading) {
    return <p>Loading recipes...</p>;
  }

  if (!isLoading && recipes.length === 0) {
    return <p>No recipes found in this category.</p>;
  }

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4" style={{ fontWeight: "700", color: "#343a40" }}>
          {category ? `${category.replace(/-/g, ' ').toUpperCase()} Recipes` : 'All Recipes'}
        </h1>
        <p className="lead" style={{ color: "#6c757d" }}>Browse our recipe collection</p>
        
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
            border: "1px solid #ddd",
            fontSize: "1rem",
          }}
        />
      </div>

      <div className="row text-center">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((val) => (
            <div className="col-md-3 mb-4" key={val._id}>
  <div className="card shadow hover-effect h-100" >
    <div style={{ height: "300px", overflow: "hidden" }}>
      <img
        src={val.image || 'https://via.placeholder.com/300x200'}
        className="card-img-top"
        alt={val.title || 'Recipe Image'}
        style={{ 
          height: "100%",
          width: "100%",
          objectFit: "cover",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          backgroundColor: "#f8f9fa"
        }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/300x200';
        }}
      />
    </div>
    <div className="card-body d-flex flex-column">
      <h5 className="card-title mb-3">{val.title}</h5>
      <Link 
        to={`/recipe/${val._id}`}
        className="btn btn-dark mt-auto"
      >
        View Recipe
      </Link>
    </div>
  </div>
</div>
          ))
        ) : (
          <p className="text-muted">No recipes match your search</p>
        )}
      </div>
    </div>
  );
};

export default Recipes;