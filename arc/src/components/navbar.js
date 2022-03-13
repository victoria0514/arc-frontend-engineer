import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            {/* Routing all pages together */}
      {/* not sure whats better, this or in app.js. would like someone to test
      and tell me what is better and what we should fix */}
            <ul className = 'navbar' id="Nav">
                <li className = "Home"><Link to = "/" className = "NavText">Home Page</Link> </li>
                <li className = "Academics"><Link to = "/academics" className = "NavText">Academics Page</Link> </li>
                <li className = "Resume"><Link to = "/resume" className = "NavText">Resume</Link> </li>
                <li className = "LinkedIn"><Link to = "/linkedin" className = "NavText">LinkedIn</Link> </li>
                <li className = 'GitHub'><Link to = "/github" className="NavText">GitHub</Link> </li>
                <li className = 'Internship'><Link to = "/internship" className="NavText">Internship</Link> </li>
                <li className = 'Jobs'><Link to = "/jobs" className="NavText">Jobs</Link> </li>
                {/* 
                <li className = "NavText"><Link to = "/" className = "NavText">Home page</Link> </li> */}
               
            </ul>
        </div>
    )
}