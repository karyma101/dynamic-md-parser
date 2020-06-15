import React from 'react'
import ReactMarkdown from 'react-markdown'

import content from '../../content'
import Codeblock from './CodeBlock'

interface Props {
    match: {
        params: {
            name: string
        }
    }
}

const Body: React.FC<Props> = ({ match }) => {
    const name = match.params.name.toLowerCase()

    return <ReactMarkdown source={content[name]} renderers={{ code: Codeblock }} />
}

export default Body
