import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import history from '../assets/images/Historyheroes.jpg'
import banisters from '../assets/images/BanistersBus-min.jpg'
import math from '../assets/images/mathsq.png'
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
                    <a href="https://historyheroes.netlify.com" target="_blank" rel="noopener noreferrer" className="image main">
                        <img src={history} alt="Screenshot of app scoreboard" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>History Heroes</h3>
                            </header>
                            <p>Students love playing Jeopardy-style review games before tests. There are a handful of templates online, but I wanted to fully customize my own to increase student engagement. I got to play around with modals and button interactivity a bit while also getting practice with props and state in React. This also gave me my first opportunity to experiment with Hooks. I used React-Boostrap to style the app.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/chrisdesilva/history-review-game" target="blank" rel="noopener noreferrer" className="button">Repo</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.thebanistersmusic.com" target="_blank" rel="noopener noreferrer" className="image main">
                        <img src={banisters} alt="The Banisters standing in front of a graffiti art bus" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>The Banisters Website</h3>
                            </header>
                            <p>Our band needed a website to promote upcoming shows, new releases, and general information to help with booking. I used Bootstrap to create a responsive site with a mobile-first design.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/chrisdesilva/The-Banisters-Website/tree/master" target="blank" rel="noopener noreferrer" className="button">Repo</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://math-practice.netlify.com/" target="_blank" rel="noopener noreferrer" className="image">
                        <img src={math} alt="math problem screenshot" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Practice Math</h3>
                            </header>
                            <p>Students need lots of repetition with basic math operations in order to tackle more complicated topics in higher levels of math. I made a math practice app to give students an interactice way to practice their skills, giving feedback on accuracy and overall performance. This was a challenging project to build with React given the logic involved. I had the most trouble with the division problem logic but was excited when I got everything up and running.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/chrisdesilva/math-flashcards-react-app" target="blank" rel="noopener noreferrer" className="button">Repo</a></li>
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