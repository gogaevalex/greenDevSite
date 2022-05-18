require('dotenv').config()

export default function feedback(req, res) {
	if (req.method === 'POST') {
		const bot = req.bots.feedbackBot;
		const {name, email, message, subject} = req.body;
		const clientRequest = `mail: ${email}\nname: ${name}\nsubject: ${subject}\nmessage: ${message}`;
		const opts = {
			"reply_markup": {
				"inline_keyboard": [[
					{
						"text": "открытая",
						"callback_data": "open"            
					}]
				]
			}
		}
		bot.sendMessage(process.env.CHAT_greenCrm, clientRequest, opts)
		res.status(200).send('Success send')
	} else {
		// Handle any other HTTP method
	}
}
