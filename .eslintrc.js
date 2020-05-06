// module.exports = {
//   root: true,
//   extends: '@react-native-community',
// };
module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': ['error', 'always-multiline']
  },
  'globals': {
    "fetch": false
  }
}