import workoutImg from '../assets/workoutImg.png'
import notesImg from '../assets/notesImg.png'
import petImg from '../assets/petImg.png'
import botImg from '../assets/botImg.png'
import climateImg from '../assets/climateImg.png'

export default [
    {
        id: 1,
        title: 'Workout Tracker',
        description:
            'Workout Tracker is a dynamic full-stack website that enables users to create and customize personalized workout plans. With secure user authentication using JSON Web Tokens, and API endpoints for effortless data manipulation, it offers a seamless experience for designing and optimizing fitness routines.',
        skills: ['React', 'Node.js', 'Express', 'MongoDB'],
        imgURL: workoutImg,
        link: 'https://workouttracker-e1uh.onrender.com/'
    },
    {
        id: 2,
        title: 'SmartNotes',
        description:
            'I developed a Python application that enhances handwritten notes using OCR and AI. By improving image quality and utilizing the Google Cloud Vision API, we achieved accurate text extraction. Leveraging the OpenAI API, the application generated concise summaries and additional information to supplement the notes.',
        skills: [
            'Python',
            'OpenCV',
            'Google Cloud Vision',
            'OpenAI'
        ],
        imgURL: notesImg,
        link: 'https://github.com/hansonguyen/SmartNotes'
    },
    {
        id: 3,
        title: 'Pawfect Sitters',
        description:
            'I collaborated with a team of three other peers to develop a full-stack application for HackDavis 2023. Focused on connecting pet sitters with pet owners, I spearheaded the backend development, creating API routes for image uploads and seamless frontend communication.',
        skills: [
            'Next.js',
            'Node.js',
            'Express',
            'MongoDB',
            'Firebase',
            'Auth0'
        ],
        imgURL: petImg,
        link: 'https://github.com/hansonguyen/hackdavis2023'
    },
    {
        id: 4,
        title: 'Pokébot',
        description:
            'I designed and developed a Discord bot that retrieves data from the RESTful PokéAPI. By leveraging the power of Python and adhering to Object-Oriented Programming principles, I crafted intuitive commands to present the API data in a user-friendly manner. Taking it a step further, I achieved a successful deployment of the bot to AWS EC2, ensuring its accessibility and uninterrupted performance.',
        skills: ['Python', 'REST APIs'],
        imgURL: botImg,
        link: 'https://github.com/hansonguyen/discord-bot'
    },
    {
        id: 5,
        title: 'Climate Change Project',
        description:
            'In a collaborative effort with a team of four, we developed a prototype for a carbon absorption system using zeolite for incinerators. I utilized an Arduino and C++ to build a circuit incorporating a temperature sensor, motors, and LEDs, enabling precise fan control.',
        skills: ['C', 'Arduino', 'Circuits'],
        imgURL: climateImg,
        link: 'https://docs.google.com/presentation/d/1xlxHoScmQTxYbLFpoFev-iPjkHxcrbj0u5Y_0gwYWtg/edit?usp=sharing'
    }
]
