import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';

export default function Routes(){
    
    return(
        
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />                
            </Switch>
        </BrowserRouter>
        
    )
}