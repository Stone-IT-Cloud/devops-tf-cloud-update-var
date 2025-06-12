import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        rules: {
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
        }
    },
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ignores: ['dist/**', 'documentation/**/*', 'node_modules/**/*']
    }
];
