import React from 'react';

const CardVaga = ({title, company, state, photo, created_at}) => {
  return(
    <div className="m-2 p-2 grid grid-cols-3 grid-rows-1 justify-items-center">
    <div className="">
      <img src={photo} alt="Company Logo" />
    </div>

    <div>
      <h1 className="text-2xl font-bold text-blue-500">
         {title}
        </h1>
      <p className="text-sm md:text-md lg:text-lg text-gray-500">
        {company}
      </p>
      <p className="text-sm md:text-md lg:text-lg text-gray-500">
        {state}
      </p>
      <span className="text-sm text-green-600 font-mono font-extralight">
        {created_at}
      </span>
    </div>
    </div>
  );
}

export default CardVaga;
