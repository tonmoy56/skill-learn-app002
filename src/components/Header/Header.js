import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Blog from '../Blog/Blog';

import { HashLink as Link } from 'react-router-hash-link';
import { UserContext } from '../AuthProvider/AuthProvider';
import { Button, Col } from 'react-bootstrap';



const Header = () => {
  const { user, logOut } = useContext(UserContext)
  const handleSignOut = () => {
    logOut()
      .then(() => { })
      .catch((e) => console.error(e))
  }





  return (
    <Container>
    <Col lg='12'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container >
          <Link to='/' style={{ textDecoration: 'none' }}>Skill Learn</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto  ">
              


                <Link className='ms-3' style={{ textDecoration: 'none' }} to='/courses' >Courses</Link>



                <Link className='ms-3' style={{ textDecoration: 'none' }} to='#blog' >Blog</Link>
                <Link className='ms-3' style={{ textDecoration: 'none' }} to='/login'>Login</Link>
                <Link  className='ms-3' style={{ textDecoration: 'none' }} to='/register'>Register</Link>


             

            </Nav>
            <Nav>
           

                {user?.uid ?
                  <div className='text-white'>
                     {user?.displayName || user?.email}


                   <div> <Button className='mx-1 d-lg-inline ' onClick={handleSignOut}>LogOut</Button></div>


                  </div>
                  :
                  <><h1>No image</h1></>



                }
           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Col>
    </Container>
  );
};

export default Header;