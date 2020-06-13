import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import content from '../../content'

import style from './Nav.css'

const Nav = ({ location }) => {
    const links = Object.keys(content)
    const pathName = location.pathname.substr(1)

    const renderLinks = links.map((link, i) => {
        const styles = pathName === link ? `${style.link} ${style.active}` : style.link

        return (
            <Link key={`link_${i}`} to={`/${link}`} className={styles}>
                {link}
            </Link>
        )
    })

    return <Fragment>{renderLinks}</Fragment>
}

export default withRouter(Nav)
