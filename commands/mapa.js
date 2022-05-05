const { MessageEmbed } = require("discord.js");
const { Client, MessageMentions } = require("discord.js");
const { config } = require("dotenv");
 
module.exports = {
  name: "mapa",
  description: "Mapa del servidor",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["map"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let Commands = client.commands.map(
      (cmd) =>
        `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
          cmd.name
        }${cmd.usage ? " " + cmd.usage : ""}\` - ${cmd.description}`
    );
const embed = new MessageEmbed()
            .setDescription(':map: Mapa del Servidor')
            .setColor('#921cff')
            .setTitle('[Click aqui] <a:paz:854144051188334602>')
            .setURL('http://212.192.28.78:25771/#nova7')
            .setThumbnail('https://cdn.discordapp.com/attachments/817172406388260915/942912229194477578/arcaneva.png')
            .setFooter('Arcaneva')
            .setAuthor('Dynmap', 'https://cdn.discordapp.com/attachments/918316564833529966/927981946221518888/769037786643693570.gif')
            message.channel.send(embed);
            message.delete();
  

        interaction.send(embed);
      }
}
