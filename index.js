const TeleBot = require('telebot');
const bot = new TeleBot('1004574146:AAFQOcz8-1KxGdjrMfi-MrOv9xGKoI-v18c');
bot.on('text', (msg) => msg.reply.text(msg.text+'hello'));
bot.start();

