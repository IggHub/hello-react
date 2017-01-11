var React = require('react');
var transparentBg = require('../styles').transparentBg;
var Link = require('react-router').Link;

var Home = React.createClass({
  render: function(){
    return(
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h2>GH Battle!</h2>
        <p className="lead">(Some fancy motto here)</p>
        <Link to="/playerOne">
          <button type="button" className="btn btn-lg btn-success">Git Started</button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
