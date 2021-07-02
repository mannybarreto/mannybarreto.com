const tailwindcss = require('tailwindcss');
const nesting = require('tailwindcss/nesting');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
	plugins: [
		//Some plugins, like postcss-nested, need to run before Tailwind,
		nesting(),
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer(),
		!dev &&
			cssnano({
				preset: 'default'
			})
	]
};

module.exports = config;

