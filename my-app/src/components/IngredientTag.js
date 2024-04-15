// Component for displaying an individual ingredient.
import React from 'react';
import './IngredientTag.css';

// The IngredientTag component represents a clickable ingredient option.
// It shows an emoji and label and changes style when selected.
const IngredientTag = ({ label, emoji, onSelect, isSelected }) => {
    // Style changes when the ingredient is selected
    const tagStyle = isSelected ? 'ingredient-tag selected' : 'ingredient-tag';
  
    return (
        // The button becomes highlighted when selected, handling click to toggle selection.
      <button className={tagStyle} onClick={() => onSelect(label)}>
        <span role="img" aria-label={label}>{emoji}</span> {label}
      </button>
    );
  };

export default IngredientTag;