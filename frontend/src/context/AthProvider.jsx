import {useState, useEffect, createContext} from 'react'
import {useNavigate} from 'react-router-dom'
import Home from '../pages/Home';

const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const AuntenticateUser = async () => {
        const token = localStorage.getItem('accessToken')

        if(!token){
            navigate('/')
            return
        }
        //navigate('/Home')

    }
     AuntenticateUser()

    }, [])

    return (
        <AuthContext.Provider
                value={{
                    setAuth
                }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export{
    AuthProvider
}

export default AuthContext;