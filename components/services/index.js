import React from 'react'
import styles from './services.module.css'
const Services = () => {
    return (
         
        <section id={styles.services}>
	
            <div className={styles["s-heading"]}>
            <h1>Services</h1>
            <p>Here Are Some Servies I Provide You.</p>
            </div>
           
                <div className={styles["b-container"]}>                
                    <div className={styles["s-box"]}>           
                        <div className={styles["s-b-img"]}>               
                            <div className={styles["s-type"]}>Front-End</div>                
                            <img src="/s1.png"/>
                        </div>           
                        <div className={styles["s-b-text"]}>
                        <a href="#">. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur pretium quam sit amet nunc viverra mattis. Etiam sagittis mauris sed ultricies feugiat.</a>	
                        </div>
                    </div>                    
                    <div className={styles["s-box"]}>           
                        <div className={styles["s-b-img"]}>               
                            <div className={styles["s-type"]}>Back-End</div>                
                            <img src="/s2.png"/>
                        </div>           
                        <div className={styles["s-b-text"]}>
                        <a href="#">. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur pretium quam sit amet nunc viverra mattis. Etiam sagittis mauris sed ultricies feugiat.</a>	
                        </div>
                    </div>

            </div>
            
               
        </section>
    )
}

export default Services
