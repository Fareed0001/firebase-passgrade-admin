import React from 'react';

const Container = ({ title, subTitle, children }) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-500 mb-4">{subTitle}</p>
      <div>
      {children}
      </div>
    </div>
  );
};

export default Container;
