import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div>

<Accordion className='col-lg-12 col-md-6'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>ASk anything about our courses</Accordion.Header>
        <Accordion.Body>
        That is a very good course for begginner. you can try it
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How much this course runing</Accordion.Header>
        <Accordion.Body>
          2 months runing this course. so ready to join our course.
        
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

            
        </div>
    );
};

export default Faq;