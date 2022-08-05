module.exports = {
	content: ['./node_modules/symax/**/*.{html,js,svelte,ts}', './src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio')
	]
};
