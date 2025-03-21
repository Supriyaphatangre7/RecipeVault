import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../store/auth';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const { token } = useAuth();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`http://localhost:3000/recipe/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setRecipe(data.data);
            } catch (error) {
                console.error("Error fetching recipe:", error);
            }
        };
        fetchRecipe();
    }, [id, token]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div className="main-container">
        <div className="main-content">
            <div className="container mt-5 flex-grow-1">
                <div className="card shadow-lg h-100">
                    <div className="row g-0 h-100">
                        <h2 className="card-title mb-4" style={{ color: "#333", marginLeft: "15px",  }}>
                            {recipe.title}
                        </h2>
                        <div className="col-md-6 d-flex flex-column">
                            <div className="mt-auto p-2">
                                <img src={recipe.image} className="img-fluid rounded-bottom" alt={recipe.title} style={{
                                    borderRadius: "8px",
                                    height: "520px",
                                    width: "100%"}} />
                            </div>
                            <div className="p-4">
                                <h3 className="text-muted mb-3">Ingredients</h3>
                                <ul className="list-group list-group-flush">
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li key={index} className="list-group-item d-flex align-items-center">
                                            <span className="me-2">•</span>
                                            {ingredient}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex flex-column">
                            <div className="card-body p-4 h-100 d-flex flex-column">
                                <div className="mb-4 flex-grow-1">
                                    <h3 className="text-muted mb-3">Steps</h3>
                                    <ol className="list-group">
                                        {recipe.steps.map((step, index) => (
                                            <li key={index} className="list-group-item d-flex align-items-start" style={{ backgroundColor: "#e4d1d1" }}>
                                                <div className="ms-2 me-auto">
                                                    <span className="fw-bold">{index + 1}.</span> {step}
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                    <div className="notes-section mt-auto">
                                        {recipe.notes && (
                                            <div className="mt-3 p-3 rounded">
                                                <h4 className="text-muted">Chef's Notes</h4>
                                                <p className="lead mb-0" style={{ color: "#5a4f4f" }}>
                                                    {recipe.notes}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
        
    );
};



export default RecipeDetail;