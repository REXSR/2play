const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
const fs = require('fs');
const prefix = 'S';
client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});

  
  const codes =
[
'__ Welcome To Revive ✶__'
]
client.on('guildMemberAdd', member => {
const codes = member.guild.channels.get("488406701582843920");//ايدي الشات
if(!codes) return;
if(codes) {
codes.send(  `${lol[Math.floor(Math.random() * lol.length)]}`);          
}
});
  
 
    

  

client.on('message', message =>{

    if (message.author.bot) return;

    if(message.content == "REX"){

message.channel.startTyping();

}

});

 

  






 





































client.login(process.env.BOT_TOKEN);
