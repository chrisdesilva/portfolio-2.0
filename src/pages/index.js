import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import banisters from '../assets/images/BanistersSkipping-min.jpg'
import history from '../assets/images/Historyheroes.jpg'
import math from '../assets/images/math.png'
import mouph from '../assets/images/mouph.png'

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
                            <a href="https://history-review.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="link primary"></a>
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
                            <a href="https://math-practice-desilva.herokuapp.com" target="_blank" rel="noopener noreferrer" className="link primary"></a>
                        </article>
                        <article style={{backgroundImage: `url(${mouph})`}}>
                            <header className="major">
                                <h3>mouph.com</h3>
                                <p>Musician booking website built with Gatsby</p>
                            </header>
                            <a href="https://www.mouph.com" target="_blank" rel="noopener noreferrer" className="link primary"></a>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>About Me</h2>
                            </header>
                            <p>I'm a front-end developer with a passion for learning and sharpening my tech skills. I want to apply the knowledge and experience I've acquired as a classroom teacher to making useful, engaging applications.</p>
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