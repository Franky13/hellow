const TeleBot = require('telebot');
const bot = new TeleBot('1004574146:AAFQOcz8-1KxGdjrMfi-MrOv9xGKoI-v18c');
bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));
bot.start();
