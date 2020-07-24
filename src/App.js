import React from 'react';
import { useFetch } from './hooks';

function App() {
  const { response } = useFetch(
    'https://www.reddit.com/r/wallpapers/top.json?t=all'
  );

  console.log(response);

  return (
    <div className='App' data-testid='app-container'>
      <h1>hello world</h1>
    </div>
  );
}

export default App;
