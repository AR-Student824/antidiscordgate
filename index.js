const Discord = require('discord.js')
const x = new Discord.Client()

x.on('ready', () => {
	console.log('ok')
	x.guilds.cache.forEach(guild => {
		var g = guild.members.cache.map(member => member.id)
		g.forEach(user => {
		if (x.users.cache.get(user).username.endsWith('discord.gg/dcgate')) {
			guild.members.cache.get(user).ban()
			console.log('banned +1')
		}
	})
	})
})
x.on('guildMemberAdd', member => {
	if (member.user.username.endsWith('|| discord.gg/dcgate') && !member.user.avatarURL()) {
		member.ban()
    console.log('banned +1')
	}
})
x.on('guildCreate', guild => {
	var g = guild.members.cache.map(member => member.id)
		g.forEach(user => {
		if (x.users.cache.get(user).username.endsWith('discord.gg/dcgate')) {
			guild.members.cache.get(user).ban()
			console.log('banned +1')
		}
	})
})
x.login('REDACTED')
