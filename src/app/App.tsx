import { Routes, Route } from 'react-router-dom';

import './styles/App.scss';
import Navbar from '../widgets/navbar/Navbar';
import Home from '../pages/home/Home';
import Search from '../pages/search/Search';
import NotExist from '../pages/notExist/NotExist';
import Player from '../widgets/musicPlayer/Player';

const App = () => {
	return (
		<div className='app'>
			<div className='app__main'>
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
					<Route
						path='*'
						element={<NotExist />}
					/>
				</Routes>
			</div>
			<Player />
		</div>
	);
};

export default App;
