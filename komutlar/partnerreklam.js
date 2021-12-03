const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const db = require("nrc.db");

const nrccode = new Set();


module.exports = {
    calistir: async(client, message, args) => {

        if(!message.member.roles.cache.has(db.fetch(`partneryetkili_${message.guild.id}`))) {
            return message.channel.send("Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!");
         }



         
         if (nrccode.has(message.author.id)) {
             return message.channel.send("`10` Dakikada da Bir Kullanabilirsin " );
      } else {
          nrccode.add(message.author.id);
          setTimeout(() => {
          message.delete();
            nrccode.delete(message.author.id);
          }, 600000);
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


 if(!db.has(`partnerbul_2`))
        db.set(`partnerbul_2`, message.guild.id)
       else if(!db.has(`partnerbul_3`))
        db.set(`partnerbul_3`, message.guild.id)
       else if(!db.has(`partnerbul_4`))
        db.set(`partnerbul_4`, message.guild.id)
       else if(!db.has(`partnerbul_5`))
        db.set(`partnerbul_5`, message.guild.id)
        else return message.channel.send("Şu Anda Reklam Listesti dolu Liste 10 dakkikada bir sıfırlanır.")
       



message.channel.send("Başarıyla Reklam Verildi.")
},

name: "partner-reklam",
description: "",
aliases: ["pr","partnerreklam"],
kategori: "partner",
usage: "",
}