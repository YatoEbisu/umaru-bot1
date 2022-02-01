module.exports = {
  name: "god",
  execute(client, message, args) {
    console.log('chegou')
    //
    const Yato = "315702130956697600";
    //
    message.channel.send(`Claramente é o <@${Yato}>`);
  },
};
