const responses = {
    greetings: ["Hello!", "Hi there!", "Hey! How can I help?"],
    weather: ["It's sunny today!", "Expect rain later.", "Cloudy with a chance of meatballs."],
    facts: ["The sky is blue.", "2 + 2 = 4", "Node.js is awesome!"],
    goodbye: ["Bye!", "See you later!", "Goodbye!"],
    default: ["I didn't understand that.", "Can you rephrase that?", "Try asking about weather or facts."]
};

export function getResponse(query) {
    query = query.toLowerCase();

    if (query.includes("hi") || query.includes("hello")) {
        return responses.greetings[Math.floor(Math.random() * responses.greetings.length)];
    } else if (query.includes("weather")) {
        return responses.weather[Math.floor(Math.random() * responses.weather.length)];
    } else if (query.includes("fact")) {
        return responses.facts[Math.floor(Math.random() * responses.facts.length)];
    } else if (query.includes("bye")) {
        return responses.goodbye[Math.floor(Math.random() * responses.goodbye.length)];
    } else {
        return responses.default[Math.floor(Math.random() * responses.default.length)];
    }
}