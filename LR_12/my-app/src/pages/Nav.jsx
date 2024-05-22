import React from "react"
import img1 from '../Images/logo.svg'
import img2 from '../Images/calculation.svg'
import img3 from '../Images/measering.svg'
import styles from './Nav.module.css'
import { Route,Routes,Link } from "react-router-dom"

function Nav(){
    return(
        
        <header className = {styles.nav_bar}>
            <div className = {styles.logo}>
                <img src={img1}/>
            </div>
            <div className = {styles.atributes}>
                <Link className = {styles.a_atributes} to="/Services">Services</Link>
                <Link className = {styles.a_atributes} to="/Products">Products</Link>
                <Link className = {styles.a_atributes} to="/About">About us</Link>
                <Link className = {styles.a_atributes} to="/Portfolio">Portfolio</Link>
                <Link className = {styles.a_atributes} to="/FAQ">FAQ</Link>
                <Link className = {styles.a_atributes} to="/Contacts">Contacts</Link>
            </div>
            <div className = {styles.pictures}>
                <button className={styles.but1}><img src={img2}/> <div>Make Request</div></button>
                <button className={styles.but2}><img src={img3}/> <div>Calculation</div></button>
                
            </div>
           
        </header>
        
    )
}

export default Nav;