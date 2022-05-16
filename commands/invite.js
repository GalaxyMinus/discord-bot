const { Client, MessageAttachment, Interaction, MessageFlags, Sticker, Guild, RoleManager } = require('discord.js');
const { get } = require('http');
const { MessageEmbed } = require('discord.js');
const { send } = require('process');
const { channel } = require('diagnostics_channel');

const client = new Client({
  intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_EMOJIS_AND_STICKERS']
});

var prefix = "!";

client.once('ready', () => {
    console.log('Ready!')
    client.user.setActivity(`Currently being tested!`);
});

client.on('messageCreate', (message) => {
    if (message.content === '!invite') {
        const user = client.users.cache.get("853310508341526548");
        const embed = new MessageEmbed()
            .setTitle('Invite Link')
            .setColor(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff'][Math.floor(Math.random() * 8)])
            .setDescription(`[Click here to invite me to your server!](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)`)
            .setTimestamp()
            message.channel.send({ embeds: [embed] });
    }
});

client.login('OTY3OTAyOTU4NTY0MDI4NDk3.YmXD4A.yJgj80O1eHvc98vhQcDqJTcRkRM');