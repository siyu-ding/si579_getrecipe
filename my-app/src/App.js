import React, { useState, useEffect } from 'react';
import DescriptionComponent from './components/starter';
import IngredientList from './components/IngredientList';
import ToolSelector from './components/ToolSelector';
import './App.css';


const App = () => {
  // State hooks to track user's selected ingredients and tools.
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedTool, setSelectedTool] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // Toggles the inclusion of an ingredient in the selectedIngredients state.
  const toggleIngredient = (ingredient) => {
    setSelectedIngredients((prevSelected) =>
      prevSelected.includes(ingredient)
        ? prevSelected.filter((i) => i !== ingredient)// Remove if already selected
        : [...prevSelected, ingredient]// Add if not selected
    );
  };

  // Selects or deselects a tool.
  const onSelectTool = (toolName) => {
    setSelectedTool((prevSelectedTool) => prevSelectedTool === toolName ? '' : toolName);
  };

  // Data arrays for vegetables, non-vegetarian options, staples, and tools.
  // Each ingredient/tool has a label and, if applicable, an emoji for display.
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

  // Effect hook that updates the list of filtered recipes based on selections.
  useEffect(() => {
    // This inner function filters the recipe list based on selections.
    const getFilteredRecipes = () => {
      return recipes.filter((recipe) => {
        // Checks if all selected ingredients are in the recipe's ingredient list.
        // Also, checks if the selected tool matches the recipe's required tool.
        const ingredientsMatch = selectedIngredients.length === 0 || selectedIngredients.every(ingredient =>
          recipe.ingredients.includes(ingredient)
        );
        const toolMatch = !selectedTool || recipe.tools === selectedTool;
        return ingredientsMatch && toolMatch;
      });
    };

    // Sets the filteredRecipes state with the result from getFilteredRecipes.
    setFilteredRecipes(getFilteredRecipes());
  }, [selectedIngredients, selectedTool, recipes]);// Dependencies for the useEffect.
  
  
  // The render method returns the UI of the app.
  // It uses subcomponents like DescriptionComponent, IngredientList, and ToolSelector.
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

