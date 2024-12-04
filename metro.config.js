const { getDefaultConfig } = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

// Get default configuration
const config = getDefaultConfig(__dirname);

// Update the resolver to support SVG files
config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter((ext) => ext !== 'svg'), // Exclude SVG from asset extensions
  sourceExts: [...config.resolver.sourceExts, 'svg'], // Add SVG to source extensions
};

// Add transformer for SVG files
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

// Wrap with Reanimated's Metro configuration
module.exports = wrapWithReanimatedMetroConfig(config);
