
let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
*${usedPrefix}*
┌─⊷ *МЕНЮ* 
▢ 
▢ 
▢ 
▢ 
▢ 
▢ 
└──────────────
`
    let pp = './src/fg_logo.jpg' 
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}

handler.help = ['menu2']
handler.tags = ['main']
handler.command = ['меню', 'audios'] 

export default handler
