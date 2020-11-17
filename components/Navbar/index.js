import React from 'react'

import styles from './navbar.module.css'
import {FaLinkedin, FaFacebookF,FaTwitter, FaHamburger} from 'react-icons/fa'


const NavBar = () => {
    return (
        <section id={styles.main}>
        <nav>
	
	<a href="#" className={styles.logo} >Thiago Yamaguchi</a>
	
	<FaHamburger className={styles.toggle}/>
	<ul className={styles.menu}>
	<li className={styles.active}><a href="#main" >Home</a></li>	
	<li><a href="#about">About</a></li>	
	<li><a href="#services">Services</a></li>	
	<li><a href="#contact-form">Contact</a></li>	
	</ul>
	
	
	</nav>
	<div className={styles.name}>
	
	<p>Hello</p>
	
	<h1>I'm <font color="#17d1ac">Thiago</font> Yamaguchi</h1>
	
	<p className={styles.details}>I´m 29 years old, father of a little girl, married, developer, gamer...</p>
	
	<a href="#" className={styles.cvBtn}>Download CV</a>
	
		
	</div>
		
	<div className={styles.blackLine} ></div>
	
	<div className={styles.social}>
	<a href="https://www.linkedin.com/in/thiago-yamaguchi-21312790/" target="_blank"><FaLinkedin className={styles.reactIcons}/></a>	
	<a href="https://www.facebook.com/thiago.yamaguchi.1/"  target="_blank"><FaFacebookF className={styles.reactIcons}/></a>
	<a href="https://twitter.com/tryjapa" target="_blank"><FaTwitter className={styles.reactIcons}/></a>
		
	</div>
    </section>
    )
}

export default NavBar
