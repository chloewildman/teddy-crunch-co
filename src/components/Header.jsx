import { NavLink } from "react-router-dom";
import "../css/reset.css"
import "../css/styles.css"

function Header() {
    return (
        <header id="#top">
            <img src="images/logo.png" alt="Two teddy bears sitting in a shopping "></img>
            <h1>Teddy Crunch Co.</h1>
            <input type="checkbox" id="navButton" className="navButton"></input>
            <label htmlFor="navButton" className="navIcon">☰</label>
            <nav>
                <ul className="navBar">
                    <li><NavLink to="/" className="navLink">Home</NavLink></li>
                    <li><NavLink to="/shop" className="navLink">Shop</NavLink></li>
                </ul>
            </nav>
            <img src="images/cart-large-2-svgrepo-com.svg" alt="shopping cart" className="cartImg" title="Cart"></img>
        </header>
    )
}

export default Header;