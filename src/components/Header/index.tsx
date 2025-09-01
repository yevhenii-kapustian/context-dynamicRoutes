import Navigation from "../Navigation"
import Logo from "../Logo"

const Header = () => {
    return(
        <header className="flex justify-evenly items-center text-[#2C2D35] bg-[#E1EDE6]">
            <Logo/>
            <div className="flex gap-5">
                <Navigation/>
            </div>
        </header>
    )
}

export default Header