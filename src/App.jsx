import logo from './logo.svg';
import './App.css';
import Login from './features/Login';
import {Provider} from 'react-redux';
import { store } from './shared/store';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <Provider store={store}>
      <div>
        <Outlet></Outlet>
      </div>
    </Provider>
  )
}

export default App;
