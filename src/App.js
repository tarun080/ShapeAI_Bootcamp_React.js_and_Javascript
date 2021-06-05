import './index.css';
import Header from './Components/Header.js'
import React from 'react'
import Footer from './Components/Footer'
import Note1 from './Components/Note1'
import Details1 from './Components/Details1';
import Details2 from './Components/Details2';
import Note2 from './Components/Note2';
import Note3 from './Components/Note3';
import Note4 from './Components/Note4';
import Note5 from './Components/Note5';
import Note6 from './Components/Note6';

function App() {
  return (
    <>
      <Header />
      <Details1 />
      <Note1 />
      <Note2 />
      <Note3 />
      <Details2 />
      <Note4 />
      <Note5 />
      <Note6 />
      <Footer />
    </>
  );
}

export default App;
