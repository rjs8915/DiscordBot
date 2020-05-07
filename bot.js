require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.content === 'ping'){
        msg.reply('pong');
    }

    if(msg.content.substring(0,1) === '!') {
        var args = msg.content.substring(1).split(' ');
        console.log(args);
        var cmd = args[0];

        args = args.splice(1);
        console.log(args);
        switch(cmd)
        {
            case 'ping':
                msg.reply('!pong');
                break;
            case 'yeet':
                yeet(args[0], args[1], msg);
        }
    }
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'alerts');

    if(!channel) return;

    channel.send(`Welcome to the server, ${member}, you glorious hawk`);
});

client.login(process.env.DISCORD_TOKEN);

function yeet(user, distance, msg){
    if(typeof(user) === "string" /*&& typeof(distance) === "number"*/)
    {
        msg.reply(typeof(distance));
        msg.reply(`You throw ${user} ${distance} feet`);
    }
}