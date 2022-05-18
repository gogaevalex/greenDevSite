// server.js
const {createServer} = require('http')
const {parse} = require('url')
const next = require('next')
require('dotenv').config()

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()


const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN;
let feedbackBot = null;
if(token) {
	feedbackBot = new TelegramBot(token, {polling: true});
	feedbackBot.on('callback_query', function onCallbackQuery(callbackQuery) {
		const msg = callbackQuery.message;
		const action = callbackQuery.data;
		const currentAction = action.split('_')[0];
		const optsSend = (text, callback) => {
			return (
				{
					chat_id: msg.chat.id,
					message_id: msg.message_id,
					reply_markup: {
						"inline_keyboard": [[
							{
								"text": text,
								"callback_data": callback            
							}]
						]
					},
					parse_mode: 'HTML'
				}
			)
		}
		if (currentAction === 'open') {
			feedbackBot.editMessageText(msg.text, optsSend('в разработке', 'dev'))
		}
		
		if (currentAction === 'dev') {
			feedbackBot.editMessageText(msg.text, optsSend('закрытая', 'close'))
		}
		
		if (currentAction === 'close') {
			feedbackBot.editMessageText(msg.text, optsSend('открытая', 'open'))
		}
	});
	
}

app.prepare().then(() => {
	createServer((req, res) => {
		req.bots = {
			feedbackBot,
		};
		const parsedUrl = parse(req.url, true)

		handle(req, res, parsedUrl)
	}).listen(3005, (err) => {
		if (err) throw err
		console.log('> Ready on http://localhost:3005')
	})
})