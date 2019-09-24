import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';

const App = () => {
    return (
        <div>
            <Header />
            <Home />
        </div>
    )
}

export default App;