import {
    BrowserRouter as Router,
    Routes,
    Route,
    
} from "react-router-dom"

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import CadastroPage from "./CadastroPage"


const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/cadastro" element={<CadastroPage/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes

