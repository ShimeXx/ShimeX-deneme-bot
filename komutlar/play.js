const Discord = require('discord.js');
const Player = require('discord-music-player');

exports.run = async (client, message, args) => {
var muzik = message.content.slice(6)
const voiceChannel = message.member.voiceChannel;

if (!args[0]) {
  message.channel.send('Lütfen Şarkı Belirtin!');
};
if (voiceChannel) return message.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('Lütfen Sesli Bir Kanala Giriş Yapınız!'));

if (client.player.isPlaying(message.guild.id) === true) {
  var song = client.player.addToQueue(message.guild.id, muzik)
  var muzikveri = song.song;
  message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('Başarıyla Sıraya Eklendi: ' + muzikveri.name));
}
else{
var song = await client.player.play(message.member.voice.channel, muzik,);
client.player.setVolume(message.guild.id, 150 );
var muzikveri = song.song;
let muzikurll = muzikveri.url;
let muzikid = getYouTubeID(muzikurll);;
let muzikresim = ` https://i.ytimg.com/vi/${muzikid}/1.jpg`;
message.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('şu anda oynatılıyor: ' + muzikveri.name)
.setThumbnail(muzikresim));
};
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'play',
  description: '.',
  usage: 'play'
};
