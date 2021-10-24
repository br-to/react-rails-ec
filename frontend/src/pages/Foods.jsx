import React from 'react';

const Foods = ({ match }) => (
  <>
    <p>フード一覧</p>
    <p>{match.params.restaurantsId}</p>
  </>
);

export default Foods;
