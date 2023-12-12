import { NAV_LINKS } from "@/constants/Index"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import Button from "./Button"

const NavBar = () => {
    return (
        <nav className="flexBetween max-conteiner padding-container relative z-30 py-5">
            <Link href="/">
                <Image src="/hilink-logo.svg" alt="" width={74} height={29}></Image>
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} 
                    className="regular-16 text-gray-50 flex-center cursor-pointer pb-1.5 transition-full hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>
                
            <div className="lg:flexCenter hidden">
                <Button 
                type='button'
                title='Log In'
                icon='/user.svg'
                variant='btn_dark_green' />
            </div>

            <Image 
            src="/menu.svg" 
            alt="menu" 
            width={32} 
            height={32}
            className="Inline-block cursor-pointer lg:hidden" />
        </nav>
    )
}

export default NavBar