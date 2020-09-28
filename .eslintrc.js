module.exports = {
	env: {
		browser: true,
		es2020: true,
		node: true,
	},
	extends: ["airbnb", "prettier"],
	plugins: ["prettier", "html"],
	parserOptions: {
		ecmaVersion: 11,
		sourceType: "module",
	},
	rules: {
		"prettier/prettier": "warn",
		"no-unused-vars": "warn",
		"no-console": "warn",
		"func-names": "off",
		"no-process-exit": "off",
		"object-shorthand": "off",
		"class-methods-use-this": "off",
		"no-param-reassign": [2, { props: false }],
		"no-return-assign": [2, "except-parens"],
		"max-len": [1, 125],
	},
};
