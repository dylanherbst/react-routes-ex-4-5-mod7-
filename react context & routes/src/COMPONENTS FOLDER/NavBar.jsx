

import { useContext } from 'react'
import { NavLink } from 'react-router-dom'


export default function NavBar() {
// const {theme} = useContext(ThemeContext);

return (
    //style={{backgroundColor: theme.background, color: theme.foreground}
<nav className="NavBar" >
<ul className="menu">
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/login">Login</NavLink></li>
<li><NavLink to="/dash">Dashboard</NavLink></li>
<li><NavLink to="/about">About</NavLink></li>
</ul> {/* ++ Add another page with route and component */}
</nav>
)
}

