module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'prettier --write **/*.{ts,tsx,js,jsx,json}',
    'eslint . --ext .ts,.js,.tsx,.jsx',
  ],
};
