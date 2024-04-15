// Component for displaying descriptive content.
import React from 'react';

// The DescriptionComponent takes a title and subtitle as props and renders them.
// Use for headers and instructions in the app.
const DescriptionComponent = ({ title, subtitle }) => {
  return (
    // Container for the descriptive elements
    <div className="description-container">
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
    </div>
  );
};

export default DescriptionComponent;