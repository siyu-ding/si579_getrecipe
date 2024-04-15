// Component for selecting a cooking tool.
import React from 'react';
import './ToolSelector.css';

// ToolSelector lets the user choose one tool from a list.
// It shows the tool's name and highlights the currently selected tool.
const ToolSelector = ({ tools, selectedTool, onSelectTool }) => {
  return (
    // The container for all tool options.
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