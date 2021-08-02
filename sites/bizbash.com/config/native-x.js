const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://bizbash.native-x.parameter1.com');

config
  .setAliasPlacements('default', [
    { name: 'primary', id: '5d4af41d2ab3e700014e2dd6' },
  ])
  .setAliasPlacements('catering-design', [
    { name: 'primary', id: '5d4b04513bb2db00018cfa1a' },
  ])
  .setAliasPlacements('production-strategy', [
    { name: 'primary', id: '5d4b04769f69b200013ab109' },
  ])
  .setAliasPlacements('venues-destinations', [
    { name: 'primary', id: '608c33d570bc2400013081af' },
  ])
  .setAliasPlacements('bizbash-lists', [
    { name: 'primary', id: '5d4b04963bb2db00018cfa7b' },
  ])
  .setAliasPlacements('event-tech-virtual', [
    { name: 'primary', id: '608c32cc70bc240001307d44' },
  ]);

module.exports = config;
