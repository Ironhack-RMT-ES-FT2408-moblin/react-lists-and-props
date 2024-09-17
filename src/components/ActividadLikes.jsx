import React from 'react';

function Actions(props) {
  let pColor;
  if (props.likes < 3) {
    pColor = 'red';
  } else if (props.likes > 3 && props.likes < 10) {
    pColor = 'yellow';
  } else if (props.likes >= 10) {
    pColor = 'green';
  }

  return (
    <div className="container">
      {/* <p style={{ color: pColor }}> */}
      <p style={{ color: props.likes < 3 ? "red" : props.likes >= 10 ? "green" : "yellow" }}>
        {/* Iteration 2. Receive props for 'likes' and show the number of likes in the second span*/}
        <span>Likes: </span>
        <span>{props.likes}</span>
      </p>

      <p>
        {/* Iteration 3. Receive props for 'fav' and based on the boolean value display a different emoji 👍 for true and 👎 for false */}
        <span>👍</span>
        <span>👎</span>
      </p>
    </div>
  );
}

export default Actions;

// BONUS. Make the likes value have a different font color based on its value.
// if less or equal than 3 should be red.
// if more than 3 and less than 10 should be yellow.
// if more or equal than 10 should be green.
