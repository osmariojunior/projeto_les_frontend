import React from 'react';

export function Button({children, ...props}) {
  return (
    <button
      type="button"
      className='
      bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
      inline-flex items-center justify-center p-2 rounded-lg text-sm font-medium'
      {...props}
    >
      {children}
    </button>
  );
}