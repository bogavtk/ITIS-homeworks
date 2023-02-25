import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

const Layout = () => {
	const { pathname } = useLocation();

	return (
		<main className='App'>
			<Header pathname={pathname} />
			<Outlet />
			<Footer />
		</main>
	)
}

export default Layout