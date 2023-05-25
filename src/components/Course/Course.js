import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

import mypdf from '../files/data.pdf'


const Course = () => {
    const data=useLoaderData()
    const {name,details,picture,Duration}=data
    return (
      
          <Container>

            <Row>

                <Col lg='6'>

                    <h1>{name}</h1>
                    <p>{details}</p>
                    Duration:{Duration}


                </Col>


                <Col lg='6'>

                    <a href={mypdf} download='dummy2.pdf'>Download</a>


               
                
                </Col>

                </Row>


          </Container>


     
    );
};

export default Course;