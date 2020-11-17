import React from 'react'
import styles from './aboutus.module.css'

const AboutUs = () => {
    return (
        <section id={styles.about}>
        <div class={styles['about-text']}>
        <h1>About Me</h1>
        <h2>Full stack developer with a crush on Frontend</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis tortor vitae turpis imperdiet tincidunt. Phasellus scelerisque nunc sed leo mollis elementum. Cras scelerisque venenatis tincidunt. Ut placerat venenatis posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque in augue ac turpis aliquam sodales nec id velit. </p>
        {/* <button>View More Details</button> */}
        </div>        
        
        <div class={styles['about-model']}>
        <img src="/AboutUs.jpg" alt="model"/>	
        </div>        
        </section>
    )
}

export default AboutUs
