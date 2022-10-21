import {BrowserRouter, Routes, Route} from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import Home from './pages/Home'
import {AuthProvider} from './context/AthProvider'

function App() {
  
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element ={<AuthLayout/>}>
          <Route index element={<Login/>}/>
          <Route path='Home' element={<Home/>}/>

        </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
