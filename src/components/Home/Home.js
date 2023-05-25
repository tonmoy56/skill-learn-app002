


import CourseCard from '../CourseCard/CourseCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BannerDescription from '../BannerDescription/BannerDescription';
import BannerPicture from '../BannerPicture/BannerPicture';
import Blog from '../Blog/Blog';
import Faq from '../Faq/Faq';


const Home = () => {


    return (
        <div>


            <Container className='mt-4'>
                <Row className='align-items-center' >
                    <Col className='col-lg-6 col-md-12 col-sm-12'>
                        <BannerDescription></BannerDescription>

                    </Col >


                    <Col className='col-lg-6 col-md-12 col-sm-12'>
                        <BannerPicture></BannerPicture>

                    </Col>
                </Row>


                <Row>

                    <h1 id='blog'>Blog</h1>

                    <Col className=''>

                        <Blog ></Blog>



                    </Col>




                </Row>





                
                <Row>
                    <h1>Frequently ask Question about courses</h1>

                    <Col >
                        <Faq></Faq>



                    </Col>
                </Row>






            </Container>












        </div>
    );
};

export default Home;
