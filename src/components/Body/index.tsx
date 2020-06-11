import React from 'react'
import ReactMarkdown from 'react-markdown'

import content from '../../content'

const Body = (props) => {
    const name = props.match.params.name.toLowerCase()

    return <ReactMarkdown source={content[name]} />
}

export default Body
