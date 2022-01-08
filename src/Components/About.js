import React from 'react'

const About = () => {
    return (
        <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Ankit
                        <span className="text-primary">Kumar</span>
                    </h1>
                    <div className="subheading mb-5">
                        Sec 22  · Gurugram, Hr 122001 · (+91) 9991237576 ·
                        <a href="mailto:name@email.com">ankittkumardev@gmail.com</a>
                    </div>
                    <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    <div className="social-icons">
                        <a className="social-icon" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/ankittkumardev" target='_blank' rel="noreferrer"><i className="fab fa-github"></i></a>
                        <a className="social-icon"><i className="fab fa-twitter"></i></a>
                        <a className="social-icon" href="#!"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
        </section>
    )
}

export default About
