  "use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
const Navbar = () => {
    const router = useRouter();
  return (
    <div>
      <nav>
         <h1>Navbar</h1>
         <Link href ="/"> go to Navbar</Link> <br/>
         <button onClick={()=>router.push("/")}>Navbar button</button>

      </nav>
    </div>
  )
}

export default Navbar
