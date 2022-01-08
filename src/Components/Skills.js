import React from 'react'

const Skills = () => {
    return (
        <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages & Tools</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                        <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                        <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                        <li className="list-inline-item"><i className="fab fa-react"></i></li>
                        <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                        <li className="list-inline-item"><i className="fab fa-sass"></i></li>
                        <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                    </ul>
                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Comprehensive knowledge of React JS platform and core principle
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Command over HTML,CSS, Tailwind Css and javascript languages 
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Restful API development and deployment
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Command over developing React JS components, Virtual DOM, workflows
                        </li>

                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Mobile-First, Responsive Design
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Cross Browser Testing & Debugging
                        </li>
                    </ul>
                </div>
            </section>
    )
}

export default Skills
