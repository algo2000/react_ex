import React from 'react'

function Food({ favorite }) {
  return <h1>I Like {favorite}</h1>
}

function App() {
  return (
    <div>
      <h1>Hello!!!!</h1>
      <Food favorite ='Kimchi' />
      <Food favorite='Kimchi1' />
      <Food favorite='Kimchi2' />
      <Food favorite='Kimchi3' />
      <Food favorite='Kimchi4' />
    </div>
  );
}

export default App;
