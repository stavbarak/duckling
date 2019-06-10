import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from 'components/App';
import NoteEdit from 'components/NoteEdit';
import LayoutWrapper from 'components/LayoutWrapper';

ReactDOM.render(
    <Root >
        <LayoutWrapper>
            <BrowserRouter>
                <Switch>               
                    <Route path="/edit/:id" component={ NoteEdit } /> 
                    <Route exact path="/" component={ App } />
                </Switch>
            </BrowserRouter>
      </LayoutWrapper>
    </Root>,
    
    
    document.getElementById('root'));

