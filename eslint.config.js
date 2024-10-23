import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
    {
        ignores: ['node_modules', '**/*.test.js'],
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx,scss}'],
        languageOptions: {
            globals: globals.browser,
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
            },
        },
        rules: {
            ...pluginJs.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,
            ...pluginReact.configs.flat.recommended.rules,
            'prettier/prettier': 'error', 
            'react/react-in-jsx-scope': 'off',
        },
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
    },
];
