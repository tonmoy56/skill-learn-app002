import React from 'react';
import Header from '../components/Header/Header';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>

                <Row>

                    <Col>

                    <Outlet></Outlet>
                    
                    
                    </Col>



                </Row>

                <Footer ></Footer>


            </Container>
          

           








        </div>
    );
};

export default Main;