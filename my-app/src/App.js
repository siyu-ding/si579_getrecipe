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

  const [isGetRecipeClicked, setIsGetRecipeClicked] = useState(false);
  const [shouldUpdateRecipes, setShouldUpdateRecipes] = useState(false);

  const handleGetRecipeClick = () => {
    setIsGetRecipeClicked(true);
    setShouldUpdateRecipes(true);
  };


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
      imageUrl: 'https://onolicioushawaii.com/wp-content/uploads/2020/08/Chinese-Sausage-Rice-Cooker-4.jpg',
      recipeUrl: 'https://onolicioushawaii.com/chinese-sausage-rice-cooker/'
    },
    {
      name: 'Rice Cooker Roast Chicken',
      ingredients: ['Chicken', 'Onion', 'Mushrooms'],
      tools: 'Rice Cooker',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UpGeXto7omk_KCYRrGvvVl7CO8RERLIlNcz-mfCFbw&s',
      recipeUrl: 'https://www.youtube.com/watch?app=desktop&v=xw4gIhfqjfc'
    },
    {
      name: 'BBQ Chicken Legs',
      ingredients: ['Chicken'],
      tools: 'Oven',
      imageUrl: 'https://www.wholesomeyum.com/wp-content/uploads/2023/03/wholesomeyum-BBQ-Chicken-Legs-Drumsticks-14.jpg',
      recipeUrl: 'https://www.allrecipes.com/recipe/8378238/baked-bbq-chicken-drumsticks/'
    },
    {
      name: 'BBQ Smoked Pulled Pork',
      ingredients: ['Pork'],
      tools: 'Oven',
      imageUrl: 'https://www.allrecipes.com/thmb/j70Ce0YVl1NZJiTD6UYnS6rPIhw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1198969-616b80c4a07e48e6b51bb65462d829ea.jpg',
      recipeUrl: 'https://www.allrecipes.com/recipe/236104/bobs-pulled-pork-on-a-smoker/'
    },
    {
      name: 'Oven-Baked Orange Chicken Wings',
      ingredients: ['Chicken'],
      tools: 'Oven',
      imageUrl: 'https://marvel-b1-cdn.bc0a.com/f00000000291013/www.sunkist.com/wp-content/uploads/2019/09/Valencia-Orange-Wings4.jpg',
      recipeUrl: 'https://www.megseverydayindulgence.com/2021/01/28/orange-chicken-wings-air-fryer-and-oven-methods/'
    },
    {
      name: 'Oven-Baked Crispy Pork Belly',
      ingredients: ['Pork'],
      tools: 'Oven',
      imageUrl: 'https://www.recipetineats.com/wp-content/uploads/2021/04/Slow-Roasted-Pork-Belly-with-Jus-and-Apple-Sauce-SQ.jpg',
      recipeUrl: 'https://kirbiecravings.com/crispy-golden-pork-belly/'
    },
    {
      name: 'Air Fryer Garlic Eggplant',
      ingredients: ['Eggplant'],
      tools: 'Air Fryer',
      imageUrl: 'https://tiffycooks.com/wp-content/uploads/2022/06/7667C11E-EED8-46F9-A555-757A00BA6990-768x1024.jpg',
      recipeUrl: 'https://tiffycooks.com/air-fryer-chinese-eggplant-20-minutes/'
    },
    {
      name: 'Air Fryer Fried Cabbage',
      ingredients: ['Cabbage'],
      tools: 'Air Fryer',
      imageUrl: 'https://temeculablogs.com/wp-content/uploads/2020/01/air-fried-cabbage.jpg',
      recipeUrl: 'https://temeculablogs.com/air-fryer-cabbage/'
    },
    {
      name: 'Air Fryer Cola Chicken Wings',
      ingredients: ['Chicken'],
      tools: 'Air Fryer',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0556/0968/8232/files/BLOG-Air-fryer-cola-wings-5.jpg?v=1695021481',
      recipeUrl: 'https://goodmaison.com/blogs/recipes/air-fryer-cola-wings'
    },
    {
      name: 'Tomato Pork Rib Soup',
      ingredients: ['Tomato', 'Bones'],
      tools: 'Large Pot',
      imageUrl: 'https://i.ytimg.com/vi/yJWqQaUKFEc/maxresdefault.jpg',
      recipeUrl: 'https://www.youtube.com/watch?app=desktop&v=yJWqQaUKFEc'
    },
    {
      name: 'Tomato Braised Eggplant',
      ingredients: ['Eggplant', 'Tomato'],
      tools: 'Large Pot',
      imageUrl: 'https://thenewbaguette.com/wp-content/uploads/2021/06/tomato-eggplant-stew-27.jpg',
      recipeUrl: 'https://thenewbaguette.com/tomato-eggplant-stew/'
    },
    {
      name: 'Tomato Beef Brisket Rice',
      ingredients: ['Beef', 'Potato', 'Tomato', 'Carrot', 'Rice'],
      tools: 'Large Pot',
      imageUrl: 'https://img.tastelife.tv/assets/uploads/2020/07/Tomato_Beef_Briskit_Flat_Rice_Chef_John_01084_P5-684x480.jpg',
      recipeUrl: 'https://www.tastelife.tv/recipe/stewed-beef-brisket-with-tomato_15418.html'
    },
    {
      name: 'Tomato Cheese Omelette',
      ingredients: ['Tomato', 'Egg'],
      tools: 'Large Pot',
      imageUrl: 'https://fyf20quid.co.uk/wp-content/uploads/cooked/images/recipes/recipe_12910.jpg',
      recipeUrl: 'https://fyf20quid.co.uk/recipes/cheese-and-tomato-omelette/'
    },
    {
      name: 'Noodle Fried Rice',
      ingredients: ['Noodles', 'Rice', 'Sausage', 'Egg'],
      tools: 'Large Pot',
      imageUrl: 'https://www.yummytummyaarthi.com/wp-content/uploads/2015/06/4-11.jpg',
      recipeUrl: 'https://www.yummytummyaarthi.com/veg-noodles-fried-rice-recipe/'
    },
    {
      name: 'Stir-Fried Lettuce with Meat',
      ingredients: ['Lettuce', 'Pork'],
      tools: 'Large Pot',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl5Y1B36aJMLadBaZiYuqSC40aW-FWiCX8xlC159SBVw&s',
      recipeUrl: 'https://www.bonappetit.com/recipe/beef-and-romaine-stir-fry'
    },
    {
      name: 'Microwave Tomato Braised Rice',
      ingredients: ['Sausage', 'Tomato'],
      tools: 'Microwave',
      imageUrl: 'https://cookanyday.com/cdn/shop/products/Anyday_May_2021_5714_1024.jpg?v=1622163319',
      recipeUrl: 'https://cookanyday.com/products/tomato-rice'
    },
    {
      name: 'Microwave Mushroom Chicken Rice',
      ingredients: ['Chicken', 'Carrot', 'Mushrooms', 'Rice'],
      tools: 'Microwave',
      imageUrl: 'https://neighborfoodblog.com/wp-content/uploads/2024/01/creamy-mushroom-chicken-and-rice-2.jpg',
      recipeUrl: 'https://neighborfoodblog.com/creamy-mushroom-chicken-and-rice/'
    },
    {
      name: 'Microwave Baked Salt Potatoes',
      ingredients: ['Potato'],
      tools: 'Microwave',
      imageUrl: 'https://www.allrecipes.com/thmb/5F_94mUXne2S5ODVZW1bYgfr074=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/85337-microwave-baked-potato-DDMFS-4x3-f10fc0f5cd9b4278b45204068803f61e.jpg',
      recipeUrl: 'https://www.allrecipes.com/recipe/85337/microwave-baked-potato/'
    },
    {
      name: 'Microwave Hot Pot',
      ingredients: ['Mushrooms', 'Beef', 'Instant Noodles', 'Shrimp', 'Chicken', 'Pork', 'Luncheon Meat', 'Lettuce', 'Tofu', 'Potato'],
      tools: 'Microwave',
      imageUrl: 'https://thefoodietakesflight.com/wp-content/uploads/2023/12/Vegan-Hotpot-or-Shabu-Shabu-55-of-88-500x500.jpg',
      recipeUrl: 'https://thefoodietakesflight.com/chinese-hot-pot/'
    }
  ];

  // Effect hook that updates the list of filtered recipes based on selections.
  useEffect(() => {
    // This inner function filters the recipe list based on selections.
    if (shouldUpdateRecipes) {
      const getFilteredRecipes = () => {
        return recipes.filter((recipe) => {
          const ingredientsMatch =
            selectedIngredients.length === 0 ||
            selectedIngredients.every((ingredient) => recipe.ingredients.includes(ingredient));
          const toolMatch = !selectedTool || recipe.tools === selectedTool;
          return ingredientsMatch && toolMatch;
        });
      };

    // Sets the filteredRecipes state with the result from getFilteredRecipes.
    setFilteredRecipes(getFilteredRecipes());
      setShouldUpdateRecipes(false);
    }
  }, [selectedIngredients, selectedTool, recipes, shouldUpdateRecipes]);
  

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
      <DescriptionComponent subtitle="GET YOUR RECIPE HERE" />
      <button className="get-recipe-button" onClick={handleGetRecipeClick}>
        Get Recipe
      </button>

      {isGetRecipeClicked && (
        <div>
          {selectedIngredients.length === 0 && !selectedTool ? (
            <div class="reminder">Please select the Ingredient or Tools first～</div>
          ) : filteredRecipes.length === 0 ? (
            <div class="words">No matching recipes found.</div>
          ) : (
            filteredRecipes.map((recipe) => (
              <div key={recipe.name} className="recipe-item">
                <img src={recipe.imageUrl} alt={recipe.name} className="recipe-image" />
                <h3 className="recipe-name">{recipe.name}</h3>
                <a href={recipe.recipeUrl} target="_blank" rel="noopener noreferrer" className="recipe-link">
                  Go to Recipe
                </a>
        </div>
      ))
    )}
  </div>
)}
    </div>
  );
  
};

export default App;

