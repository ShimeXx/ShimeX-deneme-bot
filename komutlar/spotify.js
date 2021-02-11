const Discord = require('discord.js')
const canvacord = require("canvacord");
exports.run = (client, message, args) => {
         var user = message.mentions.users.first() || message.author;

        let status = user.presence.activities.find(activity => activity.type === 'LISTENING');

        console.log(status)

};
      
        exports.conf = {
            enabled: true,
            guildOnly: false,
            aliases: [],
            permLevel: 0
          };
          
          exports.help = {
            name: 'spotify',
            description: '',
            usage: 'spotify'
          };