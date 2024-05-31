import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import { ESLint } from 'eslint';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [

  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: prettierPlugin,
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
      'prettier', // Add this line
    ],
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      // Add or override rules here
      'prettier/prettier': 'error',
       // Possible Errors
       'no-console': 'warn',
       'no-debugger': 'warn',
       
       // Best Practices
       'curly': 'error',
       'eqeqeq': ['error', 'always'],
       'no-implicit-globals': 'error',
       'no-multi-spaces': 'error',
       
       // Variables
       'no-undef': 'off', // TypeScript handles this
       '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
       
       // Stylistic Issues
       'brace-style': ['error', '1tbs'],
       'comma-dangle': ['error', 'always-multiline'],
       'indent': ['error', 2],
       'linebreak-style': ['error', 'unix'],
       'quotes': ['error', 'single'],
       'semi': ['error', 'always'],
       'space-before-blocks': 'error',
       'keyword-spacing': ['error', { 'before': true, 'after': true }],
       
       // ECMAScript 6
       'arrow-body-style': ['error', 'as-needed'],
       'prefer-const': 'error',
       'prefer-template': 'error',
       'no-var': 'error',
 
       // TypeScript Specific
       '@typescript-eslint/explicit-function-return-type': 'off',
       '@typescript-eslint/no-explicit-any': 'warn',
       '@typescript-eslint/no-non-null-assertion': 'warn',
       '@typescript-eslint/no-inferrable-types': 'error',
       '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    },
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];