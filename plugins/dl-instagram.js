
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ ${mssg.useCmd}\n *${usedPrefix + command}* https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=`
    m.react(rwait)

try {
    let res = await fetch(global.API('fgmods', '/api/downloader/igdl', { url: args[0] }, 'apikey'))
    if (!res.ok) throw `❎ ${mssg.error} ` 
    let data = await res.json()

    for (let item of data.result) {
        conn.sendFile(m.chat, item.url, 'igdl.jpg', `✅ ${mssg.result}`, m)
    }
  
  
    } catch (error) {
        m.reply(`❎ ${mssg.error}`)
    }
    
}
handler.help = ['انستا <رابط الفيديو>']
handler.tags = ['dl']
handler.command = ['ig', 'igdl', 'instagram', 'igimg', 'igvid', 'انستا', 'إنستا', 'إنستجرام']
handler.diamond = false

export default handler
