module.exports = {
    kod: "rolver",
    async run (client, message, args) {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('Bunu yapamazsın! ❌').then(mesaj1 => {
            setTimeout(function () {
              mesaj1.delete()
            }, 5000);
          });
        let role = message.mentions.roles.first();
        let member = message.mentions.members.first();
        member.roles.add(role)
    }
}