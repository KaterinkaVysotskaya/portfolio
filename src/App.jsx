import React from 'react';
import './App.scss';
import Header from './header/Header';
import Main from './main/Main';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import RemoteWork from './remoteWork/Remote';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <RemoteWork/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
