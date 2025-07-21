// cli.js
import readline from 'readline';
import { getResponse } from './chatbot.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Chatbot: Hello! Ask me about weather or facts. Type 'bye' to exit.");

function askQuestion() {
    rl.question("You: ", (input) => {
        const response = getResponse(input);
        console.log("Chatbot:", response);

        if (input.toLowerCase().includes("bye")) {
            rl.close();
        } else {
            askQuestion();
        }
    });
}

askQuestion();

rl.on('close', () => {
    console.log("Chatbot: See you later!");
    process.exit(0);
});