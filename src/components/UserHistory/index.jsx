import React from "react";

const HomePage = ({ convertedJobs }) => (
  <>
    <div className="container flex flex-col mx-auto w-full items-center justify-center">
      <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
          Últimas conversões
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
          Últimas conversões feitas pelo usuário.
        </p>
      </div>
      <div className="container max-w-3xl">
        <div className="">
            <div className="overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm font-normal">
                                    Sálario Bruto
                                </th>
                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm font-normal">
                                    IR
                                </th>
                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm font-normal">
                                    INSS
                                </th>
                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm font-normal">
                                    Líquido
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                          {convertedJobs.map((convertedJob, index) => (
                            <tr key={index}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                    <div className="">
                                        <p className="text-green-600 font-extralight whitespace-no-wrap">
                                            {`R$ ${convertedJob.converted_gross_salary}`}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-red-400 whitespace-no-wrap">
                                     {`R$ - ${convertedJob.ir_deduction}`}
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-red-400 whitespace-no-wrap">
                                  {`R$ - ${convertedJob.inss_deduction}`}
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span className="relative inline-block px-3 py-1 font-extralight text-green-600 leading-tight">
                                      {`R$ ${convertedJob.liquid_salary}`}
                                </span>
                            </td>
                        </tr>
                          ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  </>
);
export default HomePage;
