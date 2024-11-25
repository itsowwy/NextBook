import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#e26064",
				white: "#ffffff",
				black: "#000000",
				backgroundPrimary: "#eeeee1",
				backgroundSecondary: "#fdfcf6",
				buttonColorPrimary: "#272935",
				buttonColorSecondary: "#ebe8dc",
				textPrimary: "#2f303b",
				textSecondary: "#c9cac5",
				textTertiary: "#95979b",
				sepratorColor: "#d9d6cc",
				highLightColor: "#ebc3c2",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},

			fontFamily: {
				montserrat: ["var(--font-montserrat)"],
				cormorant: ["var(--font-cormorant)"],
				poppins: ["var(--font-poppins)"],
			},

			screens: {
				mr: "430px",
			},
		},
	},
	plugins: [require("@xpd/tailwind-3dtransforms")],
} satisfies Config;
