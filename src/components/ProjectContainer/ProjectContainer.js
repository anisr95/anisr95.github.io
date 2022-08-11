import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'
import expenseTracker from '../../images/All_Expenses.png'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <div className='display'>
      <h3>{project.name}</h3>

      <p className='project__description'>{project.description}</p>
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}
      
    {/* </div> */}
    <div className='project__actions'>

    
    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='git_code'
        target="_blank" rel="noopener noreferrer"
      >
        <span type='button' className='btn btn--outline'>
              Source Code
            </span>
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        target="_blank" rel="noopener noreferrer"
        // className='link link--icon'
      >
        <span type='button' className='btn btn--outline'>
              Live
            </span>
      </a>
    )}
    </div>
    </div>
    {/* <img src='expenseTracker' alt="project-image" /> */}
    <a href={project.livePreview}
        aria-label='live preview'
        target="_blank" rel="noopener noreferrer">
    <img src={expenseTracker} alt='nothing' className='project__image' />
    </a>
  </div>
)

export default ProjectContainer
