import React from 'react'
import ProjectItem from './ProjectItem'

interface PortfolioProps {
    reff: React.RefObject<HTMLDivElement>
}

function Portfolio({ reff }: PortfolioProps) {
    return (
        <div className='portfolio' ref={reff}>
            <h2>PORTFOLIO</h2>
            <ProjectItem />
        </div>
    )
}

export default Portfolio