(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _GistBox = require('./components/GistBox');

var _GistBox2 = _interopRequireWildcard(_GistBox);

React.render(React.createElement(_GistBox2['default'], null), document.querySelector('#app'));

},{"./components/GistBox":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Gist = React.createClass({
  displayName: "Gist",

  render: function render() {
    return React.createElement(
      "div",
      null,
      this.props.username,
      "'s last Gist is ",
      React.createElement(
        "a",
        { href: this.props.url },
        "here"
      ),
      "."
    );
  }

});

exports["default"] = Gist;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var GistAddForm = React.createClass({
  displayName: 'GistAddForm',

  getInitialState: function getInitialState() {
    return { username: '' };
  },

  onChange: function onChange(e) {
    this.setState({ username: e.target.value });
  },

  addGist: function addGist(e) {
    e.preventDefault();

    this.props.onAdd(this.state.username);
    this.setState({ username: '' });
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'form',
        { className: 'form-class', onSubmit: this.addGist },
        React.createElement('input', { value: this.state.username, onChange: this.onChange, placeholder: 'Type a GitHub username...' }),
        React.createElement(
          'button',
          null,
          'Fetch Latest Gist'
        )
      )
    );
  }

});

exports['default'] = GistAddForm;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Gist = require('./Gist');

var _Gist2 = _interopRequireWildcard(_Gist);

var _GistAddForm = require('./GistAddForm');

var _GistAddForm2 = _interopRequireWildcard(_GistAddForm);

var GistBox = React.createClass({
  displayName: 'GistBox',

  getInitialState: function getInitialState() {
    return { gists: [] };
  },

  addGist: function addGist(username) {
    var _this = this;

    var url = 'https://api.github.com/users/' + username + '/gists';

    $.get(url, function (result) {
      var username = result[0].owner.login;
      var url = result[0].html_url;
      var gists = _this.state.gists.concat({ username: username, url: url });

      _this.setState({ gists: gists });
    });
  },

  render: function render() {
    var newGist = function newGist(gist) {
      return React.createElement(_Gist2['default'], { username: gist.username, url: gist.url });
    };

    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'GistBox'
      ),
      React.createElement(_GistAddForm2['default'], { onAdd: this.addGist }),
      this.state.gists.map(newGist)
    );
  }

});

exports['default'] = GistBox;
module.exports = exports['default'];

},{"./Gist":2,"./GistAddForm":3}]},{},[1]);
