import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';

const photoFolder = 'src/img/';

const PersonInfo = () => {
  const personName = 'Esra Abanoğlu';
  const personAge = 19;
  const personOccupation = 'Bilgisayar Mühendisi';
  const photoPath = `${photoFolder}1.jpg`;
  return (
    <div>
      <h2>Kişi Bilgileri</h2>
      <p><strong>Name:</strong> {personName}</p>
      <p><strong>Age:</strong> {personAge}</p>
      <p><strong>Occupation:</strong> {personOccupation}</p>
      <img src={photoPath} alt="Sorry!!" />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Benim Bloğum </h1>
      <PersonInfo />
      <AboutMe />
      <Hobbies />
      <Projects />
    </div>
  );
};

export default App;
