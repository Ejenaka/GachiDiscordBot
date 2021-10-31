const { SlashCommandBuilder } = require('@discordjs/builders');
const roleDataManager = require('../../data/services/RoleDataManager');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user-info')
        .setDescription("Describes an user"),

    async execute(interaction) {
        const userGachiRole = roleDataManager.getRoleByUserId(interaction.user.id);

        if (userGachiRole) {
            await interaction.reply(`Your name is ${interaction.user.username}\n I think you are ${userGachiRole} here.`);
            return;
        }

        await interaction.reply(`Your name is ${interaction.user.username}\n I think you are just jabroni here.`);

        return;
    }
};