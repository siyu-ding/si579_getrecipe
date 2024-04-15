import React from 'react';
import './ToolSelector.css';

const ToolSelector = ({ tools, selectedTool, onSelectTool }) => {
  return (
    <div className="tool-selector">
      {tools.map((tool) => (
        <button
          key={tool.name}
          className={`tool-button ${selectedTool === tool.name ? 'active' : ''}`}
          onClick={() => onSelectTool(tool.name)}
        >
          {tool.name}
        </button>
      ))}
    </div>
  );
};

export default ToolSelector;