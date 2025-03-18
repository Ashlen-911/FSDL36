import React from 'react';

// A more dynamic React component that accepts props
const MyReactComponent = ({ message }) => {
  return (
    <div style={{ padding: '10px', backgroundColor: 'lightblue', borderRadius: '5px' }}>
      <h2>{message}</h2>
    </div>
  );
};

// Default props for the component in case none are passed
MyReactComponent.defaultProps = {
  message: 'Hello from React Component!',
};

export default MyReactComponent;
