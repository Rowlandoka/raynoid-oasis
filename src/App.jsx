import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='dashboard' element={<Dashboard />}></Route>
				<Route path='bookings' element={<Bookings />}></Route>
				<Route path='cabins' element={<Cabins />}></Route>
				<Route path='users' element={<Users />}></Route>
				<Route path='settings' element={<Settings />}></Route>
				<Route path='account' element={<Account />}></Route>
				<Route path='login' element={<Login />}></Route>
				<Route path='*' element={<PageNotFound />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
