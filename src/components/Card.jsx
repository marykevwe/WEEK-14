import React from 'react';

function Card({ children }) {
  return (
    <div className="max-w-[800px] p-6 mx-4 bg-blue-300 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      {children}
    </div>
  );
}

export default Card;
