import { v4 as uuidv4 } from 'uuid';
import UTrackerImg from '../images/utracker.jpg';
import sortingImg from '../images/sortingProject.png';
import newsAppImg from '../images/newsApp.png';
import speechToTextImg from '../images/speechToText.png';
import openAIImg from '../images/aiQueryGenerator.png';
import objectDeImg from '../images/objectPy.png';

const projects = [
  {
    id: uuidv4(),

    name: 'Database Query Generator',
    desc: 'A Database Query Generator using React and the OpenAI API to generate SQL queries from natural language input.',
    img: openAIImg,
    link: 'https://open-ai-query-generator.vercel.app/',
  },

  {
    id: uuidv4(),

    name: 'Real-Time object detection and recognition',
    desc: 'An object detection and recognition system using Python and OpenCV to identify and classify objects in images or video streams.',
    img: objectDeImg,
    link: 'https://github.com/Adityavijaysingh2611/ImageProcessing',
  },

  {
    id: uuidv4(),

    name: 'API NewsAPP',
    desc: 'A news app utilizing APIs to deliver real-time updates across diverse topics and sources.',
    img: newsAppImg,
    link: 'https://news-api-app-six.vercel.app/',
  },

  {
    id: uuidv4(),

    name: 'CodeHere',
    desc: 'An online code editor for Html, css and JavaScript like Codepen',
    img: UTrackerImg,

    link: 'https://adityavijaysingh2611.github.io/CodeEditor/',
  },
  {
    id: uuidv4(),

    name: 'Algo Visualizer',
    desc: 'A web-based sorting visualizer that demonstrates various sorting algorithms in real-time.',
    img: sortingImg,
    link: 'https://adityavijaysingh2611.github.io/sorting-visualizer/',
  },

  {
    id: uuidv4(),

    name: 'Speech To Text',
    desc: 'A speech-to-text application using React to transcribe spoken words into text in real-time.',
    img: speechToTextImg,
    link: 'https://speech-to-text-react-chi.vercel.app/',
  },
];

export default projects;
