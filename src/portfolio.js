const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rajshekhar26.github.io/cleanfolio',
  homepage: 'https://sinarafieefar.com',
  title: 'SR.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sina Rafieefar',
  role: 'Full Stack Developer',
  description:
    'I am a self-taught full stack web developer (leaning more towards front-end) who is extremely passionate and eager to learn more every day. I absolutely love solving problems, finding solutions, and creating new things.',
  // resume: 'https://example.com',
  resume: './Sina_Rafieefar_Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/sinarafieefar/',
    github: 'https://github.com/anisr95',
  },
}

const myResume = './Sina_Rafieefar_Resume.pdf';

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Expense Tracker',
    description:
      'An Expense Tracker App that allows you to easily track and keep a record of all of your transactions so you could save more and spend less',
    stack: ['MongoDB', 'Express', 'React', 'Node'],
    sourceCode: 'https://github.com/anisr95/Expense_Tracker_Fullstack',
    livePreview: 'https://expense-trackerv2.herokuapp.com/',
    image: './src/images.All_Expenses.png'
  },
  // {
  //   name: 'Project 2',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
  // {
  //   name: 'Project 3',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'MongoDB',
  'Node',
  'Express',
  'REST API',
  'Git/GitHub',
  'Figma',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'rafieefars@gmail.com',
}

export { header, about, projects, skills, contact, myResume }
