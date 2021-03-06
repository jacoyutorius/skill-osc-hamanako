'use strict';
var Alexa = require("alexa-sdk");
const OSC_HAMANAKO = require("./osc/osc_hamanako_2018");
process.env.TZ = 'Asia/Tokyo'

exports.handler = function(event, context) {
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

const TimeTable = [];

var handlers = {
  'LaunchRequest': function() {
    this.emit('SayHello');
  },
  'HelloWorldIntent': function() {
    this.emit('SayHello');
  },
  'MyNameIsIntent': function() {
    this.emit('SayHelloName');
  },
  'SayHello': function() {
    this.response.speak('Hello World!')
      .cardRenderer('hello world', 'hello world');
    this.emit(':responseReady');
  },
  'SayHelloName': function() {
    var name = this.event.request.intent.slots.name.value;
    this.response.speak('Hello ' + name)
      .cardRenderer('hello world', 'hello ' + name);
    this.emit(':responseReady');
  },
  'SessionEndedRequest': function() {
    console.log('Session ended with reason: ' + this.event.request.reason);
  },
  'AMAZON.StopIntent': function() {
    this.response.speak('Bye');
    this.emit(':responseReady');
  },
  'AMAZON.HelpIntent': function() {
    this.response.speak("You can try: 'alexa, hello world' or 'alexa, ask hello world my" +
      " name is awesome Aaron'");
    this.emit(':responseReady');
  },
  'AMAZON.CancelIntent': function() {
    this.response.speak('Bye');
    this.emit(':responseReady');
  },
  'Unhandled': function() {
    this.response.speak("Sorry, I didn't get that. You can try: 'alexa, hello world'" +
      " or 'alexa, ask hello world my name is awesome Aaron'");
  },
  'AscNextSessionIntent': function() {
    var now = new Date()
    var ret = OSC_HAMANAKO.getNextSession(now);
    console.log(ret);
    this.emit(":tell", OSC_HAMANAKO.getEventTitle() + ret.title);
  }
};
