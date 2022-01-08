import React from 'react'
import About from './Components/About'
import Awards from './Components/Awards'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Header from './Components/Header'
import Intresets from './Components/Intresets'
import Skills from './Components/Skills'

const App = () => {
  return (
    <>
      <Header />
      <div class="container-fluid p-0">
        <About />
        <hr class="m-0" />
        <Experience />
        <hr class="m-0" />
        <Education />
        <hr class="m-0" />
        <Skills />
        <hr class="m-0" />
        <Intresets />
        <hr class="m-0" />
        <Awards />
      </div>
    </>
  )
}

export default App
