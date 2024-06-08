import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import styless from './FootBar.module.css'

function FootBar(){
    return (
        <>
        <Container className={styless.Footrrrsize}>
            <Row>
                <Col className={styless.Footrrr}>kittties@os.ru</Col>
            </Row>
        </Container>
        
        </>
    );
}
export default FootBar;