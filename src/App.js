import "./App.css";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import Typewriter from "./typewriter";
import 'aos/dist/aos.css';
import Aos from "aos";
import { animate } from "framer-motion";

function App() {

  const [navbarColour, setNavbarColour] = useState({
    backgroundColor: 'transparent',
    color: 'white',
    boxShadow: null,
  })

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    subject: ''
  })

  const [menuIconColour, setMenuIconColour] = useState("white")

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [classNames, setClassNames] = useState("animate-close")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setNavbarColour({ ...navbarColour, backgroundColor: 'white', color: 'black', boxShadow: "0 8px 30px rgb(145, 145, 145)" })
        setMenuIconColour("black")
      }
      else {
        setNavbarColour({ ...navbarColour, backgroundColor: 'transparent', color: 'white', boxShadow: null })
        setMenuIconColour("white")
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out'
    })
  }, [])

  const handleSubmit = () => {
    setClassNames('animate-open')
    setUserDetails({
      ...userDetails,
      name: '',
      email: '',
      subject: ''
    })
  }

  return (
    <div className="App">
      <div className="home-page">
        <div className={sidebarOpen ? 'sidebarOpen' : 'sidebarClose'}>
          <ul>
            <a href="#home-page"><li>Home</li></a>
            <a href="#about-page"><li>About me</li></a>
            <a href="#skills-page"><li>Skills</li></a>
            <a href="#projects-page"><li>projects</li></a>
            <a href="#contacts-page"><li>Contact</li></a>
          </ul>
        </div>
        <div className="navbar" style={{ backgroundColor: navbarColour.backgroundColor, color: navbarColour.color, boxShadow: navbarColour.boxShadow }}>
          <h2>Portfolio</h2>
          <ul>
            <a href="#home-page"><li>Home</li></a>
            <a href="#about-page"><li>About me</li></a>
            <a href="#skills-page"><li>Skills</li></a>
            <a href="#contacts-page"><li>Contact</li></a>
          </ul>
          {sidebarOpen ? <i class='bx bx-x' style={{ color: { menuIconColour }, fontSize: '24px', margin: '0' }} onClick={() => setSidebarOpen(!sidebarOpen)}></i> :
            <i class='bx bx-menu' style={{ color: { menuIconColour }, fontSize: '24px', margin: '0' }} onClick={() => setSidebarOpen(!sidebarOpen)}></i>}
        </div>

        <div className="home-content" id="home-page">
          <div className="my-info">
            <h3>Hi, I am</h3>
            <div className="typewriting-effect">
              <h1 className="my-name"><Typewriter text="Asker Ahamed" delay={200} /></h1>
              <div className="cursor"></div>
            </div>
            <h3>Frontend Developer</h3>
            <div className="social-media-icons">
              <FaInstagram />
              <FaFacebook />
              <FaLinkedin />
            </div>
          </div>
        </div>

        {/* About Page */}

        <div className="about-page" id="about-page">
          <div className="about-content">
            <div data-aos="fade-up" className="my-details-box">
              <div className="my-details-heading">
                <h1>Who am I ?</h1>
              </div>
              <div className="my-details">
                <h4>
                  Name : <span>Asker Ahamed</span>
                </h4>
                <h4>
                  Email : <span>ahamedasker22@gmail.com</span>
                </h4>
                <h4>
                  Role : <span>Frontend Developer</span>
                </h4>
                <button className="download-cv">Download CV</button>
                <div className="social-media-icons">
                  <FaInstagram />
                  <FaFacebook />
                  <FaLinkedin />
                </div>
              </div>
            </div>

            <div className="my-details-image-box" data-aos = "fade-up">

            </div>
          </div>
        </div>

        {/* Skills Page */}

        <div className="skills-page" id="skills-page">
          <div className="why-hire-me" data-aos="fade-up">
            <h1>Why Hire Me For Your Next <span>Project?</span></h1>
            <p>I am very good at giving picture perfect designs. My passion is to constantly update my developing skills along with the trend.</p>
            <button>Hire Me</button>
          </div>
          <div className="my-skills">
            <div className="my-skills-left">
              <div className="html-skill" data-aos="fade-up">
                <i class='bx bxl-html5'></i>
                <h2>Html</h2>
                <p>Can create picture perfect designs based on your ideas</p>
              </div>
              <div className="javascript-skill" data-aos="fade-up">
                <i class='bx bxl-javascript'></i>
                <h2>Javascript</h2>
                <p>Good with logics to make your website more interactive</p>
              </div>
            </div>
            <div className="my-skills-right" data-aos="fade-up">
              <div className="css-skill">
                <i class='bx bxl-css3'></i>
                <h2>Css</h2>
                <p>Can give clean stylesheets that suits on all devices</p>
              </div>
              <div className="react-skill" data-aos="fade-up">
                <i class='bx bxl-react'></i>
                <h2>ReactJS</h2>
                <p>You can see my work in the CRUD App I mentioned in the next page</p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Page */}

        <div className="projects-page" id="projects-page">
          <h1 data-aos="fade-up">My Creative Works <span>Latest Projects</span></h1>
          <div className="all-projects">
            <div className="crud-app-ls" data-aos="fade-up">
              <div className="project-name">
                <h3>Crud App</h3>
                <p>Using Local Storage</p>
              </div>
            </div>
            <div className="crud-app-redux" data-aos="fade-up">
              <div className="project-name">
                <h3>Crud App</h3>
                <p>Using Redux and Saga</p>
              </div>
            </div>
            <div className="shoe-eccommerce" data-aos="fade-up">
              <div className="project-name">
                <h3>Shoe Ecommerce</h3>
                <p>website</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contacts Page */}

        <div className="contacts-page" id="contacts-page">
          <h1 data-aos="fade-up">Let's Discuss Our <span>Project</span></h1>
          <div className="contacts-page-content">
            <div className="contact-details">
              <div className="contact-number-email">
                <div className="phone-no" data-aos="fade-up">
                  <i class='bx bxs-phone-call'></i>
                  <div className="number">
                    <p>Call me</p>
                    <h5>8825843156</h5>
                  </div>
                </div>
                <div className="email" data-aos="fade-up" >
                  <i class='bx bx-envelope'></i>
                  <div className="mail-id">
                    <p>Email me</p>
                    <h5>ahamedasker22@gmail.com</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <div className="form" data-aos="fade-up" >
                <label>Name</label>
                <input placeholder="Enter your name" value={userDetails.name} onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })} />
                <label>Email</label>
                <input placeholder="Enter your email" value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} />
                <label>Subject</label>
                <input placeholder="Enter your answer" value={userDetails.subject} onChange={(e) => setUserDetails({ ...userDetails, subject: e.target.value })} />
                <div className="form-buttons">
                  <button>Clear form</button>
                  <button onClick={handleSubmit}>Submit</button>
                </div>
                <div className={classNames}>
                  <i class='bx bxs-check-circle'></i>
                  <h4>Submitted !</h4>
                  <button onClick={() => setClassNames("animate-close")}>Go Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
