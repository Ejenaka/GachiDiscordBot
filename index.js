const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({intents: [Intents.FLAGS.GUILDS]});

const roleDataManager = require('./data/services/RoleDataManager');

client.once('ready', () => {
    console.log('ready');
});

client.login(token);

client.on('interactionCreate', async interaction =>{
    if (!interaction.isCommand()) {
        return;
    }

    const { commandName } = interaction;

    switch (commandName) {
        case 'hi':
            await interaction.reply("Hello, fucking slave!. My name is Van. I'm Dungeon Master here");
            break;
        case 'user-info':
            const userGachiRole = roleDataManager.getRoleByUserId(interaction.user.id);
            if (userGachiRole) {
                await interaction.reply(`Your name is ${interaction.user.username}\n I think you are ${userGachiRole} here.`);
            } else {
                await interaction.reply(`Your name is ${interaction.user.username}\n I think you are just jabroni here.`);
            }
            break;
        default:
            await interaction.reply(`${interaction.user.username}, write correct command, fucking slave`);
            break;
    }
})