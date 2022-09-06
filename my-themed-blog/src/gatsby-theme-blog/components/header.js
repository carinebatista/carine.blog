/** @jsx jsx */
import { Link } from "gatsby"
import { jsx, css, Themed } from "theme-ui"
import './header.css'
import { SkipNavLink } from "@reach/skip-nav"

const Header = ({ title, ...props }) => (
  <header className="header">
   <div> {title} </div>
   <nav> 
      <ul>
        <li> <a href="#"> Projects </a></li>
        <li> <a href="#"> About </a></li>
        <li> <a href="#"> Blog </a></li>
      </ul>
   </nav>
   <div>
    {console.log({props})}
   </div>
  </header>
)

export default Header
