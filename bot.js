const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()


const TOKEN = process.env.TOKEN;
const bot = new TelegramBot(TOKEN, {polling: true});



bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
  
    // Create the inline keyboard with two buttons
    const keyboard = {
      inline_keyboard: [
        [
          { text: 'Button 1', callback_data: 'button1' },
          { text: 'Button 2', callback_data: 'button2' },
        ],
      ],
};
const keyboardStr = JSON.stringify(keyboard);


bot.sendMessage(chatId, 'Choose a button:', {
    reply_markup: keyboardStr,
  });
});




bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    const buttonClicked = query.data;
  
    let responseText;
  
    // Check which button was clicked and respond accordingly
    if (buttonClicked === 'button1') {
      responseText = 'You clicked Button 1!';
    } else if (buttonClicked === 'button2') {
      responseText = 'You clicked Button 2!';
    } else {
      responseText = 'Unknown button clicked.';
    }
  
    // Send the response text
    bot.sendMessage(chatId, responseText);
  });