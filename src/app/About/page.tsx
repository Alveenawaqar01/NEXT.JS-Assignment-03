"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
    const route = useRouter();
  return (
    <div>
    
      <h1>This is About page</h1>

      <Link href = "/">Go to About Page</Link><br/><br/>
      <button onClick={()=>route.push("/")}>Go to About page Button</button>
     
    </div>

  
  )
}

export default page
