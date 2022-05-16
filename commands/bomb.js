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

client.once('ready', () => console.log('Ready!'));

client.on('messageCreate', (message) => {
    if (message.content.startsWith('!bomb') && message.guildId == '961302387421749258') {
        if (undefined === message.mentions.users.first()) {
            var user = message.author.id;
            var randomPercent = Math.floor(Math.random() * 100);
            if (randomPercent < 80) {
                function ded() {
                message.channel.send(['Boom! You are dead.', 'You Died!', "Game over.", "You seem to have died", "Welp, you're dead"][Math.floor(Math.random() * 5)]);
                var member = message.guild.members.cache.get(user);
                member.roles.add('965679419815522355');
                unmute()
                function unmute(user) {
                    var user = message.author.id;
                    setTimeout(function() {
                        var member = message.guild.members.cache.get(user);
                        member.roles.remove('965679419815522355');
                        member.createDM().then(dm => {
                            dm.send("You have been unmuted");
                        });
                        }, 30000);
                    }
                }
                setTimeout(ded, 0);
            } else {
                message.channel.send('And... You survived.');
            }
        } else if (message.mentions.users.first().id === message.author.id) {
            var user = message.author.id;
            var randomPercent = Math.floor(Math.random() * 100);
            if (randomPercent < 80) {
                function ded() {
                message.channel.send(['Boom! You are dead.', 'You Died!', "Game over.", "You seem to have died", "Welp, you're dead"][Math.floor(Math.random() * 5)]);
                var member = message.guild.members.cache.get(user);
                member.roles.add('965679419815522355');
                unmute()
                function unmute(user) {
                    var user = message.author.id;
                    setTimeout(function() {
                        var member = message.guild.members.cache.get(user);
                        member.roles.remove('965679419815522355');
                        member.createDM().then(dm => {
                            dm.send("You have been unmuted");
                        });
                        }, 30000);
                    }
                }
                setTimeout(ded, 0);
            } else {
                message.channel.send('And... You survived.');
            }
        } else if (message.mentions.users.first().id !== message.author.id) {
            var user = message.mentions.users.first().id;
            var randomPercent = Math.floor(Math.random() * 100);
            if (randomPercent < 20) {
                function ded() {
                message.channel.send(['Boom! You are dead.', 'You Died!', "Game over.", "You seem to have died", "Welp, you're dead"][Math.floor(Math.random() * 5)]);
                var member = message.guild.members.cache.get(user);
                member.roles.add('965679419815522355');
                unmute()
                function unmute(user) {
                    var user = message.author.id;
                    setTimeout(function() {
                        var member = message.guild.members.cache.get(user);
                        member.roles.remove('965679419815522355');
                        member.createDM().then(dm => {
                            dm.send("You have been unmuted");
                        });
                        }, 30000);
                    }
                }
                setTimeout(ded, 0);
            } else if (randomPercent >= 20 && randomPercent < 80) {
                message.channel.send('You failed to kill ' + message.mentions.users.first().username + '.');
                var user = message.author.id;
                function ded() {
                var member = message.guild.members.cache.get(user);
                member.roles.add('965679419815522355');
                unmute()
                function unmute(user) {
                    var user = message.author.id;
                    setTimeout(function() {
                        var member = message.guild.members.cache.get(user);
                        member.roles.remove('965679419815522355');
                        member.createDM().then(console.log("Member was unmuted"));
                        }, 1000);
                    }
                }
                setTimeout(ded, 0);
            } else {
                message.channel.send('You failed.');
            }
        }

    }
      
});

client.login('OTY3OTAyOTU4NTY0MDI4NDk3.YmXD4A.yJgj80O1eHvc98vhQcDqJTcRkRM');