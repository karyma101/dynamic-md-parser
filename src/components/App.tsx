import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Body from './Body'

import style from './App.css'

class App extends Component {
    render() {
        return (
            <div className={style.app}>
                <div className={style.nav}>
                    <Nav />
                </div>
                <div className={style.body}>
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
