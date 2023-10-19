import React from 'react'

interface NavModalProps {
    setIsNavModalVisible: React.Dispatch<React.SetStateAction<boolean>>

}

function NavModal({ setIsNavModalVisible }: NavModalProps) {

    const handleNavClick = () => {
        setIsNavModalVisible(false)
    }

    return (
        <div className='NavModal'>
            <div className='navModalContent'>
                <button onClick={handleNavClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <p>Home</p>
                <p>Projects</p>
            </div>
        </div>
    )
}

export default NavModal