import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import NavModal from './components/NavModal';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';

function App() {

  const [isNavModalVisible, setIsNavModalVisible] = useState(false)

  return (
    <div className="App">
      <div className='wrapper'>
        {isNavModalVisible &&
          <NavModal
            setIsNavModalVisible={setIsNavModalVisible}
          />
        }
        {!isNavModalVisible &&
          <Nav
            setIsNavModalVisible={setIsNavModalVisible}
          />
        }
        <Home />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
