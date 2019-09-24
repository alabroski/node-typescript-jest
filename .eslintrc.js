module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        'plugin:prettier/recommended'
    ],
    "env": {
        "jest": true
    },
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "prettier/prettier": ["error", { "singleQuote": true }]
    }
};