import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import banisters from '../assets/images/BanistersSkipping-min.jpg'
import history from '../assets/images/Historyheroes.jpg'
import math from '../assets/images/math.png'
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
                        <article style={{backgroundImage: `url(${history})`}}>
                            <header className="major">
                                <h3>History Heroes</h3>
                                <p>A review game built with React</p>
                            </header>
                            <a href="https://historyheroes.netlify.com" target="_blank" rel="noopener noreferrer" className="link primary"></a>
                        </article>
                        <article style={{backgroundImage: `url(${banisters})`}}>
                            <header className="major">
                                <h3>thebanistersmusic.com</h3>
                                <p>Band website built with HTML, CSS, and JavaScript</p>
                            </header>
                            <a href="https://www.thebanistersmusic.com" target="_blank" rel="noopener noreferrer" className="link primary"></a>
                        </article>
                        <article style={{backgroundImage: `url(${math})`}}>
                            <header className="major">
                                <h3>Math Practice</h3>
                                <p>App for practicing math facts, built with React</p>
                            </header>
                            <a href="https://math-practice.netlify.com/" target="_blank" rel="noopener noreferrer" className="link primary"></a>
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