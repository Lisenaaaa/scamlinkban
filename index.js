const { Plugin } = require('powercord/entities');


module.exports = class scamLinkBan extends Plugin {
  async startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'scamlinkban',
      description: 'bans a user for scam link',
      usage: '{c} [user id or ping]',
      executor: (args) => ({
        send: true,
        result: `-dban ${args} sending a scam link`
      })
    });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('scamlinkban');
  }
};
