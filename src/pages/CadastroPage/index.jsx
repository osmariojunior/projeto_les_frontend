import React, { useState } from "react"
import "./stylesCadastro.css"

//*Linkando rotas entre as views*
import { Link } from "react-router-dom"

/*Amarzenamentos dos cadastros*/
const CadastroPage = () =>{
    <Link to ="/login"></Link>
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");

    const handleSubmit = (e) => {
        e.preventDefaut();


        console.log("submit", {nome, sobrenome});
    }





//Corpo da página
    return (
        <div id="container_">

            <div  id="container-cadastro" style={{backgroundImage: "url('/aviao1.jpg')"}} >

                <div id="warp-cadastro">
                    <form className="formCadastro" onSubmit={handleSubmit}>
                        <h1 className="titleForm">Cadastre-se</h1>
                        <br />
                        <br />

                        <div className="campo-writing">
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" name="nome"
                            className={nome !== "" ? "has-val input" : "input"}
                            value={nome} 
                            onChange={(e) => setNome(e.target.value)}
                            required placeholder="Digite seu primeiro nome"/>
                        </div>

                        <div className="campo-writing">
                            <label htmlFor="sobrenome">Sobrenome:</label>
                            <input type="text" name="sobrenome" 
                            className={sobrenome !== "" ? "has-val input" : "input"}
                            value={sobrenome} 
                            onChange={(e) => setSobrenome(e.target.value)}
                            required placeholder="Digite seu segundo nome"
                            />
                        </div>

                        <div className="campo-writing" >
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" name="email" required placeholder="Digite seu e-mail pessoal" />
                        </div>

                        <div className="campo-writing">
                            <label htmlFor="nickname">Nickname: </label>
                            <input type="txt" name="telefone"  required placeholder="Digite uma palavra passe"/>
                        </div>

                        <div className="campo-writing">
                            <label htmlFor="senha">Senha:</label>
                            <input type="password" name="senha" required placeholder="Digite sua senha" />
                        </div>

                        <div className="actionsCadastro">
                            <button id="botaoCadastro" type="submit">Cadastrar</button>
                        </div>

                        <div className="text-cadastro">
                        <span className="txt3">Já possui conta? </span>
                            <Link className="txt4" to="/Login"><b>Entrar</b></Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )


}
   
export default CadastroPage