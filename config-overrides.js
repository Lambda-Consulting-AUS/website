
// Alias React to Preact, a 3kB faithful reimplementation of React

const { override, addWebpackAlias } = require('customize-cra')

module.exports = override(
  addWebpackAlias({
    'react': 'preact/compat',
    'react-dom': 'preact/compat'
  })
)
