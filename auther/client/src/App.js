import './App.css';
import { Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import List from './components/List';
// import Show from './components/Show';
import Edit from './components/Edit';

function App() {
	return (
		<>
			<Routes>
				<Route path={'/'} element={<List/>}/>
				<Route path={'/add'} element={ <Create/> }/>
				{/* <Route path={'/:id'} element={<Show/>}/> */}
				<Route path={'/:id/edit'} element={<Edit/>}/> 
			</Routes>
		</>
	);
}

export default App;
