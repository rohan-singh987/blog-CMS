import React, { useContext } from 'react'
import Link from 'next/link'

import Logo from '../assets/Critique-2.svg' 
import Image from 'next/image'

const categories = [{name: "reactJS", slug: 'react'}, {name: "stories", slug: 'story'}]


const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
        <div className=" border-b-2 w-full inline-block border-[#fad0c4] py-4 ">
           <div className="md:float-left blck">
           <Link href="/ ">
             <a>
                <Image
                    src={Logo}
                    className=" cursor-pointer drop-shadow-xl"
                    height={120}
                    width={120}
                    alt="Logo"
                    />
              </a>
                {/* CMS */}
            </Link>
           </div>
        </div>
    </div>
  )
}

export default Header