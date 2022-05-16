const Discord = require('discord.io');
const { Client, MessageAttachment, Interaction, MessageFlags, Sticker, Guild, RoleManager } = require('discord.js');
const { get } = require('http');
const { MessageEmbed } = require('discord.js');
const { send } = require('process');
const { channel } = require('diagnostics_channel');

const client = new Client({
  intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_EMOJIS_AND_STICKERS']
});

var prefix = "!";
var array = []

client.once('ready', () => console.log('Ready!'));

client.on('messageCreate', (message) => {

    if (message.content.startsWith('!timeout')) {
        array.push(message.author.id);
        console.log(array);
    }

    if (message.content === '!cooldown' && array.includes(message.author.id)) {
        console.log(array);
        return message.channel.send('You have already used this command.');
    } else if (message.content === '!cooldown') {
        
        array.push(message.author.id);
        console.log(array);
        message.channel.send('You have used this command.');
        function wait() {
            setTimeout(function() {
                array.shift(message.author.id);
                console.log(array);
            }, 5000);
        }
        wait();
    }
});

client.login('OTY3OTAyOTU4NTY0MDI4NDk3.YmXD4A.yJgj80O1eHvc98vhQcDqJTcRkRM');