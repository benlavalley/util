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
  api.versionsFrom('2.5');

  api.addFiles('lib/util-client.js', client);
  api.addFiles('lib/util-server.js', server);

  api.export('Util');
});
