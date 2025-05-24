// Importing the chakra ui stuff
import {extendTheme} from '@chakra-ui/react'
import {theme as chakraTheme} from '@chakra-ui/react'

const breakpoints = {
	base: "0em",
	sm: "40em",
	md: "52em",
	lg: "64em",
	xl: "80em",
}

//Array holding all of the theme items we are overriding
const overrides = {
	...chakraTheme,
	breakpoints,
	fontWeights: {
		normal: 300,
		medium: 400,
		bold: 700,
	},
	fontSizes: {
		xs: "12px",
		sm: "14px",
		md: "16px",
		lg: "18px",
		xl: "20px",
		"2xl": "24px",
		"3xl": "28px",
		"4xl": "36px",
		"5xl": "48px",
		"6xl": "64px",
	},
}

const customTheme = extendTheme(overrides)

export default customTheme
