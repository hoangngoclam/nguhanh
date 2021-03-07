/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Fortune from './handle/Fortune';
import Hoa from "./images/nguhanh/hoa.png";

const fortune = new Fortune(1998);
ReactDOM.render(
  <React.StrictMode>
    <App />
    <div>Sinh năm: {fortune.yearOfBirth}</div>
    <div>Năm: {fortune.getNameOfYear()}</div>
    <img src={`/images/12congiap/${fortune.animalDesignationImage}`}/>
    <div>Mệnh: {fortune.getElemental()}</div>
    <img src={`/images/nguhanh/${fortune.elementalImage}`}/>
  </React.StrictMode>,
  document.getElementById('root')
);
