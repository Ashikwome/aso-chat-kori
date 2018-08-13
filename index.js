'use strict';
const BootBot       = require('bootbot');
const PORT          = process.env.PORT || 5000;

const bot = new BootBot({
  accessToken: process.env.access_token,
  verifyToken: process.env.verify_token,
  appSecret: process.env.app_secret
});

bot.on('message', (payload, chat,) => {
    chat.sendTypingIndicator(1000)
    .then(() => {
      chat.say(['Welcome to Aso Chat Kori', 'I\'m a program', 'I was written by Womee']);
    });
});

bot.start(PORT);
