import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about, myResume } from '../../portfolio'
import sinaResume from "../../Sina_Rafieefar_Resume.pdf"
// import myResume from '../../portfolio';
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1 className='greeting'>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

        <div className='action__links'>
      <div className='about__contact center'>
        {resume && (
          <a href={sinaResume} target="_blank" rel="noopener noreferrer" download>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}
          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                  target="_blank" rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                  target="_blank" rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </a>
              )}
              
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default About
