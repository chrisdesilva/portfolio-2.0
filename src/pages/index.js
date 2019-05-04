import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import weather from '../assets/images/weather-landscape.png'
import banisters from '../assets/images/BanistersBus-min.jpg'
import jeopardy from '../assets/images/openjeopardy.png'
import vocab from '../assets/images/popupvocab.png'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Chris DeSilva - Portfolio"
                    meta={[
                        { name: 'viewport', content: 'width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${banisters})`}}>
                            <header className="major">
                                <h3>The Banisters</h3>
                                <p>Band website built with HTML, CSS, and JavaScript</p>
                            </header>
                            <a href="https://www.thebanistersmusic.com" target="_blank" rel="noopener noreferrer" className="link primary"></a>
                        </article>
                        <article style={{backgroundImage: `url(${weather})`}}>
                            <header className="major">
                                <h3>WeatheReport</h3>
                                <p>React app that shows current weather in a given zip code</p>
                            </header>
                            <a href="https://weathereport.netlify.com/" target="_blank" rel="noopener noreferrer" className="link primary"></a>
                        </article>
                        <article style={{backgroundImage: `url(${jeopardy})`}}>
                            <header className="major">
                                <h3>Open Jeopardy</h3>
                                <p>App for playing Jeopardy-style quiz game, built with React</p>
                            </header>
                            <a href="https://openjeopardy.netlify.com/" target="_blank" rel="noopener noreferrer" className="link primary"></a>
                        </article>
                        <article style={{backgroundImage: `url(${vocab})`}}>
                            <header className="major">
                                <h3>Popup Vocab</h3>
                                <p>React app to study vocabulary terms with definitions and pictures</p>
                            </header>
                            <a href="https://popupvocab.netlify.com/" target="_blank" rel="noopener noreferrer" className="link primary"></a>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>About Me</h2>
                            </header>
                            <p>I’m a front-end developer with a passion for learning and sharpening my tech skills. I am a disciplined and creative problem-solver who strives for excellence in my work. Collaboration and feedback help me get even better. </p>
                            <ul className="actions">
                                <li><a href="mailto:chris.a.desilva@gmail.com" className="button">Get in touch</a></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex