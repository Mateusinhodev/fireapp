import { Routes, Route} from 'react-router-dom'

import Login from '../pages/Login'
import Register from '../pages/Register';
import Home from '../pages/Home';

import Private from './Private';

function RoutesApp() {
    return(
        <Routes>
            {/* Rotas públicas */}
            <Route path='/' element={ <Login/> }/>
            <Route path='/register' element={ <Register/> }/>

            {/* Rota protegida */}
            <Route path='/home' element={ <Private> <Home/> </Private> }/>
        </Routes>
    )
}

export default RoutesApp;