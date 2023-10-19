import React, { useState, useRef } from 'react';
import './App.css';
import Home from './components/Home';
import NavModal from './components/NavModal';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';

function App() {

  const [isNavModalVisible, setIsNavModalVisible] = useState(false)

  const homeRef = useRef<null | HTMLDivElement>(null)
  const portfolioRef = useRef<null | HTMLDivElement>(null);
  const contactsRef = useRef<null | HTMLDivElement>(null)

  return (
    <div className="App">
      <div className='wrapper'>
        {isNavModalVisible &&
          <NavModal
            setIsNavModalVisible={setIsNavModalVisible}
            homeRef={homeRef}
            portfolioRef={portfolioRef}
            contactsRef={contactsRef}
          />
        }
        {!isNavModalVisible &&
          <Nav
            setIsNavModalVisible={setIsNavModalVisible}
            homeRef={homeRef}
            portfolioRef={portfolioRef}
            contactsRef={contactsRef}
          />
        }
        <Home reff={homeRef} />
        <Portfolio reff={portfolioRef} />
        <Contacts reff={contactsRef} />
      </div>
    </div>
  );
}

export default App;
