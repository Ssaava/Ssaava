const SsaavaEmmanuel = {
  fullName: "Ssaava Emmanuel",
  pronouns: ["he", "him"],
  role: "Web Developer",
  location: "Kampala Uganda",
  aboutMe: [
    "👋 Hi, I'm Ssaava Emmanuel, a passionate web developer!",
    "💻 I love crafting web solutions and turning ideas into reality with code.",
    "🌐 My journey in web development has led me to explore various technologies and frameworks.",
    "🚀 I'm always eager to learn and share my knowledge with the developer community.",
    "📚 When I'm not coding, you'll find me reading, learning, and exploring new horizons.",
  ],
  projects: [],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Bootstrap",
    "Tailwind",
    "SASS",
    "Git",
    "GitHub",
    "VSCode",
    "node package manager",
    "RESTful APIs",
    "Figma",
    "Babel",
    "MYSQL",
    "MongoDB",
    "Linux",
    "Windows",
  ],
  connectWithMe: [
    {
      platform: "GitHub",
      link: "https://github.com/Ssaava",
    },
    {
      platform: "Twitter",
      link: "https://twitter.com/ssava_ema",
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/ssava/",
    },
  ],
};

class Life extends Creativity {
  constructor() {
    super();
    this.CoFounder = "Ssaava Emmanuel";
    this.currentJobTitle = "Web Developer";
    this.currentCompany = "Student";
    this.currentlyLearning = "React & Tailwind CSS 📚";
    this.currentlyWorkingOn = "Developer Toolbox open source Project 🌱";
    this.excitedFor = "Consistency t in Learning";
    this.email = "ssavaemma4@gmail.com";
    this.repo = new Repository("my-repo");
  }

  starIt() {
    if (this.repo.useful) {
      return "⭐";
    }
  }

  forkIt() {
    if (this.repo.useful) {
      return "🍴";
    }
  }
}

class Repository {
  constructor(name) {
    this.name = name;
    this.useful = true;
  }
}

const lifeInstance = new Life();

console.log("In my coding life:");
console.log(`- I co-founded ${lifeInstance.CoFounder}.`);
console.log(
  `- I work as a ${lifeInstance.currentJobTitle} at ${lifeInstance.currentCompany}.`
);
console.log(`- I'm currently learning ${lifeInstance.currentlyLearning}.`);
console.log(`- I'm working on ${lifeInstance.currentlyWorkingOn}.`);
console.log(`- I'm excited for ${lifeInstance.excitedFor}.`);
console.log(`- You can contact me at ${lifeInstance.email}.`);
console.log(
  `- If you find my repositories useful, please star them ${lifeInstance.starIt()} or fork them ${lifeInstance.forkIt()}.`
);
