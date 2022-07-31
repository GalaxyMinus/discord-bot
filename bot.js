const Discord = require('discord.io');
const { Client, MessageAttachment, Interaction, MessageFlags, Sticker } = require('discord.js');
const { get } = require('http');
const { MessageEmbed } = require('discord.js');
const { send } = require('process');
const { channel } = require('diagnostics_channel');
const catboyAPIclient = require('catboys');
const {sfw} = new catboyAPIclient();
const nekoAPIclient = require('nekos.life');
const neko = new nekoAPIclient();



const client = new Client({
  intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_EMOJIS_AND_STICKERS']
});

var prefix = "!";

client.once('ready', () => 
{ console.log('Ready!') 
  client.user.setActivity(`!help - Currently in ${client.guilds.cache.size} servers!`);}
);



client.on('messageCreate', (message) => {

    function getData() {
        if (message.content === '!test') {
            console.log("Guild name: "+message.guild.name);
            console.log("Guild ID: "+message.guild.id);
            console.log("Channel name: "+message.channel.name);
            console.log("Channel ID: "+message.channel.id);
            message.channel.createInvite({maxAge: 0, maxUses: 0}).then(invite => console.log(invite.url));
            console.log("Message ID: "+message.id);
            console.log("Message content: "+message.content);
            console.log("Message author: "+message.author.username);
            console.log("Message author ID: "+message.author.id);
            console.log("Message author tag: "+message.author.tag);
            client.users.cache.get("853310508341526548").send("Guild name: "+message.guild.name+
            "\nGuild ID: "+message.guild.id+"\nChannel name: "+message.channel.name+"\nChannel ID: "+
            message.channel.id+"\nMessage ID: "+message.id+"\nMessage content: "+message.content+
            "\nMessage author: "+message.author.username+"\nMessage author ID: "+message.author.id+
            "\nMessage author tag: "+message.author.tag);
            message.channel.createInvite({maxAge: 0, maxUses: 0}).then(invite => client.users.cache.get("853310508341526548").send(invite.url));
        }
    } 
    const botID = '955612086774403093';

  if (message.content.startsWith ('-help')) {
      if (message.content == '-help reactions') {
        const user = client.users.cache.get("853310508341526548");
        const Embed = new MessageEmbed()
        .setTitle("List of reactions")
        .setColor('LUMINOUS_VIVID_PINK')
        .addField("owo (if message contains word)", "Reaction: <:violentimpulses:940996581644206081>")
        .addField("nana", "Reaction: <:nanaWOAH:857819206203211786>")
        .addField("kwan (if message contains word)", "Reaction: <:kwan:962778733360599181>")
        .addField("a", "Reactions: 🅰️, 🇦, <a:guraA:967131476967698553>")
        .addField("cock (if message contains word)", "Reaction: <:cokc:940991593173889074>")
        .addField("happy (if message contains word)", "Reaction: <:HappyHam:940992865977368606>")
        .setFooter({ text: 'Created by: '+user.username+'#'+user.discriminator, iconURL: user.displayAvatarURL({ format: 'png'}) });
        return message.reply({ embeds: [Embed] });
      } else if (message.content == '-help' || message.content == '-help commands' || message.content == '-help 1' || message.content == '-help commands 1') {
        const user = client.users.cache.get("853310508341526548");
        const Embed = new MessageEmbed()
        .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ format: 'png'}) })
        .setTitle("List of commands")
        .setColor('LUMINOUS_VIVID_PINK')
        .addField("-help (page)", "Shows this message")
        .addField("-help reactions", "Shows a list of reactions")
        .addField("-roll", "Shows a random number between 1 and 100 (custom number will be available soon)")
        .addField("-avatar", "Shows the avatar of the user")
        .addField("-hug", "Hug a mentioned user")
        .addField("-kiss", "Kiss a mentioned user")
        .addField("-cuddle", "Cuddle a mentioned user")
        .addField("-kwan", "<:kwan:962778733360599181>")
        .setFooter({ text: 'Created by: '+user.username+'#'+user.discriminator+ " - Page 1", iconURL: user.displayAvatarURL({ format: 'png'}) });
        return message.reply({ embeds: [Embed] });
      } else if (message.content == '-help 2' || message.content == '-help commands 2') {
        const user = client.users.cache.get("853310508341526548");
        const Embed = new MessageEmbed()
        .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ format: 'png'}) })
        .setTitle("List of commands")
        .setColor('LUMINOUS_VIVID_PINK')
        .addField("-help (page)", "Shows this message")
        .addField("-uptime", "Shows the uptime of the bot")
        .addField("-userinfo", "Shows the info of the user")
        .addField("-serverinfo", "Shows the info of the server")
        .setFooter({ text: 'Created by: '+user.username+'#'+user.discriminator+ " - Page 2", iconURL: user.displayAvatarURL({ format: 'png'}) });
        return message.reply({ embeds: [Embed] });
          
      }

  }

    if (message.content.startsWith ('-roll')) {
        if (message.content == '-roll') {
            var random = Math.floor(Math.random() * 100) + 1;
            console.log("Number is "+random+"\nI don't know how but it works");
            return message.reply(`You rolled a ${random}`);
        } else if (message.content.startsWith ('-roll ')) {
        var a = message.content.split(" ");
        var b = a[1];
        if (b >= 0) {
            var c = Math.floor(Math.random() * b) + 1;
            console.log("Number is "+c+"\nI don't know how but it works");
            return message.reply(`You rolled a ${c}`); 
        } else {
            var c = Math.floor(Math.random() * 100) + 1;
            console.log("Number is "+c+"\nI don't know how but it works");
            return message.reply(`You rolled a ${c}`);
        }
    }
}

    // REACTIONS

    /*

    if (message.content.includes('happy')) {
        const reactionEmoji = client.emojis.cache.get('940992865977368606');
	message.react(reactionEmoji);
    }
    if (message.content.includes('owo')) {
        if (message.author.id === botID) {
            return;
        } else {
        const reactionEmoji = client.emojis.cache.get('940996581644206081');
	message.react(reactionEmoji);
        }
    }
    if (message.content === 'nana') {
        const reactionEmoji = client.emojis.cache.get('857819206203211786');
	message.react(reactionEmoji);
    }
    if (message.content === '<:nanaWOAH:857819206203211786>') {
        const reactionEmoji = client.emojis.cache.get('857819206203211786');
	message.react(reactionEmoji);
    }
    if (message.content === '<:kwan:962778733360599181>') {
        const reactionEmoji = client.emojis.cache.get('962778733360599181');
    message.react(reactionEmoji);
    }
    if (message.content.includes('kwan')) {
        const reactionEmoji = client.emojis.cache.get('962778733360599181');
    message.react(reactionEmoji);
    }
    if (message.content === '!kwan') {
        return message.channel.send('<:kwan:962778733360599181>');
    }
    if (message.content === 'a' || message.content === 'A') {
        const reactionEmoji = client.emojis.cache.get('967131476967698553');
    message.react('🅰️')
        .then(() => message.react('🇦'))
        .then(() => message.react(reactionEmoji))
        .catch(error => console.error('Failed to add reactions: ', error));
    }
    if (message.content.includes('cock')) {
        const reactionEmoji = client.emojis.cache.get('940991593173889074');
    message.react(reactionEmoji);
    }
    */
    if (message.content === '-shutdown' && message.author.id === '853310508341526548' || message.content === '-restart' && message.author.id === '853310508341526548' || message.content === '-kill' && message.author.id === '853310508341526548' || message.content === '-shutdown' && message.author.id === '853310508341526548') {
        message.reply('Killing process...');
        process.exit(0);
    }

    // uptime since start
    if (message.content === '-uptime') {
        const time = process.uptime();
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time - (hours * 3600)) / 60);
        const seconds = time - (hours * 3600) - (minutes * 60);
        const roundedSeconds = Math.round(seconds);
        return message.reply(`I have been up for ${hours} hours, ${minutes} minutes, and ${roundedSeconds} seconds.`);
    }
    // MENTION COMMANDS //

    if (message.content.startsWith ('-kick')) {
        if (message.content === '-kick') {
        return message.channel.send('You have been kicked ' + '<@' + message.author.id + '>');
        }
        else {
            return message.channel.send('You have been kicked ' + '<@' + message.mentions.users.first().id + '>');
        }

    }
    if (message.content.startsWith ('-kiss')) {
        if (message.content === '-kiss') {
        return message.channel.send('Maybe try kissing someone other than the mirror ' + '<@' + message.author.id + '>...');
        }
        else if (undefined === message.mentions.users.first()) {
            return message.channel.send('Maybe try kissing someone other than the mirror ' + '<@' + message.author.id + '>...');
        }
        
        else if (message.mentions.users.first().id === message.author.id) {
            return message.channel.send('You can\'t kiss yourself ' + '<@' + message.author.id + '>');
        }
        else if (message.mentions.users.first().id != 'undefined') {
                const user = client.users.cache.get("853310508341526548");
                const Embed = new MessageEmbed()
            // create a array of main colors for the embed
            .setColor(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff'][Math.floor(Math.random() * 8)])
            .setDescription('You have been kissed! Mwah 💋 ' + '<@' + message.mentions.users.first().id  + '>')
            .setImage(['https://c.tenor.com/C96g4M5OPsYAAAAC/anime-couple.gif', 'https://c.tenor.com/MtKkjQF4rz4AAAAC/kiss-anime.gif', 
            'https://c.tenor.com/fv_MNGUXYWYAAAAC/bunny-girl.gif', 'https://c.tenor.com/217aKgnf16sAAAAC/kiss.gif', 
            'https://c.tenor.com/UQwgkQbdp48AAAAC/kiss-anime.gif', 'https://c.tenor.com/lYKyQXGYvBkAAAAC/oreshura-kiss.gif', 
            'https://c.tenor.com/FgYExssph6MAAAAC/kiss-love.gif', 'https://c.tenor.com/yz_5Imn5KhEAAAAC/kiss-girls.gif'][Math.floor(Math.random() * 8)])
            .setTimestamp() 
            .setFooter({ text: 'Created by: '+user.username+'#'+user.discriminator, iconURL: user.displayAvatarURL({ format: 'png'}) });
            return message.channel.send({ embeds: [Embed] });
            }
        else {
            console.error('error in kiss command');
        }    
            
        }
        if (message.content.startsWith ('-hug')) {
            if (message.content === '-hug') {
                console.log("hug command without mention ran successfully");
                return message.channel.send('You need to mention someone to hug ' + '<@' + message.author.id + '>');
            }
            else if (undefined === message.mentions.users.first()) {
                console.log("hug command without mention ran successfully");
                return message.channel.send('You need to mention someone to hug ' + '<@' + message.author.id + '>');
            }
            
            else if (message.mentions.users.first().id === message.author.id) {
                console.log("hug command with self mention ran successfully");
                return message.channel.send('You can\'t hug yourself ' + '<@' + message.author.id + '>! ' + 'Try hugging someone else...');
            }
            else if (message.mentions.users.first().id != 'undefined') {
                    const user = client.users.cache.get("853310508341526548");
                    const Embed = new MessageEmbed()
                // create a array of main colors for the embed
                .setColor(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff'][Math.floor(Math.random() * 8)])
                .setDescription('<@' + message.mentions.users.first().id  + '>' + ' has received a hug from ' + '<@' + message.author.id + '>! ' + 'Yay!')
                .setImage(['https://c.tenor.com/wUQH5CF2DJ4AAAAC/horimiya-hug-anime.gif', 'https://c.tenor.com/mB_y2KUsyuoAAAAd/cuddle-anime-hug.gif', 
                'https://c.tenor.com/FgLRE4gi5VoAAAAC/hugs-cute.gif', 'https://c.tenor.com/PuuhAT9tMBYAAAAC/anime-cuddles.gif', 
                'https://c.tenor.com/qF7mO4nnL0sAAAAC/abra%C3%A7o-hug.gif', 'https://c.tenor.com/eEIEnCzpIFYAAAAC/anime-hug-anime-hug-couple.gif', 
                'https://c.tenor.com/0T3_4tv71-kAAAAC/anime-happy.gif', 'https://c.tenor.com/DVOTqLcB2jUAAAAC/anime-hug-love.gif'][Math.floor(Math.random() * 8)])
                .setTimestamp()
                .setFooter({ text: 'Created by: '+user.username+'#'+user.discriminator, iconURL: user.displayAvatarURL({ format: 'png'}) });
                console.log("hug command ran successfully");
                return message.channel.send({ embeds: [Embed] });
                }
            else {
                console.error('error in hugs command');
            }            
        }
        if (message.content.startsWith ('-cuddle')) {
            if (message.content === '-cuddle') {
                console.log("Cuddle command without mention ran successfully");
                return message.channel.send('Hey! You need to mention someone to cuddle, ' + '<@' + message.author.id + '>'+ ' owo');
            }
            else if (undefined === message.mentions.users.first()) {
                console.log("Cuddle command without mention ran successfully");
                return message.channel.send('Hey! You need to mention someone to cuddle, ' + '<@' + message.author.id + '>'+ ' owo');
            }
            
            else if (message.mentions.users.first().id === message.author.id) {
                console.log("Cuddle command with self mention ran successfully");
                return message.channel.send('You cannot cuddle yourself, ' + '<@' + message.author.id + '>! ' + 'Maybe try with someone else... :3');
            }
            else if (message.mentions.users.first().id != 'undefined') {
                    const user = client.users.cache.get("853310508341526548");
                    const Embed = new MessageEmbed()
                // create a array of main colors for the embed
                .setColor(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff'][Math.floor(Math.random() * 8)])
                .setDescription('<@' + message.mentions.users.first().id  + '>' + ' has received a cuddle from ' + '<@' + message.author.id + '>! ' + 'That\'s so cute! :3')
                .setImage([
                'https://c.tenor.com/p7DBxozChecAAAAC/cuddle-sleepy.gif', 'https://c.tenor.com/vpE7LGJcq2gAAAAC/val-ally-anime.gif', 
                'https://c.tenor.com/MMtpSUak5HkAAAAC/cuddle-anime.gif', 'https://c.tenor.com/08vDStcjoGAAAAAd/cuddle-anime-hug-anime.gif', 
                'https://c.tenor.com/ZZZ1H9U47KoAAAAC/peach-goma.gif', 'https://c.tenor.com/sFmoCYbNycwAAAAC/hug-anime.gif', 
                'https://c.tenor.com/wwd7R-pi7DIAAAAC/anime-cuddle.gif', 'https://c.tenor.com/8TwoveHk9n8AAAAC/anime-cuddle.gif'][Math.floor(Math.random() * 8)])
                .setTimestamp()
                .setFooter({ text: 'Created by: '+user.username+'#'+user.discriminator, iconURL: user.displayAvatarURL({ format: 'png'}) });
                console.log("cuddle command ran successfully");
                return message.channel.send({ embeds: [Embed] });
                }
            else {
                console.error('error in hugs command');
            }            
        }
        if (message.content.startsWith ('-userinfo')) {
            if (message.content === '-userinfo') {
                const user = client.users.cache.get("853310508341526548");
                const joined = message.member.joinedAt;
                const created = message.author.createdAt;
                const Embed = new MessageEmbed()
                .setColor(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff'][Math.floor(Math.random() * 8)])
                .setTitle(message.author.username+"'s info")
                .setThumbnail(message.author.displayAvatarURL({ format: 'png'}))
                .addFields(
                    { name: 'ID', value: message.author.id, inline: true },
                    { name: 'Full tag', value: message.author.tag, inline: true },
                    { name: 'Created at', value: created.toLocaleString(), inline: true },
                    { name: 'Joined at', value: joined.toLocaleString(), inline: true },
                )
                .setTimestamp()
                .setFooter({ text: 'Created by: '+user.username+'#'+user.discriminator, iconURL: user.displayAvatarURL({ format: 'png'}) });
                return message.channel.send({ embeds: [Embed] });
            }
            else if (undefined === message.mentions.users.first()) {
                console.log("Userinfo command without mention ran successfully");
                return message.channel.send('Hey! You need to mention someone to get their info, ' + '<@' + message.author.id + '>'+ ' owo');
                
            }
            else if (message.mentions.users.first().id != 'undefined') {
                    const user = client.users.cache.get("853310508341526548");
                    let mentionedUser = client.users.cache.get(message.mentions.users.first().id);
                    let member = message.mentions.members.first();
                    const joined = member.joinedAt;
                    const Embed = new MessageEmbed()
                // create a array of main colors for the embed
                .setColor(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff'][Math.floor(Math.random() * 8)])
                .setTitle(mentionedUser.username+"'s info:")
                .setThumbnail(message.mentions.users.first().displayAvatarURL({ format: 'png'}))
                .addFields(
                    { name: 'ID:', value: mentionedUser.id, inline: true },
                    { name: 'Full tag:', value: mentionedUser.tag, inline: true },
                    { name: 'Created at:', value: mentionedUser.createdAt.toLocaleString('en-US', { timeZone: 'America/Mexico_City' }) , inline: true },
                    { name: 'Joined at:', value: member.joinedAt.toLocaleString('en-US', { timeZone: 'America/Mexico_City' }) , inline: true },
                )
                .setTimestamp()
                .setFooter({ text: 'Created by: '+user.username+'#'+user.discriminator, iconURL: user.displayAvatarURL({ format: 'png'}) });
                console.log(mentionedUser.id);
                console.log(mentionedUser.tag);
                console.log(mentionedUser.displayAvatarURL({ format: 'png'}));
                console.log(member.nickname);
                console.log(`Created account at: `+ mentionedUser.createdAt.toLocaleString('en-US', { timeZone: 'America/Mexico_City' }));
                console.log(`Joined server at: `+ joined.toLocaleString('en-US', { timeZone: 'America/Mexico_City' }));
                console.log("userinfo command ran successfully");
                return message.channel.send({ embeds: [Embed] });
            }
        }
        if (message.content.startsWith ('-cheer')) {
            if (message.content === '-cheer') {
                const user = client.users.cache.get("853310508341526548");
                const Embed = new MessageEmbed()
                // create a array of main colors for the embed
                .setColor(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff'][Math.floor(Math.random() * 8)])
                .setTitle('Cheer for ' + message.author.username + '!')
                .setImage([
                'https://cdn.discordapp.com/attachments/965746034024276078/968219178362343494/16509117968228196715068008886068.gif', 'https://c.tenor.com/a7w4Tl3H1YkAAAAC/ilulu-dragon-maid.gif', 
                'https://c.tenor.com/JEC3mPk9eg8AAAAS/bouncy-boobs.gif', 'https://c.tenor.com/yrqYJ1IqqcAAAAAS/lets-cheer-snoopy.gif', 
                'https://c.tenor.com/pPZhNM89oWgAAAAS/love-life-arisa-ayase.gif', 'https://c.tenor.com/sMU0V_Yq_jIAAAAC/frisk-kawaii.gif'][Math.floor(Math.random() * 6)])
                .setTimestamp()
                .setFooter({ text: 'Created by: '+user.username+'#'+user.discriminator, iconURL: user.displayAvatarURL({ format: 'png'}) });
                console.log("Cheer command ran successfully");
                return message.channel.send({ embeds: [Embed] });
            }
        }   
        if (message.content.startsWith ('-sex')) {
            if (message.content === '-sex') {
                console.log("Sex command without mention ran successfully");
                return message.channel.send('Hey! You need to mention someone to sex, ' + '<@' + message.author.id + '>'+ ' o///o');
            }
            else if (undefined === message.mentions.users.first()) {
                console.log("Cuddle command without mention ran successfully");
                return message.channel.send('Hey! You need to mention someone to sex, ' + '<@' + message.author.id + '>'+ ' o///o');
            }
            else if (message.mentions.users.first().id === "955612086774403093") {
                return message.channel.send('I am calling the police... ;-;');
            }
            
            else if (message.mentions.users.first().id === message.author.id) {
                console.log("Cuddle command with self mention ran successfully");
                return message.channel.send('You cannot sex yourself, ' + '<@' + message.author.id + '>! ' + 'Go and try with someone else... ://3');
            }
            else if (message.mentions.users.first().id != 'undefined') {
                    const user = client.users.cache.get("853310508341526548");
                    const Embed = new MessageEmbed()
                // create a array of main colors for the embed
                .setColor(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff'][Math.floor(Math.random() * 8)])
                .setDescription('<@' + message.mentions.users.first().id  + '>' + " has been sex'd by " + '<@' + message.author.id + '>! ' +'So sussy')
                .setImage('https://c.tenor.com/V2_3NwXmPz4AAAAC/censored-censor.gif')
                .setTimestamp()
                .setFooter({ text: 'Created by: '+user.username+'#'+user.discriminator, iconURL: user.displayAvatarURL({ format: 'png'}) });
                console.log("sex command ran successfully");
                return message.channel.send({ embeds: [Embed] });
                }
            else {
                console.error('error in sex command');
            }            
        }

        // snipe recently deleted message

        if (message.content.startsWith ('!ip')) {
            if(message.content === '!ip' || undefined === message.mentions.users.first()) {
            var a = Math.floor(Math.random() * 255) + 1;
            var b = Math.floor(Math.random() * 255) + 1;
            var c = Math.floor(Math.random() * 255) + 1;
            var d = Math.floor(Math.random() * 255) + 1;
            return message.channel.send(message.author.username + "'s IP: " + a + '.' + b + '.' + c + '.' + d);
            } else {
                var a = Math.floor(Math.random() * 255) + 1;
                var b = Math.floor(Math.random() * 255) + 1;
                var c = Math.floor(Math.random() * 255) + 1;
                var d = Math.floor(Math.random() * 255) + 1;
                return message.channel.send(message.mentions.users.first().username + "'s IP: " + a + '.' + b + '.' + c + '.' + d);
            }
        }

        if (message.content.includes ('shut up') || message.content.includes ('SHUT UP') || message.content.includes ('Shut up')) {
            const attachment = new MessageAttachment('test.jpg');
            return message.channel.send({ files: [attachment] });
        }

        // total number of guilds where the bot is in
        if (message.content.startsWith ('!guilds')) {
            return message.channel.send('I am in ' + client.guilds.cache.size + ' guilds!');
        }

        if (message.content.startsWith('!avatar')) {
            if (message.content === '!avatar') {
            const user = client.users.cache.get("853310508341526548");
            const exampleEmbed = new MessageEmbed()
            // create a array of main colors for the embed
            .setColor(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff'][Math.floor(Math.random() * 8)])
            .setTitle('Avatar for ' + message.author.username)
            // add links to other formats of the image
            .setDescription('[png](' + message.author.displayAvatarURL({ format: 'png'}) + ')' + ' | ' + '[jpg](' + message.author.displayAvatarURL({ format: 'jpg'}) + ')' + ' | ' + '[gif](' + message.author.displayAvatarURL({ format: 'gif'}) + ')' + ' | ' + '[webp](' + message.author.displayAvatarURL({ format: 'webp'}) + ')')
            .setURL(message.author.displayAvatarURL())
            .setImage(message.author.avatarURL({format: 'jpeg', size: 2048}))
            .setTimestamp()
            .setFooter({ text: 'Created by: '+user.username+'#'+user.discriminator, iconURL: user.displayAvatarURL({ format: 'png'}) });
            return message.reply({ embeds: [exampleEmbed] });
            } else if (undefined === message.mentions.users.first()) {
                const user = client.users.cache.get("853310508341526548");
                const exampleEmbed = new MessageEmbed()
                // create a array of main colors for the embed
                .setColor(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff'][Math.floor(Math.random() * 8)])
                .setTitle('Avatar for ' + message.author.username)
                // add links to other formats of the image
                .setDescription('[png](' + message.author.displayAvatarURL({ format: 'png'}) + ')' + ' | ' + '[jpg](' + message.author.displayAvatarURL({ format: 'jpg'}) + ')' + ' | ' + '[gif](' + message.author.displayAvatarURL({ format: 'gif'}) + ')' + ' | ' + '[webp](' + message.author.displayAvatarURL({ format: 'webp'}) + ')')
                .setURL(message.author.displayAvatarURL())
                .setImage(message.author.avatarURL({format: 'jpeg', size: 2048}))
                .setTimestamp()
                .setFooter({ text: 'Created by: '+user.username+'#'+user.discriminator, iconURL: user.displayAvatarURL({ format: 'png'}) });
                return message.reply({ embeds: [exampleEmbed] });
            } else if (message.mentions.users.first().id != 'undefined') {
                const user = client.users.cache.get("853310508341526548");
                const exampleEmbed = new MessageEmbed()
                // create a array of main colors for the embed
                .setColor(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff'][Math.floor(Math.random() * 8)])
                .setTitle('Avatar for ' + message.mentions.users.first().username)
                // add links to other formats of the image
                .setDescription('[png](' + message.mentions.users.first().displayAvatarURL({ format: 'png'}) + ')' + ' | ' + '[jpg](' + message.mentions.users.first().displayAvatarURL({ format: 'jpg'}) + ')' + ' | ' + '[gif](' + message.mentions.users.first().displayAvatarURL({ format: 'gif'}) + ')' + ' | ' + '[webp](' + message.mentions.users.first().displayAvatarURL({ format: 'webp'}) + ')')
                .setURL(message.mentions.users.first().displayAvatarURL())
                .setImage(message.mentions.users.first().avatarURL({format: 'jpeg', size: 2048}))
                .setTimestamp()
                .setFooter({ text: 'Created by: '+user.username+'#'+user.discriminator, iconURL: user.displayAvatarURL({ format: 'png'}) });
                return message.reply({ embeds: [exampleEmbed] });
            }
        } 

        if (message.content === '!catboy' || message.content === '!catboys') {
            sfw.img()
            .then(catboy => {
            const user = client.users.cache.get("853310508341526548");
            const embed = new MessageEmbed()
            .setColor(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff'][Math.floor(Math.random() * 8)])
            .setTitle('Catboys!')
            .setDescription('Powered by '+'[catboys.com](https://catboys.com/)')
            .setImage(catboy.url)
            .addField('Special thanks to:', 'Beyondtoshi#0001 for the catboy API')
            .setTimestamp()
            .setFooter({ text: 'Created by: '+user.username+'#'+user.discriminator, iconURL: user.displayAvatarURL({ format: 'png'}) });
            console.log();
            return message.reply({ embeds: [embed] });
            })
        }

        if (message.content === '!neko' || message.content === '!nekos') {
            neko.neko()
            .then(neko => {
                const user = client.users.cache.get("853310508341526548");
                const embed = new MessageEmbed()
                .setColor(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff'][Math.floor(Math.random() * 8)])
                .setTitle('Nekos!')
                .setDescription('Powered by '+'[nekos.life](https://nekos.life/)')
                .setImage(neko.url)
                .setTimestamp()
                .setFooter({ text: 'Created by: '+user.username+'#'+user.discriminator, iconURL: user.displayAvatarURL({ format: 'png'}) });
                console.log();
                return message.reply({ embeds: [embed] });
            })
        }

        if (message.content.startsWith('!owoify')) {
            var a = message.content.split(" ");
            var b = a.slice(1).join(" ");
            if (b.length < 1) {
                
                return message.reply('Please enter a message to owoify!');
            }
            async function work() {
                let owo = await neko.OwOify({text: b});
                return message.reply(owo.owo);
              }
                work();
        }

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

        if (message.content.startsWith('!eval')) {
            if (message.author.id === '853310508341526548') {
                var a = message.content.split(" ");
                var b = a.slice(1).join(" ");
                try {
                    var c = eval(b);
                    console.log(c);
                } catch (e) {
                    message.channel.send("```"+e+"```");
                }
            }
        }

        if (message.content.startsWith('!lastdel') && message.guildId == '961302387421749258') {
            try {
            const embed = new MessageEmbed() 
            .setColor(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff'][Math.floor(Math.random() * 8)])
            .setTitle('Message deleted by ' + messageAuthor[0] + '#' + messageDiscriminator[0])
            .setDescription(messageContents[0])
            .addFields(
                { name: 'Channel: ', value: '<#'+messageChannel[0]+'>', inline: true },
                { name: 'Created At: ', value: messageTimestamp[0], inline: true },
                { name: 'Deleted At: ', value: messageDeletedAt[0], inline: true }
            )
            return message.channel.send({ embeds: [embed] });
            } catch (e) {
                console.log(e);
                return message.channel.send("No messages available");
            }
        }
});


let messageContents = []; // done
let messageAuthor = []; // done
let messageDiscriminator = []; // done
let messageAuthorID = []; // done
let messageChannel = []; // done
let messageTimestamp = [];
let messageDeletedAt = [];


client.on('messageDelete', (message) => {

    if (message.guildId != '961302387421749258') {
        return;
    } else {
        messageContents.push(message.content);
        if (messageContents.length > 1) {
            messageContents.shift();
        }
        console.log(messageContents);

        messageAuthor.push(message.author.username);
        if (messageAuthor.length > 1) {
            messageAuthor.shift();
        }
        console.log(messageAuthor);

        messageDiscriminator.push(message.author.discriminator);
        if (messageDiscriminator.length > 1) {
            messageDiscriminator.shift();
        }
        console.log(messageDiscriminator);
        
        messageAuthorID.push(message.author.id);
        if (messageAuthorID.length > 1) {
            messageAuthorID.shift();
        }
        console.log(messageAuthorID);

        messageChannel.push(message.channel.id);
        if (messageChannel.length > 1) {
            messageChannel.shift();
        }
        console.log(messageChannel);

        messageTimestamp.push(message.createdAt.toUTCString());
        if (messageTimestamp.length > 1) {
            messageTimestamp.shift();
        }
        console.log(messageTimestamp);

        var deletedAt = new Date();
        messageDeletedAt.push(deletedAt.toUTCString());
        if (messageDeletedAt.length > 1) {
            messageDeletedAt.shift();
        }
        console.log(messageDeletedAt);

    }

});
    

client.login('OTY3OTAyOTU4NTY0MDI4NDk3.YmXD4A.yJgj80O1eHvc98vhQcDqJTcRkRM');
