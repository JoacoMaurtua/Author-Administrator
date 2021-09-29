import React/* , {useState,useEffect} */ from 'react';
import Title from '../components/Title';
import {Row,Col,Table,Button} from 'reactstrap';
//import axios from 'axios';
import { BsFillTrashFill } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";


export default function Main({list}) {

  return (
    <div>
      <Title/>
      <h3>Tenemos citas de:</h3>
      <Row>
      <Table striped>
            <thead>
                <tr>
                    <th style={{textAlign: 'center'}}>Autor</th>
                    <th style={{textAlign: 'center'}}>Acciones Validas</th>
                </tr>
            </thead>
            <tbody>
                {list&&list.map((items, index) => (
                    <tr key={index}>
                        <td style={{textAlign: 'center'}}>{items.name}</td>
                        <td style={{textAlign: 'center'}}>
                            <Row>
                              <Col md={6}>
                                  <BiPencil/>
                              </Col>
                              <Col md={6}>
                                  <BsFillTrashFill/>
                              </Col>
                            </Row>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table> 
      </Row>
      <Button color="success">Agregar Autor</Button>{' '}
    </div>
  )
}
