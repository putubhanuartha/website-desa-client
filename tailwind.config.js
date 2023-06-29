/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
			container: {
				padding: {
					DEFAULT: "2rem",
					sm: "4rem",
					lg: "6rem",
					xl: "8rem",
					"2xl": "10rem",
				},
			},
		},
	},
	plugins: [],
};
