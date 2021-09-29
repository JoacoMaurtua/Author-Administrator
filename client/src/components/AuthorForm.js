import React, {useState, useEffect} from 'react';
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Input, Label,Row,Col } from 'reactstrap';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';

export default function AuthorForm({create,update}) {
  const history = useHistory();

  const homePage =e=>{
    history.push('/');
  }

  const [input,setInput] = useState({
    AuthorName:''
  });

  const handleOnChange =e=>{
    const {name,value} = e.target;
    setInput({
      ...input,
      [name]:value
    })
  };

  const addAuthors=()=>{
    axios.post('api/authors/create',input)
         .then(res=>{
           if(res.data.data){
             console.log(res.data.data)
           }else{
             alert(res.data.error.message)
           }
         })
         .catch(err => console.log(err))
  }

  const handleOnSubmit =e=>{
    e.preventDefault();
    addAuthors();
  }

  return (
    <div>
      <Button color="link" onClick={homePage}>Home</Button>
      <h3>Agregue un nuevo autor:</h3>
      <Card style={{width: '35%', margin:'3rem auto'}}>
            <CardHeader>Formulario</CardHeader>
            <CardBody>
                <Form onSubmit={handleOnSubmit}>
                    <FormGroup>
                        <Label for="tipo">Name : </Label>
                        <Input 
                          type="text" 
                          id="tipo"
                          name="AuthorName"
                          value={input.AuthorName}
                          onChange={handleOnChange}
                        /> 
                    </FormGroup>
                    <Row style={{marginTop:'1rem'}}>
                      <Col md={6}>
                        <Button type="submit" size="lg" color="success" style={{float:'right'}}>Enviar</Button>{' '}
                      </Col>
                      <Col md={6}>
                        <Button size="lg" color="danger" style={{float:'left'}}>Eliminar</Button>{' '}
                      </Col>
                    </Row>
                </Form>
            </CardBody>
        </Card>
    </div>
  )
}
