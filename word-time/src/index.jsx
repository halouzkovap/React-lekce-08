import React from 'react';
import { render } from 'react-dom';
import './style.css';
import WordTime from './components/WordTime'
import Formlar from './components/Formular';


const App = () => (
  <div className="container">
      <WordTime/>
  </div>
);

render(<App />, document.querySelector('#app'));
