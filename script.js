const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const motivationalMessages = [
    "Success is the sum of small efforts repeated day after day.",
    "Every day is a new opportunity to change your life.",
    "The only way to do great work is to love what you do.",
    "Don't worry about failures; worry about the chances you miss when you don't even try.",
    "Perseverance is not a long race, but many short sprints one after another.",
    "The only place where success comes before work is in the dictionary.",
    "It doesn't matter how slow you go, as long as you don't stop.",
    "Believe in yourself, and everything is possible.",
    "Success is not the key to happiness; happiness is the key to success. If you love what you are doing, you will be successful.",
    "It's never too late to be what you might have been.",
    "Attitude is everything. If you can't change something, change your attitude.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    "The only way to do a great job is to love what you do.",
    "True success is finding satisfaction in every small step you take forward."
];

function getRandomNumber(usedIndices) {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * motivationalMessages.length);
    } while (usedIndices.includes(randomIndex));
    return randomIndex;
}

const printMotivationalMessages = (daysOfWeek, messages) => {
    const usedIndices = [];

    daysOfWeek.forEach(day => {
        const randomMessageIndex = getRandomNumber(usedIndices);
        usedIndices.push(randomMessageIndex);

        const randomMessage = messages[randomMessageIndex];
        console.log(`Motivational Message: \n ${day}: ${randomMessage}`);
    });
}

printMotivationalMessages(dayOfWeek, motivationalMessages);
