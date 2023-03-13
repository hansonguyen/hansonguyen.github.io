import workoutImg from "../assets/workoutImg.png";
import botImg from "../assets/botImg.png";
import climateImg from "../assets/climateImg.png";

export default [
    {
        id: 1,
        title: "Workout Tracker",
        description: "Workout Tracker is a full-stack website to create and customize personal workout plans. I implemented user authentication with JSON Web Tokens and created API endpoints to create and manipulate data.",
        skills: ["React", "Node.js", "Express", "MongoDB"],
        imgURL: workoutImg,
        link: "https://workouttracker-e1uh.onrender.com/"
    },
    {
        id: 2,
        title: "Pokébot",
        description: "Designed and developed a Discord bot that retrieves data from the RESTful PokéAPI. Using Python and OOP principles, I created commands to present the API data to users.",
        skills: ["Python", "REST APIs"],
        imgURL: botImg,
        link: "https://github.com/hansonguyen/discord-bot"
    },
    {
        id: 3,
        title: "Climate Change Project",
        description: "Created a prototype for a carbon absorption system using zeolite for incinerators with a team. I used an Arduino and C++ to build a circuit involving a temperature sensor, motors, and LEDs to control a fan.",
        skills: ["C", "Arduino", "Circuits"],
        imgURL: climateImg,
        link: "https://docs.google.com/presentation/d/1xlxHoScmQTxYbLFpoFev-iPjkHxcrbj0u5Y_0gwYWtg/edit?usp=sharing"
    },
]