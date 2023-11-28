import React from 'react';
import ReactDOM from 'react-dom/client';

// React Functional Component
const HeadingComponent = () => {
  return (
    <div id='container'>
      <h1 className='heaidng'>Namaste React Fucntional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);
