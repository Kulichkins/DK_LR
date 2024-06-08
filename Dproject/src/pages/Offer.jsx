

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import styless from './Offer.module.css';

function Offer() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({}); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Валидация формы
    const newErrors = {};
    if (name.trim() === '') {
      newErrors.name = 'Введите имя';
    }
    if (surname.trim() === '') {
      newErrors.surname = 'Введите фамилию';
    }
    if (phone.trim() === '' || !/^\+?\d{10,13}$/.test(phone)) {
      newErrors.phone = 'Введите корректный номер телефона';
    }
    if (email.trim() === '' || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Введите корректный email';
    }

    setErrors(newErrors);


    if (Object.keys(newErrors).length === 0) {
      console.log('Имя:', name);
      console.log('Фамилия:', surname);
      console.log('Телефон:', phone);
      console.log('Email:', email);
      handleClose();
    }
  };

  return (
    <>
      <Container className={styless.homeFt}>
        <Row>
          <Col className={styless.TopFt}>
            Хочешь попробовать онлайн-обучение в KITTTIES?
            <br />
            Приглашаем тебя
            <br />
            на БЕСПЛАТНОЕ
            <br />
            пробное занятие!
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className={styless.AskPre}>
            Погрузись в мир знаний с нашими опытными преподавателями, которые
            сделают обучение увлекательным и доступным!
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3} className={styless.AskTr}>
            На пробном занятии ты:
          </Col>
          <Col xs={12} md={9} className={styless.AskTrMore}>
            Познакомишься с преподавателем и узнаешь о его уникальном стиле
            преподавания.
            <br />
            <br />
            Узнаешь о программе курса и формате обучения в KITTTIES.
            <br />
            <br />
            Попробуешь свои силы в решении практических задач.
            <br />
            <br />
            Получишь ответы на все свои вопросы об онлайн-школе.
          </Col>
        </Row>
        <Row>
          <Col className={styless.KitIs}>
            <h1>KITTTIES - это:</h1>
          </Col>
        </Row>
        <Row className={styless.KitsOpisfor2}>
          <Col className={styless.KitsOpis}>
            Высококвалифицированные преподаватели с богатым опытом.
          </Col>
          <Col className={styless.KitsOpis}>
            Гибкий график и возможность учиться в любое удобное время.
          </Col>
        </Row>
        <Row className={styless.KitsOpisFor}>
          <Col className={styless.KitsOpis}>
            Интерактивные уроки с использованием современных технологий.
          </Col>
          <Col className={styless.KitsOpis}>
            Удобная платформа для онлайн-обучения.
          </Col>
        </Row>
      </Container>
      <Container className={styless.btnWrap}>
        <Row className={styless.KitsOpisbtn}>
          Не упусти возможность попробовать обучение в KITTTIES БЕСПЛАТНО!
        </Row>
        <Row className={styless.btnWr}>
          <button className={styless.Kitbtn} onClick={handleShow}>
            ЗАПИСАТЬСЯ
          </button>
        </Row>
        <Row className={styless.KitsOpisbtn}>
          Запишись на пробное занятие прямо сейчас по кнопке
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Запись на пробное занятие</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group >
              <Form.Label>Имя</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <div >{errors.name}</div>}
            </Form.Group>

            <Form.Group >
              <Form.Label>Фамилия</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите фамилию"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              {errors.surname && (
                <div >{errors.surname}</div>
              )}
            </Form.Group>

            <Form.Group >
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Введите номер телефона"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <div className="text-danger">{errors.phone}</div>}
            </Form.Group>

            <Form.Group >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Введите email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </Form.Group>

            <Button variant="primary" type="submit">
              Записаться
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Offer;





