const Discord = require("discord.js");
const Client = new Discord.Client();
let prefix = process.env.TOKEN; //The bot prefix will be placed in the .env file

client.on('ready', () => {
   console.log("Bot ready.")//When the bot is turned on it will send this message through the console.
});

client.on('message', message  => {

  if (!message.content.startsWith(prefix) || message.author.bot) return; //We make this return so that the bot does not make an infinite loop and repeat the same message.

  const args = message.content.slice(prefix.length).trim().split(/ +/); // We define arguments & command
  const command = args.shift().toLowerCase(); 

  if(command === 'ping'){ //basic ping command
  let ping = Math.floor(message.client.ping);
    message.channel.send(":ping_pong: Pong!")
    .then(m => {
        
        m.edit(`:incoming_envelope: Ping Messages: \`${Math.floor(m.createdTimestamp - Date.now())} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``);
   }
});
 
});

client.on(process.env.TOKEN) //Your bot token will be placed in the .env file
