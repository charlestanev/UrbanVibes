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
            <div className='space-x-4 flex'>
                <Button
                    label="Sign In"
                    className="text-lg"
                    variant="outline"
                />
                <Button
                    label="Sign Up"
                    className="text-lg"
                    variant="outline"
                />
            </div>
        </nav>
    )
}

export default Navbar