const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
  plugins: [
    'transform-class-properties',
    'react-hot-loader/babel',
    'syntax-dynamic-import',
    'transform-object-rest-spread',
    isTest ? 'dynamic-import-node' : null
    //isTest ? 'syntax-object-rest-spread' : null
  ].filter(Boolean),
  presets: [['env', { modules: isTest ? 'commonjs' : false }], 'react']
};