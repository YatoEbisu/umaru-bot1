module.exports = {
  name: "clear",
  async execute(client, message, args) {
    //
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "você não é digno."
    );

    console.log(args[1])
  const deleteCount = parseInt(args[1], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.reply(
      "forneça um número de de até **99 mensagens** a serem excluídas"
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(` ❌**「${args[1]}」**Mensagens foram **deletadas** por ${message.author}!`).then()
    .catch(error =>
      console.log(`Erro ao deletar mensagens: ${error}`)
    );
  },
};
