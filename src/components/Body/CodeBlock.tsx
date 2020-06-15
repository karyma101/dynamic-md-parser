import React from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism as style } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Props {
    language: string
    value: string
}

const CodeBlock: React.FC<Props> = ({ language, value }) => {
    return (
        <SyntaxHighlighter language={language} style={style}>
            {value}
        </SyntaxHighlighter>
    )
}

export default CodeBlock
