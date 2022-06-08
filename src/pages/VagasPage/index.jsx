import React, { useState } from 'react';

import company01 from "../../assets/photo01.jpeg";
import company02 from "../../assets/photo02.jpeg";
import company03 from "../../assets/photo03.jpeg";
import Calendar from '../../components/Calendar';
import CardVaga from '../../components/CardVaga';
import Search from '../../components/Search';
import Sidebar from '../../components/Sidebar';
import { useStore } from '../../context';

const companies = [
  {
    id: 1,
    photo: company01,
    title: 'Desenvolvedor Full Stack',
    company: 'GeekHunter',
    state: 'São Paulo, Brasil.',
    created_at: 'Há 4 horas',

  },
  {
    id: 2,
    photo: company02,
    title: 'Desenvolvedor Sênior',
    company: 'Nubank',
    state: 'São Paulo, Brasil.',
    created_at: 'Há 2 horas',
  },
  {
    id: 3,
    photo: company03,
    title: 'Desenvolvedor Mobile',
    company: 'EX',
    state: 'São Paulo',
    created_at: 'Há 7 horas',
  }
]

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
                                  {companies.map(company => (
                                    <CardVaga key={company.id}
                                    title={company.title}
                                    company={company.company}
                                    state={company.state}
                                    photo={company.photo}
                                    created_at={company.created_at}
                                    />
                                    ))}
                                  {user.jobs.map(job => (
                                    <CardVaga key={job.id}
                                    title={job.name}
                                    company={job.company_name}
                                    state={'São Paulo, Brasil.'}
                                    photo={company03}
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
