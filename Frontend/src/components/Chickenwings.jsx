import React from 'react'

const Chickenwings = () => {
    const recipe = {
        title: "Spicy Chicken Wings",
        image: "images/g1.jpg", 
        ingredients: [
            "Chicken wings", "Olive oil", "Garlic powder", "Onion powder", "Paprika", "Cayenne pepper", "Chili powder", "Salt",
            "Black pepper", "Buffalo sauce", "Honey", "Lemon juice", "Fresh parsley",

        ],
        steps: [
            "Preheat the Oven or Grill:", "Preheat your oven to 400°F (200°C) or grill to medium-high heat.",
            "Prepare the Wings:", "Pat dry the wings and toss them with olive oil in a large bowl.",
            "Season the Wings:", "Add garlic powder, onion powder, paprika, cayenne, chili powder, salt, and pepper. Mix well.",
            "Cook the Wings:", "Oven: Bake on a lined sheet for 25-30 minutes, flipping halfway. Grill: Cook for 20-25 minutes, turning occasionally.",
            "Make the Spicy Sauce:", "Combine buffalo sauce, honey, and lemon juice in a saucepan. Heat and stir until warm.",
            "Toss the Wings in Sauce:", "Toss cooked wings in the spicy sauce until fully coated.",
            "Serve:", "Garnish with parsley and serve with ranch or blue cheese, celery, and carrot sticks.",
        ]
    };
    return (
        <>
            <div className="container mt-5">
                <div className="card shadow-lg">
                    <div className="row g-0">
                        <h2 className="card-title mb-4" style={{ color: "#513b3b", marginLeft: "15px", fontWeight: "bold" }}>
                            {recipe.title}
                        </h2>
                        
                        <div className="col-md-6 d-flex flex-column">

                      
                            <div className="p-4">
                                <h4 className="text-muted mb-3">Ingredients</h4>
                                <ul className="list-group list-group-flush">
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li key={index} className="list-group-item">
                                            {ingredient}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                          
                            <div className="mt-auto">
                                <img
                                    src={recipe.image}
                                    className="img-fluid "
                                    alt={recipe.title}
                                    style={{
                                        height: "500px",
                                        objectFit: "cover",
                                        width: "100%",
                                       
                                    }}
                                />
                            </div>
                        </div>

            
                        <div className="col-md-6">
                            <div className="card-body p-4 h-100">

                                <div className="steps-container" style={{ height: "calc(100% - 80px)" }}>
                                    <h4 className="text-muted mb-3">Steps</h4>
                                    <div className="list-group list-group-numbered">
                                        {recipe.steps.map((step, index) => (
                                            <li key={index} className="list-group-item" style={{ backgroundColor: "#e4d1d1" }}>
                                                {step}
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chickenwings
