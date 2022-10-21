import { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import {Modal} from 'antd'
import axios from 'axios'


import useAuth from '../hooks/useAuth';


const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();
    const { setAuth } = useAuth();



    console.log(user)
    console.log(password)
    


   const handleSubmit = async e => {

        e.preventDefault();

                if ([user, password].includes('')) {
                    setAlerta({
                        msg: 'Todos los campos son obligatorios',
                        error: true
                    })
                    return
                }

                console.log('Ingresando...')

                try {
                    const data = await axios.post('http://localhost:4000/auth/signin', { username: user, password: password })
                    console.log(data.data.accessToken)
                    localStorage.setItem('token', data.data.accesstoken)
                   
                            setUser('')
                            setPassword('')
                            setAuth(data)
                            console.log('antes de nav')
                            navigate("/Home")
                    
                } catch (error) {

                    if(error.response.data === undefined){
          
                        Modal.warning({
                          title: 'Status 404',
                          content: 'Problemas: Por favor, verificar configuraciones de CORS',
                        });
                      
                    }
            
                    if(error.response.status === 404 ){              
                      Modal.warning({
                        title: 'Status 404',
                        content: 'Warning: The User not found!',
                      });
                   }
                    
                }

             
    }

    

    return (
        <>
        <h1 className="text-purple-900  text-2xl capitalize">
            XYZ - Gestiona tus Clientes
        </h1>

        <form 
            className="my-10 bg-black shadow rounded-lg p-10"
            onSubmit={handleSubmit}
        >
            <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="user">User</label>
                <input
                    id="user"
                   type= "text"
                   placeholder="Enter User"
                   className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                   value={user}
                   onChange={e => setUser(e.target.value)}
                />
            </div>
            <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="password">password</label>
                <input
                   id="password"
                   type= "password"
                   placeholder="Enter password"
                   className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                />
            </div>

            <input
                type="submit"
                value="Enter"
                className="bg-purple-900 mb-5 w-full py-3 uppercase font-bold rounded hover:cursor-pointer hover:bg-gray-800 transition-colors"
                
            />

        </form>
        </>
    )
}

export default Login;