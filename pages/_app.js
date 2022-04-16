import Navbar from 'components/layout/Navbar';

import 'styles/main.scss';
import 'tippy.js/dist/tippy.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp;