var React = require('react');
var Router = require('react-router');
//To prevent full page reload when component is re-rendered
var Link = Router.Link;
var Reflux = require('Reflux');
var Actions = require('../actions');
var TopicStore = require('../stores/topic-store')

var header = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState: function (){
    return {
      topics: []
    }
  },
  componentWillMount: function(){
    Actions.getTopics();
  },
  render: function() {
    return <nav className="navbar navbar-default header">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Imgur Browser
        </Link>
      <ul className="nav navbar-nav navbar-right">
        {this.renderTopics()}
      </ul>
      </div>
    </nav>
  },
  renderTopics: function(){
    //return this.state.topics.slice(0, 4).map
    return this.state.topics.map(function(topic){
      return <li key={topic.id}>
        <Link activeClassName="active" to={"topics/" + topic.id}>
          {topic.name}
        </Link>
      </li>
    });
  },
  onChange: function(event, topics){
    this.setState({
      topics: topics
    });
  }
});

module.exports = header;
