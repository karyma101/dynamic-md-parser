import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Nav from './Nav'
import Body from './Body'

import style from './App.css'

const App = () => {
    const [display, toggleDisplay] = useState(true)

    const toggleMenu = () => {
        toggleDisplay(!display)
    }

    const displayNone = display ? 'flex' : 'none'

    return (
        <div className={style.app}>
            <Header toggleMenu={toggleMenu} />
            <div className={style.nav} style={{ display: `${displayNone}` }}>
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

export default App
