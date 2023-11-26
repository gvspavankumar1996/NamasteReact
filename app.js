import React from 'react'
import ReactDOM from 'react-dom/client'

// const heading=React.createElement('h1',{id:"heading"},"heading")
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

//create nested structure

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child1', key: 1 }, [
    React.createElement('h1', { key: 1 }, 'hello world 111'),
    React.createElement('h2', { key: 2 }, 'hello world'),
  ]),
  React.createElement('div', { id: 'child2', key: 2 }, [
    React.createElement('h1', { key: 1 }, 'hello world'),
    React.createElement('h2', { key: 2 }, 'hello world'),
  ]),
]);
console.log(parent, 'parent');
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
