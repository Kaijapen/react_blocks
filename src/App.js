import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';

function App() {
  return (
    <div className="app w-50 bg-secondary mx-auto p-2">
        <Header />
        <div className='d-flex'>
          <Navigation />
          <Main>
            <div className='d-flex'>
                <SubContents />
                <SubContents />
                <SubContents />
            </div>
              <Advertisement />
          </Main>
        </div>
    </div>
  );
}
                
export default App;
