import aboutpic from "./components/Access/WhatsApp Image 2023-06-01 at 21.54.42.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://morganbb104.github.io/HW_20_Portfolio_withReact/',
  title: 'Prasad',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Prasad Gore',
  role: 'A Frontend Developer',
  description:'During my studies, I developed a solid foundation in web development technologies including HTML, CSS, JavaScript. I also gained experience in various front-end frameworks like React and Tailwind-CSS. I am familiar with responsive design principles, cross-browser compatibility, and optimization techniques to ensure fast loading times and smooth user experiences.',
  resume:'https://drive.google.com/drive/my-drive',
  social: {
    linkedin: 'https://www.linkedin.com/in/prasad-gore-728a35261/',
    github: 'https://github.com/goregurupr',
  },
}


const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Jar-Management (MERN)',
    description:
      'The JAR management project developed using the MERN (MongoDB, Express.js, React, Node.js) stack is a comprehensive web application that revolutionizes the recruitment process. By leveraging React for the frontend, users experience a seamless interface for browsing job listings, submitting applications, and monitoring their progress. On the backend, powered by Node.js and Express.js, secure authentication and data storage in a MongoDB database ensure user privacy. ',
    stack: ['localstorage', 'Openweather API', 'Google Map API','Movie Database API'],
    sourceCode: 'https://github.com/Mike-C-Sanders/Movie-Tracker',
    livePreview: 'https://mike-c-sanders.github.io/Movie-Tracker/',
  },
  {
    name: 'E-Commerce',
    description:
      'A tourism booking project frontend is a user-oriented digital platform crafted to facilitate seamless booking experiences for travelers. This interface serves as the gateway through which users access and engage with a diverse array of travel services. Comprising an aesthetically pleasing design, interactive elements, and intuitive navigation, the frontend is meticulously designed to amplify user satisfaction.',
    stack: ['swiper.js', 'npm', 'jawsdb','handlebars','express','nodejs'],
    sourceCode: 'https://github.com/Morganbb104/Event_Planner_project2',
    livePreview: 'https://obscure-chamber-98928.herokuapp.com/',
  },
  {
    name: 'Todo Application (MERN)',
    description:
      'I am successfully created a Todo application using the MERN (MongoDB, Express.js, React, Node.js) stack. This project offers users a streamlined way to manage tasks and stay organized. The React frontend provides an intuitive user interface where tasks can be added, marked as complete, and removed. Leveraging Express.js and Node.js on the backend,  I am established a smooth communication channel between the frontend and the MongoDB database, enabling efficient storage and retrieval of task data',
    stack: ['html-css-javascript', 'sequelize', 'React'],
    sourceCode: 'https://github.com/stone-com/Resource-Planner',
    livePreview: 'https://resource-planner-group2.herokuapp.com/',
   },
  // {
  //   name: 'GameStoreData(back end)',
  //   description:
  //     'GameStoreData is able to let user retrieve the game from database based on its year and category',
  //   stack: ['Java 8', 'MySQL', 'React'],
  //   sourceCode: 'https://github.com/stone-com/Resource-Planner',
    
  // },
  // {
  //   name: 'Music Store(back end)',
  //   description:
  //     'MusicStore is able to direct user to the desired page based on its endpoints by track, album,artist and label',
  //   stack: ['html-css-javascript', 'sequelize', 'React'],
  //   sourceCode: 'https://github.com/Morganbb104/M7-project2-musictore-recommendations-Huang_Chengchien',
  //   livePreview: 'https://cheng32-musicstore-catalog.herokuapp.com/track',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'MERN',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'goreguruprasad48@gmail.com',
}

export { header, about, projects, skills, contact }
