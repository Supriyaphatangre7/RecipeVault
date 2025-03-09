import React from 'react'

const VeganSalad = () => {
    const recipe = {
        title: "Vegan Salad",
        image: "images/q1.jpg", 
        ingredients: [
        "Mixed greens", "Cherry tomatoes", "Cucumber", "Red onion", "Avocado", "Olives", "Chickpeas", "Olive oil", "Lemon juice", "Salt", "Pepper"
        ],
        steps: [
         "Chop the vegetables: Slice cherry tomatoes, cucumber, red onion, and avocado.", "Assemble the salad: In a large bowl, combine mixed greens, tomatoes, cucumber, onion, avocado, olives, and chickpeas.", "Dress the salad: Drizzle olive oil and lemon juice over the salad.", "Season: Add salt and pepper to taste, then toss to combine.", "Add fresh herbs: Sprinkle fresh basil or cilantro over the salad.", "Add crunch: Toss in some toasted sunflower seeds or pumpkin seeds.", "Add sweetness: Toss in some dried cranberries or raisins.", "Toss everything: Gently toss the salad until all ingredients are well mixed.", "Serve immediately: Plate the salad and enjoy your fresh, vibrant dish."
        ],
        notes:[
        "To make the salad even more flavorful, try adding a variety of fresh herbs like parsley or cilantro. You can also add roasted chickpeas or nuts for extra crunch and protein. For a more filling meal, top the salad with avocado slices or a drizzle of tahini dressing. Be sure to use fresh, seasonal vegetables for the best taste and nutrition."
        ]
      };
  return (
    <>
    <div className="main-content">
     <div className="container mt-5">
     <div className="card shadow-lg">
       <div className="row g-0">
         <h2 className="card-title mb-4" style={{ color: "#333", marginLeft: "15px", }}>
        {recipe.title}
        </h2>

        <div className="col-md-6 d-flex flex-column">
        <div className="mt-auto ">
        <img src={recipe.image}className="img-fluid "alt={recipe.title}  />
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
        <li key={index} className="list-group-item" style={{ backgroundColor: "#e4d1d1" }}>{step}</li>
    ))}
                                        
      </div>
      <div className='notes-section' >
        {recipe.notes && (
         <div className="mt-auto p-3 rounded" style={{backgroundColor:"light gray"}}>
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
</div>
    </>
  )
}

export default VeganSalad
