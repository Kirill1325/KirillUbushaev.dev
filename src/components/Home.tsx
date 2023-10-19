import React from 'react'
import photo from '../imgs/photo.png'
import ReactLogo from '../imgs/ReactLogo.svg'
import tsLogo from '../imgs/typescript.svg'

interface HomeProps {
    reff: React.RefObject<HTMLDivElement>
}

function Home({ reff }: HomeProps) {

    return (

        <main ref={reff}>
            <div className='mainContent'>
                <div className='mainTopDescription'>
                    <h1>Frontend React Developer</h1>
                    <p>I'm Kirill Ubushaev. A young developer from St. Petersburg <br /> and I like to create beautiful and functional web applications.<br /> My experience is in translating projects into real<br /> websites and applications and improving their functionality.<br /> My goal is to create apps that are attractive and easy to use.</p>
                    <div className='techStack'>
                        <b>Tech Stack</b>
                        <div className='divider'></div>
                        <img src={ReactLogo} alt='react'></img>
                        <img src={tsLogo} alt='ts'></img>
                    </div>
                </div>
                <div className='imgContainer'>
                    <img src={photo} alt='photo' ></img>
                </div>
            </div>
        </main>

    )
}

export default Home