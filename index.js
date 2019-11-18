const TeleBot = require('telebot');
const bot = new TeleBot('1004574146:AAFQOcz8-1KxGdjrMfi-MrOv9xGKoI-v18c');
bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));
bot.on(/^\/say (.+)$/, (msg, props) => {
    const text = props.match[1];
    return bot.sendMessage(msg.from.id, text, { replyToMessage: msg.message_id });
});
bot.start();
