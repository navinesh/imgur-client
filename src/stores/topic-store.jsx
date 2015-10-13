var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

var TopicStore = Reflux.createStore({
  //if anyone of the actions within action gets called, if you have method with same name, call that method
  listenables: [Actions],
  getTopics: function(){
    return Api.get('topics/defaults')
    .then(function(json){
      this.topics = json.data;
      this.triggerChange();
    }.bind(this));
  },
  triggerChange: function(){
    this.trigger('change', this.topics);
  }
});

module.exports = TopicStore;
