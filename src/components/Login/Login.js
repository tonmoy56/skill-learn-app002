import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { UserContext } from '../AuthProvider/AuthProvider';

const Login = () => {
  const {signInGoogle,signin,github}=useContext(UserContext)
  const navigate=useNavigate()

  const provider=new GoogleAuthProvider()
  const gitProvider=new GithubAuthProvider()

  const handlegoogle=()=>{
    signInGoogle(provider)
    .then(result=>{
      const user=result.user;
      console.log(user)
      .catch((e)=>console.error(e))
    })
  }


const handleGit=()=>{
  github(gitProvider)
  .then(result=>{
    const user=result.user
    console.log(user)
  })
  .catch((e)=>console.error())

}
  const handlelogin=(event)=>{
    event.preventDefault()
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    signin(email,password)
    .then(result=>{
      const user=result.user
      console.log(user)
      navigate('/')
    })
    .catch((e)=>console.error(e))
    
    

  }



  
    return (
        <div>
        <Col lg='6'  >
       
       <Form onSubmit={handlelogin}>
       <Form.Group  controlId="formBasicEmail">
         <Form.Label></Form.Label>
         <Form.Control name='email' type="email" size='25' placeholder="Enter email" />
        
       </Form.Group>
 
       <Form.Group  controlId="formBasicPassword">
         <Form.Label></Form.Label>
         <Form.Control name='password' type="password" placeholder="Password" />
       </Form.Group>
       <Form.Group  controlId="formBasicCheckbox">
       
       </Form.Group  >                     
       <Button  variant="primary"  type="submit" >
        Login
       </Button>                                                                                                       
     </Form>                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                            
                                                                                                                                                                                                                        
                                                      
     <FaGithub onClick={handleGit} className='text-center'></FaGithub>
     <FaGoogle className='ml-4 ms-4' onClick={handlegoogle}></FaGoogle>
     <Link to='/register' className='d-block'> Have you? Create Account</Link>
     

 
     </Col>
    
        </div>
    );
};

export default Login;