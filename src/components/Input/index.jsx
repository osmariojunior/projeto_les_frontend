import React from 'react';


export function Input({type, name, label, value, onChange, placeholder, error, ...props}) {
  return (
    <div className="container">
      <label
        htmlFor={name}
        className='block text-2xl font-medium leading-5 text-white'>
        {label}
      </label>
      <div className="m-1 p-1 rounded-md shadow-sm">
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className='
          form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 p-2 rounded shadow-lg'
          {...props}
        />
      </div>
      {error && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-red-500">
            {/* <ErrorIcon className="h-5 w-5" aria-hidden="true" /> */}
          </span>
        </div>
      )}
    </div>
  );


}