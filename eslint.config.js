import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx,scss}'],
        languageOptions: {
            globals: globals.browser,
            parser: tseslint.ESLintParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
            },
        },
        extends: [
            pluginJs.configs.recommended,
            ...tseslint.configs.recommended,
            pluginReact.configs.flat.recommended,
            'plugin:prettier/recommended',
        ],
        settings: {
            react: {
                version: 'detect',
            },
        },
        plugins: {
            react: pluginReact,
            '@typescript-eslint': tseslint,
            prettier: eslintPluginPrettier,
        },
        rules: {
            'react/react-in-jsx-scope': 0,
        },
    },
];
