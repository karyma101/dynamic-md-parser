import React from 'react'
import style from './Home.css'

const Home: React.FC = () => {
    return (
        <div className={style.body}>
            <h1>Home</h1>
            <p className={style.paragraph}>
                Welcome to Dev Handbook created by Kary Ma. Dev Handbook is an web application that dynamically parses
                markdown files into links and content. The application is created with react, typescript and compiled
                using webpack.
            </p>
        </div>
    )
}

export default Home
