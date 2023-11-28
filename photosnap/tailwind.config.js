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
				dayvoyage: "url('./assets/stories/mobile/18-days-voyage.jpg')",
				dayvoyagemid: "url('./assets/stories/desktop/18-days-voyage.jpg')",
				architecturals: "url('./assets/stories/mobile/architecturals.jpg')",
				architecturalsmid: "url('./assets/stories/desktop/architecturals.jpg')",
				worldtour: "url('./assets/stories/mobile/world-tour.jpg')",
				worktourmid: "url('./assets/stories/desktop/world-tour.jpg')",
				unforeseen: "url('./assets/stories/mobile/unforeseen-corners.jpg')",
				unforeseenmid: "url('./assets/stories/desktop/unforeseen-corners.jpg')",
				kingofafrica: "url('./assets/stories/mobile/king-of-africa.jpg')",
				kingofafricamid: "url('./assets/stories/desktop/king-of-africa.jpg')",
				tripnowhere: "url('./assets/stories/mobile/trip-no-where.jpg')",
				tripnowheremid: "url('./assets/stories/desktop/trip-no-where.jpg')",
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
