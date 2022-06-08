import {
    BrowserRouter as Router,
    Routes,
    Route,

} from "react-router-dom"

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import Dashboard from './User/dashboard';
import CadastroPage from "./CadastroPage";
import VagasPage from "./VagasPage";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/dashboard" element={<Dashboard/>}/>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/vagas" element={<VagasPage/>}/>
                <Route exact path="/cadastro" element={<CadastroPage/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes

