import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Home from './Home'
import Body from './Body'

class App extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/python">Python</Link>

                <Switch>
                    <Route path="/:name" component={Body} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        )
    }
}

export default App
