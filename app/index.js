var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
  image: 'https://avatars2.githubusercontent.com/u/13905902?v=3&u=26ca75c199cb85d5073bc0f71f53f15f0225d8fb&s=400',
  username: 'igghub',
  name: 'Igor'
}

var ProfilePic = React.createClass({
  render: function(){
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

var ProfileLink = React.createClass({
  render: function(){
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
});

var Avatar = React.createClass({
  render: function(){
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})

var Hello = React.createClass({
  render: function(){
    console.log(this.props);
    return (
      <h2>Hello {this.props.name}!</h2>
    )
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA}/>, document.getElementById('app')
)
