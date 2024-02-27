// import projectData from '../data/tech-stack-data.json' assert { type: 'json' };
const projectData = {
  movies_mania: {
    name: 'Movies Mania',
    url: 'https://github.com/Adarsh-619/MoviesMania',
    'front-end': ['ReactJS (Vite)'],
    'back-end': ['SpringBoot', 'mongoDB'],
  },
  developer_hub: {
    name: 'Developer Hub',
    url: 'https://github.com/Adarsh-619/DeveloperHub',
    'front-end': ['HTML', 'CSS', 'Javascript'],
    'back-end': ['Python-Django'],
  },
  weather_forecaster: {
    name: 'Weather Forecaster',
    url: 'https://github.com/Adarsh-619/Weather_Forecaster',
    'front-end': ['JavaFX', 'Scene Builder'],
    'back-end': ['Java', 'OpenWeather API'],
  },
  guess_the_celebrity: {
    name: 'Guess the Celebrity',
    url: 'https://github.com/Adarsh-619/GuessTheCelebrity',
    'front-end': [],
    'back-end': ['Java', 'Android'],
  },
  car_price_predictor: {
    name: 'Car Price Predictor',
    url: 'https://github.com/Adarsh-619/Car_Price_Predictor',
    'front-end': ['PyGUI', 'StreamLit', 'PyQT5'],
    'back-end': ['Python', 'Scikit-Learn'],
  },
  laptop_price_estimator: {
    name: 'Laptop Price Predictor',
    url: 'https://github.com/Adarsh-619/Laptop_Price_Estimator',
    'front-end': ['PyGUI', 'ui', 'PyQT5'],
    'back-end': ['Python', 'Scikit-Learn'],
  },
};

const section = document.querySelector('section'),
  overlay = document.querySelector('.overlay'),
  closeBtn = document.querySelector('.close-btn');

function showPopUp(project) {
  // Setting the html data
  setHtmlData(project);

  section.classList.add('active');
  overlay.addEventListener('click', () => section.classList.remove('active'));
  closeBtn.addEventListener('click', () => section.classList.remove('active'));
}

function setHtmlData(project) {
  // Get the element by its id
  var myComponent = document.getElementById('myComponent');
  var githubButton = document.getElementById('github-button');
  var frontEnd = document.getElementById('front-end');
  var backEnd = document.getElementById('back-end');

  const currentProject = projectData[project];

  // Set the href property using setAttribute
  githubButton.setAttribute('href', currentProject['url']);
  frontEnd.querySelector('h3').innerHTML = 'Front End';
  backEnd.querySelector('h3').innerHTML = 'Back End';
  myComponent.querySelector('h2').innerHTML = currentProject['name'];

  createList(currentProject['front-end'], frontEnd.querySelector('ol'));
  createList(currentProject['back-end'], backEnd.querySelector('ol'));
}

function createList(technologyList, techStack) {
  const allNodes = [];
  for (let i = 0; i < technologyList.length; i++) {
    const node = document.createElement('li');
    node.appendChild(document.createTextNode(technologyList[i]));
    allNodes.push(node);
  }
  techStack.replaceChildren(...allNodes);
}
