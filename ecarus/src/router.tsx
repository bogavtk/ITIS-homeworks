import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { AboutService } from './pages/AboutService/AboutService';
import { CollectionPoints } from './pages/CollectionPoints/CollectionPoints';
import { Home } from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import { Market } from './pages/Market/Market';
import { Missing } from './pages/Missing/Missing';

const ROUTES = {
	home: () => '/',
	points: () => '/points',
	market: () => '/market',
	service: () => '/service'
} as const;

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			<Route path={ROUTES.home()} element={<Home />} index />
			<Route path={ROUTES.points()} element={<CollectionPoints />} />
			<Route path={ROUTES.market()} element={<Market />} />
			<Route path={ROUTES.service()} element={<AboutService />} />
			<Route path='*' element={<Missing />} />
		</Route>

	)
)