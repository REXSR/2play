const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
const fs = require('fs');
const prefix = '$';
client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});

  
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'play');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
          .addField('**Welcome To Revive**.')

}
)

});

    
        
 
  
 
    

  

client.on('message', message =>{

    if (message.author.bot) return;

    if(message.content == "#typing"){

message.channel.startTyping();

}

});

 

  






 





































client.login(process.env.BOT_TOKEN);
