"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
    const route = useRouter();
  return (
    <div>
      <h1>This is Contact Page</h1>
      <Link href = "/">Go to Navbar page</Link> <br/><br/>

      <button onClick={()=>route.push("/")}>Go to Contact page Button</button>
      
    </div>
  )
}

export default page
