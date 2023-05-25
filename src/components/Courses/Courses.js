import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {

    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch(`https://courses-server-blond.vercel.app/courses`)
            .then(data => data.json())
            .then(data => setCourses(data))
    }, [])


    return (

       <Container>
       
        



            <Row className='mt-1'>
                <Col lg='3' style={{backgroundColor:' #8EC5FC'   ,backgroundImage:'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)'}} >


                    
                    <h6 style={{fontsize:'16px'}}> Select categories</h6>
                   <Col className='mb-4 '>
                   <Link to='/course/01' style={{textDecoration:'none'}}>Web development</Link>

                   
                   </Col>

                   <Col>
                 
                   <Link to='/course/02' style={{textDecoration:'none'}} >Marketing</Link>

                   
                   </Col>

                   <Col>
                 
                   <Link to='/course/03' style={{textDecoration:'none'}}>Design</Link>

                 
                 </Col>

                 <Col>
                 <Link to='/course/04' style={{textDecoration:'none'}}>Photography</Link>
                 
                 </Col>

                 <Col>
                 
                 <Link to='/course/05' style={{textDecoration:'none'}}>Personal Development</Link>
                 </Col>
                   
                  
                <Col>
                
                
                    <Link to='/course/06' style={{textDecoration:'none'}}>Development</Link>
                </Col>
                   
                   



                </Col>

                <Col className='mx-0 '>

                    {/* mane ai column 9 but ai row 12 niya nise */}
                    <Row>

                        {courses.map(course => <Col lg='4'  className='mx-3 '  ><CourseCard course={course}></CourseCard></Col>)}


                    </Row>

                </Col>
            </Row>













            </Container>






    );
};

export default Courses;