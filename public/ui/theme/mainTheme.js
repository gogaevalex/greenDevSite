export const color = {
	primary: {
		main: '#6BC980',
		bg: 'rgba(107, 201, 128, 0.05)',
		bgHover: 'rgba(107, 201, 128, 0.7)',
	},
	dark: {
		main: '#2E2E2E',
		second: 'rgba(46,46,46,0.6)',
		bg: 'rgba(46,46,46,0.05)',
		bgHover: 'rgba(46,46,46,0.1)',
	},
	error: {
		main: '#D02724',
		bg: 'rgba(208,39,36,0.05)',
		bgHover: 'rgba(208,39,36,0.1)',
	},
	success: {
		main: '#24D05E',
		bg: 'rgba(36,208,94,0.05)',
		bgHover: 'rgba(36,208,94,0.1)',
	},
	white: '#FFFFFF',
	warning: '#E58507',
};

export const fontSize = {
	h1: '40px',
	h2: '35px',
	h3: '30px',
	h4: '25px',
	h5: '20px',
	h6: '16px',
	body1: '16px',
	body2: '14px',
	body3: '12px',
};

export const iconColor = {
	primary: color.primary.main,
	primaryBg: color.primary.bg,
	primaryBgHover: color.primary.bgHover,

	dark: color.dark.main,
	darkSecond: color.dark.second,
	darkBg: color.dark.bg,
	darkBgHover: color.dark.bgHover,

	error: color.error.main,
	errorBg: color.error.bg,
	errorBgHover: color.error.bgHover,

	success: color.success.main,
	successBg: color.success.bg,
	successBgHover: color.success.bgHover,

	white: color.white,
	warning: color.warning,
};

export const textColor = {
	primary: color.primary.main,
	primaryBg: color.primary.bg,
	primaryBgHover: color.primary.bgHover,

	dark: color.dark.main,
	darkSecond: color.dark.second,
	darkBg: color.dark.bg,
	darkBgHover: color.dark.bgHover,

	error: color.error.main,
	errorBg: color.error.bg,
	errorBgHover: color.error.bgHover,

	success: color.success.main,
	successBg: color.success.bg,
	successBgHover: color.success.bgHover,

	white: color.white,
	warning: color.warning,
};

export const media = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '450px',
	tablet: '868px',
	laptop: '1100px',
	laptopL: '1440px',
	laptopXL: '1560px',
};

export const fontWeight = {
	light: '300',
	normal: '400',
	medium: '500',
	bold: '700',
};

export const mainTheme = {
	color,
	fontSize,
	iconColor,
	media,
	fontWeight,
	textColor,
};
