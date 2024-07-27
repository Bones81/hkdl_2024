import { useState } from "react"
import { Link } from "react-router-dom"
import './header.css' 

const Header = () => {
    const [seeMenu, setSeeMenu] = useState(false)

    const toggleMenu = () => {
        const line1 = document.querySelector('.line-1')
        const line2 = document.querySelector('.line-2')
        const line3 = document.querySelector('.line-3')
        line1.classList.toggle('line-1-active')
        line2.classList.toggle('line-2-active')
        line3.classList.toggle('line-3-active')
        setSeeMenu(!seeMenu)
        const menu = document.querySelector('.menu')
        menu.classList.toggle('menu-active')
    }

    return (
        <>
            <div className="header">
                <h1><a className='title-link' href="#top">HKDL Caroler Guide 2024</a></h1>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="burger-line line-1"></div>
                    <div className="burger-line line-2"></div>
                    <div className="burger-line line-3"></div>
                </div>
            </div>
            <div className="menu">
                <nav>
                    <ul id="navbar"> 
                        <li className="nav-item"><Link to="/" onClick={toggleMenu}>FTF</Link></li>
                        <li className="nav-item"><Link to="/documents" onClick={toggleMenu}>Documents</Link></li>
                        <li className="nav-item"><Link to="/covid" onClick={toggleMenu}>Covid</Link></li>
                        <li className="nav-item"><Link to="/flying" onClick={toggleMenu}>Flying</Link></li>
                        <li className="nav-item"><Link to="/voting" onClick={toggleMenu}>Voting</Link></li>
                        <li className="nav-item"><Link to="/housing" onClick={toggleMenu}>Housing</Link></li>
                        <li className="nav-item"><Link to="/food" onClick={toggleMenu}>Food</Link></li>
                        <li className="nav-item"><Link to="/transportation" onClick={toggleMenu}>Transportation</Link></li>
                        <li className="nav-item"><Link to="/money" onClick={toggleMenu}>Money</Link></li>
                        <li className="nav-item"><Link to="/communication" onClick={toggleMenu}>Communication</Link></li>
                        <li className="nav-item"><Link to="/health" onClick={toggleMenu}>Health</Link></li>
                        <li className="nav-item"><Link to="/performance" onClick={toggleMenu}>Performance</Link></li>
                        <li className="nav-item"><Link to="/costumes-hmu" onClick={toggleMenu}>Costumes, Hair/Makeup</Link></li>
                        <li className="nav-item"><Link to="/leisure" onClick={toggleMenu}>Leisure</Link></li>
                        <li className="nav-item"><Link to="/packing" onClick={toggleMenu}>Packing</Link></li>
                        <li className="nav-item"><Link to="/just-for-fun" onClick={toggleMenu}>Just For Fun</Link></li>
                        {/* Add more links for other components */}
                    </ul>
                </nav>
                <ul id="navbar">
                    <li className="nav-item"><a href="#first" onClick={toggleMenu}>First Things First</a></li>
                    <li className="nav-item"><a href="#documents" onClick={toggleMenu}>Documents</a></li>
                    <li className="nav-item"><a href="#covid-clearance" onClick={toggleMenu}>COVID Clearance</a></li>
                    <li className="nav-item"><a href="#flights" onClick={toggleMenu}>Flying</a></li>
                    <li className="nav-item"><a href="#housing" onClick={toggleMenu}>Housing</a></li>
                    <li className="nav-item"><a href="#food" onClick={toggleMenu}>Food</a></li>
                    <li className="nav-item"><a href="#transportation" onClick={toggleMenu}>Transportation within HK</a></li>
                    <li className="nav-item"><a href="#money" onClick={toggleMenu}>Money/Banking</a></li>
                    <li className="nav-item"><a href="#communication" onClick={toggleMenu}>Communication</a></li>
                    <li className="nav-item"><a href="#health" onClick={toggleMenu}>Health Care</a></li>
                    <li className="nav-item"><a href="#performance" onClick={toggleMenu}>Performance</a></li>
                    <li className="nav-item"><a href="#costume-HMU" onClick={toggleMenu}>Costumes, Hair, Makeup</a></li>
                    <li className="nav-item"><a href="#leisure" onClick={toggleMenu}>Leisure/Time Off</a></li>
                    <li className="nav-item"><a href="#packing" onClick={toggleMenu}>Packing</a></li>
                </ul>
            </div>
        </>
        
    )
}

export default Header