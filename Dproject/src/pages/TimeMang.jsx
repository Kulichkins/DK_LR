import React from "react";
import styless from './TimeMang.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'

function TimeMang(){
    return (
        <>
            <Container className={styless.homeFt}>
                <Row>
                    <Col className={styless.TopFt}>Расписание занятий <br/>в онлайн-школе KITTTIES</Col>
                </Row>
            </Container>
            <Container>
                <Row className="mt-5">
                    <Col xs={12} md={3} className={styless.day}>ПОНЕДЕЛЬНИК:</Col>
                    <Col xs={12} md={9} className={styless.dayDescr}>15:00 - 17:00 - Обществознание (ОГЭ)<br/>17:30 - 19:30 - Русский язык (ОГЭ)<br/>20:00 - 22:00 - Биология (ЕГЭ)</Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={12} md={3} className={styless.day}>ВТОРНИК:</Col>
                    <Col xs={12} md={9} className={styless.dayDescr}>15:00 - 17:00 - Математика (ОГЭ)<br/>17:30 - 19:30 - Литература (ОГЭ)<br/>20:00 - 22:00 - Обществознание (ЕГЭ)</Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={12} md={3} className={styless.day}>СРЕДА:</Col>
                    <Col xs={12} md={9} className={styless.dayDescr}>15:00 - 17:00 - Физика (ОГЭ)<br/>17:30 - 19:30 - Информатика (ОГЭ)<br/>20:00 - 22:00 - Литра (ЕГЭ)</Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={12} md={3} className={styless.day}>ЧЕТВЕРГ:</Col>
                    <Col xs={12} md={9} className={styless.dayDescr}>15:00 - 17:00 - Русский язык (ЕГЭ)<br/>17:30 - 19:30 - География (ОГЭ)<br/>20:00 - 22:00 - Информатика (ЕГЭ)</Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={12} md={3} className={styless.day}>ПЯТНИЦА:</Col>
                    <Col xs={12} md={9} className={styless.dayDescr}>15:00 - 17:00 - Математика (ЕГЭ профиль)<br/>17:30 - 19:30 - Математика (ЕГЭ база)<br/>20:00 - 22:00 - География (ЕГЭ)</Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={12} md={3} className={styless.day}>СУББОТА:</Col>
                    <Col xs={12} md={9} className={styless.dayDescr}>15:00 - 17:00 - Химия (ОГЭ)<br/>17:30 - 19:30 - История (ОГЭ)<br/>20:00 - 22:00 - Физика (ЕГЭ)</Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={12} md={3} className={styless.day}>ВОСКРЕСЕНЬЕ:</Col>
                    <Col xs={12} md={9} className={styless.dayDescr}>10:00 - 12:00 - Английский язык (ОГЭ)<br/>12:30 - 14:30 - Английский язык (ЕГЭ)<br/>15:00 - 17:00 - История (ЕГЭ)<br/>17:30 - 19:30 - Биология (ОГЭ)<br/>20:00 - 22:00 - Химия (ЕГЭ)</Col>
                </Row>
            </Container>
        </>
    );
}
export default TimeMang;









