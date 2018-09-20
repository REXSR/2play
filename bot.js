const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
const fs = require('fs');
const prefix = '$';
client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا
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

 
client.on("message", message => {
    
    if(message.content.startsWith(prefix + "server")) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**الأمر للاداره فقط **");
const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("RANDOM")
.setDescription(`**
.addField("**👑__اونر السيرفر__**", '**Unknown**' ,true)
.addField("**🆔__ايدي السيرفر__**", message.guild.id,true)
.addField("**📅__تم إنشاؤها__**", message.guild.createdAt.toLocaleString(),true)
.addField("**🌐__نوع السيرفر__**", message.guild.region,true)
.addField("**👥__عدد الاعضاء__**", message.guild.memberCount`,true)
.addField("**📝__الرومات الكتابية__**", message.guild.channels.filter(m => m.type === 'text').size`,true)
.addField("**🎤__رومات الصوت__**", message.guild.channels.filter(m => m.type === 'voice').size`,true)
.addField("**🔵__عدد الاعضاء الاونلاين__**", message.guild.members.filter(m=>m.presence.status == 'online').size`,true)
** `)
message.channel.send({embed:embed})
    }
});
  






 





































client.login(process.env.BOT_TOKEN);
