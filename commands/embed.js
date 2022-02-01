const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
  name: "embed",
  description: "embed",
  execute(client, message, args) {
    //
    var cargo = message.guild.roles.cache.get(
      config.roles.group_role_admin
    );
    var chat_logs = client.channels.cache.get(config.channel_logs);
    var member = message.guild.members.cache.get(message.author.id);

    //permissao por cargo
    // if (member.roles.cache.has(cargo.id)) {
    var avatar = new URL(config.icons.umaru_icon_01);
    const msg = message.content.trim().slice(config.prefix.length).split(/ +/g);
    //
    msg.splice(0, 2);
    var description =
      "**Umaru-chan**\n \n*土間 埋 Doma Umaru*" +
      "\n \n " +
      msg.join(" ") +
      "\n \n ";

    var embed = new Discord.MessageEmbed()
      .setColor("#f59542")
      .setDescription(description)
      .setThumbnail(avatar)
      .setFooter(`\n by Umaru-chan.`);
    //
    message.channel.send(embed);
    message.delete().catch((O_o) => {});
    //
    var emoji = ":orange_square:";
    var userlog = message.author;
    var channel = message.channel;
    //
    chat_logs.send(
      `${emoji}` +
        " " +
        `${userlog}` +
        " Enviou uma mensagem  *!handler*  no canal  " +
        `${channel}`
    );
    // }
  },
};
