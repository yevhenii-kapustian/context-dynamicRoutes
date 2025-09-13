'use client'

import { usePathname } from "next/navigation"
import Navigation from "../Navigation"
import Logo from "../Logo"

const Header = () => {
    const pathname = usePathname()

    return(
        <header className={pathname === "/" ? "w-full absolute z-1 flex justify-evenly items-center text-white" : "flex justify-evenly items-center text-[#2C2D35] bg-[#E1EDE6]"}>
            <Logo/>
            <div className="flex gap-5">
                <Navigation/>
            </div>
        </header>
    )
}

export default Header