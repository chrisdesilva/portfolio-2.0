import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import guitar from '../assets/images/travelguitar.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Chris DeSilva - About</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About Me</h1>
                    </header>
                    <span className="image main"><img src={guitar} alt="playing guitar in the woods" /></span>
                    <p>I started teaching middle school in 2011 after serving with an AmeriCorps program called City Year. I've enjoyed building relationships with students and finding different ways to connect throughout the years. I picked up an interest in writing code after leading an elective for students using Code.org. That interest eventually triggered the decision to learn about development more formally through Austin Coding Academy. Since then I've worked on a handful of personal and freelance projects while directing my own learning on JavaScript frameworks.</p>
                    <p>When I'm not writing code, I enjoy anything active or outdoors. I grew up as an avid sports fan and try to keep up with anything Cubs, Cowboys, or Badgers-related. I love getting on stage and performing with my band as much as working on new music at home or at practice. Between cross-country road trips and checking out different countries (ok, well just one country so far, but Costa Rica is awesome and I want to go back), I enjoy any opportunity to travel. </p>
                    <p>Having gained a number of soft skills through teaching and leadership roles, I aim to build on my tech skills to eventually serve as a mentor to new developers. I enjoy writing code and learning about new technologies and look forward to being able to share my knowledge with others.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic