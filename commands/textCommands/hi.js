const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hi')
        .setDescription("Just say 'Hello' on own 'language'"),

    async execute(interaction) {
        await interaction.reply("Hello, fucking slave!. My name is Van. I'm Dungeon Master here");
    }
};