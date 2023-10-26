import React from 'react'
import project from '../imgs/portfolio1.png'
import github from '../imgs/github-mark.svg'

function ProjectItem() {
  return (
    <div className='projectItem'>
      <div className='projectImgContainer'>
        <img src={project}></img>
      </div>
      <div className='projectDescription'>
        <h2>Online Store 👟</h2>
        <p>Sneaker Street is a network of multi-brand stores of shoes, clothing and accessories from global sports and lifestyle brands. Sneaker Street stores are created for people who live in an active rhythm, follow the latest world trends, always find something to do to their liking and cannot imagine life without comfortable shoes and clothes.</p>
        <span className='stack'>
          <b>React</b>
          <div className='divider'></div>
          <b>TypeScript</b>
          <div className='divider'></div>
          <b>Redux Toolkit</b>
          
        </span>
        <span className='links'>
          <a className='git' href='https://github.com/Kirill1325/tsReactShoes'>
            <p>Code</p>
            <img src={github} alt='git'></img>
          </a>
          <a className='link' href='https://ts-react-shoes.vercel.app/'>
            <p>See Live</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>

          </a>
        </span>
      </div>

    </div>
  )
}

export default ProjectItem