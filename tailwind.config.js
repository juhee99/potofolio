/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["emerald", "business"],
		darkTheme: "business"
	}
};
