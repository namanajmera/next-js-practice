import Link from 'next/link';
import React from 'react'

const Header = () => {
    return (
        <div className='bg-red-400 flex justify-between p-4 w-full'>
            <p>Header</p>
            <p><Link href={'/'}>Home</Link></p>
        </div>
    )
}

export default Header;