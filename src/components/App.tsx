import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Body from './Body'

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Nav />
                </div>
                <div>
                    <Switch>
                        <Route path="/:name" component={Body} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App
