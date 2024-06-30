import React from 'react';

const BilingualButton = () => {
  return (
    <div>
      <button onClick={() => console.log('English button clicked')}>
        EN
      </button>
      <button onClick={() => console.log('Korean button clicked')}>
        KR
      </button>
    </div>
  );
};


export default BilingualButton;