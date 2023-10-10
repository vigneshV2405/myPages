import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from './shared/firebase';
import Login from './features/Login';
import {Provider} from 'react-redux';
import { store } from './shared/store';
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>Welcome</h1>
        <Login></Login>
      </div>
    </Provider>
  )
}

export default App;
