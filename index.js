const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({intents: [Intents.FLAGS.GUILDS]});
client.commands = new Collection;

const commandFiles = fs.readdirSync('./commands/textCommands').filter(file => file.endsWith('.js'));
commandFiles.forEach(file => {
    const command = require(`./commands/textCommands/${file}`);
    client.commands.set(command.data.name, command);
});

client.once('ready', () => {
    console.log('ready');
});

client.login(token);

client.on('interactionCreate', async interaction =>{
    if (!interaction.isCommand()) {
        return;
    }

    const command = client.commands.get(interaction.commandName);

    if (!command) {
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.log(error);
        await interaction.reply({content: `${interaction.user.username}, write correct command, fucking slave`, ephemeral: true});
    }
})