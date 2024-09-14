"use client"
import { cn } from '@/lib/utils'
import React,{useEffect, useState} from 'react'
interface LinkType{
    id: string
    text: string
}
const OnThisPage = ({htmlContent,className}:{htmlContent: string,className: string}) => {
    const [links,setLinks]=useState<null | LinkType[]>(null)
    useEffect(() => {
      const temp = document.createElement("div")
      temp.innerHTML = htmlContent
      const headings = temp.querySelectorAll("h2")
      const generatedLinks:LinkType[] = []
      headings.forEach((heading,index)=>{
        const id = heading.id || `heading-${index}`
        heading.id = id

        generatedLinks.push({
          id: id,
          text: (heading as HTMLElement).innerText
        })
      })
      setLinks(generatedLinks)
    }, [htmlContent])
    
  return (
    <div className={cn('hidden md:block w-[50%]',className)}>
        <div className="sticky top-16">
            <h2 className='text-xl font-bold' >On This Page</h2>
            <ul className='not-prose text-sm'>
                {
                    links && links.map((link)=>(
                        <li key={link.id} className='pt-1'>
                            <a href={`#${link.id}`}>{link.text.slice(0,50)}{(link.text.length>50)?"...":""}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
        
    </div>
  )
}

export default OnThisPage