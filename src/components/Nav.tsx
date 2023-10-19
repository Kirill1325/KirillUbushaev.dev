import React from 'react'

interface NavProps {
    setIsNavModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

function Nav({ setIsNavModalVisible }: NavProps) {

    const handleNavClick = () => {
        setIsNavModalVisible(true)
    }
    
    return (
        <nav>
            <h2>Name</h2>
            <div className='navRight'>
                <div className='navRightCategories'>
                    <p>Home</p>
                    <p>Projects</p>
                </div>
                <button className='navMenu' onClick={handleNavClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default Nav