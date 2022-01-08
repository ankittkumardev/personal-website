import React from 'react'

const Education = () => {
    return (
        <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Himalayan Garhwal University </h3>
                            <div className="subheading mb-3">Bachelor Of Technology</div>
                            <div>Computer Science And Engineering</div>
                            <p>GPA: 7.6</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2018 - June 2022 </span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Delhi Public School</h3>
                            <div className="subheading mb-3">Science (Non-Med)</div>
                            <p>GPA: 8.6</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2017 - May 2018</span></div>
                    </div>
                </div>
            </section>
    )
}

export default Education
