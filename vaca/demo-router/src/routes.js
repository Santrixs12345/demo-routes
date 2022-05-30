import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Abaut from './Components/Abaut/Abaut';
import App from './Components/App';
import Home from './Components/Home/Home';

const AppRoutes= () => {
    <App>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Abaut/>}/>
        </Routes>
    </App>
}

export default AppRoutes;