import React, { useState } from "react"
import "./styles.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import { useStore } from '../../context';

/*Amarzenamentos dos logins*/
export default function LoginPage() {
    const navigate = useNavigate();
    const { loginHandler } = useStore()

    const[nickname, setNickname] = useState("")
    const[password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        
        loginHandler({
            password: password,
            nickname: nickname,
        })
            .then(() => {
                navigate("/dashboard")
            })
            .catch(() => { alert("Login failed") })
    }

    return (
        <div id="container" >
            <div style={{backgroundImage: "url('/aviao1.jpg')"}} id="container-login">

                <div id="wrap-login">
                    <form className="form" onSubmit={handleSubmit}>
                        <h1 className="title">Login </h1>
                        <br />
                        <br />

                        <div className="field">
                            <label htmlFor="nickname">Nickname: </label>
                            <input type="text" name="nickname"  
                            className={nickname !== "" ? "has-val input" : "input"}
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            />
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