
import React from "react";
import styless from './Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import teacimg from './teach.png'
import catTeach from './catLogo.png'
import catOffer from './CatsOffer.png'
function Home(){
    return (
        <>
            <Container className={styless.homeFt}>
                <Row>
                    <Col sm className={styless.teachimMain}><img src={teacimg} className={styless.teachim}/></Col>
                    <Col sm >
                        <Row className={styless.chance}>Не упусти свой шанс</Row>
                        <Row className={styless.chanceBlock}>Хочешь учиться легко и с удовольствием?‍<br/>KITTTIES - это онлайн-школа для всех!</Row>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5 ">
                <Row>
                    <Col className={styless.h1SizeBox}><h1 className={styless.h1Size}>KITTTIES - это онлайн-<br/>школа, где ты:</h1></Col>
                    <Col className={styless.textrbg}>
                        <Row className={styless.textrSize1}> Освоишь школьную программу по всем предметам от лучших преподавателей.</Row>
                        <Row className={styless.textrSize2}>Получишь доступ к интерактивным материалам,  видеоурокам и онлайн-тренажерам.</Row>
                        <Row className={styless.textrSize3}>Развиешь навыки самостоятельной работы,  научишься решать задачи и анализировать информацию.</Row>
                        <Row className={styless.textrSize4}>Познакомишься с единомышленниками и найдешь новых друзей.</Row>
                        <Row className={styless.textrSize5}>Получишь сертификат об окончании курса,  который подтвердит твои знания и навыки.</Row>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5 mb-5">
                <Row>
                    
                    <Col className={styless.catCpec} ><h2>ГИБКИЙ ГРАФИК ОБУЧЕНИЯ.</h2>Учись в своем темпе,  когда и где удобно.<br/><br/><h2>ДОСТУПНАЯ ЦЕНА.</h2>Учись качественно,  не переплачивая.<br/><br/><h2>ИНДИВИДУАЛЬНЫЙ ПОДХОД.</h2>Получи помощь и поддержку от опытных преподавателей.<br/><br/><h2>ГАРАНТИЯ РЕЗУЛЬТАТА.</h2>Мы поможем тебе освоить школьную программу и добиться успеха в учебе.</Col>
                    <Col className={styless.catTeach}><img src={catTeach} className={styless.catTeach}/></Col>
                </Row>
            </Container>
            <Container className="mt-5">
                <Row>
                    <Col className={styless.catOffer}><img src={catOffer} className={styless.catOffer}/></Col>
                    <Col className={styless.catCpecc} >Не упусти свой шанс! Зарегистрируйся на курс KITTTIES уже сегодня и  открой  для  себя  мир  знаний! <br/><br/>KITTTIES:  Твоя  путевка  в  успешную  учебу!</Col>
                </Row>
            </Container>
        </>
    );
}
export default Home;
