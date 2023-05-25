import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaYoutube,  } from "react-icons/fa";

const Footer = () => {
    return (
        <Container className='bg-dark mt-2'  >
            <Row>

                <Col className='col-12 col-md col-12'>
                    <h1 className='text-white'>Lets Start</h1>

                </Col>
            </Row>

            <Row  >

                <Col className='col-lg d-flex justify-content-evenly text-white'>
                   <div lg='4'>
                   <h1>About</h1>
                    <p>Terms and conditions</p>
                    <p>Jobs</p>
                    <p>Privacy statement</p>

                   </div>

                  <div lg='4'>
                  <h1>Activity</h1>
                    <p>Tutorial</p>
                    
                  </div>



                  
                  <div lg='4'>
                  <h1>Contuct us</h1>
                    <p>Email:tonmoybasak20567@gmail.com</p>
                    
                  </div>

                </Col>
            </Row>

            <Row >

                <Col className='text-white col-12'>
                    <FaFacebook className='me-2'></FaFacebook>
                    <FaYoutube className='me-2'></FaYoutube>
                    <FaTwitter className='me-2'></FaTwitter>
                
                
                
                </Col>
            </Row>



        </Container>
    );
};

export default Footer;