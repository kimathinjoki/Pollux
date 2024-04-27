import logo from '../images/logo.png'

function Nav() {
    return (
        <nav class="navbar container-fluid pollux-nav" id="pollux-nav">
            <a class="navbar-brand" id="nav-logo" href="#"><img class="flex" id="logo-img" src={logo} /></a>
            <ul class="navbar-nav">     
                <li class="nav-item">
                <a class="nav-link" href="#">Item</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;