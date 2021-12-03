const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const db = require("nrc.db");
const nrccode = new Set();

module.exports = {
    
    calistir: async(client, message, args) => {
         
        
        if (nrccode.has(message.author.id)) {
            return message.channel.send("`5` Dakikada da Bir Kullanabilirsin " );
     } else {
         nrccode.add(message.author.id);
         setTimeout(() => {
         message.delete();
           nrccode.delete(message.author.id);
         }, 300000);
     }


        if(!message.member.roles.cache.has(db.fetch(`partneryetkili_${message.guild.id}`))) {
            return message.channel.send("Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!");
         }




  

let partner = db.fetch(`partnerbul_1`)
let partner2 = db.fetch(`partnerbul_2`)
let partner3 = db.fetch(`partnerbul_3`)
let partner4 = db.fetch(`partnerbul_4`)
let partner5 = db.fetch(`partnerbul_5`)


if (!partner) return message.channel.send (`Şu Anda Partner bulamıyorum daha sonra tekrar deneyiniz. \n \n İsterseniz kendi sunucunuzu listeye eklemek için **!partner-reklam**`)
if (!partner2) return message.channel.send (`Şu Anda Partner bulamıyorum daha sonra tekrar deneyiniz. \n \n İsterseniz kendi sunucunuzu listeye eklemek için **!partner-reklam**`)
if (!partner3) return message.channel.send (`Şu Anda Partner bulamıyorum daha sonra tekrar deneyiniz. \n \n İsterseniz kendi sunucunuzu listeye eklemek için **!partner-reklam**`)
if (!partner4) return message.channel.send (`Şu Anda Partner bulamıyorum daha sonra tekrar deneyiniz. \n \n İsterseniz kendi sunucunuzu listeye eklemek için **!partner-reklam**`)
if (!partner5) return message.channel.send (`Şu Anda Partner bulamıyorum daha sonra tekrar deneyiniz. \n \n İsterseniz kendi sunucunuzu listeye eklemek için **!partner-reklam**`)






const partnerr = new Discord.MessageEmbed() 
.setColor(`BLUE`)
.setAuthor('Narcos Code Partner Botu V13')




.setDescription(` 1)
> İşte Partner olunabilecek bir Sunucu Dostum.

> Partner olmak için;

**${ayarlar.prefix}partner ${partner}**

> **Sunucu hakkında;**

> **Sunucu Adı:**     ${client.guilds.cache.get(partner).name}
> **Üye Sayısı:**   ${client.guilds.cache.get(partner).memberCount - client.guilds.cache.get(partner).members.cache.filter(m=>m.user.bot).size} (${client.guilds.cache.get(partner).members.cache.filter(m=>m.user.bot).size} bot)
> **Kuruluş:**        ${client.guilds.cache.get(partner).createdAt.toLocaleString()}


2)
> İşte Partner olunabilecek bir Sunucu Dostum.

> Partner olmak için;

**${ayarlar.prefix}partner ${partner2}**

> **Sunucu hakkında;**

> **Sunucu Adı:**     ${client.guilds.cache.get(partner2).name}
> **Üye Sayısı:**   ${client.guilds.cache.get(partner2).memberCount - client.guilds.cache.get(partner2).members.cache.filter(m=>m.user.bot).size} (${client.guilds.cache.get(partner2).members.cache.filter(m=>m.user.bot).size} bot)
> **Kuruluş:**        ${client.guilds.cache.get(partner2).createdAt.toLocaleString()}

3)
> İşte Partner olunabilecek bir Sunucu Dostum.

> Partner olmak için;

**${ayarlar.prefix}partner ${partner3}**

> **Sunucu hakkında;**

> **Sunucu Adı:**     ${client.guilds.cache.get(partner3).name}
> **Üye Sayısı:**   ${client.guilds.cache.get(partner3).memberCount - client.guilds.cache.get(partner3).members.cache.filter(m=>m.user.bot).size} (${client.guilds.cache.get(partner3).members.cache.filter(m=>m.user.bot).size} bot)
> **Kuruluş:**        ${client.guilds.cache.get(partner3).createdAt.toLocaleString()}


4)
> İşte Partner olunabilecek bir Sunucu Dostum.

> Partner olmak için;

**${ayarlar.prefix}partner ${partner3}**

> **Sunucu hakkında;**

> **Sunucu Adı:**     ${client.guilds.cache.get(partner4).name}
> **Üye Sayısı:**   ${client.guilds.cache.get(partner4).memberCount - client.guilds.cache.get(partner4).members.cache.filter(m=>m.user.bot).size} (${client.guilds.cache.get(partner4).members.cache.filter(m=>m.user.bot).size} bot)
> **Kuruluş:**        ${client.guilds.cache.get(partner4).createdAt.toLocaleString()}

5)
> İşte Partner olunabilecek bir Sunucu Dostum.

> Partner olmak için;

**${ayarlar.prefix}partner ${partner3}**

> **Sunucu hakkında;**

> **Sunucu Adı:**     ${client.guilds.cache.get(partner5).name}
> **Üye Sayısı:**   ${client.guilds.cache.get(partner5).memberCount - client.guilds.cache.get(partner5).members.cache.filter(m=>m.user.bot).size} (${client.guilds.cache.get(partner5).members.cache.filter(m=>m.user.bot).size} bot)
> **Kuruluş:**        ${client.guilds.cache.get(partner5).createdAt.toLocaleString()}



> **Partner Sistemi 10 Dakkikadar bir yenilenir. Reklam Verdirmek İçin !partner-reklam yazarak reklam verdirebilirsiniz.**`)





.setFooter(`Narcos Code Partner Botu V13`) 

return message.channel.send({embeds: [partnerr]}) 



},

    name: "partner-bul",
    aliases: ["pb"],
    usage: "partner-bul",
    kategori: "partner",
    description: "Partnerlik bir sunucu bulursunuz."
};