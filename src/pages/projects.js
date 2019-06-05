import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import banisters from '../assets/images/BanistersBus-min.jpg'
import shootforteams from '../assets/images/shootforteams.png'
import coppershot from '../assets/images/coppershot.png'
import donorsList from '../assets/images/donorslist2.png'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Chris DeSilva - Projects</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Projects</h2>
                    </header>
                    <p>Check out detailed project descriptions and links below. Click the repo button to check out the code, click the image to see the live project.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <a href="https://shootforteams.com" target="_blank" rel="noopener noreferrer" className="image main">
                        <img src={shootforteams} alt="Homepage screenshot for pick-up app" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Shoot For Teams</h3>
                            </header>
                            <p>One of my favorite ways to stay active is playing basketball. A hassle that pops up from time to time is a court filled with so many people that you can't get on. Shoot For Teams helps to solve that problem by taking your location and finding nearby basketball courts. This app has been exciting for me because I've really been able to dive in with Firebase and some different features with Google Cloud. </p>
                            <ul className="actions">
                                <li><a href="https://github.com/chrisdesilva/pickup" target="blank" rel="noopener noreferrer" className="button">Repo</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.thebanistersmusic.com" target="_blank" rel="noopener noreferrer" className="image main">
                        <img src={banisters} alt="Band in front of graffiti bus" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>The Banisters</h3>
                            </header>
                            <p>In building out my band's website, I had the opportunity to collaborate and respond to feedback, experiment with layout, and add some new functionality. It gave me a chance to play around with some different style ideas and helped build communication skills.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/chrisdesilva/The-Banisters-Website" target="blank" rel="noopener noreferrer" className="button">Repo</a></li>
                            </ul>
                        </div>
                    </div> 
                </section>
                <section>
                    <a href="https://careportal.netlify.com/" target="_blank" rel="noopener noreferrer" className="image main">
                        <img src={donorsList} alt="Login page for DonorsList app" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>DonorsList</h3>
                            </header>
                            <p>I took part in a Hackathon that partnered with a non-profit aimed at connecting church leaders with those in need. I led a team of 4 over the course of 2 days to design a demo that gave an idea of how ann app might function within their organization. We ended up taking 3rd place overall and did a great job learning from one another.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/chrisdesilva/care-portal" target="blank" rel="noopener noreferrer" className="button">Repo</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://coppershot.netlify.com/" target="_blank" rel="noopener noreferrer" className="image main">
                        <img src={coppershot} alt="Copper Shot Distillery in Bastrop, TX" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Copper Shot Distillery</h3>
                            </header>
                            <p>A hidden gem 30 miles east of Austin, Copper Shot Distillery in Bastrop makes small-batch moonshine and spirits with rainwater and local grains. This site was put together with React and React Router, using Semantic-UI-React to help with styling.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/chrisdesilva/coppershot" target="blank" rel="noopener noreferrer" className="button">Repo</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing