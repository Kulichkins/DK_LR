import React, { useState } from 'react';
import { Modal, Button, Form, Navbar, Nav} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import styless from './Navbar.module.css';
import loGo from './Logo.png';


function NaviBar() {
    const [show, setShow] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null); 
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleSubmit = (e) => {
      e.preventDefault();
     
      if (password.length < 8) {
        setPasswordError('Пароль должен быть не менее 8 символов');
        return; 
      }
      setPasswordError(null); 

      console.log('Логин:', login);
      console.log('Пароль:', password);
      handleClose();
    };
  
    return (
      <>
        <Navbar collapseOnSelect expand="lg" className={styless.navbg}>
          <img src={loGo} alt="Логотип" className={styless.logoType} />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className={styless.navigWrapFrst}>
            <Nav className={styless.navigWrapFrsttt}>
              <Link className={styless.navigHr} to="/Teachers">Преподаватели</Link>
              <Link className={styless.navigHr} to="/Offer">Бесплатное занятие</Link>
              <Link className={styless.navigHr} to="/">Главная</Link>
              <Link className={styless.navigHr} to="/TimeMang">Расписание</Link>
              <Link 
                className={styless.navigHr} 
                
                onClick={handleShow} 
              >
                Личный кабинет 
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="responsive-navbar-nav" className={styless.navigWrapSec}>
            <Nav>
            </Nav>
          </Navbar.Collapse>
  
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Личный кабинет</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicLogin">
                  <Form.Label>Логин</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Введите логин" 
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                  />
                </Form.Group>
  
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Введите пароль" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordError && <div className="text-danger">{passwordError}</div>}
                </Form.Group>
  
                <Button variant="primary" type="submit">
                  Войти
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Navbar>
      </>
    );
  }
  
  export default NaviBar;
