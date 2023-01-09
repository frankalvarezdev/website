import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from 'src/components/Navbar'
import theme from 'src/utils/theme'
import { Poppins } from '@next/font/google'
import Footer from 'src/components/Footer'
import { useEffect } from 'react'
import { scrolly } from 'src/utils/scrolly'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// cuando se carga la pagina y tiene un hash en la url, se hace scroll hasta el elemento
		// pero addicional se le agrega un padding top de 15px
		if (typeof window !== 'undefined') {
			window.addEventListener('load', () => {
				const hash = window.location.hash
				if (hash) {
					setTimeout(() => scrolly(hash, { paddingTop: 15 }), 100)
				}
			})
		}
	}, [])

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
