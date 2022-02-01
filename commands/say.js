module.exports = {
  name: "say",
  description: "say",
  execute(client, message, args) {
    //
    message.delete().catch(console.error);
    //
    args.splice(0, 1);
    text = args.join(" ");
    //
    message.channel.send(text);
  },
};
