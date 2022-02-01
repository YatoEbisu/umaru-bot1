const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
const fs = require("fs");

const config = require("./config.json");
const reaction = require(`./commands/reactions/reactions`);


client.commands = new Discord.Collection();

// Commands
client.commands.set(reaction.name, reaction);
//
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}


//
client.on("ready", () => {
  console.log(`Bot foi iniciado em ${client.guilds.cache.size} servidores.`);

  // Set the client user's presence
  client.user
    .setPresence({ activity: { name: `🎬 Animes`, type: 'WATCHING',  }, status: "online" })
    .catch(console.error);
});

//
client.on("guildCreate", (guild) => {
  var chat_logs = client.channels.cache.get(config.channel_logs);
  console.log(
    `O bot entrou no servidor: ${guild.name} (id: ${guild.id}). Membros: ${guild.memberCount}`
  );
  chat_logs.send(
    `O bot entrou no servidor: ${guild.name} (id: ${guild.id}). Membros: ${guild.memberCount}`
  );
  //client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

//
client.on("guildDelete", (guild) => {
  var chat_logs = client.channels.cache.get(config.channel_logs);
  console.log(
    `O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`
  );
  chat_logs.send(
    `O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`
  );
  //client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

//
client.on("message", async (message) => {
  //
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.content.startsWith(config.prefix)) return;

  var chat_logs = client.channels.cache.get(config.channel_logs);

  //LOGS
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.join("-").toLowerCase();
  const dt = moment();

  //CHAT LOGS
  chat_logs.send(
    `➥ Guild: ${message.guild} | Channel: ${
      message.channel
    } | User: ${message.author} | Command: 》${comando.replace(
      "-",
      " "
    )}`
  );

  //CONSOLE LOG
  console.log(`| [${dt.format("DD-MM-YYYY HH:mm:ss")}] 
| ➥ Chat: #${message.channel.name} | ${
    message.author.username
  }: 》${comando.replace("-", " ")}`);
  console.log("| ---------------------------------------------------------");

  //
  if(args[0] == 'cry'
    || args[0] ==  'angry'
    || args[0] == 'smile'
    || args[0] == 'sleep'
    || args[0] == 'stubborn'
    || args[0] == 'eating'
    || args[0] == 'transform'
    || args[0] == 'cola'
    || args[0] == 'punch'
    || args[0] == 'playing'
    || args[0] == 'rofl'
    || args[0] == 'pat'
    || args[0] == 'thug'
    || args[0] == 'excited'
    || args[0] == 'amazed'
    || args[0] == 'blinking'){
    client.commands.get('reactions').execute(message, args);
  }else{
    client.commands.get(args[0]).execute(client, message, args);
  }
});
client.login(config.token);
