var React = require('react');
var Api = require('../utils/api');

var TopicList = React.createClass({
  getInitialState: function(){
    return{
      topics: []
    }
  },
  componentWillMount: function(){
    Api.get('topics/defaults')
    .then(function(data){
      this.setState({
        topics: data.data
      })
    }.bind(this));
  },
  render: function() {
    return <div className="List-group">
      Topic List
      {this.renderTopics()}
    </div>
  },
  renderTopics: function(){
    //.map is to pass function to topic
    return this.state.topics.map(function(topic){
      return <li>
        {topic}
      </li>
    });
  }
});

module.exports = TopicList;
