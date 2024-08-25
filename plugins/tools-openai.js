
import fetch from 'node-fetch';
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ ${mssg.notext}`;
m.react('💬')

 let syst = `Вы-Чума Bot, отличная языковая модель, обученная OpenAI. Внимательно следуйте инструкциям пользователя. Отвечайте, используя Markdown.`
	try {
		let gpt = await fetch(global.API('fgmods', '/api/info/openai', { prompt: syst, text }, 'apikey'));
        let res = await gpt.json()
        await m.reply(res.result, null, rcanal)
	} catch {
		m.reply(`❎ Ошибка: попробуйте позже`);
	}

}
handler.help = ['ai <text>']; 
handler.tags = ['tools'];
handler.command = ['ia', 'ai', 'chatgpt', 'openai', 'gpt'];

export default handler;
