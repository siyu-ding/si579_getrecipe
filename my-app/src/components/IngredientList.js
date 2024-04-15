import React from 'react';
import IngredientTag from './IngredientTag';

const IngredientList = ({ ingredients, selectedIngredients, toggleIngredient }) => {
  return (
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