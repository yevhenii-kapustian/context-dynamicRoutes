import Link from "next/link"
import { navigationLinks } from "@/data/navigation"
import { NavigationType } from "@/types/navigationTypes"

const Navigation = () => {
    return <>{navigationLinks.map((item:NavigationType, index: number) => <Link key={index} href={item.link}>{item.name}</Link> )}</>
}

export default Navigation