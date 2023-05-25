

import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { GoQuote } from "react-icons/go";

import Header from '../Header/Header';






const Blog = () => {







  return (
    <Container>

    <Row >


      <Col className=' col-lg-4 col-md-12 col-sm-12 mt-4'>

    

          <Card >
            <Card.Body>
              <Card.Title><GoQuote></GoQuote></Card.Title>
              <Card.Text>
                I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.
              </Card.Text>

            </Card.Body>
          </Card>
          </Col>





   

      <Col className='align-items-center col-lg-4 col-md-12 col-sm-12 mt-4'>

      
      <Card >
            <Card.Body>
              <Card.Title><GoQuote></GoQuote></Card.Title>
              <Card.Text>
                This course helped me freshen up on my product manager skills and land a job at Facebook! Thanks guys
              </Card.Text>

            </Card.Body>
          </Card>
     
      
      
      
      
      </Col>



   

<Col className='col-lg-4 col-md-12 col-sm-12 mt-4'>


<Card >
          <Card.Body>
            <Card.Title><GoQuote></GoQuote></Card.Title>
            <Card.Text>

              One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager
            </Card.Text>

          </Card.Body>
        </Card>



</Col>



    </Row>
    </Container>
  );


};

export default Blog;