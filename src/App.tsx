import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Search from './pages/search/Search';
import Home from './pages/home/Home';
import Player from './components/player/Player';

type Props = {};

const App = (props: Props) => {
	return (
		<div className='app'>
			<Navbar />
			<Routes>
				<Route
					path=''
					element={<Home />}
				/>
				<Route
					path='/search'
					element={<Search />}
				/>
			</Routes>
			<Player/>
		</div>
	);
};

export default App;
