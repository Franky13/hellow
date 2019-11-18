const TeleBot = require('telebot');
const fs = require('fs');

const bot = new TeleBot('1004574146:AAFQOcz8-1KxGdjrMfi-MrOv9xGKoI-v18c');

bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));
bot.on(/^\/say (.+)$/, (msg, props) => {
    const text = props.match[1];
    return bot.sendMessage(msg.from.id, text, { replyToMessage: msg.message_id });
});
bot.on('text', (msg) => {
    if (!msg.text.startsWith('/')){
    fs.writeFileSync('/tmp/test', msg.text);
    return bot.sendMessage(msg.from.id, 'Молодец');
    }});
bot.on('/show', (msg) => {
    const text = fs.readFileSync('/tmp/test');
    return bot.sendMessage(msg.from.id, text);
});
bot.start();
