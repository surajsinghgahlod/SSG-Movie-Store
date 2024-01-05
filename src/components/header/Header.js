import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import logo from './img/m-logo.png'

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                {/* <Link to="/"><img className="header__icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Ts9L4u0zAG7XFnY2cRLlMTADRIiukJ5kqb-B7EQL5-RoOc0ts2mxwzBZZLtEfugxUhk&usqp=CAU" /></Link> */}
                <Link to="/"><img className="header__icon" src={logo} /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header