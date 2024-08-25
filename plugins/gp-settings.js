let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'открыть': 'not_announcement',
        'закрыть': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)

    return m.reply(`
🛡️ ${mssg.gpSetting}

*▢ ${usedPrefix + command} закрыть*
*▢ ${usedPrefix + command} открыть*
`)
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group']
handler.tags = ['group']
handler.command = ['группу', 'grupo'] 
handler.admin = true
handler.botAdmin = true
handler.group = true

export default handler
