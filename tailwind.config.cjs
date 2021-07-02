const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	// Spaceduck https://github.com/pineapplegiant/spaceduck
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Open Sans"'],
				serif: ['"Noto Serif"'],
				mono: ['"JetBrains Mono"']
			},
			colors: {
				black: '#000000',
				white: '#ffffff',
				red: '#e33400',
				orange: '#e39400',
				green: '#5ccc96',
				yellow: '#f2ce00',
				cyan: '#00a3cc',
				magenta: '#ce6f8f',
				purple: {
					light: '#b3a1e6',
					DEFAULT: '#7a5ccc',
					dark: '#686f9a',
					darkest: '#30365F'
				},
				grey: {
					DEFAULT: '#818596',
					transparent: '#c1c3cc'
				},
				foreground: '#ecf0c1',
				background: '#0f111b'
			}
		}
	},
	plugins: []
};

module.exports = config;
