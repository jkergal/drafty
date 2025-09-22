// @NOTE: migrated on sept 2025 
// Migration guide: https://eslint.org/docs/latest/use/configure/migration-guide
// For different lint configs in the project: https://eslint.org/docs/latest/use/configure/migration-guide#glob-based-configs

const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const tsParser = require("@typescript-eslint/parser");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        parser: tsParser,

        parserOptions: {
            project: true,
            tsconfigRootDir: __dirname,
        },
    },
    extends: compat.extends(
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/strict",
    ),
    plugins: {
        "@typescript-eslint": typescriptEslint,
    },
    rules: {
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-misused-promises": ["error", {
            checksVoidReturn: {
                attributes: false,
            },
        }],
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/restrict-template-expressions": ["error", {
            allowNumber: true,
            allowBoolean: true,
        }],
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/strict-boolean-expressions": ["error", {
            allowNullableBoolean: true,
        }],
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        eqeqeq: ["error", "smart"],
        "no-unused-vars": "off",
        "no-console": ["error", {
            allow: ["info", "warn", "error"],
        }],
    },
    ignores: ['eslint.config.js', 'jest.config.js'],
    // @TODO: check if needed 
    // overrides: [
    //     {
    //         files: ['.test.ts', '.spec.ts'],
    //     },
    // ],
}, {
    files: ["**/.test.ts", "**/.spec.ts"],
}, globalIgnores(["**/*.test.ts", "**/*.spec.ts", "**/dist", "prisma/seed.ts"])]);
