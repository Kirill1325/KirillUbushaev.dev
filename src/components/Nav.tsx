import React from 'react'

interface NavProps {
    setIsNavModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    homeRef: React.RefObject<HTMLDivElement>,
    portfolioRef: React.RefObject<HTMLDivElement>,
    contactsRef: React.RefObject<HTMLDivElement>
}

function Nav({ setIsNavModalVisible, homeRef, portfolioRef, contactsRef }: NavProps) {

    const handleNavClick = () => {
        setIsNavModalVisible(true)
    }

    // const handleClick = () => {

    //     console.log('biba')
    // }

    return (
        <nav>
            <h2>Kirill.dev</h2>
            <div className='navRight'>
                <div className='navRightCategories'>
                    <p onClick={() => homeRef.current?.scrollIntoView({ behavior: 'smooth' })} >Home</p>
                    <p onClick={() => portfolioRef.current?.scrollIntoView({ behavior: 'smooth' })} >Projects</p>
                    <p onClick={() => contactsRef.current?.scrollIntoView({ behavior: 'smooth' })} >Contacts</p>
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