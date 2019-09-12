module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ["plugin:vue/essential", "eslint:recommended"],
	rules: {
		"no-console": "off",
		indent: ["error", "tab"],
		"no-extra-semi": ["error"],
		"no-irregular-whitespace": "off",
		"object-curly-spacing": ["error", "never"],
		"array-bracket-spacing": ["error", "never"],
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
	},
	parserOptions: {
		parser: "babel-eslint"
	}
};
