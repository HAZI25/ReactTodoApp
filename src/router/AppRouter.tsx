import { Route, Routes } from 'react-router-dom';
import TodosPage from '../pages/TodosPage';
import AboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<TodosPage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default AppRouter;
