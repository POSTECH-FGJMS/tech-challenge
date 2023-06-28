module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: false,
        },
    },
    env: {
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:jest/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    plugins: ['jest', '@typescript-eslint'],
    rules: {
        // Personalize suas regras
        '@typescript-eslint/no-empty-interface': 0,
    },
}
