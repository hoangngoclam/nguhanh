/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React,{ useState } from 'react';
import './fortune.css';
import Fortune from '../handle/Fortune';
import FortuneInfo from "../components/fortuneInfo"

const FortunePage = () => {
  const [fortune,setFortune]: [Fortune, Function] = useState(new Fortune(1998))
  const [inputYear, setInputYear]: [string, Function] = useState("")
  const onInputChange = (_event: any) =>{
    setInputYear(_event.target.value);
  }
  const onChangeFortuneClick = () => {
    setFortune(new Fortune(parseInt(inputYear,10)))
  }
  return (
    <>
        <input type="year" onChange={onInputChange}/> 
        <button onClick={onChangeFortuneClick}>Check</button>
        <FortuneInfo fortune={fortune}/>
    </>
  );
}

export default FortunePage;
