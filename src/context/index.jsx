import { useContext, createContext, useState } from 'react';
import axios from 'axios';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [userData, setUserData] = useState(false);
    const [authToken, setAuthToken] = useState(false);

    const loginHandler = async ({
        password, nickname
    }) => {
        try {
            const { data } = await axios.post('https://convert-dr-app.herokuapp.com/users/login', {
                password: password,
                nickname: nickname,
            })
            setAuthToken(data.auth.token)
            setUserData(data.data)

            console.log(authToken)
            console.log(userData)
        } catch (err) {
            console.error(err)
            console.error('Falha durante login')
            throw new Error('Falha durante login')
        }
    }

    return (
        <StoreContext.Provider value={{ 
            loginHandler,
            authToken,
            userData,
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