import React, { useState } from 'react';

import company01 from "../../assets/photo01.jpeg";
import company02 from "../../assets/photo02.jpeg";
import company03 from "../../assets/photo03.jpeg";
import company04 from "../../assets/photo04.jpeg";
import company05 from "../../assets/photo05.jpeg";
import CardVaga from '../../components/CardVaga';
import Search from '../../components/Search';
import Sidebar from '../../components/Sidebar';
import { useStore } from '../../context';

const getRandomImage = () => {
  switch (Math.round(Math.random() * 5)) {
    case 1:
      return company01
    case 2:
      return company02
    case 3:
      return company03
    case 4:
      return company04
    case 5:
      return company05
    default:
      return company01
  }
}

const VagasPage = () => {
    const { convertJobHandler, userData } = useStore()

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    console.log(user)
    return (
        <>
        <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
          <div className="flex items-start justify-between ">
          <Sidebar />
          <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <Search/>
            <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="flex flex-col flex-wrap sm:flex-row ">
                    <div className="w-full">
                      <div className="mb-4 w-full">
                        <div className="flex items-center w-full justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                          <div className="flex items-center w-full">
                              <div className="shadow-lg rounded-2xl p-4 bg-white text-gray-800">
                                <div className="m-2 p-2">
                                  <h1 className="text-2xl font-bold">Vagas</h1>
                                  <p className="text-gray-500 font-light py-2">
                                  Com base no seu perfil e histórico de pesquisas
                                  </p>
                                </div>

                                <hr/>

                                <div className="grid grid-cols-1 grid-rows-1 gap-4">
                                  {user.jobs.map(job => (
                                    <CardVaga key={job.id}
                                    title={job.name}
                                    company={job.company_name}
                                    state={'São Paulo, Brasil.'}
                                    photo={getRandomImage()}
                                    created_at={'Há 7 horas'}
                                    />
                                  ))}
                                </div>
                              </div>
                          </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          </div>
        </main>
        </>
    );
}

export default VagasPage;
