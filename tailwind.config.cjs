module.exports = {
	content: ['./src/app.html', './src/**/*.{svelte,js,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/forms')]
};
