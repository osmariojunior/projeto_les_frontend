import React, { useState } from "react"
import "./styles.css"

/*Linkando rotas entre as views*/ 
import { Link } from "react-router-dom"

/*Amarzenamentos dos logins*/
const LoginPage = () =>{
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const handleSubmit = (e) => {
        
    
        console.log("submit", { email, password });
    }


/* Corpo da página login*/ 
    return (
        <div id="container" >
            <div style={{backgroundImage: "url('/aviao1.jpg')"}} id="container-login">

                <div id="wrap-login">
                    <form className="form" onSubmit={handleSubmit}>
                        <h1 className="title">Login </h1>
                        <br />
                        <br />

                        <div className="field">
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email"  
                            className={email !== "" ? "has-val input" : "input"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        
                        <div className="field">
                            <label htmlFor="password">Senha: </label>
                            <input type="password" name="password" 
                            className={password !== "" ? "has-val input" : "input"}
                            value={password}
                            onChange={(e) =>setPassword(e.target.value)}
                            />
                        </div>
                        
                        <div className="actions">
                            <button id="botão"type="submit">Entrar</button>
                        </div>
                    
                        <div className="text-cadastro">
                            <span className="txt1">Não possui conta? </span>
                            <Link className="txt2" to="/cadastro">Criar conta</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default LoginPage
