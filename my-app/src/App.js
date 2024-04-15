import React, { useState, useEffect } from 'react';
import DescriptionComponent from './components/starter';
import IngredientList from './components/IngredientList';
import ToolSelector from './components/ToolSelector';
import './App.css';


const App = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedTool, setSelectedTool] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // Toggle the selection state of an ingredient
  const toggleIngredient = (ingredient) => {
    setSelectedIngredients((prevSelected) =>
      prevSelected.includes(ingredient)
        ? prevSelected.filter((i) => i !== ingredient)
        : [...prevSelected, ingredient]
    );
  };

  // Select a single tool at a time
  const onSelectTool = (toolName) => {
    setSelectedTool((prevSelectedTool) => prevSelectedTool === toolName ? '' : toolName);
  };


  

  // Define ingredients data
  const Vegetables = [
    { label: 'Potato', emoji: '🥔' },
    { label: 'Carrot', emoji: '🥕' },
    { label: 'Tomato', emoji: '🍅' },
    { label: 'Eggplant', emoji: '🍆' },
    { label: 'Cabbage', emoji: '🥬' },
    { label: 'Onion', emoji: '🧅' },
    { label: 'Mushroom', emoji: '🍄' },
    
  ];
  const non_vegetarian = [
    { label: 'Sausage', emoji: '🌭️' },
    { label: 'Chicken', emoji: '🍗' },
    { label: 'Pork', emoji: '🥓' },
    { label: 'Bones', emoji: '🦴' },
    { label: 'Beef', emoji: '🥩' },
    { label: 'Egg', emoji: '🥚' },
    { label: 'Shrimp', emoji: '🦐' },
    
  ];
  const main_dish = [
    { label: 'Rice', emoji: '🍚' },
    { label: 'Noodles', emoji: '🍜' },
    { label: 'Bread', emoji: '🍞' },
    
  ];
  const tools = [
    { name: 'Large Pot' },
    { name: 'Air Fryer' },
    { name: 'Microwave'},
    { name: 'Rice Cooker'},
    { name: 'Oven' },
  ];



  // eslint-disable-next-line react-hooks/exhaustive-deps
  const recipes = [
    {
      name: 'Rice Cooker Cantonese Sausage Rice',
      ingredients: ['Sausage', 'Rice'],
      tools: 'Rice Cooker',
    },
    {
      name: 'Rice Cooker Roast Chicken',
      ingredients: ['Chicken', 'Onion', 'Mushrooms'],
      tools: 'Rice Cooker',
    },
    {
      name: 'BBQ Chicken Legs',
      ingredients: ['Chicken'],
      tools: 'Oven',
    },
    {
      name: 'BBQ Smoked Pulled Pork',
      ingredients: ['Pork'],
      tools: 'Oven',
    },
    {
      name: 'Oven-Baked Orange Chicken Wings',
      ingredients: ['Chicken'],
      tools: 'Oven',
    },
    {
      name: 'Oven-Baked Crispy Pork Belly',
      ingredients: ['Pork'],
      tools: 'Oven',
    },
    {
      name: 'Air Fryer Garlic Eggplant',
      ingredients: ['Eggplant'],
      tools: 'Air Fryer',
    },
    {
      name: 'Air Fryer Fried Cabbage',
      ingredients: ['Cabbage'],
      tools: 'Air Fryer',
    },
    {
      name: 'Air Fryer Cola Chicken Wings',
      ingredients: ['Chicken'],
      tools: 'Air Fryer',
    },
    {
      name: 'Tomato Pork Rib Soup',
      ingredients: ['Tomato', 'Bones'],
      tools: 'Large Pot',
    },
    {
      name: 'Tomato Braised Eggplant',
      ingredients: ['Eggplant', 'Tomato'],
      tools: 'Large Pot',
    },
    {
      name: 'Tomato Beef Brisket Rice',
      ingredients: ['Beef', 'Potato', 'Tomato', 'Carrot', 'Rice'],
      tools: 'Large Pot',
    },
    {
      name: 'Tomato Cheese Omelette',
      ingredients: ['Tomato', 'Egg'],
      tools: 'Large Pot',
    },
    {
      name: 'Noodle Fried Rice',
      ingredients: ['Noodles', 'Rice', 'Sausage', 'Egg'],
      tools: 'Large Pot',
    },
    {
      name: 'Stir-Fried Lettuce with Meat',
      ingredients: ['Lettuce', 'Pork'],
      tools: 'Large Pot',
    },
    {
      name: 'Microwave Tomato Braised Rice',
      ingredients: ['Sausage', 'Tomato'],
      tools: 'Microwave',
    },
    {
      name: 'Microwave Mushroom Chicken Rice',
      ingredients: ['Chicken', 'Carrot', 'Mushrooms', 'Rice'],
      tools: 'Microwave',
    },
    {
      name: 'Microwave Baked Salt Potatoes',
      ingredients: ['Potato'],
      tools: 'Microwave',
    },
    {
      name: 'Microwave Hot Pot',
      ingredients: ['Mushrooms', 'Beef', 'Instant Noodles', 'Shrimp', 'Chicken', 'Pork', 'Luncheon Meat', 'Lettuce', 'Tofu', 'Potato'],
      tools: 'Microwave',
    }
  ];

  useEffect(() => {
    const getFilteredRecipes = () => {
      return recipes.filter((recipe) => {
        const ingredientsMatch = selectedIngredients.length === 0 || selectedIngredients.every(ingredient =>
          recipe.ingredients.includes(ingredient)
        );
        const toolMatch = !selectedTool || recipe.tools === selectedTool;
        return ingredientsMatch && toolMatch;
      });
    };

    setFilteredRecipes(getFilteredRecipes());
  }, [selectedIngredients, selectedTool, recipes]);


  return (
    <div className="app-container">
      <DescriptionComponent
        title="Let's start to get today's recipe！"
        subtitle="1. Please select ingredients first!"
      />
      <h3>Select Vegetables</h3>
      <IngredientList
        ingredients={Vegetables}
        selectedIngredients={selectedIngredients}
        toggleIngredient={toggleIngredient}
      />
      <h3>Select non-vegetarian dish</h3>
      <IngredientList
        ingredients={non_vegetarian}
        selectedIngredients={selectedIngredients}
        toggleIngredient={toggleIngredient}
      />
      <h3>Choose a staple (it's okay if you don't)</h3>
      <IngredientList
        ingredients={main_dish}
        selectedIngredients={selectedIngredients}
        toggleIngredient={toggleIngredient}
      />
      <DescriptionComponent
        subtitle="2. Then select the cooking tool you want to use!"
      />
      <ToolSelector
        tools={tools}
        selectedTool={selectedTool}
        onSelectTool={onSelectTool}
      />
      <DescriptionComponent
      subtitle="GET YOUR RECIPE HERE"
    />
    {/* Conditionally display recipes or a prompt */}
    <div>
      {selectedIngredients.length > 0 || selectedTool ? (
        filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.name}>{recipe.name}</div>
          ))
        ) : (
          <div>No matching recipes found.</div>
        )
      ) : (
        <div>Please select the Ingredient or Tools first～</div>
      )}
    </div>
    </div>
  );
  
};

export default App;

