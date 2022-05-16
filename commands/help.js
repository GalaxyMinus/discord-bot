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
    /* COMMAND LIST
! Fun Commands
* !roll [int] - Rolls a random number between 1 and the number you put in (defaults to 100)
* !uptime - Shows the uptime of the bot (needs some fixes)
* !ip - Returns a random ipv4 address (Number is random between 1 and 255)
* !catboy - Sends a random catboy image from catboys.com
* !neko - Sends a random neko image from nekos.life
* !owoify [message] - Owoifies the message you put in
* !lastdelete - Shows the last message deleted by any user (Only available in discord.gg/kwan)
! Mention Commands
* !kiss [mention] - Kisses the user that you mention
* !hug [mention] - Hugs the user that you mention
* !cuddle [mention] - Cuddles the user that you mention
* !sex [mention] - This command sucks.
! Utility Commands
* !help [page] | [type] - (needs fix) Sends a embed with all commands
* !userinfo [mention] - Shows the data of the user that you mention, leave empty to get your own
* !servercount - Returns the amount of servers the bot is in
* !avatar [mention] - Returns the avatar of the user that you mention, or your own avatar if you leave blank
! Owner Commands
* !eval [code] - Runs the code you put in
* !restart - Restarts the bot
*/ 

/* REACTION LIST
* 'happy' - <:HappyHam:940992865977368606>
* 'owo' - <:violentimpulses:940996581644206081>
* 'kwan' - <:kwan:962778733360599181>
* 'a' - 🅰️ then  🇦 and at last <a:guraA:967131476967698553>
* 'cock' - <:cokc:940991593173889074>
*/
    if (message.content.startsWith('!help')) {
        if (message.content === '!help' || message.content ===  '!help 1' || message.content === 'help utility') {
            const user = client.users.cache.get("853310508341526548");
            const embed = new MessageEmbed()
                .setTitle('Utility Commands')
                .setColor(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff'][Math.floor(Math.random() * 8)])
                .addFields(
                    { name: '!help [page] | [type]', value: 'Shows this message' },
                    { name: '!userinfo [mention]', value: 'Shows the data of the user that you mention, leave empty to get your own' },
                    { name: '!servercount', value: 'Returns the amount of servers the bot is in' },
                    { name: '!avatar [mention]', value: 'Returns the avatar of the user that you mention, or your own avatar if you leave blank' },
                )
                .setFooter({ text: 'Created by: '+user.username+'#'+user.discriminator+' - Page 1', iconURL: user.displayAvatarURL({ format: 'png'}) })
                .setTimestamp();
                message.channel.send({ embeds: [embed] });
        } else if (message.content === '!help 2' || message.content === 'help fun') {
            const user = client.users.cache.get("853310508341526548");
            const embed = new MessageEmbed()
                .setTitle('Fun Commands')
                .setColor(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff'][Math.floor(Math.random() * 8)])
                .addFields(
                    { name: '!roll [int]', value: 'Rolls a random number between 1 and the number you put in (defaults to 100)' },
                    { name: '!uptime', value: 'Shows the uptime of the bot' },
                    { name: '!ip', value: 'Returns a random ipv4 address (Number is random between 1 and 255)' },
                    { name: '!catboy', value: 'Sends a random catboy image from catboys.com' },
                    { name: '!neko', value: 'Sends a random neko image from nekos.life' },
                    { name: '!owoify [message]', value: 'Owoifies the message you put in' },
                    { name: '!lastdelete', value: 'Shows the last message deleted by any user (Only available in discord.gg/kwan at the moment)' },
                )
                .setFooter({ text: 'Created by: '+user.username+'#'+user.discriminator+' - Page 2', iconURL: user.displayAvatarURL({ format: 'png'}) })
                .setTimestamp();
                message.channel.send({ embeds: [embed] });
        } else if (message.content === '!help 3' || message.content === 'help mention' || message.content === 'help mentions') {
            const user = client.users.cache.get("853310508341526548");
            const embed = new MessageEmbed()
                .setTitle('Mention Commands')
                .setColor(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff'][Math.floor(Math.random() * 8)])
                .addFields(
                    { name: '!kiss [mention]', value: 'Kisses the user that you mention' },
                    { name: '!hug [mention]', value: 'Hugs the user that you mention' },
                    { name: '!cuddle [mention]', value: 'Cuddles the user that you mention' },
                    { name: '!sex [mention]', value: 'This command sucks.' }
                )
                .setFooter({text: 'Created by: '+user.username+'#'+user.discriminator+' - Page 3', iconURL: user.displayAvatarURL({ format: 'png'}) })
                .setTimestamp();
                message.channel.send({ embeds: [embed] });
        } else if (message.content === '!help 4' || message.content === 'help reaction' || message.content === 'help reactions') {
            const user = client.users.cache.get("853310508341526548");
            const embed = new MessageEmbed()
                .setTitle('Reactions')
                .setColor(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff'][Math.floor(Math.random() * 8)])
                .addFields(
                    { name: `Includes 'happy'`, value: '<:HappyHam:940992865977368606>' },
                    { name: `Includes 'owo'`, value: '<:violentimpulses:940996581644206081>' },
                    { name: `Includes 'kwan'`, value: '<:kwan:962778733360599181>' },
                    { name: `Message content is 'a' or 'A'`, value: '🅰️ then 🇦 and at last <a:guraA:967131476967698553>' },
                    { name: `Includes 'cock'`, value: '<:cokc:940991593173889074>' }
                )
                .setFooter({text: 'Created by: '+user.username+'#'+user.discriminator+' - Page 4', iconURL: user.displayAvatarURL({ format: 'png'}) })
                .setTimestamp();
                message.channel.send({ embeds: [embed] });
        } else if (message.content === '!help 5' || message.content === 'help owner' || message.content === 'help owner') {
            const user = client.users.cache.get("853310508341526548");
            const embed = new MessageEmbed()
                .setTitle('Owner Commands')
                .setColor(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff'][Math.floor(Math.random() * 8)])
                .addFields(
                    { name: '!eval [code]', value: 'Evaluates the code you put in' },
                    { name: '!restart', value: 'Restarts the bot' }
                )
                .setFooter({text: 'Created by: '+user.username+'#'+user.discriminator+' - Page 5', iconURL: user.displayAvatarURL({ format: 'png'}) })
                .setTimestamp();
                message.channel.send({ embeds: [embed] });
        }
    }

});

client.login('OTY3OTAyOTU4NTY0MDI4NDk3.YmXD4A.yJgj80O1eHvc98vhQcDqJTcRkRM');