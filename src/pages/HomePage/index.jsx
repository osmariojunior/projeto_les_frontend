import React from "react"

import { Link } from "react-router-dom"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

const HomePage = () =>{
    return (
        <div className="container mx-auto grid grid-cols-1 gap-4 justify-items-center p-4 m-4">
            <div className="">
                <h1 className="text-2xl text-white font-bold">
                    Conheça a sua nova comunidade profissional
                </h1>
            </div>
            <div class="w-full">
                <Input label={"Email"} type={"email"} placeholder={"email@example.com"}/>
                <Input label={"Password"} type={"password"} placeholder={"******"}/>
                <a className="p-2 m-2" href="#"> Esqueceu a senha ?</a>C
            </div>
            <Button >Entrar</Button>
        </div>
    );
}
export default HomePage