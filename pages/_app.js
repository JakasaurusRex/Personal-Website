import {ChakraProvider, ColorModeProvider, userColorMode} from '@chakra-ui/react'
import customTheme from '../styles/theme'

function MyApp({Component, pageProps}) {
	return (
		<ChakraProvider resetCSS theme={customTheme}>
		</ChakraProvider>
	)
}

export default MyApp
