import React, { useState } from "react"
/*Icon da página */
import { useNavigate } from "react-router-dom";
/*Linkando rotas entre as views*/
import { Link } from "react-router-dom"
import { useStore } from '../../context';

/*Amarzenamentos dos logins*/
export default function ConvertJob({convertedJobs, setConvertedJobs}) {
    const navigate = useNavigate();
    const { convertJobHandler } = useStore()

    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [dollarSalary, setDollarSalary] = useState(0)
    const [realSalary, setRealSalary] = useState(0)
    const [realSalaryLiquid, setRealSalaryLiquid] = useState(0)
    const [irDeduction, setIrDeduction] = useState(0)
    const [inssDeduction, setINSSDeduction] = useState(0)

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

              console.log(convertedJobs, formatedData)

              setDescription("")
              setName("")
              setDollarSalary(0)


                // setRealSalary(data.converted_gross_salary);
                // setRealSalaryLiquid(data.liquid_salary);
                // setIrDeduction(data.ir_deduction_value);
                // setINSSDeduction(data.inss_deduction_value);
            })
            .catch(() => { alert("Login failed") })
    }

    return (
        <div className="">
                    <form className="form grid grid-cols-3 gap-4 lg:gap-8" onSubmit={handleSubmit}>
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

                        {/* <div className="field">
                            <label htmlFor="realSalary">Salário bruto em reais: </label>
                            <input type="number" name="realSalary"
                            className={realSalary !== "" ? "has-val input" : "input"}
                            value={realSalary}
                            readOnly disabled/>
                        </div>

                        <div className="field">
                            <label htmlFor="irDeduction">Dedução do imposto de renda: </label>
                            <input type="number" name="irDeduction"
                            className={irDeduction !== "" ? "has-val input" : "input"}
                            value={irDeduction}
                            disabled={true} />
                        </div>

                        <div className="field">
                            <label htmlFor="realSalaryLiquid">Dedução do INSS: </label>
                            <input type="number" name="inssDeduction"
                            className={inssDeduction !== "" ? "has-val input" : "input"}
                            value={inssDeduction}
                            readOnly disabled/>
                        </div>

                        <div className="field">
                            <label htmlFor="realSalaryLiquid">Salário líquido em reais: </label>
                            <input type="number" name="realSalaryLiquid"
                            className={realSalaryLiquid !== "" ? "has-val input" : "input"}
                            value={realSalaryLiquid}
                            readOnly disabled/>
                        </div> */}

                        <div className="actions col-span-3">
                            <button id="botao"type="submit">Converter</button>
                        </div>
                    </form>
                </div>
    )
}
