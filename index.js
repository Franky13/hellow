const TeleBot = require('telebot');
const bot = new TeleBot({
    token: '1004574146:AAFQOcz8-1KxGdjrMfi-MrOv9xGKoI-v18c',
    polling: { // Optional. Use polling.
        interval: 1000, // Optional. How often check updates (in ms).
        timeout: 0, // Optional. Update polling timeout (0 - short polling).
        limit: 100, // Optional. Limits the number of updates to be retrieved.
        retryTimeout: 5000, // Optional. Reconnecting timeout (in ms).
    }
});

const fs = require('fs');

bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));
bot.on(/^\/say (.+)$/, (msg, props) => {
    const text = props.match[1];
    return bot.sendMessage(msg.from.id, text, { replyToMessage: msg.message_id });
});
bot.on('text', (msg) => {
    if (!msg.text.startsWith('/')){
    fs.appendFileSync('/tmp/test', msg.text + "\n");
    var answers = ['Молодец!', 'Так держать!', 'Отлично!', 'Замечательно!', '42', 'Супер!'];
    var answer = answers[Math.floor(Math.random() * answers.length)];
    return bot.sendMessage(msg.from.id, answer);
    }});
bot.on('/show', (msg) => {
    const text = fs.readFileSync('/tmp/test');
    return bot.sendMessage(msg.from.id, text);
});
bot.start();
