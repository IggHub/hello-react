//stateless functional component
var React = require('react');

function barf (object) {
  return <pre>{JSON.stringify(object, null, '  ')}</pre>
}

function ConfirmBattle (props) {
  return props.isLoading == true
  ? <p>Loading!</p> : <div>Confirm battle now! {barf(props)}</div>
}

module.exports = ConfirmBattle;
