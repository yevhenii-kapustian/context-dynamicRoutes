'use client'

import { usePathname } from "next/navigation"
import Navigation from "../Navigation"
import Logo from "../Logo"

const Header = () => {
    const pathname = usePathname()

    return(
        <header className={pathname === "/" ? "w-full absolute z-1 flex justify-evenly items-center text-white" : "flex justify-evenly items-center text-white bg-gradient-to-r from-[#040817] to-[#081130]"}>
            <Logo/>
            <div className="flex gap-5">
                <Navigation/>
            </div>
        </header>
    )
}

export default Header