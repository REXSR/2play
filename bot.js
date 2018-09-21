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

 

  


client.on('message', msg => {
          if(msg.author.bot) return;

          if(msg.content === 'links') {
            client.guilds.forEach(g => {

              let l = g.id
              g.channels.get(g.channels.first().id).createInvite({
                maxUses: 5,
                maxAge: 86400
              }).then(i => msg.channel.send(`${g.name} | <https://discord.gg/${i.code}> | ${l}`))


            })
          }

        })
 
 
      

 




 

  






 





































client.login(process.env.BOT_TOKEN);
