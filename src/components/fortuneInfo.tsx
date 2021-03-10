import React from 'react';
import Fortune from '../handle/Fortune';

function FortuneInfo( { fortune }:FortuneInfoProps) {
  return (
    <>
        <div>Sinh năm: {fortune.yearOfBirth}</div>
        <div>Năm: {fortune.getNameOfYear()}</div>
        <img src={`/images/12congiap/${fortune.animalDesignationImage}`} alt="hình ảnh 12 con giáp"/>
        <div>Mệnh: {fortune.getElemental()}</div>
        <img src={`/images/nguhanh/${fortune.elementalImage}`} alt="hình ảnh về ngủ hành"/>
    </>
  );
}

export default FortuneInfo;

interface FortuneInfoProps{
    fortune: Fortune
}