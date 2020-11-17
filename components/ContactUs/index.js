import React from 'react'
import styles from './contact.module.css'

const ContactUs = () => {
    return (
    
	
	<section id={styles["contact-form"]}>
	<form>
	
	<div className={styles["contact-left"]}>
	<h1 className={styles["c-l-heading"]}><font className={styles['green-border']}>Write</font> me</h1>
	
	<div className={styles["f-name"]}>
	<font >Name</font>
	<input type="text" placeholder="Full Name"/>
	</div>

	<div className={styles["f-email"]}>
	<font >Email</font>
	<input type="email" placeholder="Example@gmail.com"/>
	</div>
	</div>
	
	<div className={styles["contact-right"]}>
	
	<div className={styles["message"]}>
	<font >Message</font>
	<textarea name="message" rows="5" cols="20" placeholder="Write Message..."></textarea>
	</div>
	
	<button>submit</button>
	</div>
		
	</form>
	
	</section>
    )
}

export default ContactUs
