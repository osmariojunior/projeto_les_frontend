import React, { useState } from "react"
/*Icon da página */
import { useNavigate } from "react-router-dom";
/*Linkando rotas entre as views*/
import { useStore } from '../../context';

/*Amarzenamentos dos logins*/
export default function ConvertJob({convertedJobs, setConvertedJobs}) {
    const navigate = useNavigate();
    const { authToken, convertJobHandler, createJobHandler } = useStore()

    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [dollarSalary, setDollarSalary] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();

        convertJobHandler({
            description: description,
            name: name,
            dollarSalary: dollarSalary,
        })
            .then((data) =>  {
              const formatedData = {
                converted_gross_salary: data.converted_gross_salary,
                liquid_salary : data.liquid_salary,
                ir_deduction : data.ir_deduction_value,
                inss_deduction: data.inss_deduction_value,
              }

              setConvertedJobs([...convertedJobs, formatedData])
            })
            .catch(() => { alert("Login failed") })
    }

    const handleJobSave = () => {
      if(!authToken) {
        navigate('/login')
      }

      if(!name || name === '' || !dollarSalary) {
        return
      }

      createJobHandler({
        name, description, dollarSalary
      }).then(() => {
        alert('Sucessfully created job.')
      })
      .catch(() => { alert('Failed to save job.')})
    }

    const clear = () => {
      setName("")
      setDescription("")
      setDollarSalary(0)
      setConvertedJobs([])
    }

    return (
        <div className="">
                    <form className="form grid grid-cols-3 gap-2 lg:gap-8" onSubmit={handleSubmit}>
                        <div className="col-span-3 bg-slate-200 rounded-lg border p-2 m-2">
                        <h1 className="title">Conversão</h1>
                        </div>

                        <div className="">
                            <label htmlFor="name" className="text-gray-700">Nome: </label>
                            <input type="text" name="name" id="name"
                            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="">
                            <label htmlFor="description" className="text-gray-700">Descrição: </label>
                            <input type="text" name="description"
                            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 relative py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            value={description}
                            onChange={(e) =>setDescription(e.target.value)}
                            placeholder="Digite uma descrição"/>
                        </div>

                        <div className="relative col-span-3">
                            <label htmlFor="dollarSalary" className="text-gray-700">Salário bruto em dolares: </label>
                            <input type="number" name="dollarSalary"
                            className={"rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"}
                            value={dollarSalary}
                            onChange={(e) =>setDollarSalary(e.target.value)}
                            placeholder="Digite o valor do salário em dolars"/>
                        </div>

                        <div className="actions col-span-1">
                            <button id="botao"type="submit">Converter</button>
                        </div>

                        <div className="actions col-span-1">
                            <button id="botao"type="button" onClick={handleJobSave}>Salvar</button>
                        </div>

                        <div className="actions col-span-1">
                            <button id="botao"type="button" onClick={clear}>Limpar</button>
                        </div>
                    </form>
                </div>
    )
}
