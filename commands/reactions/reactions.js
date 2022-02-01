const {
    cry,
    angry,
    smile,
    sleep,
    stubborn,
    eating,
    transform,
    cola,
    punch,
    playing,
    rofl,
    pat,
    thug,
    excited,
    amazed,
    blinking,
  } = require("../../imgs");

module.exports = {
    name: "reactions",
    execute(message, args) {
        // 
        const comando = args[0].toLowerCase();
        //
        switch (comando) {
            //REACTIONS
            case "cry":
              randomImage(message, cry);
              break;
          
            case "angry":
              randomImage(message, angry);
              break;
          
            case "smile":
              randomImage(message, smile);
              break;
          
            case "sleep":
              randomImage(message, sleep);
              break;
          
            case "stubborn":
              randomImage(message, stubborn);
              break;
          
            case "eating":
              randomImage(message, eating);
              break;
          
            case "transform":
              randomImage(message, transform);
              break;
          
            case "cola":
              randomImage(message, cola);
              break;
          
            case "punch":
              randomImage(message, punch);
              break;
          
            case "playing":
              randomImage(message, playing);
              break;
          
            case "rofl":
              randomImage(message, rofl);
              break;
          
            case "pat":
              randomImage(message, pat);
              break;
          
            case "thug":
              randomImage(message, thug);
              break;
          
            case "excited":
              randomImage(message, excited);
              break;
          
            case "amazed":
              randomImage(message, amazed);
              break;
          
            case "blinking":
              randomImage(message, blinking);
              break;
        }
    },
  };

  function randomImage(message, reactions) {
    var random = Math.floor(Math.random() * reactions.length);
    return message.channel.send(`${reactions[random]}`);
  }
