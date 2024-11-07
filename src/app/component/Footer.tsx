
 "use client"
import React from 'react';
import { useRouter } from 'next/navigation'
const Footer = () => {
    const router = useRouter();
  return (
    <div>
      <footer>
         <h1>Footer</h1>
         <button onClick={()=>router.push("/")}>footer button</button>
         </footer>

    </div>
  )
}

export default Footer
