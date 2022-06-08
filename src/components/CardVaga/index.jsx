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
    <div className="col-span-3 p-2 m-2">
      <button className="bg-blue-500 text-slate-200 font-extrabold font-mono rounded-lg border shadow-sm p-2 m-2">
        Candidatar-se
      </button>
    </div>
    </div>
  );
}

export default CardVaga;
