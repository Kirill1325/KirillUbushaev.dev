import React from 'react'

interface NavModalProps {
    setIsNavModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    homeRef: React.RefObject<HTMLDivElement>,
    portfolioRef: React.RefObject<HTMLDivElement>,
    contactsRef: React.RefObject<HTMLDivElement>
}

function NavModal({ setIsNavModalVisible, homeRef, portfolioRef, contactsRef }: NavModalProps) {

    const handleNavClick = () => {
        setIsNavModalVisible(false)
    }

    const handleHomeClick = () => {
        homeRef.current?.scrollIntoView({ behavior: 'smooth' })
        setIsNavModalVisible(false)
    }

    const handlePortfolioClick = () => {
        portfolioRef.current?.scrollIntoView({ behavior: 'smooth' })
        setIsNavModalVisible(false)
    }

    const handleContactsClick = () => {
        contactsRef.current?.scrollIntoView({ behavior: 'smooth' })
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
                <p onClick={handleHomeClick} >Home</p>
                <p onClick={handlePortfolioClick} >Projects</p>
                <p onClick={handleContactsClick} >Contacts</p>
            </div>
        </div>
    )
}

export default NavModal