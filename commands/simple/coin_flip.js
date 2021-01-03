const { Command } = require('discord.js-commando');
const BotData = require("../../BotData.js");
const discord = require("discord.js");
const db = require("quick.db");

module.exports = class FlipCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'flip',
			group: 'simple',
			memberName: 'flip',
			description: 'Flips a coin!',
		});
	}

	run(message, args) {
        var chance = Math.floor(Math.random() * 2);
        if (chance == 0){
            message.reply("Your coin landed on Heads!");
        }else{
            message.reply("Your coin landed on Tails!");
        }
	}
};