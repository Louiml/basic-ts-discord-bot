import DiscordJS, {Intents} from 'discord.js'; //npm i discord.js
import WOKCommands from 'wokcommands'; //npm i wokcommands
import path from 'path'; //npm i path
const client = new DiscordJS.Client({
 intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
 ]
});
client.on('ready', () => {
    console.log('louiml.net creating your bot')
    client.user?.setPresence({
        status: "idle",
        activities: [
            {
                name: `loui on the top`
            }
        ]
    })
    new WOKCommands(client, {
        commandDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: ['the id of your server'],
        mongoUri: 'your mongoURL',
        dbOptions: {
            keepAlive: true
    },
    })
});
client.login('bot token');