module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            // script.js
            "env": {
                "node": true
            },
            "files": ["script.js"],
            "rules": {
                "semi": ["error", "always"],
                "quotes": ["error", "double"],
                "indent": ["error", 4],
                "no-console": "error",
            },
            "parserOptions": {
                "sourceType": "module",
            }
        },
        {
            // script-dev.js
            "files": ["script-dev.js"],
            "rules": {
                "no-console": "error",
            },
            "parserOptions": {
                "sourceType": "module",
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    // "rules": {
    //     "semi": ["error", "always"],
    //     "quotes": ["error", "double"],
    //     "indent": ["error", 4],
    //     "no-console": "warn",
    // }
}