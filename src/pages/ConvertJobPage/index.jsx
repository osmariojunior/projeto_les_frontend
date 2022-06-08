import React, { useState } from "react"
/*Icon da página */
import { useNavigate } from "react-router-dom";
/*Linkando rotas entre as views*/ 
import { Link } from "react-router-dom"
import { useStore } from '../../context';

/*Amarzenamentos dos logins*/
export default function ConvertJobPage() {
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
                setRealSalary(data.converted_gross_salary);
                setRealSalaryLiquid(data.liquid_salary);
                setIrDeduction(data.ir_deduction_value);
                setINSSDeduction(data.inss_deduction_value);
            })
            .catch(() => { alert("Login failed") })
    }

    return (
        <div id="container" >
            <div style={{backgroundImage: "url('/aviao1.jpg')"}} id="container-login">

                <div id="wrap-login">
                    <form className="form" onSubmit={handleSubmit}>
                        <h1 className="title">Conversão </h1>
                        <br />
                        <br />

                        <div className="field">
                            <label htmlFor="name">Nome: </label>
                            <input type="text" name="name"  
                            className={ name !== "" ? "has-val input" : "input"}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        
                        <div className="field">
                            <label htmlFor="description">Descrição: </label>
                            <input type="text" name="description" 
                            className={description !== "" ? "has-val input" : "input"}
                            value={description}
                            onChange={(e) =>setDescription(e.target.value)}
                            placeholder="Digite uma descrição"/>
                        </div>

                        <div className="field">
                            <label htmlFor="dollarSalary">Salário bruto em dolares: </label>
                            <input type="number" name="dollarSalary" 
                            className={dollarSalary !== "" ? "has-val input" : "input"}
                            value={dollarSalary}
                            onChange={(e) =>setDollarSalary(e.target.value)}
                            placeholder="Digite o valor do salário em dolars"/>
                        </div>

                        <div className="field">
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
                        </div>

                        <div className="actions">
                            <button id="botao"type="submit">Converter</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}