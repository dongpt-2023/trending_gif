module.exports = {
"env": {
    "browser": true,
    "node": true
    },
    "parser": "babel-eslint",
    "extends": [
        "airbnb"
    ],
    "rules": {
        "import/prefer-default-export": "off",
        "no-underscore-dangle": "off",
        "class-methods-use-this": "off",
        "import/no-named-as-default": "off",
        "linebreak-style": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-props-no-spreading": "off"
    }
};