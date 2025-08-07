console.log("Welcome to my JavaScript Fundamentals Journey!");
console.log("=".repeat(50));

// VARIABLES & DATA TYPES SHOWCASE
console.log("\nVariables & Data Types");

const myProfile = {
    name: "Alex Developer",
    age: 24,
    isLearning: true,
    skills: ["JavaScript", "HTML", "CSS"],
    favoriteNumber: 42,
    motto: null,
    experience: undefined
};

let currentMood = "excited";
const LEARNING_GOAL = "Master JavaScript fundamentals";

{
    let secretMessage = "I understand block scope!";
    console.log("Inside block:", secretMessage);
    
    currentMood = "confident";
}

console.log("Current mood:", currentMood);

const checkType = (value, label) => {
    console.log(`${label}: ${value} (Type: ${typeof value})`);
};

checkType(myProfile.age, "Age");
checkType(myProfile.isLearning, "Learning Status");
checkType(myProfile.skills, "Skills Array");

// DESTRUCTURING & SPREAD MAGIC
console.log("\nDestructuring & Spread Operations");

const {name, age, skills: mySkills} = myProfile;
const [primarySkill, secondarySkill, ...otherSkills] = mySkills;

console.log(`Hi! I'm ${name}, ${age} years old`);
console.log(`My main skill is ${primarySkill}`);

const newSkills = ["React", "Node.js", "MongoDB"];
const updatedSkills = [...mySkills, ...newSkills];

const enhancedProfile = {
    ...myProfile,
    skills: updatedSkills,
    motto: "Code, Learn, Repeat!",
    level: "Intermediate Beginner",
    startDate: new Date().toLocaleDateString()
};

console.log("Enhanced Profile:", enhancedProfile);

// FUNCTION MASTERY
console.log("\nFunctions - My New Superpowers");

function greetUser(name = "Developer") {
    return `Hello ${name}! Ready to code today?`;
}

const calculateProgress = (completed, total) => {
    const percentage = Math.round((completed / total) * 100);
    return `Progress: ${percentage}% (${completed}/${total} concepts mastered)`;
};

const processLearningData = (data, processor) => {
    console.log("Processing learning data...");
    return data.map(processor);
};

const rateSkill = skill => ({
    name: skill,
    level: Math.floor(Math.random() * 5) + 1,
    confidence: ["Beginner", "Learning", "Comfortable", "Confident", "Expert"][Math.floor(Math.random() * 5)]
});

console.log(greetUser("Future Developer"));
console.log(calculateProgress(8, 10));

const skillRatings = processLearningData(updatedSkills, rateSkill);
console.log("My Skill Assessment:", skillRatings);

// INTERACTIVE CONSOLE PLAYGROUND
console.log("\nConsole Methods Showcase");

console.log("Regular log: Learning is fun!");
console.warn("Warning: Don't forget to practice daily!");
console.error("Error simulation: undefined is not a function (just kidding!)");
console.info("Info: Arrow functions are game-changers!");

const learningStats = [
    { concept: "Variables", mastery: "85%" },
    { concept: "Functions", mastery: "78%" },
    { concept: "Objects", mastery: "90%" },
    { concept: "Arrays", mastery: "82%" }
];

console.table(learningStats);

// CREATIVE PRACTICAL APPLICATIONS
console.log("\nPutting It All Together - Mini Projects");

// Project 1: Personal Task Manager
class SimpleTaskManager {
    constructor() {
        this.tasks = [];
        this.completedCount = 0;
    }
    
    addTask = (description, priority = "medium") => {
        const task = {
            id: Date.now(),
            description,
            priority,
            completed: false,
            createdAt: new Date().toLocaleString()
        };
        this.tasks.push(task);
        console.log(`Task added: "${description}"`);
        return task;
    }
    
    completeTask = (id) => {
        const task = this.tasks.find(t => t.id === id);
        if (task && !task.completed) {
            task.completed = true;
            this.completedCount++;
            console.log(`Task completed: "${task.description}"`);
        }
    }
    
    getProgress = () => ({
        total: this.tasks.length,
        completed: this.completedCount,
        remaining: this.tasks.length - this.completedCount,
        percentage: this.tasks.length ? Math.round((this.completedCount / this.tasks.length) * 100) : 0
    })
}

const myTasks = new SimpleTaskManager();
myTasks.addTask("Master JavaScript variables", "high");
myTasks.addTask("Practice arrow functions", "high");
myTasks.addTask("Build a mini project", "medium");

const [firstTask] = myTasks.tasks;
myTasks.completeTask(firstTask.id);

console.log("My Learning Progress:", myTasks.getProgress());

// Project 2: Creative Number Operations
const mathMagic = {
    operations: {
        double: x => x * 2,
        square: x => x ** 2,
        fibonacci: n => n <= 1 ? n : mathMagic.operations.fibonacci(n-1) + mathMagic.operations.fibonacci(n-2),
        isPrime: n => {
            if (n < 2) return false;
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) return false;
            }
            return true;
        }
    },
    
    processNumbers: (numbers, operation) => {
        return numbers
            .filter(num => typeof num === 'number')
            .map(operation)
            .sort((a, b) => a - b);
    }
};

const testNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original numbers:", testNumbers);
console.log("Doubled:", mathMagic.processNumbers(testNumbers, mathMagic.operations.double));
console.log("Squared:", mathMagic.processNumbers(testNumbers.slice(0, 5), mathMagic.operations.square));

// Project 3: Data Transformation Pipeline
const createDataPipeline = (...transformers) => {
    return (data) => {
        console.log("Starting data pipeline...");
        return transformers.reduce((result, transformer, index) => {
            console.log(`Step ${index + 1}: Applying transformation`);
            return transformer(result);
        }, data);
    };
};

const cleanData = data => data.filter(item => item != null && item !== "");
const formatData = data => data.map(item => typeof item === 'string' ? item.trim().toLowerCase() : item);