import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import donorsList from '../assets/images/donorslist.png'
import banisters from '../assets/images/BanistersBus-min.jpg'
import coppershot from '../assets/images/coppershot.png'
import pickup from '../assets/images/pickup.png'

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
                        <article style={{backgroundImage: `url(${pickup})`}}>
                            <header className="major">
                                <h3>Pick-up</h3>
                                <p>React app that displays nearby basketball courts</p>
                            </header>
                            <a href="https://pick-up-1.firebaseapp.com/" target="_blank" rel="noopener noreferrer" className="link primary"></a>
                        </article>
                        <article style={{backgroundImage: `url(${donorsList})`}}>
                        <header className="major">
                            <h3>DonorsList</h3>
                            <p>Hackathon project built to connect church leaders with those in need</p>
                        </header>
                        <a href="https://careportal.netlify.com/" target="_blank" rel="noopener noreferrer" className="link primary"></a>
                        </article>
                            <article style={{backgroundImage: `url(${coppershot})`}}>
                                <header className="major">
                                    <h3>Copper Shot Distillery</h3>
                                    <p>Website for Distillery in Bastrop, TX</p>
                                </header>
                                <a href="https://coppershot.netlify.com/" target="_blank" rel="noopener noreferrer" className="link primary"></a>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>About Me</h2>
                            </header>
                            <p>I’m a software developer with a passion for learning and sharpening my tech skills. I am a disciplined and creative problem-solver who strives for excellence in my work. Collaboration and feedback help me get even better. </p>
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