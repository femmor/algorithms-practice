import { useState } from 'react';

const SubscribeButton = (props) => {
  const [visible, setVisible] = useState(true);
  // Write your code here
  return (
    <>
      {visible ? (
        <button onClick={() => setVisible(false)}>
          Click to subscribe!
        </button>
      ) : (
        <p>Thank you for subscribing!</p>
      )}
    </>
  );
};

export default SubscribeButton;
