var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require("../components/Home");
var PromptContainer = require("../containers/PromptContainer")
var ConfirmBattleContainer = require("../containers/ConfirmBattleContainer")

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path="playerOne" component={PromptContainer} header="Player One"></Route>
      <Route path="playerTwo/:playerOne" component={PromptContainer} header="Player Two"></Route>
      <Route path="battle" component={ConfirmBattleContainer}></Route>
    </Route>
  </Router>
);

module.exports = routes;
