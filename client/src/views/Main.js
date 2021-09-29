import React, {useState,useEffect} from 'react';
import Title from '../components/Title';
import {Row,Col} from 'reactstrap';
import axios from 'axios';

export default function Main({list,setList}) {

 

  return (
    <div>
      <Row>
        <Title/>
      </Row>
      <Row>
        <h3>Tenemos citas de:</h3>
      </Row>
      <Row>
      
      </Row>
      
     

      
    </div>
  )
}
