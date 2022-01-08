import React from 'react'

const Experience = () => {
    return (
        <section className="resume-section" id="experience">
        <div className="resume-section-content">
            <h2 className="mb-5">Projects</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Amazon Clone App</h3>
                    <div className="subheading mb-5"></div>
                    <p>A web app that makes online shopping less stressful by saving time and providing an excellent user experience. A fully functional, responsive website with user authentication using Firebase. Context API was used to manage global state.</p>
                    </div>
                <div className="flex-shrink-0"><span className="text-primary">October 2021 - Present</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Task Manager App</h3>
                    <div className="subheading mb-3">Intelitec Solutions</div>
                    <p>A web app to facilitate users ability to easily add and access daily to-do notes. A user can easily review the list and prioritise the most important tasks..It makes the user’s daily life more managable and stressfree.
                    </p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">December 2020 - March 2021</span></div>
            </div>
        </div>
    </section>    )
}

export default Experience
