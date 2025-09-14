'use client'

import { usePathname } from "next/navigation"
import Navigation from "../Navigation"
import Logo from "../Logo"
import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const Header = () => {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    return(
        <header className={`p-7 z-10 max-sm:justify-between ${pathname === "/" ? "w-full absolute z-1 flex justify-evenly items-center text-white" : "flex justify-evenly items-center text-white bg-gradient-to-r from-[#040817] to-[#081130]"}`}>
            <Logo/>
            <div className="flex gap-5 max-sm:hidden">
                <Navigation/>
            </div>
            <div className="hidden max-sm:block">
                <List onClick={handleClick} size={32} />
                {isMenuOpen && (
                    <div className="p-7 w-1/2 h-screen fixed top-0 right-0 bg-gradient-to-r from-[#040817] to-[#081130]">
                        <X onClick={handleClick} size={32} />
                        <div className="h-full flex flex-col justify-center gap-5 text-center">
                            <Navigation/>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header