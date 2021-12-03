const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const db = require("nrc.db");



module.exports = {
    calistir: async(client, message, args) => {

        if(!message.member.roles.cache.has(db.fetch(`partneryetkili_${message.guild.id}`))) {
            return message.channel.send("Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!");
         }
        let sv = args[0]

        let partner =   db.fetch(`partner_${message.guild.id}`)
        let log =   db.fetch(`partnerlog_${message.guild.id}`)
        let yetkili =   db.fetch(`partneryetkili_${message.guild.id}`)
        let text =   db.fetch(`partnertext_${message.guild.id}`)
        let sistem =   db.fetch(`partnersv_${message.guild.id}`)
        if(!partner) return message.channel.send("Partner Kanalı Ayarlanmamış.")
        if(!log) return message.channel.send("Partner LOG Kanalı Ayarlanmamış.")
        if(!yetkili) return message.channel.send("Partner Yetkili Rolü Ayarlanmamış.")
        if(!text) return message.channel.send("Partner Text  Ayarlanmamış.")
        if(!sistem) return message.channel.send(`Partner Sistemi Açılmamış  Açmak için. **${ayarlar.prefix}partnerayar aç/kapat**`)

     
if (!sv) return message.channel.send(`:no_entry: Bir Sunucu İD girmelisin`)
message.delete()


let test = db.fetch(`partnersv_${sv}`)

if (!test) return message.channel.send(`İD sini attığınız sunucuda Sistem Açılmamış Veya Böyle bir sunucu yok.`)


let pa =   db.fetch(`pyap_${sv}_${message.guild.id}`)
if (pa) return message.channel.send(`Zaten Bu Sunucucya Talep yollamışsın.`)

message.channel.send(":white_check_mark: Partnerlik Talebi Başarıyla Gönderildi.")
 

let svpartner = db.fetch(`kacpartnersunucu_${message.guild.id}`)

let yolla = db.fetch(`partnerlog_${test}`)

const partnertext = new Discord.MessageEmbed() 
.setColor("BLUE")
.setDescription(`**Hey Dostum Galiba Bir Sunucudan Partner Olma Talebi Aldın Onaylamak için ${ayarlar.prefix}onayla sunucuid şeklinde onaylıyabilirsin.**

**Sunucunun Onay kodu: ${ayarlar.prefix}onayla ${test}**

**Sunucunun Partner Texti:**
${text}


Partner Talebi Atan Sunucunun bilgileri;
 `)

.addField('Üye Sayısı', `${message.guild.memberCount - message.guild.members.cache.filter(m=>m.user.bot).size} (${message.guild.members.cache.filter(m=>m.user.bot).size} bot)`, true)
.addField('Kuruluş', message.guild.createdAt.toLocaleString(), true)
.addField("Sunucu Sahibi", `${message.guild.owner}`, true)
.addField('Sunucunun Yaptığı Partnerlik Sayısı', `${svpartner ? svpartner : '0'}`)

db.set(`pyap_${sv}_${message.guild.id}`, message.author.id)
client.channels.cache.get(yolla).send({embeds: [partnertext]})  



   

},

name: "partner",
description: "",
aliases: [],
kategori: "partner",
usage: "",
}