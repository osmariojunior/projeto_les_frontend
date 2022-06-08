import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="bg-white text-gray-800 w-fit rounded-lg">
        <div className="overflow-x-auto border-x border-t">
          <table className="table-auto w-full">
            <thead className="border-b">
            <caption className="">
                <h1 className="text-sm lg:text-lg m-2 p-2">
                    Histórico
                </h1>
            </caption>
              <tr className="bg-gray-100">
                <th className="text-left p-4 font-medium">Nome</th>
                <th className="text-left p-4 font-medium">Descrição</th>
                <th className="text-left p-4 font-medium">
                    Salário bruto em dolares
                </th>
                <th className="text-left p-4 font-medium">
                Salário bruto em reais
                </th>
                <th className="text-left p-4 font-medium">
                Salário bruto em reais
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Prof. Lucie Waters</td>
                <td className="p-4">basic@example.com</td>
                <td className="p-4">Administrator</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Anahi Bashirian (You)</td>
                <td className="p-4">admin@example.com</td>
                <td className="p-4">Super Administrator</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default HomePage;
