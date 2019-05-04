import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import banisters from '../assets/images/BanistersBus-min.jpg'
import weather from '../assets/images/weather-landscape.png'
import jeopardy from '../assets/images/openjeopardy.png'
import vocab from '../assets/images/popupvocab.png'

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
                            <p>I had an opportunity to collaborate with clients and respond to feedback throughout the making of this website. It gave me a chance to play around with some different style ideas and helped build communication skills.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/chrisdesilva/The-Banisters-Website" target="blank" rel="noopener noreferrer" className="button">Repo</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://weathereport.netlify.com/" target="_blank" rel="noopener noreferrer" className="image main">
                        <img src={weather} alt="Cartoon landscape with mountains and trees" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>WeatheReport</h3>
                            </header>
                            <p>I wanted to practice making API calls in a React app and decided to pull weather data from openweathermap.org. This project taught me a bit more about making dynamic API calls with input from the user.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/chrisdesilva/weather-react-app" target="blank" rel="noopener noreferrer" className="button">Repo</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://openjeopardy.netlify.com/" target="_blank" rel="noopener noreferrer" className="image">
                        <img src={jeopardy} alt="open jeopardy game board screenshot" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Open Jeopardy</h3>
                            </header>
                            <p>Students have always enjoyed playing review games, so Open Jeopardy is an attempt to mix up the traditional feel of the classic quiz show with a bit more flexibility around categories and scoring. This project uses React and makes use of Hooks in addition to class-based components. I'm continuing to add to this project so check back for updates!</p>
                            <ul className="actions">
                                <li><a href="https://github.com/chrisdesilva/open-jeopardy" target="blank" rel="noopener noreferrer" className="button">Repo</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://popupvocab.netlify.com/" target="_blank" rel="noopener noreferrer" className="image">
                        <img src={vocab} alt="Popup Vocab screenshot" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Popup Vocab</h3>
                            </header>
                            <p>I've always liked finding ways for students to engage in learning vocabulary. One consistent trend I've noticed is that the use of images is tremendously helpful for making words stick. This app allows users to add words, definitions, and images for new terms. Clicking on the term pops up a modal with the definition and image, allowing students to practice linking words with their meaning.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/chrisdesilva/react-vocab" target="blank" rel="noopener noreferrer" className="button">Repo</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing