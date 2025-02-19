import React from 'react'
import Button from '../ui/Button'

const Navbar = () => {
    return (
        <nav className="w-9/12 mx-auto py-5 flex justify-between items-center">
            <a
                href="/"
                className='text-lg'>Tail Listing</a>

            <div>
                <Button label="Add Listing" />
            </div>
            <div className='space-x-4'>
                <Button
                    label="Sign In"
                    className="text-lg"
                />
                <Button
                    label="Sign Up"
                    className="text-lg"
                />
            </div>
        </nav>
    )
}

export default Navbar