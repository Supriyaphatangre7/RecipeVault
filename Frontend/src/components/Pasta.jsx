import React from 'react'

const Pasta = () => {
    const recipe = {
        title: "Pasta Carbonara",
        image: "images/g4.jpg", 
        ingredients: [
            "400g pasta (spaghetti or fettuccine)",
            "150g pancetta or guanciale, diced",
            "3 large eggs",
            "1 cup grated Parmesan cheese",
            "1/2 cup grated Pecorino Romano cheese",
            "2 cloves garlic, minced",
            "Salt, to taste",
            "Freshly ground black pepper, to taste",
            "Olive oil, for cooking"
        ],
        steps: [
            "Cook pasta: Bring a large pot of salted water to a boil and cook pasta according to package instructions until al dente, Drain pasta, reserving 1 cup of pasta water",
            "Cook pancetta: In a large skillet, heat a little olive oil over medium heat and cook the pancetta or guanciale until crispy, about 5 minutes",
            "Add garlic: Stir in minced garlic and cook for another 30 seconds",
            "Whisk eggs and cheese: In a bowl, whisk together the eggs, Parmesan, and Pecorino cheese",
            "Season: Add a pinch of salt and freshly ground black pepper to the egg mixture",
            "Combine: Add the drained pasta to the skillet with pancetta and garlic, tossing to coat",
            "Remove from heat: Take the skillet off the heat and quickly pour in the egg and cheese mixture, stirring vigorously to create a creamy sauce",
            "Adjust consistency: If the sauce is too thick, add a little reserved pasta water to reach the desired consistency"
        ],
        notes: [
            "Pasta Carbonara is best served immediately while the sauce is still creamy and fresh. It's important to avoid overcooking the pasta or scrambling the eggs when mixing the sauce."
        ],
    }

    return (
        <>
    <div className="container mt-5">
      <div className="card shadow-lg">
       <div className="row g-0">
        <h2 className="card-title mb-4" style={{ color: "#513b3b", marginLeft: "15px", fontWeight: "bold" }}>          {recipe.title}
        </h2>
        <div className="col-md-6 d-flex flex-column">
          <div className="mt-auto ">
           <img src={recipe.image} className="img-fluid " alt={recipe.title}  />
           </div>
           <div className="p-4">
             <h4 className="text-muted mb-3">Ingredients</h4>
             <ul className="list-group list-group-flush">
             {recipe.ingredients.map((ingredient, index) => (
             <li key={index} className="list-group-item">  {ingredient}</li>))}
             </ul>
          </div>
    </div>

   <div className="col-md-6">
     <div className="card-body p-4 h-100">
       <div className="steps-container" style={{ height: "calc(100% - 80px)" }}>
        <h4 className="text-muted mb-3">Steps</h4>
        <div className="list-group list-group-numbered">
          {recipe.steps.map((step, index) => (
          <li key={index} className="list-group-item" style={{ backgroundColor: "#e4d1d1" }}>{step}</li>))}
       </div>
                               
       <div className='notes-section' >
        {recipe.notes && (
         <div className="mt-auto p-3  rounded">
            <h4 className="text-muted">Chef's Notes</h4>
            <p className="lead mb-0" style={{ color: "#5a4f4f" }}> {recipe.notes} </p>
        </div>
        )}
        </div>
        
       </div>
      </div>
     </div>
   </div>
 </div>
</div>
        </>
    );
}

export default Pasta;
