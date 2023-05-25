import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserContext } from '../AuthProvider/AuthProvider';

const Register = () => {
  const {createuser}=useContext(UserContext)

  const signUp=(event)=>{
    event.preventDefault()
    const form=event.target
    const email=form.email.value;
    const password=form.pass.value;
    createuser(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user)
    })
    .catch((e)=>console.error(e))
  }

    return (

      <Col lg='6' >
       
      <Form onSubmit={signUp}>
      <Form.Group  controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control name='email' type="email" size='25' placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group  controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control name='pass' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group  controlId="formBasicCheckbox">
      
      </Form.Group  >
      <Button  variant="primary"  type="submit" >
       Register
      </Button>
    </Form>

    </Col>
     
    );
};

export default Register;