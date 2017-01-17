var React = require('react');
var Link = require('react-router').Link;
var MainContainer = require('./MainContainer');

var Home = React.createClass({
  render: function(){
    return(
      <MainContainer>
        <h2>GH Battle!</h2>
        <p className="lead">(Some fancy motto here)</p>
        <Link to="/playerOne">
          <button type="button" className="btn btn-lg btn-success">Git Started</button>
        </Link>
      </MainContainer>
    )
  }
});

module.exports = Home;
