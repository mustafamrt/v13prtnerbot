const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const db = require("nrc.db");



module.exports = {
    calistir: async(client, message, args) => {

        if (!message.member.permissions.has("ADMINISTRATOR")) {

           return message.channel.send("Bu komudu Kullanmak İçin **YÖNETİCİ** yetkisine sahip olman gerek")
        }

        let partner = message.mentions.channels.first();
        let rol = message.mentions.roles.first();
        let log = message.mentions.channels.first();

        const yardım = new Discord.MessageEmbed()                                        
        .setTitle("Hata!")
        .setFooter( "Narcos Code Partner Botu V13", client.user.avatarURL())
        .setDescription(`Komutlar : 
        **${ayarlar.prefix}partnerayar partner:** Partnerliklerin olacağı kanalı ayarlayınız. 
        **${ayarlar.prefix}partnerayar log:** Partner başvurularınını geleceği kanal.
        **${ayarlar.prefix}partnerayar yetkili:** Partner Yetkilisi Rolünü Ayarlarsın.
        **${ayarlar.prefix}partnerayar text:** Partner Yetkilisi Rolünü Ayarlarsın.
        **${ayarlar.prefix}partnerayar aç:** Partner Sistemini Açarsın.
        **${ayarlar.prefix}partnerayar kapat:** Partner Sistemini Kapatırsın.
        **${ayarlar.prefix}partnerayar url:** Özel url ayarlarsın.`)
        .setColor("BLUE")

        if (!args[0]) return message.channel.send({embeds: [yardım]})

        if(args[0] == "partner") { 
            if (!partner) return message.channel.send("**Lütfen bir Kanal etiketleyip tekrar deneyin.**")
            db.set(`partner_${message.guild.id}`, partner.id)
            message.channel.send("Başarılı Ayarlandı.")
        }

        if(args[0] == "log") { 

            if (!log) return message.channel.send("**Lütfen bir Kanal etiketleyip tekrar deneyin.**")
            db.set(`partnerlog_${message.guild.id}`, log.id)

           
            message.channel.send("Başarılı Ayarlandı.")

        }

        if(args[0] == "yetkili") {

            if (!rol) return message.channel.send("**Lütfen bir Rol etiketleyip tekrar deneyin.**")
            db.set(`partneryetkili_${message.guild.id}`, rol.id)
            message.channel.send("Başarılı Ayarlandı.")

         }

         

         if(args[0] == "text") {

            if(!args.slice(1).join(" ")) return message.channel.send("**Lütfen bir Text Yazıp tekrar deneyin.**")
        db.set(`partnertext_${message.guild.id}`, args.slice(1).join(" "))

            message.channel.send("Başarılı Ayarlandı.")

         }



         if(args[0] == "sıfırla") {

            db.delete(`partneryetkili_${message.guild.id}`)
            db.delete(`partnertext_${message.guild.id}`)
            db.delete(`partnerlog_${message.guild.id}`)
            db.delete(`partner_${message.guild.id}`)
            message.channel.send("Başarılı Sıfırlandı.")

         }

let kapatt = (`urll_${message.guild.id}`)         
let kapadene =   db.fetch(`partnersv_${message.guild.id}`)         

         if(args[0] == "kapat") {

            if (!kapadene) return message.channel.send("**Dostum Zaten Bu Sistem Kapalı**")

             db.delete(`partnersv_${message.guild.id}`) 

          if (!kapatt) return  db.delete(`partnersv_${kapatt}`)

            message.channel.send(`Başarılı Partner Sistemi Kapatıldı Tekrar açmak için. **${ayarlar.prefix}partnerayar aç** \n Özel url var ise ne yazkki özel URL gitti.`)

         }

         let partnerr =   db.fetch(`partner_${message.guild.id}`)
         let logg =   db.fetch(`partnerlog_${message.guild.id}`)
         let ytk =   db.fetch(`partneryetkili_${message.guild.id}`)
         let textt =   db.fetch(`partnertext_${message.guild.id}`)
         let acdene =   db.fetch(`partnersv_${message.guild.id}`)
         let a =  db.fetch(`urll_${message.guild.id}`)
         let d = db.fetch(`partnersv_${a}`)
       

         if(args[0] == "aç") {
            if (!logg) return message.channel.send("**Lütfen Önce Partner Log Ayarlayınız**")
            if (!partnerr) return message.channel.send("**Lütfen Önce Partner Kanalını Ayarlayınız**")
            if (!textt) return message.channel.send("**Lütfen Önce Partner TEXT Ayarlayınız**")
            if (!ytk) return message.channel.send("**Lütfen Önce Partner Yetkilisi Rolünü Ayarlayınız**")
            if (d) return message.channel.send("**Dostum Zaten Bu Sistem Açık**")
            if (acdene) return message.channel.send("**Dostum Zaten Bu Sistem Açık**")
            db.set(`partnersv_${message.guild.id}`, message.guild.id)

            const ac = new Discord.MessageEmbed() 

            .setDescription(`Bir Sunucu Partner Sistemini Açtı Partnerlik Atabilirsin işte davet kodu: ${ayarlar.prefix}partner ${message.guild.id} `)
            .addField('Üye Sayısı', `${message.guild.memberCount - message.guild.members.cache.filter(m=>m.user.bot).size} (${message.guild.members.cache.filter(m=>m.user.bot).size} bot)`, true)
            .addField('Kuruluş', message.guild.createdAt.toLocaleString(), true)
            
            
            client.channels.cache.get(ayarlar.partnerlog).send({embeds: [ac]})  

            if(db.has(`partnerbul_1`)) {
               db.delete(`partnerbul_1`)
     db.set(`partnerbul_1`, message.guild.id)
     }
              else db.set(`partnerbul_1`, message.guild.id)



            message.channel.send(`Başarılı Partner Sistemi Açıldı Kapatmak İçin. **${ayarlar.prefix}partnerayar kapat**`)

        
        
        
        
        
         }

         let url = args[1];
         if(args[0] == "url") {
            if (!logg) return message.channel.send("**Lütfen Önce Partner Log Ayarlayınız**")
            if (!partnerr) return message.channel.send("**Lütfen Önce Partner Kanalını Ayarlayınız**")
            if (!textt) return message.channel.send("**Lütfen Önce Partner TEXT Ayarlayınız**")
            if (!ytk) return message.channel.send("**Lütfen Önce Partner Yetkilisi Rolünü Ayarlayınız**")

            
            let hak = db.fetch(`urlhak_${message.guild.id}`) 
            if (!hak) return message.channel.send("Dostum Ne yazıkki url hakkın bulunmamakta Sahibimden hak istiyebilirsin.")
            if (!url) return message.channel.send("**Lütfen bir Özel URL Belirtiniz.**")
            
let kontrol = db.has(`partnersv_${url}`)

            if (kontrol) return message.channel.send("Dostum Ne yazıkki bu özel url alınmış :(")
            db.set(`partnersv_${url}`, message.guild.id)
            db.delete(`partnersv_${message.guild.id}`)
            db.set(`urll_${message.guild.id}`, url)
            db.delete(`urlhak_${message.guild.id}`)

            message.channel.send(`Başarılı Artık Özel URL Aldınız URL: ${url} \n Unutma Sistemi Kapatır isen özel url gider `)

         }



},

name: "partnerayar",
description: "",
aliases: [],
kategori: "partner",
usage: "",
}