module.exports = {
  name: "job",
  execute(client, message, args) {
    //
    const Maru = "314547915886559238";
    const Yato = "315702130956697600";
    const Higor = "761760123638513674";
    const lixo = "636041472554172435";

    //
    switch (message.author.id) {
      //
      case Yato:
        message.channel.send(
          `O Mestre <@${Yato}> está trabalhando no momento.`
        );
        break;
      //
      case Maru:
        message.channel.send(`<@${Maru}> está lendo no momento.`);
        break;
      //
      case Higor:
        message.channel.send(
          `Se gadar fosse um trabalho, <@${Higor}> estaria trabalhando no momento.`
        );
        break;
      //
      case lixo:
        message.channel.send(`????????`);
        message.channel.send(`Sai daqui mlk, tu nem trabalha.`);
        break;
      //
      default:
        //
        message.channel.send(`Sorry ${message.author}, você não é dígno.`);
        break;
    }
  },
};
