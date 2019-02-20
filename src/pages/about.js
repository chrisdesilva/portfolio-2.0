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
                    <p>
                        I started teaching middle school in 2011 after serving with AmeriCorps.  My favorite part about teaching is building relationships with my students and colleagues and taking on leadership roles. I picked up an interest in writing code after teaching an elective for students using Code.org. I decided to formally pursue this interest through the Austin Coding Academy in 2018. Since then, I’ve worked on a handful of personal and freelance projects while directing my own learning. 
                    </p>
                    <p>
                        What I love about coding is that I am able to blend my creative and analytical sides to produce something really cool.  I love learning about and experimenting with new technologies and I look forward to sharing my knowledge with others.  I plan to apply the skills I’ve gained through teaching and leadership roles to eventually serve as a mentor to new developers. 
                    </p>
                    <p>
                        When I’m not writing code, I enjoy sports (Go Cubs!) and the outdoors. I taught myself how to play guitar in high school and have been performing ever since. I enjoy any opportunity to travel. I currently reside outside Austin, Texas with my wife and two crazy dogs. 
                    </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic