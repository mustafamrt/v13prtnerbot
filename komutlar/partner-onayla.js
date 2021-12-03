const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const db = require("nrc.db");



module.exports = {
    calistir: async(client, message, args) => {
   
        
        if(!message.member.roles.cache.has(db.fetch(`partneryetkili_${message.guild.id}`))) {
            return message.channel.send("Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!");
         }

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


            let sunucu = args[0];

            if (!sunucu) return message.channel.send("**Lütfen Onaylanacak Sunucunun Kodunu Yazınız tekrar deneyin.**")
            let sunucu1 =   db.fetch(`pyap_${message.guild.id}_${sunucu}`)
            if(!sunucu1) return message.channel.send("Bu Sunucu Partnerlik İsteği Yollamamış ki onaylıyayım..")

            let partnerr =   db.fetch(`partner_${message.guild.id}`)
            let partner2 =   db.fetch(`partner_${sunucu}`)
            let ptext =   db.fetch(`partnertext_${message.guild.id}`)
            let ptext2 =   db.fetch(`partnertext_${sunucu}`)

            let kacpartner1 = db.fetch(`kacpartner_${sunucu1}`) 
            let kacpartner2 = db.fetch(`kacpartner_${message.author.id}`)


            client.channels.cache.get(partnerr).send(`> **Narcos Code Partner Sistemi**
            ${ptext2}
            
            > <@${message.author.id}> (${kacpartner2 ? kacpartner2 : '0'}) 
            `)  
            client.channels.cache.get(partner2).send(`> **Narcos Code Partner Sistemi**
            ${ptext} 
        
             > <@${sunucu1}> (${kacpartner1 ? kacpartner1 : '0'}) 

            `)   


            if(db.has(`kacpartner_${sunucu1}`))
            db.add(`kacpartner_${sunucu1}`, 1)
           else db.set(`kacpartner_${sunucu1}`, 1) 

           if(db.has(`kacpartner_${message.author.id}`))
           db.add(`kacpartner_${message.author.id}`, 1)
          else db.set(`kacpartner_${message.author.id}`, 1) 

          if(db.has(`kacpartnersunucu_${sunucu1}`))
          db.add(`kacpartnersunucu_${sunucu1}`, 1)
         else db.set(`kacpartnersunucu_${sunucu1}`, 1) 

          if(db.has(`kacpartnersunucu_${message.guild.id}`))
          db.add(`kacpartnersunucu_${message.guild.id}`, 1)
         else db.set(`kacpartnersunucu_${message.guild.id}`, 1) 

            

            message.channel.send("Başarılı Partnerlik Onaylandı.")
            db.delete(`pyap_${message.guild.id}_${sunucu}`)
        




},

name: "onayla",
description: "",
aliases: [],
kategori: "partner",
usage: "",
}