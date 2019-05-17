import React from 'react'
import hana from '../assets/images/roadtohana.jpg'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <div>
                <img className="image fit" src={hana} />
            </div>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:chris.a.desilva@gmail.com">chris.a.desilva@gmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(512) 587-1461</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-file"></span>
                        <h3>Resume</h3>
                        <a href="https://docs.google.com/document/d/1h4nJOzUTo2CtRs5Q0HsE_1vAQ6xVXj1uAAJ9EvpGYDY/edit?usp=sharing" target="_blank">Get to know me in one page</a>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
