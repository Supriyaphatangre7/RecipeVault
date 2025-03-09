import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

const UploadRecipe = () => {
  const [formData, setFormData] = useState({
    title: '',       // Correctly initialized for the title
    image: null,
    ingredients: [''],
    steps: [''],
    category: '',
    notes: '',  // Ensure notes is initialized here
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Update formData based on user input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Update an array (ingredients or steps)
  const handleArrayChange = (type, index, value) => {
    setFormData(prev => ({
      ...prev,
      [type]: prev[type].map((item, i) => 
        i === index ? value : item
      )
    }));
  };

  // Add a new empty field to an array (ingredients or steps)
  const addField = (type) => {
    setFormData(prev => ({
      ...prev,
      [type]: [...prev[type], '']
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      image: e.target.files[0]
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append('title', formData.title);
    data.append('image', formData.image);
    data.append('ingredients', JSON.stringify(
      formData.ingredients.filter(i => i.trim() !== '')
    ));
    data.append('steps', JSON.stringify(
      formData.steps.filter(s => s.trim() !== '')
    ));
    data.append('category', formData.category);
    data.append('notes', formData.notes);

    try {
      const response = await fetch('http://localhost:3000/recipe', {
        method: 'POST',
        body: data
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Upload failed');
      }

      navigate('/recipes', { state: { newRecipe: true } });

    } catch (error) {
      alert(error.message || 'Error uploading recipe');
      console.error('Upload error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-content">
    <div className="container mt-5">
      <h2 className="mb-4">Upload New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title" // This will correctly bind to formData.title
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ingredients</label>
          {formData.ingredients.map((ingredient, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                className="form-control"
                value={ingredient}
                onChange={(e) => handleArrayChange('ingredients', index, e.target.value)}
                required
              />
            </div>
          ))}
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => addField('ingredients')}>
            Add Ingredient
          </button>
        </div>

        <div className="mb-3">
          <label className="form-label">Steps</label>
          {formData.steps.map((step, index) => (
            <div key={index} className="mb-2">
              <textarea
                className="form-control"
                value={step}
                onChange={(e) => handleArrayChange('steps', index, e.target.value)}
                required
              />
            </div>
          ))}
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => addField('steps')}>
            Add Step
          </button>
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required>
            <option value="">Select Category</option>
            <option value="breakfast">Breakfast</option>
            <option value="vegan">Vegan</option>
            <option value="meat">Meat</option>
            <option value="drinks-smoothies">Drinks & Smoothies</option>
            <option value="dessert">Dessert</option>
            <option value="snacks">Snacks</option>
            <option value="lunch">Lunch</option>
            <option value="soup">Soup</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Notes</label>
          <input
            type="text"
            className="form-control"
            name="notes" // Correctly maps to formData.notes
            value={formData.notes}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Uploading...' : (
            <>
              Upload Recipe <FontAwesomeIcon icon={faCloudArrowUp} />
            </>
          )}
        </button>
      </form>
    </div>
    </div>
  );
};

export default UploadRecipe;
