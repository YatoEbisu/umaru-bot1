const config = require("../config.json");

module.exports = {
  name: "suggest",
  execute(client, message, args) {
    //
    var channel_suggest = client.channels.cache.get(config.channel_suggest);
    //
    args.splice(0, 1);
    var text = args.join(" ");
    //
    channel_suggest.send(`${message.author}: ${text}`);
    message.channel.send("Sugestão enviada!");
  },
};
