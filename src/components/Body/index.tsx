import React from 'react'
import ReactMarkdown from 'react-markdown'

import content from '../../content'
import Codeblock from './CodeBlock'
import HeadingIds from './HeadingIds'

interface Props {
    match: {
        params: {
            name: string
        }
    }
}

const Body: React.FC<Props> = ({ match }) => {
    const name = match.params.name.toLowerCase()

    return <ReactMarkdown source={content[name]} renderers={{ code: Codeblock, heading: HeadingIds }} />
}

export default Body
