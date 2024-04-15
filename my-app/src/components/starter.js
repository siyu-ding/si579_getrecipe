import React from 'react';

const DescriptionComponent = ({ title, subtitle }) => {
  return (
    <div className="description-container">
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
    </div>
  );
};

export default DescriptionComponent;