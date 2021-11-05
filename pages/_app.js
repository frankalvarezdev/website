import Navbar from 'components/layout/Navbar';
// import 'styles/main.scss';
import 'styles/main.scss';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp;