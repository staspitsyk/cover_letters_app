import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LetterGenerator from '../../pages/letter-generator';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/letter-generator" component={LetterGenerator} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
