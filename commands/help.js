const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
  name: "help",
  execute(client, message, args) {
    //
    var avatar = new URL(config.icons.umaru_icon_01);
    //
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor("#f59542")
      .setTitle("Commands")
      .setAuthor(
        "土間 埋 Doma Umaru",
        "https://i.imgur.com/7IuRbrC.jpg",
      )
      //#region fields
      .addFields(
        { name: "Reactions -- 16", value: `\`cry\`, \`angry\`, \`smile\`, \`sleep\`, \`stubborn\`, \`eating\`, \`transform\`, \`cola\`, \`punch\`, \`playing\`, \`rofl\`, \`pat\`, \`thug\`, \`excited\`, \`amazed\`, \`blinking\``},
        { name: "Random -- 8", value: `\`say\`, \`write\`, \`suggest\`, \`embed\`, \`help\`, \`love you\`, \`job\`, \`god\``},
        { name: "Mod -- 1", value: `\`clear \``},
      )
      //#endregion
      .setDescription("Mandem sejestões com o `suggest` caso tenham uma ideia de comando")
      .setTimestamp()
      .setFooter("by Umaru-chan", "https://i.imgur.com/7IuRbrC.jpg");
      //
      message.channel.send(exampleEmbed);
  },
};
