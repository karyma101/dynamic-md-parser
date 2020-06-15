import React from 'react'
import { Link } from 'react-router-dom'

import style from './Header.css'

interface Props {
    toggleMenu: any
}

const Header: React.FC<Props> = ({ toggleMenu }) => {
    return (
        <div className={style.header}>
            <div className={style.hamburger}>
                <svg
                    className={style.hamburger_menu}
                    width="30"
                    height="30"
                    viewBox="0 0 34 23"
                    fill="none"
                    onClick={toggleMenu}
                >
                    <rect width="30" height="5.17391" fill="white" />
                    <rect y="17.7391" width="30" height="5.17391" fill="white" />
                    <rect y="8.86955" width="30" height="5.17391" fill="white" />
                </svg>
            </div>

            <div className={style.title}>
                <Link to="/" className={style.title_text}>
                    Dev Cheatsheet
                </Link>
            </div>

            <div className={style.spacer}></div>
        </div>
    )
}

export default Header
