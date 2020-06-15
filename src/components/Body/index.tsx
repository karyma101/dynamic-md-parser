import React from 'react'
import ReactMarkdown from 'react-markdown'

import content from '../../content'
import Codeblock from './CodeBlock'

function Heading(props: any) {
    const text: string = props.children[0].props.children
    const slug: string = text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z-]/g, '')

    return React.createElement(`h${props.level}`, { id: slug }, props.children)
}

interface Props {
    match: {
        params: {
            name: string
        }
    }
}

const Body: React.FC<Props> = ({ match }) => {
    const name = match.params.name.toLowerCase()

    return <ReactMarkdown source={content[name]} renderers={{ code: Codeblock, heading: Heading }} />
}

export default Body
