import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import suit from '../assets/images/suitandtie.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Chris DeSilva - About</title>
            <meta name="description" content="About Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About Me</h1>
                    </header>
                    <span className="image main"><img style={{height: '50rem', width: 'auto'}} src={suit} alt="standing with suit and tie" /></span>
                    <p>
                        The thing I love about coding is that I am able to blend my creative and analytical sides to produce something really cool.  I love learning about and experimenting with new technologies and I look forward to sharing my knowledge with others.  I plan to apply the skills I’ve gained through teaching and leadership roles to eventually serve as a mentor to new developers. 
                    </p>
                    <p>
                        When I’m not writing code, I enjoy sports (Go Cubs!) and the outdoors. I taught myself how to play guitar in high school and have been performing ever since. I enjoy any opportunity to travel. I currently reside outside Austin, Texas with my wife and two dogs. 
                    </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic