import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import content from '../../content'

const Nav = () => {
    const links = Object.keys(content)

    const renderLinks = links.map((link, i) => (
        <Link key={`link_${i}`} to={`/${link}`}>
            {link}
        </Link>
    ))

    return <Fragment>{renderLinks}</Fragment>
}

export default Nav
