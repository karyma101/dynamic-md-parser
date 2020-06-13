import React from 'react'
import { Link } from 'react-router-dom'

import style from './Header.css'

const Header: React.FC = () => {
    return (
        <div className={style.header}>
            <Link to="/" className={style.title}>
                Dev Cheatsheet
            </Link>
        </div>
    )
}

export default Header
