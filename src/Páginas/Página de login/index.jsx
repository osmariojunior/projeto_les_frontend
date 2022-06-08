import React, { useState } from "react"
import "./styles.css"
/*Icon da página */



/*Linkando rotas entre as views*/ 
import { Link } from "react-router-dom"

/*Amarzenamentos dos logins*/
const LoginPage = () =>{
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const handleSubmit = (e) => {
        
    
        console.log("submit", { email, password });
    }

/*Cabeça / Cabeçalho da página */
<head>
    <link rel="icon" href="%PUBLIC_URL%/aeronaveLogo" />
</head>

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
                            <label htmlFor="email">E-mail: </label>
                            <input type="email" name="email"  
                            className={email !== "" ? "has-val input" : "input"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu e-mail"/>
                        </div>
                        
                        <div className="field">
                            <label htmlFor="password">Senha: </label>
                            <input type="password" name="password" 
                            className={password !== "" ? "has-val input" : "input"}
                            value={password}
                            onChange={(e) =>setPassword(e.target.value)}
                            placeholder="Digite sua senha"/>
                        </div>
                        
                        <div className="actions">
                            <button id="botao"type="submit">Entrar</button>
                        </div>
                    
                        <div className="text-login">
                            <span className="txt1">Não possui conta? </span>
                            <Link className="txt2" to="/cadastro"><b>Criar conta</b></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default LoginPage
