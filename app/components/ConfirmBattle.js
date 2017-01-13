//stateless functional component
var React = require('react');

function ConfirmBattle (props) {
  return props.isLoading == true
  ? <p>Loading!</p>
  : <p>Confirm battle now!</p>
}

module.exports = ConfirmBattle;
