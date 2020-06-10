import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import source from '../content/test.md'

class App extends Component {
    render() {
        return <ReactMarkdown source={source} />
    }
}

export default App
