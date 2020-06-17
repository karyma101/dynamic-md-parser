import React from 'react'

const HeadingIds = (props: any) => {
    const text: string = props.children[0].props.children
    console.log(text)
    const slug: string = text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z-]/g, '')

    return React.createElement(`h${props.level}`, { id: slug }, props.children)
}

export default HeadingIds
