import React from "react";
import styless from './Teachers.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import Tich1 from './TeacherIMG/t1.png'
import Tich2 from './TeacherIMG/t2.png'
import Tich3 from './TeacherIMG/t3.png'
import Tich4 from './TeacherIMG/t4.png'
import Tich5 from './TeacherIMG/t5.png'
import Tich6 from './TeacherIMG/t6.png'
import Tich7 from './TeacherIMG/t7.png'
import Tich8 from './TeacherIMG/t8.png'
import Tich9 from './TeacherIMG/t9.png'
import Tich10 from './TeacherIMG/t10.png'
import Tich11 from './TeacherIMG/t11.png'

 

function Teachers(){
    return (
        <>
            <Container className={styless.homeFt}>
                <Row>
                    <Col className={styless.TopFt}>НАШИ ПРЕПОДАВАТЕЛИ: <br/>Профессиональные и современные преподаватели, которые<br/> умеют найти общий язык<br/> с любым ребенком</Col>
                </Row>
            </Container>
            <Container>
               <Row className="mt-5">
                    <Col className={styless.TeacImgCol}><img src={Tich1} className={styless.TeacImg}/>Математика</Col>
                    <Col className={styless.TeacImgText}><b> Александр Сергеевич </b>-  математик с богатым опытом преподавания,  который умеет объяснять сложные вещи простым языком.  Он  верит,  что  математика  может  быть  интересной  и  увлекательной  для  всех.  Саша  любит  решать  задачи  и  делиться  своими  знаниями  с  учениками.  Он  всегда  готов  помочь  и  поддержать  их  в  познании  мира  чисел.</Col>
               </Row>
               <Row className="mt-5">
                    
                    <Col className={styless.TeacImgText}><b>Артем Вадимович </b>-  заводной  и  креативный  преподаватель,  который  делает  русский  язык  живым  и  интересным.  Он  любит  рассказывать  истории,  играть  в  слова  и  показывать,  что  язык  -  это  не  только  правила,  но  и  творчество.  Артем  Вадимович  использует  интерактивные  методы  преподавания,  чтобы  сделать  уроки  русского  языка  более  запоминающимися  и  эффективными.</Col>
                    <Col className={styless.TeacImgCol2}><img src={Tich2} className={styless.TeacImg}/>Русский язык</Col>
               </Row>
               <Row className="mt-5">
                    <Col className={styless.TeacImgCol}><img src={Tich3} className={styless.TeacImg}/>Физика</Col>
                    <Col className={styless.TeacImgText}><b>Дмитрий  Иванович </b> -  опытный  ученый  с  огромным  багажом  знаний  о  физических  законах.  Он  умеет  объяснить  сложные  концепции  простым  и  понятным  языком,  используя  аналогии  и  реальные  примеры  из  жизни.  Дмитрий  Иванович  любит  делиться  своими  знаниями  и  воспитывать  в  учениках  любопытство  к  миру  физики.</Col>
               </Row>
               <Row className="mt-5">
                    
                    <Col className={styless.TeacImgText}><b>Андрей  Васильевич </b> -  спокойный  и  терпеливый  преподаватель,  который  создает  комфортную  атмосферу  для  обучения.  Он  верит,  что  химия  -  это  не  страшилка,  а  увлекательное  путешествие  в  мир  молекул  и  атомов.  Андрей  Васильевич  всегда  готов  помочь  ученикам  разбираться  в  сложных  темах  и  поддерживать  их  в  познании  химии.</Col>
                    <Col className={styless.TeacImgCol2}><img src={Tich4} className={styless.TeacImg}/>Химия</Col>
               </Row>
               <Row className="mt-5">
                    <Col className={styless.TeacImgCol}><img src={Tich5} className={styless.TeacImg}/>Биология</Col>
                    <Col className={styless.TeacImgText}><b>Анна  Николаевна </b> -  строгая,  но  справедливая  преподаватель,  которая  ставит  перед  собой  цель  научить  учеников  глубоко  понимать  биологические  процессы.  Она  использует  классические  методы  преподавания,  но  при  этом  не  забывает  о  современных  технологиях  и  интерактивных  методах.  Анна  Николаевна  верит,  что  владение  биологическими  знаниями  -  это  необходимость  для  успеха  в  современном  мире.</Col>
               </Row>
               <Row className="mt-5">
                    
                    <Col className={styless.TeacImgText}><b>Евгений Александрович</b> - настоящий эрудит и ценитель художественного слова. Более 10 лет он преподает литературу, щедро делясь своими знаниями и любовью к книгам со учениками. Евгений Александрович ведет уроки в легкой, увлекательной манере, умело вовлекая аудиторию в интерактивное обсуждение. Занятия с этим преподавателем станут ярким событием в вашей культурной жизни!</Col>
                    <Col className={styless.TeacImgCol2}><img src={Tich6} className={styless.TeacImg}/>Литература</Col>
               </Row>
               <Row className="mt-5">
                    <Col className={styless.TeacImgCol}><img src={Tich7} className={styless.TeacImg}/>География</Col>
                    <Col className={styless.TeacImgText}><b>Анна Сергеевна </b>- это настоящий гид по удивительному миру географии. На ее занятиях вы отправитесь в захватывающие путешествия по разным странам и континентам, познакомитесь с уникальными природными ландшафтами, культурами и традициями народов. Анна Сергеевна обладает энциклопедическими знаниями, но при этом доступно и вдохновенно рассказывает о сложных географических явлениях.</Col>
               </Row>
               <Row className="mt-5">
                    
                    <Col className={styless.TeacImgText}><b>Максим Андреевич </b>- виртуоз в области истории. Его лекции увлекают и завораживают, ведь он умеет оживить даже самые сложные исторические события и эпохи. Обладая энциклопедическими познаниями, Максим Андреевич виртуозно сплетает воедино факты, даты и имена, превращая каждый урок в захватывающее интеллектуальное путешествие.</Col>
                    <Col className={styless.TeacImgCol2}><img src={Tich8} className={styless.TeacImg}/>История</Col>
               </Row>
               <Row className="mt-5">
                    <Col className={styless.TeacImgCol}>Обществознание<img src={Tich9} className={styless.TeacImg}/></Col>
                    <Col className={styless.TeacImgText}><b>Артём Александрович</b> — получил степень магистра в области социальных наук и имеет опыт работы в сфере образования более пяти лет. Артём Александрович известен своим творческим подходом к обучению, он использует интерактивные методы и игры для того, чтобы сделать уроки интересными и запоминающимися. Его студенты отмечают его профессионализм, терпение и умение объяснять сложные концепции простым языком.</Col>
               </Row>
               <Row className="mt-5">
                    
                    <Col className={styless.TeacImgText}><b>Евгений Борисович</b> — окончил Московский государственный лингвистический университет им. Мориса Тореза и имеет многолетний опыт преподавания английского языка как детям, так и взрослым. Евгений Борисович отличается индивидуальным подходом к каждому ученику, помогая им преодолевать языковой барьер и улучшать разговорные навыки.</Col>
                    <Col className={styless.TeacImgCol2}><img src={Tich10} className={styless.TeacImg}/>Английский язык</Col>
               </Row>
               <Row className="mt-5">
                    <Col className={styless.TeacImgCol}><img src={Tich11} className={styless.TeacImg}/>Информатика</Col>
                    <Col className={styless.TeacImgText}><b>Алексей Владимирович </b>— окончил Московский физико-технический институт и имеет многолетний опыт работы в IT-сфере. Алексей Владимирович обладает глубокими знаниями в области программирования и компьютерных технологий, а также умением просто и понятно объяснять сложные концепции. Он использует практический подход к обучению, предлагая ученикам решать реальные задачи и проекты.</Col>
               </Row>
            </Container>
            
        </>
    );
}
export default Teachers;








