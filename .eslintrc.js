module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    	'react/prop-types': 'off',
		'no-unused-vars': 'off',
		'react/react-no-unescaped-entities': 'off',
		'react/react-in-jsx-scope': 'off',
		'no-mixed-spaces-and-tabs': 'off'
	}
}
