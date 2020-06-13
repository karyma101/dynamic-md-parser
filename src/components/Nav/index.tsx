import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import content from '../../content'

import style from './Nav.css'

interface Props {
    location: {
        pathname: string
        search: string
        hash: string
        state: any
    }
}

const Nav: React.FC<Props> = ({ location }) => {
    const links = Object.keys(content)
    const pathName: string = location.pathname.substr(1).replace(/_/g, ' ')

    const renderLinks = links.map((link, i) => {
        const linkName = link.replace(/_/g, ' ')
        const styles: string = pathName === linkName ? `${style.link} ${style.active}` : style.link

        return (
            <Link key={`link_${i}`} to={`/${link}`} className={styles}>
                {linkName}
            </Link>
        )
    })

    return <Fragment>{renderLinks}</Fragment>
}

export default withRouter(Nav)
