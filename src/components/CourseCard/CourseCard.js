import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { picture, name, _id } = course
  return (
    <div className='mt-3'>
















        <Card className='col-md col-12 mx-auto flex-column' style={{ width: '18rem' }} >
          <Card.Img variant="top" style={{ height: '50px' }} src={picture} />
          <Card.Body>
            <Card.Title style={{ fontSize: '16px' }}>{name}</Card.Title>

            <Link style={{ textAlign: 'center', textDecoration:'none' }} to={`/course/${_id}`}>Get Premium access</Link>

          </Card.Body>
        </Card>











    </div>






































  );
};

export default CourseCard;