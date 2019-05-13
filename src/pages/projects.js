import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import banisters from '../assets/images/BanistersBus-min.jpg'
import pickup from '../assets/images/pickup.png'
import jeopardy from '../assets/images/openjeopardy.png'
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
                    <a href="https://pick-up-1.firebaseapp.com/" target="_blank" rel="noopener noreferrer" className="image main">
                        <img src={pickup} alt="Homepage screenshot for pick-up app" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Pick-up</h3>
                            </header>
                            <p>One of my favorite ways to stay active is playing basketball. A hassle that pops up from time to time is a court filled with so many people that you can't get on. Pick-up helps to solve that problem by taking your location and finding nearby basketball courts. This app was exciting for me because I really got to dive in with Firebase. I was able to successfully link to a database and add Google OAuth. I'm looking forward to adding more features like player profiles and court ratings. </p>
                            <ul className="actions">
                                <li><a href="https://github.com/chrisdesilva/pickup" target="blank" rel="noopener noreferrer" className="button">Repo</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://openjeopardy.netlify.com/" target="_blank" rel="noopener noreferrer" className="image main">
                        <img src={jeopardy} alt="open jeopardy game board screenshot" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Open Jeopardy</h3>
                            </header>
                            <p>Students have always enjoyed playing review games, so Open Jeopardy is an attempt to mix up the traditional feel of the classic quiz show with a bit more flexibility around categories and scoring. This project uses React and makes use of Hooks in addition to class-based components.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/chrisdesilva/open-jeopardy" target="blank" rel="noopener noreferrer" className="button">Repo</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing