import React from 'react';
import './IngredientTag.css';

const IngredientTag = ({ label, emoji, onSelect, isSelected }) => {
    const tagStyle = isSelected ? 'ingredient-tag selected' : 'ingredient-tag';
  
    return (
      <button className={tagStyle} onClick={() => onSelect(label)}>
        <span role="img" aria-label={label}>{emoji}</span> {label}
      </button>
    );
  };

export default IngredientTag;