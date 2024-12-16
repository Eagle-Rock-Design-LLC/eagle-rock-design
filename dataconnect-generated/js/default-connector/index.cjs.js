const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'eagle-rock-design',
  location: 'us-west2'
};
exports.connectorConfig = connectorConfig;

