
//Create four route pages: Navbar, About, Contact, and Footer.
//Link all components together using the 'Link' component.
//Add navigation for all routes using buttons and useRouter.
 "use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Routes pages</h1>
      <Link href = "/About"> About page</Link> <br/>
      <Link href = "/Contact"> Contact page</Link><br/><br/>
      <button onClick={()=> router.push("/About")}>Go to About Button </button> <br/>
      <button onClick={()=>router.push("/Contact")}   >Go to Contact Button</button>


    </div>


  )
}

export default page
