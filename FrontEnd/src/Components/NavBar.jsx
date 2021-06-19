
import logo from "../Images/logo.png"
import "./NavBar.css"
import {Button} from "@material-ui/core"
import { Link } from 'react-router-dom';

const NavBar = () => 
{
    return(
    <div className = "NavBarWrapper"> 
    <Link to = "/main" className="link">
    <img src ={logo} alt = "Logo" className="NavBarLogo"/>
    </Link>
    <Link to = "/about" className="link">
    <Button variant="contained">About</Button>
    </Link>
    </div>
    )
}

export default NavBar