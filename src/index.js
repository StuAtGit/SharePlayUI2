import React from 'react';
import ReactDOM from 'react-dom';
import SharePlayLearnApp from './SharePlayLearnApp';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <SharePlayLearnApp />
    </BrowserRouter>,
    document.getElementById('root')
);
