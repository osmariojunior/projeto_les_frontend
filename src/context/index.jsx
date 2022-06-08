import { useContext, createContext, useState } from 'react';
import axios from 'axios';
const API_URL = 'https://convert-dr-app.herokuapp.com'

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [userData, setUserData] = useState(false);
    const [userJobs, setUserJobs] = useState([]);
    const [userCompanies, setUserCompanies] = useState([]);
    const [authToken, setAuthToken] = useState(false);

    const loginHandler = async ({
        password, nickname
    }) => {
        try {
            const { data } = await axios.post(`${API_URL}/users/login`, {
                password: password,
                nickname: nickname,
            })
            setAuthToken(data.auth.token)
            setUserData(data.data.user)
            setUserJobs(data.data.jobs)
            setUserCompanies(data.data.companies)
        } catch (err) {
            console.error(err)
            console.error('Falha durante login')
            throw new Error('Falha durante login')
        }
    }

    const registerHandler = async ({
        email,
        password,
        nickname,
        firstName,
        lastName,
    }) => {
        try {
            await axios.post(`${API_URL}/users/register`, {
                email,
                password,
                nickname,
                firstName,
                lastName,
            })
        } catch (err) {
            console.error(err)
            console.error('Falha durante cadastro')
            throw new Error('Falha durante cadastro')
        }
    }

    const convertJobHandler = async ({ name, description, dollarSalary }) => {
        const response = await axios.post(`${API_URL}/jobs/convert`, {
            name, description, dollarSalary
        })
        return response.data
    }

    const createJobHandler = async ({ name, description, dollarSalary }) => {
        const response = await axios.post(`${API_URL}/jobs`, {
            name, description, dollarSalary
        })
        return response.data
    }

    return (
        <StoreContext.Provider value={{ 
            loginHandler,
            registerHandler,
            convertJobHandler,
            createJobHandler,
            authToken,
            userData,
            userJobs,
            userCompanies
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export function useStore() {
    const context = useContext(StoreContext);

    if(!context) {
        throw new Error('useStore must be used within an StoreProvider');
    }

    return context;
}