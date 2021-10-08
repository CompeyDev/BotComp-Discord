exports.run = async(client, msg, args) => {
    msg.channel.send(`Your current ping is a whopping ${client.ws.ping}ms!`)
}