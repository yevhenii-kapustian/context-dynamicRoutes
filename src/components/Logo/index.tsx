import Image from "next/image";

const Logo = () => {
    return <Image src="/logo.webp" alt="logo" width={100} height={100} priority/>
}

export default Logo