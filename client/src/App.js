import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Main from './views/Main';
import New from './views/New';
import Edit from './views/Edit';

function App() {
  return (
    <>
    <h1>Favorite Authors</h1>
    <Routes>
      <Route path='/' element={<Link to={'/authors'}>Go to authors</Link>} />
      <Route path='/authors' element={<Main/> } />
      <Route path='/authors/new' element={<New/> } />
      <Route path='/authors/:id/edit' element={<Edit/> } />
    </Routes>
    </>
  );
}

export default App;
