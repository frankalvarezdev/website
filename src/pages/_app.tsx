import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from 'src/components/Navbar'
import theme from 'src/utils/theme'
import { Poppins } from '@next/font/google'
import Footer from 'src/components/Footer'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<main className={poppins.className}>
				<Navbar />

				<Component {...pageProps} />

				<Footer />
			</main>
		</ChakraProvider>
	)
}
