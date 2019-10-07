import React from 'react';
import './App.css';
import Personal from './components/Personal';
import Objective from './components/Objective';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';

const App = () => {
  return (
    <div className="container App-header">
      <Personal />
      <Objective />
      <Education />
      <Skills />
      <Languages />
    </div>
  );

}
export default App;
