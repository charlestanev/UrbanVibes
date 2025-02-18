import React from 'react'
import Button from '../ui/Button'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="w-9/12 mx-auto py-5 flex justify-between items-center">
                    <a href="/">Tail Listing</a>
                </div>
                <div>
                    <Button label="Add Listing" />
                </div>
                <div className='space-x-4'>
                    <Button label="Sign In" />
                    <Button label="Sign Up" />
                </div>
            </nav>
        </>
    )
}

export default Navbar