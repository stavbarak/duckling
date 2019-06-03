import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from 'components/App';
import NoteEdit from 'components/NoteEdit';
import NoteThumb from 'components/NoteThumb';

ReactDOM.render(
    <Root >
        <BrowserRouter>
            <App>
                
                <Route path="/edit" component={ NoteEdit } /> 
                <Route path="/" component={ NoteThumb } />
            </App>
      </BrowserRouter>
    </Root>,
    
    
    document.getElementById('root'));

