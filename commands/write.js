module.exports = {
  name: "write",
  description: "write",
  execute(client, message, args) {
    //
    message.delete();
    args.splice(0, 1);
    var text = args.join(" ");
    LetterByLetters(message, text);;
  },
};

async function LetterByLetters(message, text) {
  const m = await message.channel.send("|");
  var array = text.split(" ");
  var msg = "";
  array.forEach((x) => {
    for (let i = 0; i < x.length; i++) {
      msg += x[i];
      m.edit(msg);
    }
    msg += " ";
  });
}