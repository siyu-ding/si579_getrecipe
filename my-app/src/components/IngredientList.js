// Component to display a list of ingredient tags.
import React from 'react';
import IngredientTag from './IngredientTag';

// The IngredientList component receives a list of ingredients,
// the currently selected ingredients, and a function to toggle an ingredient's selection.
const IngredientList = ({ ingredients, selectedIngredients, toggleIngredient }) => {
  return (
    // The container for the list of ingredient tags.
    <div className="ingredient-list">
      {ingredients.map((ingredient) => (
        <IngredientTag
          key={ingredient.label}
          label={ingredient.label}
          emoji={ingredient.emoji}
          isSelected={selectedIngredients.includes(ingredient.label)}
          onSelect={toggleIngredient}
        />
      ))}
    </div>
  );
};

export default IngredientList;