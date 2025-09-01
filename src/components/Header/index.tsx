import UserName from "../UserName"
import Navigation from "../Navigation"
import Logo from "../Logo"

const Header = () => {
    return(
        <header>
            <Logo/>
            <UserName/>
            <Navigation/>
        </header>
    )
}

export default Header