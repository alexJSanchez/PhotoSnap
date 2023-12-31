/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		screens: {
			mobile: "0px",
			tablet: "768px",
			desktop: "1440px",
		},
		extend: {
			backgroundImage: {
				moon: "url('./assets/stories/mobile/moon-of-appalacia.jpg')",
				moonmid: "url('./assets/stories/desktop/moon-of-appalacia.jpg')",
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
				kingonafrica: "url('./assets/stories/mobile/king-on-africa.jpg')",
				kingonafricamid: "url('./assets/stories/desktop/king-on-africa.jpg')",
				tripnowhere: "url('./assets/stories/mobile/trip-to-nowhere.jpg')",
				tripnowheremid: "url('./assets/stories/desktop/trip-to-nowhere.jpg')",
				rageofsea: "url('./assets/stories/mobile/rage-of-the-sea.jpg')",
				rageofseamid: "url('./assets/stories/desktop/rage-of-the-sea.jpg')",
				runningfree: "url('./assets/stories/mobile/running-free.jpg')",
				runningfreemid: "url('./assets/stories/desktop/running-free.jpg')",
				behindwaves: "url('./assets/stories/mobile/behind-the-waves.jpg')",
				behindwavesmid: "url('./assets/stories/desktop/behind-the-waves.jpg')",
				calmwaters: "url('./assets/stories/mobile/calm-waters.jpg')",
				calmwatersmid: "url('./assets/stories/desktop/calm-waters.jpg')",
				milkyway: "url('./assets/stories/mobile/milky-way.jpg')",
				milkywaymid: "url('./assets/stories/desktop/milky-way.jpg')",
				darkforest: "url('./assets/stories/mobile/dark-forest.jpg')",
				darkforestmid: "url('./assets/stories/desktop/dark-forest.jpg')",
				somwarpet: "url('./assets/stories/mobile/somwarpet.jpg')",
				somwarpetmid: "url('./assets/stories/desktop/somwarpet.jpg')",
				dreams: "url('./assets/stories/mobile/land-of-dreams.jpg')",
				dreamsmid: "url('./assets/stories/desktop/land-of-dreams.jpg')",
				sand: "url('./assets/shared/mobile/bg-beta.jpg')",
				sandmid: "url('./assets/shared/tablet/bg-beta.jpg')",
				heromid: "url('./assets/features/desktop/hero.jpg')",
				checkmark: "url('./assets/pricing/desktop/check.svg')",
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
