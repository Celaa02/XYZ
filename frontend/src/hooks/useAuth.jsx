import {useContext} from 'react'
import AuthContext from '../context/AthProvider'

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;