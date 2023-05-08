import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import { getToken } from 'firebase/messaging';
import {messaging} from './firebase'

function App() {
    async function requestPermission(){
      // requestPermission return promise that's why using async await
 const permission = await Notification.requestPermission()
 if(permission === 'granted'){
  // genreated token and get token return promise that's means you are using ascy await vapi key genrated on firebase 
 const token = await getToken(messaging ,{vapidKey:"BKvb_k5O_tEmp408FJxdduSewg5EjcT-DnS5LGRwdmc791mRtBQXhr-kk_J-axYinXpI33pKf0YKrx3OnM1lsK8"})
 console.log(token,'Token Genreated ')
//  send this token to your db

 }else if(permission === 'denied'){
  // you are not inted 
  alert('You denied notification');
 }
  }
  useEffect(()=>{
    // req user for notification permission
    requestPermission()

  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
