var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    console.log('getInitialState');
    return {
      isLoading: true,
      playersInfo: [],
    }
  },
  componentWillMount: function(){
    console.log('componentWillMount');
  },
  componentWillReceiveProps: function(){
    console.log('componentWillReceiveProps');
  },
  componentWillUnmount: function(){
    console.log('componentWillUnmount');
  },
  componentDidMount: function(){
    var query = this.props.location.query;
    console.log('componentDidMount');
    // console.log('QUERY', query)
    // needs to get info from github then update state
  },
  render: function(){
    return(
      <ConfirmBattle
          isLoading={this.state.isLoading}
          playersInfo={this.state.playersInfo}
      />
    )
  }
});

module.exports = ConfirmBattleContainer;