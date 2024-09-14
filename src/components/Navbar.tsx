"use client"

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { buttonVariants } from "@/components/ui/button"
import { ModeToggle } from './ThemeToggle'

import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import LoadingBar from 'react-top-loading-bar'
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  useEffect(() => {
    setProgress(30)

    setTimeout(() => {
      setProgress(70)
    }, 200)
    setTimeout(() => {
      setProgress(100)
    }, 500)

  }, [pathname])
  useEffect(() => {
    setTimeout(() => {
      setProgress(0)
    }, 1000)
  }, [])
  return (
    <nav className="flex items-center z-10 h-16 bg-background/60 sticky top-0 border-b px-2 md:px-8 backdrop-blur justify-between">
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="font-bold text-xl">
        <Link href={"/"} >MUTANTS</Link>
      </div>
      <ul className="hidden md:flex w-full justify-end items-center space-x-4">
        <li><Link href={"/"}>Home</Link></li>
        <li><Link onClick={() => setProgress(progress + 10)} href={"/blog"}>Blog</Link></li>
        <li><Link href={"/about"}>About</Link></li>
        <li><Link href={"/contact"}>Contact</Link></li>
        <Link href={"/login"} className={buttonVariants({ variant: "outline" })}>Login</Link>
        <Link href={"/signup"} className={buttonVariants({ variant: "outline" })}>Signup</Link>
      </ul>
      <div className="md:ml-4 flex gap-2 items-center">
        <ModeToggle />
        <Sheet>
          <SheetTrigger><HamburgerMenuIcon className="size-8 cursor-pointer md:hidden" /></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>


      </div>
    </nav>
  )
}

export default Navbar