import React from 'react';
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Input, Label,Row,Col } from 'reactstrap';
import {Link,useHistory} from 'react-router-dom';

export default function AuthorForm({create,update}) {
  return (
    <div>
      <Button color="link">Home</Button>
      <h3>Agregue un nuevo autor:</h3>
      <Card style={{width: '35%', margin:'3rem auto'}}>
            <CardHeader>Formulario</CardHeader>
            <CardBody>
                <Form >
                    <FormGroup>
                        <Label for="tipo">Name : </Label>
                        <Input type="text" id="tipo"/>
                    </FormGroup>
                    <Row style={{marginTop:'1rem'}}>
                      <Col md={6}>
                        <Button size="lg" color="success" style={{float:'right'}}>Enviar</Button>{' '}
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
