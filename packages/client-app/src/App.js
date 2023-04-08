import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './components/MainPage.jsx';

import { Provider } from 'react-redux';
import {
  Route,
  Routes,
} from 'react-router-dom';

import { EditTask } from './components/EditTask';
import { MainPage } from './components/MainPage.jsx';
import { store } from './store';

function App () {
  return (
    <div className='App'>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/edit/:id' element={<EditTask />} />
        </Routes>
      </Provider>
    </div>
  )
}

export default App
