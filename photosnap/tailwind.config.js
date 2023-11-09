/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontSize: {
				head1: [
					"2.5rem",
					{ fontWeight: "700", lineHeight: "2.5rem", letterSpacing: "0.26rem" },
				],
			},
			padding: {
				"8xl": "2rem",
				"9xl": "128rem",
			},
		},
	},
	plugins: [],
};
