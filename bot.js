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
      if (!channel) return;
    let clinet = new Discord.RichEmbed()
        .setColor('RANDOM')
          .addField('**Welcome To Revive**.')
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

أعضاء السيرفر :bar_chart: \` ${message.guild.memberCount}\`
.setDescription(`**
صاحب السيرفر  :key: \` ${message.guild.owner.user.username} \`
.addField(`**الرومات :scroll: **`,true)
.addField(`# الكتابية`, `${message.guild.channels.filter(m => m.type === 'text').size}`)
.addField( `:loud_sound: الصوتية`,`${message.guild.channels.filter(m => m.type === 'voice').size}`)
 رتب السيرفر :scroll: 
${message.guild.roles.size}
        message.channel.send({embed:embed})
    }
});
  






 





































client.login(process.env.BOT_TOKEN);
