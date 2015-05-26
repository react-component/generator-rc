var yeoman = require('yeoman-generator');
var Base = yeoman.generators.Base;
var Path = require('path');
var fs = require('fs');

function camelCase(name){
  return name.replace(/-\w/g,function(m){
    return m.charAt(1).toUpperCase();
  })
}

module.exports = Base.extend({
  constructor: function () {
    Base.apply(this, arguments);
    this.option('port', {type: Number, defaults: '8000'});
    this.option('rc_version', {type: String, defaults: '1.0.0'});
    this.option('author', {type: String, defaults: ''});
  },

  welcome: function () {
    this.appname = this.appname.replace(/\s/g, '-');
    this.AppName = this.appname.charAt(0).toUpperCase() + camelCase(this.appname.slice(1));
    this.log('welcome to generator-rc: ' + this.appname);
    this.port = this.options.port;
    this.version = this.options.rc_version;
    this.author = this.options.author;
  },

  setup: function () {
    var self = this;
    this.src.recurse('.', function (path, root, subdir, filename) {
      var oldPath = path;
      // https://github.com/npm/npm/issues/1862
      if (filename === 'gitignore') {
        filename = '.gitignore';
        var newPath = Path.join(Path.dirname(path), filename);
        fs.renameSync(path, newPath);
        path = newPath;
      }
      self.template(path, subdir ? Path.resolve(subdir, filename) : filename);
      if (filename === '.gitignore') {
        fs.renameSync(path, oldPath);
      }
    });
    var AppName = this.AppName;
    this.dest.write('src/' + AppName + '.jsx', [
      '/** @jsx React.DOM */',
      'var React = require(\'react\');',
      'class ' + AppName + ' extends React.Component {}',
      'module.exports = ' + AppName + ';'
    ].join('\n'));
  },

  done: function () {
    this.log('done');
  }
});
