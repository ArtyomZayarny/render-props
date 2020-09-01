import React from 'react';
import logo from './logo.svg';
import './App.css';
import Provider from './components/Provider';

function App() {
  return (
    <div className="App">
       <Provider>
         {(data:string) => <h1>{`My name is ${data}`}</h1> }
       </Provider>
      <Provider>
        {(data:string) => <p>{`${data} is learn React`}</p>}
      </Provider>
    </div>
  );
}

export default App;
