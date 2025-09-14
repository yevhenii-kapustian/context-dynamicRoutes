'use client'

import Link from "next/link";
import Navigation from "../Navigation"
import Logo from "../Logo"
import { InstagramLogo, FacebookLogo, TwitterLogo } from "@phosphor-icons/react";

const Footer = () => {
    return(
        <footer className="p-10 text-white bg-gradient-to-r from-[#040817] to-[#081130] mask-t-from-90% mask-t-to-100%">
            <div className="flex justify-center">
                <Logo/>
            </div>
            <span className="w-full h-[0.1px] my-5 block bg-[#2C2D35]"/>
            <div className="flex justify-evenly">
                <div className="flex flex-col">
                    <Navigation/>
                </div>
                <div>
                    <h5 className="text-center">Follow us!</h5>
                    <div className="mt-3 flex gap-2">
                        <Link href="#"><InstagramLogo size={32}/></Link>
                        <Link href="#"><FacebookLogo size={32}/></Link>
                        <Link href="#"><TwitterLogo size={32}/></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer