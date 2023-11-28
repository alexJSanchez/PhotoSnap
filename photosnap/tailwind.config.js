/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		screens: {
			mobile: "0px",
			tablet: "768px",
		},
		extend: {
			backgroundImage: {
				"hero-pattern": "url('./assets/stories/desktop/moon-of-appalacia.jpg')",
				mountain: "url('./assets/stories/mobile/mountains.jpg')",
				mountainmid: "url('./assets/stories/desktop/mountains.jpg')",
				cityscapes: "url('./assets/stories/mobile/cityscapes.jpg')",
				cityscapesmid: "url('./assets/stories/desktop/cityscapes.jpg')",
			},
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
