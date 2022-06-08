import React, { useState } from "react"
import "./stylesCadastro.css"
import { useStore } from '../../context';
import { Link } from "react-router-dom"

import { useNavigate } from "react-router-dom";

/*Amarzenamentos dos cadastros*/
const CadastroPage = () => {
    const { registerHandler, userData, userCompanies, userJobs } = useStore();
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        console.log('aa')
        e.preventDefault();

        registerHandler({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            nickname: nickname,
        })
            .then(() => {
                navigate("/login")
            })
            .catch(() => { alert('Failed to register new user.')})
    }

    return (
        <div id="container_">
            <div  id="container-cadastro" style={{backgroundImage: "url('/aviao1.jpg')"}} >
                <div id="warp-cadastro">
                    <form className="form" onSubmit={handleSubmit}>
                        <h1 className="titleForm">Cadastre-se</h1>
                        <br />
                        <br />

                        <div className="campo-writing">
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" name="nome"
                            className={firstName !== "" ? "has-val input" : "input"}
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)}
                            required placeholder="Digite seu primeiro nome"/>
                        </div>

                        <div className="campo-writing">
                            <label htmlFor="sobrenome">Sobrenome:</label>
                            <input type="text" name="sobrenome" 
                            className={lastName !== "" ? "has-val input" : "input"}
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)}
                            required placeholder="Digite seu segundo nome"
                            />
                        </div>

                        <div className="campo-writing" >
                            <label htmlFor="email">E-mail:</label>
                            <input 
                            type="email"
                            name="email" required 
                            value={email} 
                            placeholder="Digite seu e-mail pessoal"
                            onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="campo-writing">
                            <label htmlFor="nickname">Nickname: </label>
                            <input type="txt" name="telefone"  
                            required
                            value={nickname} 
                            placeholder="Digite o nome de usuário de no mínimo 6 caracteres " 
                            onChange={(e) => setNickname(e.target.value)} />
                        </div>

                        <div className="campo-writing">
                            <label htmlFor="senha">Senha:</label>
                            <input type="password" name="senha" 
                            minLength={8}
                            value={password} 
                            required placeholder="Digite sua senha" 
                            onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <div className="actionsCadastro">
                            <button id="botaoCadastro" type="submit">Cadastrar</button>
                        </div>
                    </form>
                    <div className="text-cadastro">
                        <span className="txt3">Já possui conta? </span>
                        <Link className="txt4" to="/Login"><b>Entrar</b></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
   
export default CadastroPage