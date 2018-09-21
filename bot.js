const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
const fs = require('fs');
const prefix = '/';
client.login(process.env.BOT_TOKEN);  
});

client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});

     


         
        
 
  
 
    

  

client.on('message', message =>{

    if (message.author.bot) return;

    if(message.content == "typing"){

message.channel.startTyping();

}

});

 

  

client.on('message', message => {

  if (message.content.startsWith("avatar")) {

      var mentionned = message.mentions.users.first();

  var nawaf;

    if(mentionned){

        var nawaf = mentionned;

    } else {

        var nawaf = message.author;

        

    }

      const embed = new Discord.RichEmbed()

      .setColor("RANDOM")

        .setAuthor(message.author.username, message.author.avatarURL)

      .setImage(`${nawaf.avatarURL}`)

    message.channel.sendEmbed(embed);

  }

});

 




 

  






 





































client.login(process.env.BOT_TOKEN);
