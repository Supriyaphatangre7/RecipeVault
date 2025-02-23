import React from 'react'

const Chocolate = () => {
    const recipe = {
        title: "Chocolate cake",
        image: "images/g3.jpg", 
        ingredients: [
            " 1 and 3/4 cups all-purpose flour", "1 and 1/2 cups sugar", " 3/4 cup cocoa powder", "1 and 1/2 teaspoons baking powder", "1 and 1/2 teaspoons baking soda", " 1 teaspoon salt, 2 large eggs", "1 cup whole milk, 1/2 cup vegetable oil", "2 teaspoons vanilla extract", " 1 cup boiling water"
        ],
        steps: [
            "Preheat the oven: Set your oven to 350°F (175°C) and grease two 9-inch round cake pans",
            "Mix dry ingredients: In a large bowl, whisk together the flour, sugar, cocoa powder, baking powder, baking soda, and salt",
            "Add wet ingredients: Add the eggs, milk, oil, and vanilla extract to the dry ingredients",
            "Mix until well combined",
            "Add boiling water: Carefully pour in the boiling water and stir the batter until smooth (it will be thin)",
            "Pour into pans: Divide the batter evenly between the two prepared cake pans",
            "Bake: Bake for 30-35 minutes or until a toothpick inserted into the center comes out clean",
            "Cool: Let the cakes cool in the pans for about 10 minutes, then remove from the pans and transfer to a wire rack to cool completely",
            "Frost: Once the cakes are completely cool, frost with your favorite chocolate frosting and enjoy!"
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

export default Chocolate
