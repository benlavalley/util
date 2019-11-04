Package.describe({
  name: 'meteorspark:util',
  summary: 'Bring some of NodeJS util functionality to the Meteor client',
  version: '0.2.1',
  git: 'https://github.com/MeteorSpark/util'
});

both = ['server', 'client'];
server = 'server';
client = 'client';

Package.onUse(function (api) {
  api.versionsFrom('1.8.1');

  api.add_files('lib/util-client.js', client);
  api.add_files('lib/util-server.js', server);

  api.export('Util');
});
