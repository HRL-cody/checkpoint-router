import React from 'react'
import Menu from '../NavMenu/Menu'
import './Home.css'
export default function Home() {
    return (
        <div>
            <Menu/>
            <div className="WelcomPage">
            <h1 className="Brand">Framex</h1>
        <span className="Titre">Welcome</span>
            </div>
        
        </div>
    )
}
