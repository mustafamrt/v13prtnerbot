const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const db = require("nrc.db");



module.exports = {
    calistir: async(client, message, args) => {

        if(!message.author.id == ayarlar.sahip) return message.channel.send("Bu Komutu Kullanamazsın **Sadece Sahibim** kullanabilir!")

            
            let sv = args[0];

        if (!sv) return message.channel.send("Bir Sunucu İD Girermisin.")
        


        db.set(`urlhak_${sv}`, true)


        message.channel.send(`Başarılı **${sv}**  id li sunucuya url hakkı verdim.`)

},

name: "hakver",
description: "",
aliases: [],
kategori: "partner",
usage: "",
}