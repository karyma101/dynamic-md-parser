import React from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlock = ({ language, value }) => {
    console.log(language)
    return (
        <SyntaxHighlighter language={language} style={monokai}>
            {value}
        </SyntaxHighlighter>
    )
}

export default CodeBlock
