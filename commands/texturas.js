const { MessageEmbed } = require("discord.js");
const { Client, MessageMentions } = require("discord.js");
const { config } = require("dotenv");
 
module.exports = {
  name: "texturas",
  description: "¡Paquete de texturas del servidor!",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["testuras","pack"],
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
            .setDescription('**Texturas Arcaneva**\n- Optifine Obligatorio - \n__Descomprimir__ en carpeta Resoucepacks.')
            .setColor('#921cff')
            .setTitle('[Click para Descargar]')
            .setURL('https://www.mediafire.com/file/kkve9clbt56tj4u/%25C2%25A73%25C2%25A7lArcanevaGP%25C2%25A7r%25C2%25A77.zip/file')
            .setThumbnail('https://cdn.discordapp.com/attachments/918316564833529966/927981976063996004/arcaneva.png?size=1024')
            .setFooter('Royal Arcaneva')
            .setImage('https://cdn.discordapp.com/attachments/918316564833529966/927984647089033306/cuatro.png')
            .setAuthor('Resoucepack', 'https://cdn.discordapp.com/attachments/918316564833529966/927981946221518888/769037786643693570.gif')
            message.channel.send(embed);
            message.delete();
      
        interaction.send(embed);
      } 
}
