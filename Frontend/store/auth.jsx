import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [recipes, setRecipes] = useState([]);


  const storeTokenInLs = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;

  const LogoutUser = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  // Fetch all recipes
  const getRecipeData = async () => {
    try {
      const response = await fetch("http://localhost:3000/recipe", {
        method: "GET",
      });

      if (response.ok) {
        const recipes = await response.json();
        setRecipes(recipes.data); // Assuming the response has data in 'data' field
      } else {
        console.error("Failed to fetch recipes:", response.statusText);
      }
    } catch (error) {
      console.log("Error fetching recipes:", error);
    }
  };

 

 
  useEffect(() => {
    
    const savedToken=localStorage.getItem("token");
    if(savedToken)
    {
      setToken(savedToken);
    }

    if (token) {
      getRecipeData();
    }
  }, []); // Dependency on token to re-fetch if needed

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLs,
        LogoutUser,
        isLoggedIn,
        recipes,
       
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
