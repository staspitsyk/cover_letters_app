import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LetterGenerator from '../../pages/letter-generator';
import LetterStatistic from '../../pages/letter-statistic';
import Login from '../../pages/login';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/letter-generator" component={LetterGenerator} />
                    <Route path="/letter-statistic" component={LetterStatistic} />
                    <Route path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
