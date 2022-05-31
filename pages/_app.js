//This is needed for chakra ui and react, overrides the theme for Chakra to add my own font sizes and weights
import {ChakraProvider} from '@chakra-ui/react'
import customTheme from '../styles/theme'

function MyApp({Component, pageProps}) {
	return (
		<ChakraProvider resetCSS theme={customTheme}>
			<Component {...pageProps}/>
		</ChakraProvider>
	)
}

export default MyApp
